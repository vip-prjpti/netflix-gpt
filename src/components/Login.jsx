import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (

    <div>
      <Header />
      <div className='absolute'>

        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/CA-en-20251013-TRIFECTA-perspective_b1fb583c-c2b0-43ec-a0b6-c990417da87c_large.jpg" alt="" />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input type="text" placeholder='Email Address' className='p-2 my-2 w-full' />
        <input type="text" placeholder='Full Name' className='p-2 my-2 w-full' />
        <input type="password" placeholder='Password' className='p-2 my-2 w-full' />
        <button className="p-4 my-2 bg-red-700 w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? " New to Netflix? Sign Up now!" : "Already Registered? SignIn Now"} </p>
      </form>
    </div>
  )
}

export default Login