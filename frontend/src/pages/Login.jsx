import React, { useState } from 'react'

import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'
import { useContext } from 'react'
import { Usercontext } from '../context/UserContext'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
    const {setUser} = useContext(Usercontext)
    const [showpassword,setShowpassword]= useState(false)
    const [error,setError] = useState('')



 const navigate = useNavigate()

 const [formdata,setFormdata] = useState({email:'',password:''})

 const handlesubmitlogin =  async(e)=>{
    e.preventDefault()
  try {
    const res = await axios.get("http://localhost:5000/users")
    const users = res.data.find((user)=>(
        user.email === formdata.email && user.password === formdata.password
    ))
   if(!users){
    // alert("Invaild Email and password")
    // setError("Invaild Email and password")
    toast.error("Invaild Email and password",{
      position: "top-right",
      autoClose: 3000
     })
    return
   }
   localStorage.setItem("user",JSON.stringify(users))
   setUser(users)
   toast.success("Login Successfully",{
    position: "top-right",
    autoClose: 3000
   })


   setTimeout(()=>{
    navigate('/')
   },2000)
   
  } catch (error) {
    console.log(error)
    toast.error("Something went wrong! Try again.");
  }
  
 
 }



    return (
        <>

     <div className='mt-2'>
        <h1 className='text-3xl font-bold text-center'>Best,<span className='text-green-500 text-2xl'>Deals</span></h1>
     </div> 
    
          <div className='w-full max-w-[1300px] mx-auto p-2 mt-2'>
                     
            
    
      <div className='border-[1px] border-gray-300 rounded-md bg-white shadow-md h-[400px] max-w-[370px] mx-auto mt-4'>
           <h1 className='text-center mt-8 text-2xl font-medium'>Login</h1>
             <form onSubmit={handlesubmitlogin}>
         <div className='flex flex-col gap-4 mt-8 '>
               <div className='flex justify-center items-center'>
                  <input type="email" value={formdata.email} placeholder='Enter Email' onChange={(e)=>{setFormdata({...formdata,email:e.target.value})}} required className='border-[1px] border-gray-400 bg-gray-200 text-black w-[90%] outline-none h-10 text-sm font-medium px-2' />
               </div>
                <div className='flex justify-center items-center'>
                     <input name="password" value={formdata.password} onChange={(e)=>{setFormdata({...formdata,password:e.target.value})}}  type={showpassword ? 'text' : 'password'} required placeholder='Enter Password' className='border-[1px] border-gray-400 bg-gray-200 w-[90%] outline-none h-10 text-sm font-medium px-2' />
                     <button type="button" onClick={()=>{setShowpassword(!showpassword)}} className='text-sm absolute ml-[245px] min-[340px]:ml-[255px] min-[365px]:ml-[270px]'>
                      {showpassword ? <IoIosEyeOff size={25}/> : <IoIosEye size={25}/>}</button>
                  </div>
                  {error && ( <p className='text-sm text-red-600 ml-5 -mt-4'>{error}</p>)}
              
               <div className='flex justify-center items-center'>
                <button type='submit' className='w-[90%] h-10 bg-blue-700 text-white cursor-pointer transition hover:bg-blue-600'>Login</button>
               </div>
                
          </div>
             </form>

               {/* Change password & Forget Password */}
               <div className='flex justify-center gap-4 mt-4'>
                <div className=''>
                    <button type='button' onClick={()=>{navigate('/change-password')}} className='text-sm text-blue-600 hover:underline cursor-pointer'>Change Your password?</button>
                </div>
                <div className=''>
                    <button type='button' onClick={()=>{navigate('/forget-password')}} className='text-sm text-blue-600 hover:underline cursor-pointer'>Forgot your password?</button>
                </div>
                </div>

                <div className='flex justify-center items-center mt-6 font-normal'>
                   <p className='text-sm'>Don't have an account?</p>
                   <Link className='text-[16px] text-blue-600 hover:underline' to='/sign_up'>Sign Up</Link>
                </div>
           
      </div>
             
          </div>
        </>
      )
}

export default Login
