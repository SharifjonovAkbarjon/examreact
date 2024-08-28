import React from 'react'
import { useStateValue } from '../../context'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
    let [{token}] = useStateValue
  return (
    token ? <Outlet/> : <Navigate replace to={"/admin"}/>
  )
}

export default Auth