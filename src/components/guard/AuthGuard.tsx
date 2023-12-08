import React, { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const AuthGuard = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const token = useSelector((state) => {
    return state.authentification.token
  })

  useLayoutEffect(() => {
    if (pathname.includes('private') && !token) {
      navigate('/')
    } else if (token) {
      navigate('/private/home')
    }
  }, [pathname, token])
  return <></>
}

export default AuthGuard
