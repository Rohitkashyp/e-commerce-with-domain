// import React from 'react'
// import img2 from '../assets/images/Tgrilkurta1.png'
// import img3 from '../assets/images/Tgrilkurta2.png'
// import img4 from '../assets/images/Tgrilkurta3.png'

// function Profile() {

//     const getUser =localStorage.getItem("user")
//     const User = getUser ? JSON.parse(getUser) : null;
//     // console.log(User)


//   return (
//  <div className='mt-25'>
//  <div className='border-[4px] border-yellow-400 max-w-[1300px] mx-auto mt-5 px-2 sm:flex'>  
//      <div className='border-[3px] border-blue-600 w-full sm:w-[35%]'>
//        <div className='border-[1px] border-blue-400 h-[300px] p-4'>
//            <h1 className='text-2xl font-medium text-center'>My Profile</h1>
//            <div className='flex flex-col items-start gap-2 mt-10'>
//              <h2 className='text-xl'>Name: <span className='text-[18px]'>{User.name}</span></h2>
//              <h3 className='text-xl'>Email: <span className='text-[18px]'>{User.email}</span></h3>
//             </div>
//          </div> 
//       </div>
//       {/* screen  */}
//        <div className='border-[3px] border-blue-600 w-[65%] h-auto hidden sm:block'>
//             <div>
//                 <h1 className='text-2xl font-bold text-center'>Your Orders</h1>
                
//                 <ul>
//                  <li>
//                    <strong>Order #1</strong> - ₹ 50000
//                    <p>📅 2-06-2025</p>
//                    {/* order cart item */}
//                    <div className='border-[2px] border-red-500 w-full h-35 grid'>
//                     <div className='border-[1px] border-black w-[20%] h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black w-[20%] h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black w-[20%] h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black w-[20%] h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black w-[20%] h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                    </div>
//                    <button>Delete Order</button>
//                  </li>
//                 </ul>
//             </div>
//        </div>
//        {/* <div className='border-[3px] border-blue-600 block w-full sm:hidden'>
            
//        </div> */}
//   </div>
//  </div>
//   )
// }

// export default Profile


// .............................


// import React from 'react'
// import img2 from '../assets/images/Tgrilkurta1.png'
// import img3 from '../assets/images/Tgrilkurta2.png'
// import img4 from '../assets/images/Tgrilkurta3.png'

// function Profile() {

//     const getUser =localStorage.getItem("user")
//     const User = getUser ? JSON.parse(getUser) : null;
//     // console.log(User)


//   return (
//  <div className='mt-25'>
//  <div className='border-[4px] border-yellow-400 max-w-[1300px] mx-auto mt-5 px-2 flex flex-col gap-2 sm:flex-row'>  
//      <div className='border-[3px] border-blue-600 w-full sm:w-[35%]'>
//        <div className='border-[2px] border-red-400 h-[300px] p-4'>
//            <h1 className='text-2xl font-medium text-center'>My Profile</h1>
//            <div className='flex flex-col items-start gap-2 mt-10'>
//              <h2 className='text-xl'>Name: <span className='text-[18px]'>{User.name}</span></h2>
//              <h3 className='text-xl'>Email: <span className='text-[18px]'>{User.email}</span></h3>
//             </div>
//          </div> 
//       </div>
//       {/*mobile screen 640px se uper block hai or 640 px se niche hidden   */}
//        <div className='border-[3px] border-blue-600 w-full sm:w-[65%] hidden sm:block'>
//             <div>
//                 <h1 className='text-2xl font-bold text-center'>Your Orders</h1>
                
//                 <ul>
//                  <li className='border-[1px] border-gray-900 p-2'>
//                    <strong>Order #1</strong> - ₹ 50000
//                    <p>📅 2-06-2025</p>
//                    {/* order cart item */}
//                    <div className='border-[2px] border-red-500 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 '>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
                 
//                    </div>
//                    <button>Delete Order</button>
//                  </li>

//                  {/* .................... */}
//                  <li className='border-[1px] border-gray-900 p-2'>
//                    <strong>Order #1</strong> - ₹ 50000
//                    <p>📅 2-06-2025</p>
//                    {/* order cart item */}
//                    <div className='border-[2px] border-red-500 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 '>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
                 
//                    </div>
//                    <button>Delete Order</button>
//                  </li>

//                  <li className='border-[1px] border-gray-900 p-2'>
//                    <strong>Order #1</strong> - ₹ 50000
//                    <p>📅 2-06-2025</p>
//                    {/* order cart item */}
//                    <div className='border-[2px] border-red-500 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 '>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
                 
//                    </div>
//                    <button>Delete Order</button>
//                  </li>

//                  <li className='border-[1px] border-gray-900 p-2'>
//                    <strong>Order #1</strong> - ₹ 50000
//                    <p>📅 2-06-2025</p>
//                    {/* order cart item */}
//                    <div className='border-[2px] border-red-500 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 '>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
                 
//                    </div>
//                    <button>Delete Order</button>
//                  </li>

//                  <li className='border-[1px] border-gray-900 p-2'>
//                    <strong>Order #1</strong> - ₹ 50000
//                    <p>📅 2-06-2025</p>
//                    {/* order cart item */}
//                    <div className='border-[2px] border-red-500 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 '>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
                 
//                    </div>
//                    <button>Delete Order</button>
//                  </li>

             
                 

                
//                 </ul>
//             </div>
//        </div>

//        {/* mobile screen 640 px se uper hidden hai  Order */}
//        <div className='border-[3px] border-purple-600 block w-full sm:hidden'>
//        <div>
//                 <h1 className='text-2xl font-bold text-center'>Your Orders</h1>
                
//                 <ul>
//                  <li className='border-[1px] border-gray-900 p-2'>
//                    <strong>Order #1</strong> - ₹ 50000
//                    <p>📅 2-06-2025</p>
//                    {/* order cart item */}
//                    <div className='border-[2px] border-red-500 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 '>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
                 
//                    </div>
//                    <button>Delete Order</button>
//                  </li>

//               {/* ...................... */}
//               <li className='border-[1px] border-gray-900 p-2'>
//                    <strong>Order #1</strong> - ₹ 50000
//                    <p>📅 2-06-2025</p>
//                    {/* order cart item */}
//                    <div className='border-[2px] border-red-500 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 '>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
                 
//                    </div>
//                    <button>Delete Order</button>
//                  </li>
//                  <li className='border-[1px] border-gray-900 p-2'>
//                    <strong>Order #1</strong> - ₹ 50000
//                    <p>📅 2-06-2025</p>
//                    {/* order cart item */}
//                    <div className='border-[2px] border-red-500 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 '>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
                 
//                    </div>
//                    <button>Delete Order</button>
//                  </li>
//                  <li className='border-[1px] border-gray-900 p-2'>
//                    <strong>Order #1</strong> - ₹ 50000
//                    <p>📅 2-06-2025</p>
//                    {/* order cart item */}
//                    <div className='border-[2px] border-red-500 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 '>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
                 
//                    </div>
//                    <button>Delete Order</button>
//                  </li>
//                  <li className='border-[1px] border-gray-900 p-2'>
//                    <strong>Order #1</strong> - ₹ 50000
//                    <p>📅 2-06-2025</p>
//                    {/* order cart item */}
//                    <div className='border-[2px] border-red-500 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 '>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
                 
//                    </div>
//                    <button>Delete Order</button>
//                  </li>
//                  <li className='border-[1px] border-gray-900 p-2'>
//                    <strong>Order #1</strong> - ₹ 50000
//                    <p>📅 2-06-2025</p>
//                    {/* order cart item */}
//                    <div className='border-[2px] border-red-500 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 '>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
//                     <div className='border-[1px] border-black h-full flex flex-col items-center'>
//                       <img src={img2} alt="" className='h-20 w-20 object-contain rounded-md' />
//                       <p className='text-sm'>product name</p>
//                       <p className='font-medium'>product price</p>
//                     </div>
                 
//                    </div>
//                    <button>Delete Order</button>
//                  </li>
               
              
                 

                
//                 </ul>
//             </div>
//        </div>
//   </div>
//  </div>
//   )
// }

// export default Profile




// ..................................................................

import React, { useEffect, useState } from 'react'
import img2 from '../assets/images/Tgrilkurta1.png'
import img3 from '../assets/images/Tgrilkurta2.png'
import img4 from '../assets/images/Tgrilkurta3.png'

function Profile() {

    const [orders,setOrders] = useState([])
    const [User,setUser] = useState(null)
   

    useEffect(()=>{
     
      const getUser =localStorage.getItem("user")
    const user = getUser ? JSON.parse(getUser) : null;
     setUser(user)


      const getorder = JSON.parse(localStorage.getItem("orders")) || [];
      setOrders(getorder)
    },[])
    // console.log(orders,"order")

    //   delete order

    const deleteOrder = (index)=>{
   let updateOrder = [...orders]
     updateOrder.splice(index,1)
     localStorage.setItem("orders",JSON.stringify(updateOrder))
     setOrders(updateOrder)

    }

  
    



  return (
 <div className='mt-25'>
 <div className='border-[4px] border-yellow-400 max-w-[1300px] mx-auto mt-5 px-2 flex flex-col gap-2 sm:flex-row'>  
     <div className='border-[3px] border-blue-600 w-full sm:w-[35%]'>
       <div className='border-[2px] border-red-400 h-[300px] p-4'>
           <h1 className='text-2xl font-medium text-center'>My Profile</h1>
           <div className='flex flex-col items-start gap-2 mt-10'>
             <h2 className='text-xl font-medium'>Name: <span className='text-[14px] text-gray-800'>{User?.name || "Name Not available"}</span></h2>
             <h3 className='text-xl font-medium'>Email: <span className='text-[14px] text-gray-800'>{User?.email || "Email Not available"}</span></h3>
            </div>
         </div> 
      </div>
      {/*mobile screen 640px se uper block hai or 640 px se niche hidden   */}
       <div className='border-[3px] border-blue-600 w-full sm:w-[65%] hidden sm:block'>
            <div>
                <h1 className='text-2xl font-bold text-center'>Your Orders</h1>
                
                {
                  orders.length === 0 ? (
                    <p className='font-sm text-center font-medium mt-16'> Opps! No Orders Found</p>
                  ):(
                    <ul>
                {
                  orders.map((order,index)=>(
                    <li key={index} className='border-[1px] border-gray-900 p-2'>
                    <strong>Order #{index+1}</strong> - ₹ {order.totalAmount}
                    <p>📅 {order.OrderDate}</p>
                    {/* order cart item */}
                    <div className='border-[2px] border-red-500 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 '>
                    {
                      order.cartItems.map((item,i)=>(
                        <div key={i} className='border-[1px] border-black h-full flex flex-col items-center'>
                        <img src={`http://localhost:5000${item.image}`} alt="" className='h-20 w-20 object-contain rounded-md' />
                        <p className='text-sm'>{item.name}</p>
                        <p className='font-medium'>₹{item.price}</p>
                      </div>
                      ))
                    }
                    </div>
                    <button onClick={()=>{deleteOrder(index)}} className='mt-2 bg-orange-700 text-white w-35 h-10 hover:bg-transparent hover:text-black hover:border-[1px] text-md transition'>Delete Order</button>
                  </li>
                  ))
                }

                </ul>
                  )
                }
            </div>
       </div>

       {/* mobile screen 640 px se uper hidden hai  Order */}
       <div className='border-[3px] border-purple-600 block w-full sm:hidden'>
       <div>
                <h1 className='text-2xl font-bold text-center'>Your Orders</h1>
                
                <ul>
                
                {
                  orders.length === 0 ? (
                    <p className='font-sm text-center font-bold mt-16'> Opps! No Orders Found</p>
                  ):(
                    <ul>
                {
                  orders.map((order,index)=>(
                    <li key={index} className='border-[1px] border-gray-900 p-2'>
                    <strong>Order #{index+1}</strong> - ₹ {order.totalAmount}
                    <p>📅 {order.OrderDate}</p>
                    {/* order cart item */}
                    <div className='border-[2px] border-red-500 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 '>
                    {
                      order.cartItems.map((item,i)=>(
                        <div key={i} className='border-[1px] border-black h-full flex flex-col items-center'>
                        <img src={`http://localhost:5000${item.image}`} alt="" className='h-20 w-20 object-contain rounded-md' />
                        <p className='text-sm'>{item.name}</p>
                        <p className='font-medium'>₹{item.price}</p>
                      </div>
                      ))
                    }
                    </div>
                    <button onClick={()=>{deleteOrder(index)}} className='mt-2 bg-orange-700 text-white w-35 h-10 hover:bg-transparent hover:text-black hover:border-[1px] text-md transition'>Delete Order</button>
                  </li>
                  ))
                }

                </ul>
                  )
                }
                
                </ul>
            </div>
       </div>
  </div>
 </div>
  )
}

export default Profile






