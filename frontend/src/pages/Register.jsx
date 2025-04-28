

import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const API_URL= import.meta.env.VITE_API_URL;







function Register() {
    const navigate = useNavigate()

 const [formdata,setFormdata] = useState({name:'',email:'',password:''})
 const [passerror,setpassError] = useState('')
 const [showpassword,setShowpassword]= useState(false)


 const handleInput = (e)=>{
    e.preventDefault();
    const {value,name} = e.target;
    const passwordCheck = /^(?=.*[@#$*])[\w@#$*]{8,12}$/

    if(name === "password"){
       if(!value){
        setpassError("")
       }else if(!passwordCheck.test(value)){
        setpassError("Password must be at least 8 characters long and contain 1 or 2 special characters (!@#$%^&*)")
       }else{
        setpassError("")
       }
    }


    
    setFormdata((prev)=>(
        {...prev,[name]:value}
    ))

 }

 




const handlesubmit =  async(e)=>{
   e.preventDefault()
 
   const {password}= formdata;
   const passwordCheck = /^(?=.*[@#$*])[\w@#$*]{8,12}$/
   if(!password || !passwordCheck.test(password)){
    setpassError("Password must be at least 8 characters long and contain 1 or 2 special characters (!@#$%^&*)")
    return;
   }

 try {
    const res = await axios.get(`http://localhost:4000/users`)
    const users = res.data;
    const ExitUser = users.find((user)=>(
       user.email === formdata.email
    ))
  if(ExitUser) {
      
      toast.error("Email allready exist",{
         position: "top-right",
         autoClose: 3000
      })
      return 
  } 

  axios.post(`http://localhost:4000/users`,formdata)

  toast.success("Registraion Successfully",{
   position: "top-right",
   autoClose: 3000
})

setTimeout(()=>{
   navigate('/login')
},2000)
  setpassError('')

 } catch (error) {
   console.log(error) 
 }


}






  return (

     <>
    <div className='mt-2'>
        <h1 className='text-3xl font-bold text-center'>Best,<span className='text-green-500 text-2xl'>Deals</span></h1>
     </div> 
   
 
<div className='w-full max-w-[1300px] mx-auto p-2 mt-2'>


           
<div className='border-[1px] border-gray-300 rounded-md bg-white shadow-md h-[400px] max-w-[360px] mx-auto mt-4'>
 <h1 className='text-center mt-8 text-2xl font-medium'>Create New Account</h1>
<form onSubmit={handlesubmit}>
<div className='flex flex-col gap-4 mt-8 '>
     <div className='flex justify-center items-center'>
        <input name="name" value={formdata.name} onChange={handleInput} type="text" placeholder='Enter FullName' required  className='border-[1px] border-gray-400 bg-gray-200 text-black w-[90%] outline-none h-10 text-sm font-medium px-2' />
     </div>
     <div className='flex justify-center items-center'>
        <input name="email" value={formdata.email} onChange={handleInput} type="email" placeholder='Enter Email' required  className='border-[1px] border-gray-400 bg-gray-200 w-[90%] outline-none h-10 text-sm font-medium px-2' />
     </div>
     <div className='flex justify-center items-center'>
        <input name="password" value={formdata.password} onChange={handleInput} type={showpassword ? 'text' : 'password'} placeholder='Enter Password' className='border-[1px] border-gray-400 bg-gray-200 w-[90%] outline-none h-10 text-sm font-medium px-2' />
        <button type="button" onClick={()=>{setShowpassword(!showpassword)}} className='text-sm absolute ml-[245px] min-[340px]:ml-[255px] min-[365px]:ml-[270px]'>
         {showpassword ? <IoIosEyeOff size={25}/> : <IoIosEye size={25}/>}</button>
     </div>
    {passerror && ( <p className='text-sm text-red-600 ml-5 -mt-4'>{passerror}</p>)}
     
     <div className='flex justify-center items-center'>
     
      <button type='submit' className='w-[90%] h-10 bg-blue-700 text-white cursor-pointer transition hover:bg-blue-600'>Sign Up</button>
     </div>
</div>
   </form>
  
   <div className='flex justify-center items-center mt-6 font-normal'>
       <p className='text-sm'>Already have an account?</p>
       <Link className='text-[16px] text-blue-600 hover:underline' to='/login'>Login</Link>
    </div>
</div>
   
</div>
     </>
    

  )
}

export default Register



