import { createElement, lazy } from 'react'
import { IRoute } from '../../../config/models/models'
// eslint-disable-next-line @typescript-eslint/promise-function-async
const Posts = lazy(() => import('../Posts'))

// export lazy route

export const POSTS_ROUTES: IRoute[] = [
  {
    path: '/private/home',
    element: createElement(Posts),
    name: 'privateHome',
    exact: true,
  },
]
