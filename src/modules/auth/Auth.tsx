import { Box, Flex } from '@chakra-ui/react'
import { Suspense } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import Blob from '../../components/Blob/Blob'
import BlobSmall from '../../components/Blob/BlobSmall'
import Loader from '../../components/Loader/Loader'
import Login from './components/Login'
import { AUTH_ROUTES } from './routes/routes'

const Auth = () => {
  return (
    <Flex minHeight="100vh" overflow="hidden">
      <Flex
        flexBasis={{ base: '100%', md: '50%' }}
        justifyContent={{ base: 'center', md: 'flex-end' }}
        alignItems="center"
      >
        <Box
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
          w="30rem"
          minHeight="30rem"
          bg="white"
          borderRadius="lg"
          mr={{ base: '0', md: '-10rem' }}
          position="relative"
          zIndex={2}
        >
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Box>
      </Flex>
      <Flex
        flexWrap="wrap"
        gap="3rem"
        justifyContent="center"
        flexBasis="50%"
        bg="primary.500"
        display={{ base: 'none', md: 'flex' }}
        overflow="hidden"
      >
        <Blob />
        <BlobSmall />
        <Blob />
        <BlobSmall />
        <BlobSmall />

        <Blob />
        <BlobSmall />
      </Flex>
    </Flex>
  )
}

export default Auth
