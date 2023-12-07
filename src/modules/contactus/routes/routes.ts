import { createElement, lazy } from 'react'
import { IRoute } from '../../../config/models/models'
// eslint-disable-next-line @typescript-eslint/promise-function-async
const ContactUs = lazy(() => import('../ContactUs'))

// export lazy route

export const CONTACTUS_ROUTES: IRoute[] = [
  {
    path: '/contactus',
    element: createElement(ContactUs),
    name: 'ContactUs',
    exact: true,
  },
]
