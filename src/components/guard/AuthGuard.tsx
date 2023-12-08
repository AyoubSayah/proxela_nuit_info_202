import React, { useEffect, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { GetToken } from '../../modules/auth/slices/authSlice'

const AuthGuard = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const token = useSelector((state) => {
    return state.authentification.token
  })

  useEffect(() => {
    if (pathname.includes('private') && GetToken()) {
      navigate('/')
    } else if (GetToken()) {
      navigate('/private/home')
    }
  }, [pathname])
  return <></>
}

export default AuthGuard
