import React from 'react'
import { NavLink } from 'react-router-dom'

const ForgetPassword = () => {
  return (
    <div className="sign-in-cont">
    <div>You are Logged Out</div>
    <p>Thank you for using BillieChat</p>
    <NavLink to={'/signIn'}>
    <button className='btn'>Sign in</button>
    </NavLink>
    </div>
  )
}

export default ForgetPassword