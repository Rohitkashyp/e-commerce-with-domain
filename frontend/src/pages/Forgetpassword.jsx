
import React, { useState } from 'react'

import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'
import { useContext } from 'react'
import { Usercontext } from '../context/UserContext'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgetPassword() {

    const {setUser,user} = useContext(Usercontext)
    const [showpassword,setShowpassword]= useState(false)
    const [email,setEmail] = useState('')
    const [newpassword,setNewPassword] = useState('')
   
    const navigate = useNavigate()
    console.log(email,newpassword)
   

    const handlforget = async(e)=>{
       e.preventDefault()
       try {
        const res = await axios.get("http://localhost:5000/users")
      
        const users = res.data.find((user)=>(
          user.email === email
        ))
       if(!users){
        
        toast.error("Email Not Found!",{
            position: "top-right",
            autoClose: 3000
           })
        return;
       }
       const updatedpassword = await axios.patch(`http://localhost:5000/users/${users.id}`,{
        ...users,
        password:newpassword
    })
       console.log(updatedpassword)
    
            localStorage.setItem("user",JSON.stringify(updatedpassword.data))
               setUser(updatedpassword.data)
    
     
              toast.success("Password Chanege Successfully! Now login",{
                position: "top-right",
                autoClose: 3000
               })
             
                  setTimeout(() => {
                        navigate('/')
                 }, 2000);  



       } catch (error) {
        console.log(error)
       }
      
    }

 return (
    <>
        <div className='mt-2'>
        <h1 className='text-3xl font-bold text-center'>Best,<span className='text-green-500 text-2xl'>Deals</span></h1>
       </div> 
      
            <div className='border-[4px] border-yellow-400 max-w-[1300px] mx-auto mt-5 '>
                       
              
      
        <div className='border-[1px] border-gray-400 rounded-md bg-white shadow-xl h-[400px] max-w-[360px] mt-4 mx-auto'>
             <h1 className='text-center mt-8 text-2xl font-medium'>Forget Password</h1>
               <form onSubmit={handlforget}>
           <div className='flex flex-col gap-4 mt-8 '>
                 <div className='flex justify-center items-center'>
                    <input type="email" placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}}  required className='border-[1px] border-gray-400 bg-gray-200 text-black w-[90%] outline-none h-10 text-sm font-medium px-2' />
                 </div>
                   <div className='flex justify-center items-center'>
                       <input name="password"   type={showpassword ? 'text' : 'password'} onChange={(e)=>{setNewPassword(e.target.value)}}   required placeholder='Enter New Password' className='border-[1px] border-gray-400 bg-gray-200 w-[90%] outline-none h-10 text-sm font-medium px-2' />
                       <button type="button" onClick={()=>{setShowpassword(!showpassword)}} className='text-sm absolute ml-[270px]'>
                        {showpassword ? <IoIosEyeOff size={25}/> : <IoIosEye size={25}/>}</button>
                    </div>
                   
                
                 <div className='flex justify-center items-center'>
                  <button type='submit' className='w-[90%] h-10 bg-blue-700 text-white'>Forgot Password</button>
                 </div>
                 
            </div>
               </form>
        </div>
               
            </div>
          </>
 )
}

export default ForgetPassword
