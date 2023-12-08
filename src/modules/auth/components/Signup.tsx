import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Spinner,
  Select,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { Gender, Question } from '../../../utils/utils'
import { useConfirmCodeMutation, useSignupMutation } from '../slices/authSlice'
import CodeConfirmation from '../../common/components/CodeConfirmation'
import { useEffect, useState } from 'react'

const Signup = () => {
  const navigate = useNavigate()
  const [
    signUpHandler,
    { isLoading, isSuccess: isSignUpSuccess, data, reset: resetModal },
  ] = useSignupMutation()

  const [showModal, setShowModal] = useState(false)

  console.log('isLoading', data)
  const submitData = async (values) => {
    const requestData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      gender: values.gender,
      securityQuestion: {
        question: values.question,
        response: values.response,
      },
    }
    try {
      await signUpHandler(requestData)
    } catch (e) {
      console.error(e)
    }
  }

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Address email invalide')
      .required('Saisir votre adresse email'),
    firstName: Yup.string()
      .min(2, 'Trop court!')
      .max(50, 'Trop long!')
      .required('Saisir votre prénom'),
    lastName: Yup.string()
      .min(2, 'Trop court!')
      .max(50, 'Trop long!')
      .required('Saisir votre nom'),
    password: Yup.string().matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Weak password'
    ),
    confirmPassword: Yup.string()
      .required('Confirmer votre mot de passe')
      .oneOf(
        [Yup.ref('password'), null],
        'Mots de passe ne correspond pas. Veuillez réessayer'
      ),
    question: Yup.string().required(
      'vous devez choisir votre question de sécurité'
    ),
    gender: Yup.string().required('vous devez choisir votre gender'),
    response: Yup.string().required('vous devez choisir votre réponse'),
  })

  function validatePassword(value: string) {
    let error
    if (!value) {
      error = 'Saisir votre mot de passe'
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(
        value
      )
    ) {
      error =
        'Le mot de passe doit comporter au moins 8 caractères, au moins un caractère spécial et au moins un caractère numérique.'
    }
    return error
  }

  useEffect(() => {
    if (isSignUpSuccess) {
      setShowModal(true)
    }
  }, [isSignUpSuccess])

  return (
    <Flex align="center" justify="center">
      <Box
        bg="white"
        px={6}
        py={3}
        rounded="md"
        w={480}
        zIndex={15}
        position="relative"
      >
        <Text
          padding={4}
          textTransform="capitalize"
          fontSize={{ base: 'xl', sm: 'xl', md: '2xl' }}
          fontWeight="extrabold"
          textAlign="center"
        >
          Bienvenue dans notre monde
        </Text>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            question: '',
            response: '',
            gender: '',
          }}
          validationSchema={SignInSchema}
          onSubmit={async (values) => {
            await submitData(values)
          }}
        >
          {({
            values,
            errors,
            touched,
            setFieldValue,
            submitForm,
            resetForm,
          }) => {
            return (
              <Form>
                <HStack>
                  <VStack alignItems="start">
                    <FormLabel htmlFor="lastName">Nom</FormLabel>
                    <Field
                      as={Input}
                      id="lastName"
                      name="lastName"
                      type="text"
                    />
                    <Box height="1rem">
                      {errors.lastName && touched.lastName ? (
                        <Box fontSize="12" color="red">
                          {errors.lastName}
                        </Box>
                      ) : null}
                    </Box>
                  </VStack>

                  <VStack alignItems="start">
                    <FormLabel htmlFor="firstName">Prénom</FormLabel>
                    <Field
                      as={Input}
                      id="firstName"
                      name="firstName"
                      type="text"
                    />
                    <Box mb="2rem" height="1rem">
                      {errors.firstName && touched.firstName ? (
                        <Box fontSize="12" color="red">
                          {errors.firstName}
                        </Box>
                      ) : null}
                    </Box>
                  </VStack>
                </HStack>

                <FormLabel mt="1rem" htmlFor="email">
                  Email Address
                </FormLabel>
                <Field as={Input} id="email" name="email" type="email" />
                {errors.email && touched.email ? (
                  <Box fontSize="12" color="red">
                    {errors.email}
                  </Box>
                ) : null}
                <FormLabel mt="1rem" htmlFor="password">
                  Mot de passe
                </FormLabel>
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  validate={validatePassword}
                />
                {errors.password && touched.password ? (
                  <Box fontSize="12" color="red">
                    {errors.password}
                  </Box>
                ) : null}

                <FormLabel mt="1rem" htmlFor="confirmPassword">
                  Confirmer Mot de passe
                </FormLabel>
                <Field
                  as={Input}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <Box fontSize="12" color="red">
                    {errors.confirmPassword}
                  </Box>
                ) : null}

                {errors.question && touched.question ? (
                  <Box fontSize="12" color="red">
                    {errors.question}
                  </Box>
                ) : null}

                <FormLabel mt="1rem" htmlFor="gender">
                  Select your gender
                </FormLabel>
                <Select
                  id="gender"
                  name="gender"
                  placeholder="Select your gender"
                  onChange={(e) => {
                    setFieldValue('gender', e.target.value)
                  }}
                >
                  {Object.values(Gender).map((gender) => (
                    <option value={gender}>{gender}</option>
                  ))}
                </Select>
                {errors.gender && touched.gender ? (
                  <Box fontSize="12" color="red">
                    {errors.gender}
                  </Box>
                ) : null}
                <FormLabel mt="1rem" htmlFor="question">
                  Security Question
                </FormLabel>
                <Select
                  id="question"
                  name="question"
                  placeholder="Select security question"
                  onChange={(e) => {
                    setFieldValue('question', e.target.value)
                  }}
                >
                  {Object.values(Question).map((question) => (
                    <option value={question}>{question}</option>
                  ))}
                </Select>
                <FormLabel mt="1rem" htmlFor="response">
                  votre réponse:
                </FormLabel>
                <Field as={Input} id="response" name="response" type="" />
                {errors.response && touched.response ? (
                  <Box fontSize="12" color="red">
                    {errors.response}
                  </Box>
                ) : null}

                {isLoading ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Spinner />
                  </Box>
                ) : (
                  <Button
                    mt="2rem"
                    type="submit"
                    colorScheme="primary"
                    display="block"
                    fontSize="17"
                    mx="auto"
                    width="8rem"
                  >
                    Connexion
                  </Button>
                )}
                <CodeConfirmation
                  email={values.email}
                  isLoading={isLoading}
                  isOpen={isSignUpSuccess}
                  data={data}
                  onClose={resetModal}
                />
              </Form>
            )
          }}
        </Formik>
      </Box>
    </Flex>
  )
}

export default Signup
