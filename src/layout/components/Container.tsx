import { Box } from '@chakra-ui/react'
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'

import { CONTACTUS_ROUTES } from '../../modules/contactus/routes/routes'
import { HOME_ROUTES } from '../../modules/home/routes/routes'
import { POSTS_ROUTES } from '../../modules/posts/routes/routes'

const Container = () => {
  const routes = useRoutes([
    ...CONTACTUS_ROUTES,
    ...HOME_ROUTES,
    ...POSTS_ROUTES,
  ])

  return (
    <Box pos="relative" minH="100vh">
      <Suspense fallback={<Loader />}>{routes}</Suspense>
    </Box>
  )
}

export default Container
