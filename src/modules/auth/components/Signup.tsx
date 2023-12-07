import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const initialValues = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const SignInSchema = Yup.object().shape({
    email: Yup.string().required('Saisir votre adresse email'),
    username: Yup.string().required("Nom d'utilisateur est requis"),
    firstName: Yup.string()
      .min(2, 'Trop court!')
      .max(50, 'Trop long!')
      .required('Saisir votre prénom'),
    lastName: Yup.string()
      .min(2, 'Trop court!')
      .max(50, 'Trop long!')
      .required('Saisir votre nom'),
    password: Yup.string().min(
      8,
      'Utilisez 8 caractères ou plus pour votre mot de passe'
    ),
    confirmPassword: Yup.string()
      .required('Confirmer votre mot de passe')
      .oneOf(
        [Yup.ref('password'), null],
        'Mots de passe ne correspond pas. Veuillez réessayer'
      ),
  })

  function validateEmail(value: string) {
    let error
    if (!value) {
      error = 'Required'
    } else if (
      !/^[a-zA-Z]+[a-zA-Z0-9]+[_.{1}]?[a-zA-Z0-9]+@[a-zA-Z0-9]+[-.{1}]?[a-zA-Z0-9]+[.][a-zA-Z.]{2,}$/i.test(
        value
      )
    ) {
      error = 'Address email invalide'
    }
    return error
  }
  function validateFirstName(value: string) {
    let error
    if (!value) {
      error = 'Required'
    } else if (!/^[a-zA-Z]$/i.test(value)) {
      error = ' Prénom invalide'
    }
    return error
  }

  function validateLastName(value: string) {
    let error
    if (!value) {
      error = 'Required'
    } else if (!/^[a-zA-Z]$/i.test(value)) {
      error = ' Nom invalide'
    }
    return error
  }

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
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={SignInSchema}
          onSubmit={(values) => {
            navigate('/auth/login')
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <HStack>
                <VStack alignItems="start">
                  <FormLabel htmlFor="lastName">Nom</FormLabel>
                  <Field as={Input} id="lastName" name="lastName" type="text" />
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

              <FormLabel htmlFor="username">Nom d'utilisateur</FormLabel>
              <Field as={Input} id="username" name="username" type="text" />
              {errors.username && touched.username ? (
                <Box fontSize="12" color="red">
                  {errors.username}
                </Box>
              ) : null}

              <FormLabel mt="1rem" htmlFor="email">
                Email Address
              </FormLabel>
              <Field
                as={Input}
                id="email"
                name="email"
                type="email"
                validate={validateEmail}
              />
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
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  )
}

export default Signup
