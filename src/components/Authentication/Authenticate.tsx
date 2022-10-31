import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './SignUp/SignUp'
import Login from './Login/Login'

const Authenticate = () => {
  return (
    <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default Authenticate