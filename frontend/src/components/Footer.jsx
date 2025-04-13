// import React, { useEffect } from 'react'
// import { Link,useLocation } from 'react-router-dom'
// import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";

// function Footer() {
//     const location = useLocation()
//     // bg-[#232f3e] text-white mt-10
//     // max-w-[1300px] mx-auto border-[4px] py-8 px-5 border-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8

//     // console.log(location)
//     // console.log("footer")
//   const Islocation = location.pathname === '/login' || location.pathname === '/sign_up' || location.pathname === '/change-password' || location.pathname === '/forget-password' ;

//   return (
//    <footer className={`${Islocation ? 'bg-white text-black' : 'bg-[#232f3e] text-white'} mt-10`}>

//  <div className={`${Islocation ? 'hidden' :'max-w-[1300px] mx-auto border-[4px] py-8 px-5 border-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'}`}>
// <div className='border-[1px] border-red-600 flex flex-col items-center py-4'>
//    <h1 className='text-lg font-semibold'>My shop</h1>
//    <p className='text-sm mt-6'>The perfect place for the best products</p>
// </div>
// <div className='border-[1px] border-red-600 flex flex-col items-center py-4'>
//    <h3 className='text-lg font-semibold'>Quick Links</h3>
//    <ul className='mt-2 text-sm flex flex-col items-center gap-1'>
//       <li><Link to="/" className='hover:underline' onClick={()=>{window.scroll(0,0)}}>Home</Link></li>
//       <li><Link to="/all_products" className='hover:underline' onClick={()=>{window.scroll(0,0)}}>All Products</Link></li>
//       <li><Link to="/profile" className='hover:underline' onClick={()=>{window.scroll(0,0)}}>Your Profile</Link></li>
//    </ul>
// </div>
// <div className='border-[1px] border-red-600 flex flex-col items-center py-4'>
//  <h3 className='text-xl font-semibold'>Support</h3>
//  <ul className='text-sm mt-2 flex flex-col items-center gap-1'>
//   <li> <a href='#'>FAQ</a></li>
//   <li> <a href='#'>Return Policy</a></li>
//   <li> <a href='#'>Privacy Policy</a></li>
//  </ul>
// </div>
// <div className='border-[1px] border-red-600 flex flex-col items-center py-4'>
//    <h3 className='text-lg font-semibold'>Follow Us</h3>
//    <div className='flex gap-2 mt-4'>
//       <a href="#"><FaFacebookF/></a>
//       <a href="#"><FaInstagram/></a>
//       <a href="#"><FaTwitter/></a>
//       <a href="#"><FaLinkedinIn/></a>
//    </div>
// </div>
// </div>
// <hr className={`${Islocation ? 'hidden mt-0':'mt-4 text-gray-600'}`}/>

// <div className={`${Islocation ? 'bg-white text-black' : 'bg-[#131a22] text-white'} mt-6 flex flex-col items-center w-full h-30`}>
//    <div className='flex flex-col items-center mt-6'>
//    <p className='text-md mt-6'>&copy; 2025 Your E-Commerce Shop. All rights reserved.</p>
//    <p className='text-sm'>Developed by <span><CiHeart className='inline' size={20}/></span> <span>Rohit Kashyap</span></p>
//    </div>
// </div>   
//    </footer>
//   )
// }

// export default Footer




// .............................................................


import React, { useEffect } from 'react'
import { Link,useLocation } from 'react-router-dom'
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

function Footer() {
   
  return (
   <footer className= 'bg-[#232f3e] text-white mt-10'>

 <div className='max-w-[1300px] mx-auto border-[4px] py-8 px-5 border-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
<div className='border-[1px] border-red-600 flex flex-col items-center py-4'>
   <h1 className='text-lg font-semibold'>My shop</h1>
   <p className='text-sm mt-6'>The perfect place for the best products</p>
</div>
<div className='border-[1px] border-red-600 flex flex-col items-center py-4'>
   <h3 className='text-lg font-semibold'>Quick Links</h3>
   <ul className='mt-2 text-sm flex flex-col items-center gap-1'>
      <li><Link to="/" className='hover:underline cursor-pointer' onClick={()=>{window.scroll(0,0)}}>Home</Link></li>
      <li><Link to="/all_products" className='hover:underline cursor-pointer' onClick={()=>{window.scroll(0,0)}}>All Products</Link></li>
      <li><Link to="/profile" className='hover:underline cursor-pointer' onClick={()=>{window.scroll(0,0)}}>Your Profile</Link></li>
   </ul>
</div>
<div className='border-[1px] border-red-600 flex flex-col items-center py-4'>
 <h3 className='text-xl font-semibold'>Support</h3>
 <ul className='text-sm mt-2 flex flex-col items-center gap-1'>
  <li> <a href='#'>FAQ</a></li>
  <li> <a href='#'>Return Policy</a></li>
  <li> <a href='#'>Privacy Policy</a></li>
 </ul>
</div>
<div className='border-[1px] border-red-600 flex flex-col items-center py-4'>
   <h3 className='text-lg font-semibold'>Follow Us</h3>
   <div className='flex gap-2 mt-4'>
      <a href="#"><FaFacebookF/></a>
      <a href="#"><FaInstagram/></a>
      <a href="#"><FaTwitter/></a>
      <a href="#"><FaLinkedinIn/></a>
   </div>
</div>
</div>
<hr className='mt-4 text-gray-600'/>

{/* <div className='bg-[#131a22] text-white mt-6 flex flex-col items-center w-full h-30'>
   <div className='flex flex-col items-center mt-6'>
   <p className=' min-[364px]:text-[16px] min-[409px]:text-[18px] mt-6'>&copy; 2025 Your E-Commerce Shop. All rights reserved.</p>
   <p className='text-sm mt-2'>Developed by <span><CiHeart className='inline' size={20}/></span> <span>Rohit Kashyap</span></p>
  </div> 
</div>    */}
  <div className='bg-[#131a22] text-white flex flex-col items-center w-full mt-6 h-40'>
       <div className='flex flex-col items-center justify-center mt-12 gap-1'>
       <p className='sm:text-md hidden min-[412px]:block'>&copy; 2025 Your E-Commerce Shop. All rights reserved.</p>
       <p className='min-[412px]:hidden'>&copy; 2025 Your E-Commerce Shop</p>
       <p className='min-[412px]:hidden'>All rights reserved.</p>
       <p className='text-sm'>Developed by <span><CiHeart className='inline' size={20}/></span> <span>Rohit Kashyap</span></p>
       </div>
    </div> 

   </footer>
  )
}

export default Footer





