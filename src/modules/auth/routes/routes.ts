import { createElement, lazy } from 'react'

import { IRoute } from '../../../config/models/models'
import Login from '../components/Login'
import Signup from '../components/Signup'
// eslint-disable-next-line @typescript-eslint/promise-function-async
const Auth = lazy(() => import('../Auth'))

// export lazy route

export const AUTH_ROUTES: any[] = [
  {
    path: '/auth',
    element: createElement(Auth),
    name: 'Auth',
    exact: true,
    children: [
      {
        path: '/auth/login',
        element: createElement(Login),
      },
      {
        path: '/auth/register',
        element: createElement(Signup),
      },
    ],
  },
]
