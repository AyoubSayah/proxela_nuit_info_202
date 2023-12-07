import { createElement, lazy } from 'react'
import { IRoute } from '../../../config/models/models'
import Home from '../Home'
// eslint-disable-next-line @typescript-eslint/promise-function-async

// export lazy route

export const HOME_ROUTES: IRoute[] = [
  {
    path: '/',
    element: createElement(Home),
    name: 'home',
    exact: true,
  },
]
