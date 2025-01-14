import React, { useRef, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Signup({getSignInForm}) {
    //first  password
    const [showPassword,setShowPassword] = useState(false) ; 
    let passwordRef = useRef() ;
    const handleShowPassword = ()=>{
        if(!showPassword){
            setShowPassword(!showPassword) ;
            passwordRef.current.type = "text"
        }else{
            setShowPassword(!showPassword) ;
            passwordRef.current.type = "password"
        }
    }
    //password confirmation side
    const [showPasswordConfirmation,setshowPasswordConfirmation] = useState(false) ; 
    let passwordConfirmationRef = useRef() ;
    const handleShowPasswordConfirmation = ()=>{
        if(!showPasswordConfirmation){
            setshowPasswordConfirmation(prevState=>!prevState) ;
            passwordConfirmationRef.current.type = "text"
        }else{
            setshowPasswordConfirmation(prevState=>!prevState) ;
            passwordConfirmationRef.current.type = "password"
        }
        console.log(showPasswordConfirmation)
    }
    
  return (
    <div className='lg:w-96 lg:border lg:p-5 p-3 w-80 my-6 mx-auto'>
        <h1 className='text-2xl text-center font-bold my-2'>
            Sign-up
        </h1>
        <form className='flex  flex-col gap-4 w-full'>
            <div>
                <label htmlFor="e-mail">Username :</label>
                <input type="email"
                className='w-full px-2 outline-none py-2 border rounded'
                name="email" id="e-mail" placeholder='Enter your username' />
            </div>
            <div>
                <label htmlFor="e-mailSignUp">E-mail :</label>
                <input type="email"
                className='w-full px-2 outline-none py-2 border rounded'
                name="email" id="e-mailSignUp" placeholder='Enter your email' />
            </div>
            <div>
                <label htmlFor="password">Password :</label>
                <div
                className='flex items-center bg-white border focus rounded'
                id="PasswordDiv">
                    <input 
                    ref={passwordRef}
                    className='w-full px-2 py-2  outline-none   rounded'
                    type="password" placeholder='Enter your password' name="password" id="" />
                    <button type='button' onClick={handleShowPassword}>
                        {
                            showPassword ? <FaEyeSlash className='me-2 text-gray-950'/> : 
                                        <FaEye className='me-2 text-gray-950'/>
                        }
                    </button>
                    </div>
            </div>
            <div>
                <label htmlFor="password">Confirm password :</label>
                <div
                    className='flex items-center bg-white border focus rounded'
                    id="PasswordConfirmation">
                    <input 
                        ref={passwordConfirmationRef}
                        className='w-full px-2 py-2  outline-none   rounded'
                    type="password" placeholder='Enter your password confirmation' name="password" id="passworConfirmation" />
                    <button type='button' onClick={handleShowPasswordConfirmation}>
                        {
                            showPasswordConfirmation ? <FaEyeSlash className='me-2 text-gray-950'/> : 
                                        <FaEye className='me-2 text-gray-950'/>
                        }
                    </button>
                </div>
            </div>
            <div>
                <button type='button' className='bg-blue-600 text-white hover:bg-blue-700 py-2 rounded w-full '>Sign-Up</button>
            </div>
            <div className='border-t pt-4 text-center '>
                <p>Already have an account ? <button onClick={getSignInForm} className='text-blue-600 font-bold ' type='button'> Sign-in</button></p>
            </div>
        </form>
    </div>
  )
}

export default Signup ;