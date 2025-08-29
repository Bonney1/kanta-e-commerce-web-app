import React from 'react'
import { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 mx-auto mt-14 gap-2 text-gray-800 '>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                  <p className='prata-regular text-3xl'>{currentState}</p>
                  <hr className='border-none h-[1.5px] w-8 bg-gray-800' />

        </div>
                  {currentState=== 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-600' placeholder='Name' required/> }
                  <input type="email" className='w-full px-3 py-2 border border-gray-600' placeholder='Email' required/>
                  <input type="password" className='w-full px-3 py-2 border border-gray-600' placeholder='Password' required/>

            <div  className='flex w-full justify-between text-sm mt-1'>
              <p className='cursor-pointer'>Forgot your password?</p>
             {
               
              currentState=== 'Login' ?
              <p className='cursor-pointer' onClick={() => setCurrentState('Sign Up')}>Create an account</p>
              :
              <p className='cursor-pointer' onClick={() => setCurrentState('Login')}>Already have an account?</p>

              
             }
            </div>

            <button className='bg-orange-600 text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign in' : 'Sign Up'}</button>

    </form>
  )
}

export default Login
