import React from 'react'
import { FaMailBulk } from 'react-icons/fa'
import {useSelector} from 'react-redux' ;
function Contact() {
    const theme = useSelector(state=>state.theme.themeState)
  return (
    <div className={` border-t  mx-auto py-3`}>
        <form className='flex flex-col gap-3 justify-center lg:border  lg:w-96 px-12 rounded-md   w-96 mx-auto  py-10 '>
            <h3 className='text-center font-bold flex items-center gap-1 justify-center text-2xl'> <FaMailBulk/> Contact-us</h3>
            <div>
                <label htmlFor="e-mailContact">E-mail :</label>
                <input
                className='w-full border p-2 rounded'
                type="email" id="e-mailContact" placeholder='Enter your e-mail' />
            </div>
            <div>
                <label className='block ' htmlFor="feedbackText">Your feedback :</label>
                <textarea className='w-full border rounded p-2' rows={8} cols={20} id="feedbackText" placeholder='Write your feedback down here' />
            </div>
            <div >
                <button className='bg-blue-600 text-lime-50 w-full rounded p-2' type="button">
                    Send 
                </button>
            </div>
        </form>
    </div>
  )
}

export default Contact