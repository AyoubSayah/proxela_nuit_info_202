import React, { lazy } from 'react'
import { IRoute } from '../../config/models/models'

// eslint-disable-next-line @typescript-eslint/promise-function-async
const layout = lazy(() => import('../Layout'))

const LAYOUT_ROUTE: IRoute[] = [
  {
    path: '/*',

    element: React.createElement(layout),

    name: 'public',
  },
]

export default LAYOUT_ROUTE
