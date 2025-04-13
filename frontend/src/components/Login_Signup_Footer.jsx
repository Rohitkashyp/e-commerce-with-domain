import React from 'react'
import { CiHeart } from "react-icons/ci";


function Login_Signup_Footer() {
  return (
   <div className='w-full max-w-[1300px] mx-auto border-[4px] border-red-400 py-8 px-5'>
    <hr className='mt-4 text-gray-600'/>
    
    <div className='bg-white text-black flex flex-col items-center w-full h-30'>
       <div className='flex flex-col justify-center items-center mt-12'>
       <p className='sm:text-md hidden min-[412px]:block'>&copy; 2025 Your E-Commerce Shop. All rights reserved.</p>
       <p className='min-[412px]:hidden'>&copy; 2025 Your E-Commerce Shop</p>
       <p className='min-[412px]:hidden'>All rights reserved.</p>
       <p className='text-sm'>Developed by <span><CiHeart className='inline' size={20}/></span> <span>Rohit Kashyap</span></p>
       </div>
    </div> 
   </div>
  )
}

export default Login_Signup_Footer
