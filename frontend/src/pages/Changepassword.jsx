// import React, { useState } from 'react'

// import axios from 'axios'
// import { useNavigate,Link } from 'react-router-dom'
// import { useContext } from 'react'
// import { Usercontext } from '../context/UserContext'
// import { IoIosEye } from "react-icons/io";
// import { IoIosEyeOff } from "react-icons/io";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// function Changepassword() {


//      const {setUser} = useContext(Usercontext)
//      const [showpassword,setShowpassword]= useState(false)
//      const [error,setError] = useState('')
//      const [email,setEmail] = useState('')
//      const [oldpassword,setOldPassword] = useState('')
//      const [newpassword,setNewPassword] = useState('')
    
//      const navigate = useNavigate()
    

//      const handlereset = async(e)=>{
//         e.preventDefault()
//         try {
//           const res = await axios.get("http://localhost:5000/users")
//          //  console.log(res.data)
//          const users = res.data.find((user)=>(
//             user.email === email
//          ))
//          // console.log(users)
//          if(users){
//             if(users.password === oldpassword){
//              const updatepassword = await axios.patch(`http://localhost:5000/users/${users.id}`,{password:newpassword})
//              console.log(updatepassword)
//              localStorage.setItem("user",JSON.stringify(updatepassword))
//              setUser(updatepassword)

//              alert("password change successfully")
//              setTimeout(() => {
//                navigate('/')
//              }, 2000);
//             }else{
//                alert("password not match")
//             }
//          }else{
//             alert("Email not found")
//          }
        

//         } catch (error) {
//           console.log(error) 

//         }
//      }

//   return (
//      <div className='mt-25'>
       
//              <div className='border-[4px] border-yellow-400 max-w-[1300px] mx-auto mt-5 '>
                        
               
       
//          <div className='border-[1px] border-gray-400 rounded-md bg-white shadow-xl h-[400px] w-[360px] mx-auto'>
//               <h1 className='text-center mt-8 text-2xl font-medium'>Login</h1>
//                 <form onSubmit={handlereset}>
//             <div className='flex flex-col gap-4 mt-8 '>
//                   <div className='flex justify-center items-center'>
//                      <input type="email" value={email}  placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}}  required className='border-[1px] border-gray-400 bg-gray-200 text-black w-[90%] outline-none h-10 text-sm font-medium px-2' />
//                   </div>
//                     <div className='flex justify-center items-center'>
//                         <input name="password" value={oldpassword}  type={showpassword ? 'text' : 'password'} onChange={(e)=>{setOldPassword(e.target.value)}}  required placeholder='Enter Old Password' className='border-[1px] border-gray-400 bg-gray-200 w-[90%] outline-none h-10 text-sm font-medium px-2' />
//                         <button type="button" onClick={()=>{setShowpassword(!showpassword)}} className='text-sm absolute ml-[270px]'>
//                          {showpassword ? <IoIosEyeOff size={25}/> : <IoIosEye size={25}/>}</button>
//                      </div>
//                      {error && ( <p className='text-sm text-red-600 ml-5 -mt-4'>{error}</p>)}
//                      <div className='flex justify-center items-center'>
//                         <input name="password" value={newpassword}  type={showpassword ? 'text' : 'password'} onChange={(e)=>{setNewPassword(e.target.value)}}  required placeholder='Enter New Password' className='border-[1px] border-gray-400 bg-gray-200 w-[90%] outline-none h-10 text-sm font-medium px-2' />
//                         <button type="button" onClick={()=>{setShowpassword(!showpassword)}} className='text-sm absolute ml-[270px]'>
//                          {showpassword ? <IoIosEyeOff size={25}/> : <IoIosEye size={25}/>}</button>
//                      </div>
//                      {error && ( <p className='text-sm text-red-600 ml-5 -mt-4'>{error}</p>)}
                 
//                   <div className='flex justify-center items-center'>
//                    <button type='submit' className='w-[90%] h-10 bg-blue-700 text-white'>Reset Password</button>
//                   </div>
                  
//              </div>
//                 </form>
//          </div>
                
//              </div>
//            </div>
//   )
// }

// export default Changepassword;

//   .................................


import React, { useState } from 'react'

import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'
import { useContext } from 'react'
import { Usercontext } from '../context/UserContext'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Changepassword() {


     const {setUser} = useContext(Usercontext)
     const [showpassword,setShowpassword]= useState(false)
     const [shownewpassword,setShowNewpassword]= useState(false)
     const [error,setError] = useState('')
     const [email,setEmail] = useState('')
     const [oldpassword,setOldPassword] = useState('')
     const [newpassword,setNewPassword] = useState('')
    
     const navigate = useNavigate()
    

     const handlereset = async(e)=>{
        e.preventDefault()
        try {
        const res = await axios.get("http://localhost:5000/users")
         //  console.log(res.data)
        const users = res.data.find((user)=>(
            user.email === email
         ))

         if(!users){
            // alert("Email Not Found")
               toast.error("Email Not Found!",{
                  position: "top-right",
                  autoClose: 3000
                 })
            return;
         }
         if(users.password !== oldpassword){
            // alert("Password Not Match!")
            toast.error("Password Not Match!",{
               position: "top-right",
               autoClose: 3000
              })
            return;
         }
         
         const updatepassword = await axios.patch(`http://localhost:5000/users/${users.id}`,{
            ...users,
            password:newpassword})
            //   console.log(updatepassword)
          localStorage.setItem("user",JSON.stringify(updatepassword.data))
           setUser(updatepassword.data)

         //   alert("password change successfully")
          toast.success("Password Update Successfully!",{
            position: "top-right",
            autoClose: 3000,
            onClose: () => navigate('/')

           })
            //   setTimeout(() => {
            //         navigate('/')
            //  }, 2000);     

        

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
              <h1 className='text-center mt-8 text-2xl font-medium'>Change Password</h1>
                <form onSubmit={handlereset}>
            <div className='flex flex-col gap-4 mt-8 '>
                  <div className='flex justify-center items-center'>
                     <input type="email" value={email}  placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}}  required className='border-[1px] border-gray-400 bg-gray-200 text-black w-[90%] outline-none h-10 text-sm font-medium px-2' />
                  </div>
                    <div className='flex justify-center items-center'>
                        <input name="password" value={oldpassword}  type={showpassword ? 'text' : 'password'} onChange={(e)=>{setOldPassword(e.target.value)}}  required placeholder='Enter Old Password' className='border-[1px] border-gray-400 bg-gray-200 w-[90%] outline-none h-10 text-sm font-medium px-2' />
                        <button type="button" onClick={()=>{setShowpassword(!showpassword)}} className='text-sm absolute ml-[270px]'>
                         {showpassword ? <IoIosEyeOff size={25}/> : <IoIosEye size={25}/>}</button>
                     </div>
                     {error && ( <p className='text-sm text-red-600 ml-5 -mt-4'>{error}</p>)}
                     <div className='flex justify-center items-center'>
                        <input name="password" value={newpassword}  type={shownewpassword ? 'text' : 'password'} onChange={(e)=>{setNewPassword(e.target.value)}}  required placeholder='Enter New Password' className='border-[1px] border-gray-400 bg-gray-200 w-[90%] outline-none h-10 text-sm font-medium px-2' />
                        <button type="button" onClick={()=>{setShowNewpassword(!shownewpassword)}} className='text-sm absolute ml-[270px]'>
                         {shownewpassword ? <IoIosEyeOff size={25}/> : <IoIosEye size={25}/>}</button>
                     </div>
                     {error && ( <p className='text-sm text-red-600 ml-5 -mt-4'>{error}</p>)}
                 
                  <div className='flex justify-center items-center'>
                   <button type='submit' className='w-[90%] h-10 bg-blue-700 text-white'>Change Password</button>
                  </div>
                  
             </div>
                </form>
         </div>
                
             </div>
           </>
  )
}

export default Changepassword;



