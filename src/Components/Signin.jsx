import React, { useState,useRef } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function Signin({getSignUpForm}) {

    const [showPassword,setShowPassword] = useState(false) ; 
    let passwordRef = useRef() ;
    const handleShowPassword = ()=>{
        if(showPassword){
            setShowPassword(!showPassword) ;
            passwordRef.current.type = "text"
        }else{
            setShowPassword(!showPassword) ;
            passwordRef.current.type = "password"
        }
    }
  return (
    <div className='lg:w-96 lg:border lg:p-5 p-3 w-80 my-6 mx-auto '>
        <h1 className='text-2xl text-center font-bold my-2'>
            Sign-in
        </h1>
        <form className='flex  flex-col gap-4 lg:w-full'>
            <div>
                <label htmlFor="e-mail">E-mail :</label>
                <input type="email"
                className='w-full px-2 outline-none py-2 border rounded'
                name="email" id="e-mail" placeholder='Enter your email' />
            </div>
            <div>
                <label htmlFor="password">Password :</label>
                <div
                className='flex items-center bg-white border focus rounded'
                id="PasswordDiv">
                    <input 
                    ref={passwordRef}
                    className='w-full  px-2 py-2  outline-none text-gray-950   rounded'
                    type="password" placeholder='Enter your password' name="password" id="" />
                    <button type='button' onClick={handleShowPassword}>
                        {
                            showPassword ? <FaEyeSlash className='me-2 text-gray-950'/> : 
                                        <FaEye className='me-2  text-gray-950'/>
                        }
                    </button>
                    </div>
            </div>
            <div className='flex items-center gap-2'>
                <label
                className='inline '
                htmlFor="rememberMe">Remember me </label>
                <input
                className='form-checkbox mt-1'
                type="checkbox" id="rememberMe" />
                
            </div>
            <div id='forgotPassword'>
                <p className=' text-center'>Forgot password ? 
                    <button type='button' className='text-blue-600 ms-2'>
                        Reinitiliaze it 
                    </button>
                </p>  
            </div>
            <div>
                <button type='button' className='bg-blue-600 text-white hover:bg-blue-700 py-2 rounded w-full '>Sign-In</button>
            </div>
            <div className='text-center border-t pt-5' id="noAccount">
                <p>Don't have an account ? <button
                onClick={getSignUpForm}
                type='button' className='text-blue-700 font-semibold'>Create a one </button></p>
            </div>
        </form>
    </div>
  )
}

export default Signin