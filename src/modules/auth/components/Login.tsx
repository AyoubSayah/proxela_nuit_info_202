import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import React, { useEffect, useLayoutEffect } from 'react'
import { useLoginMutation } from '../slices/authSlice'
import SecurityQuestion from '../../common/components/SecurityQuestion'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const initialValues = { email: '', password: '' }
  const navigate = useNavigate()
  const [loginHandler, { isLoading, data, error, isSuccess, reset }] =
    useLoginMutation()

  const SignInSchema = Yup.object().shape({
    email: Yup.string().required('Address Email est requis'),
    password: Yup.string().required('Mot de passe est requis'),
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

  useLayoutEffect(() => {
    if (isSuccess && data && data.token) {
      reset()
      navigate('/private/home')
    }
  }, [data, isSuccess])

  return (
    <Flex align="center" justify="center">
      <Box
        bg="white"
        p={6}
        rounded="md"
        w={480}
        zIndex={15}
        position="relative"
      >
        <Text
          padding={10}
          textTransform="capitalize"
          fontSize={{ base: 'xl', sm: 'xl', md: '2xl' }}
          fontWeight="extrabold"
          textAlign="center"
        >
          Bienvenue dans notre mondesss
        </Text>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignInSchema}
          onSubmit={(values) => {
            loginHandler(values)
            console.log(values)
          }}
        >
          {({ errors, touched, values }) => (
            <Form>
              <FormLabel htmlFor="email">Email Address</FormLabel>
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
                variant="filled"
              />
              {errors.password && touched.password ? (
                <Box fontSize="12" color="red">
                  {errors.password}
                </Box>
              ) : null}

              <Button
                isLoading={isLoading}
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

              <SecurityQuestion
                isOpen={isSuccess}
                onClose={() => {}}
                onSubmit={(response) => {
                  loginHandler({
                    email: values.email,
                    password: values.password,
                    securityQuestion: {
                      question: data?.question,
                      response,
                    },
                  })
                }}
                data={data?.question}
              />
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  )
}

export default Login
