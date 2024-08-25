import React from 'react'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Admin = () => {
  return (
    <>
      <div className="container flex flex-col items-center gap-2">
        <div>
          <NavLink to={"/"}>Home</NavLink>
        </div>
        <div className='flex gap-4 flex-col rounded-[5px] itemsjustify-center border py-[20px] px-[31px]'>
          <div>
            <img src={logo} alt="" />
          </div>
          <div className='flex flex-col gap-3'>
            <p className='text-[15px]'>Email Address</p>
            <input className='w-[100%] py-2 px-[10px] rounded-[1px] border outline-black' type="text" placeholder='Enter Your Email' />
          </div>
          <div className='flex flex-col gap-3'>
            <p className='text-[15px]'>Password*</p>
            <input className='w-[100%] py-2 px-[10px] rounded-[1px] border' type="text" placeholder='Enter Your password' />
          </div>
          <div className='flex gap-3'>
            <input type="checkbox" />
            <p>Remember Me</p>
            <p className='ml-6'>Forgot Password?</p>
          </div>
          <div className='flex justify-between'>
            <button className='bg-[green] py-[10px] px-[20px] rounded-lg text-white'>Login</button>
            <button>Signup?</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin