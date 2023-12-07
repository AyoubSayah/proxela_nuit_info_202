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

import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const initialValues = { email: '', password: '' }

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
          Bienvenue dans notre monde
        </Text>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignInSchema}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({ errors, touched }) => (
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
              <Link to="/private/home">
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
              </Link>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  )
}

export default Login
