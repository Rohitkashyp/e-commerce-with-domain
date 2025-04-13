
import React from 'react'

import EmptyCart from './EmptyCart'
import {useNavigate} from 'react-router-dom'
import { Cartcontext } from '../context/CartContext';
import { useContext } from 'react';
import { AiOutlineDelete } from "react-icons/ai";

function Cart() {

  const navigate = useNavigate()

  const {cart,Removecart,totalprice,discount,shippingCharge,finalprice} = useContext(Cartcontext)
  // console.log(cart)
  console.log(totalprice,"cart")





  const handlecheckOut = ()=>{
       navigate('/checkout')
  }



   return(
    <>
      {

cart.length === 0 ? (
  <div className='mt-28'>
    <EmptyCart/>
  </div>
): (
  <div className='mt-30'>
  <div className='border-[4px] border-yellow-400 max-w-[1300px] mx-auto mt-5'>
         <h1 className='text-xl sm:text-2xl md:text-3xl font-bold ml-5 sm:ml-35'>Shooping Cart {cart.length}</h1>  
       <div className='border-[3px] mt-4 border-red-800 w-full max-w-[1100px] mx-auto p-2 min-h-[500px]'>
     <div className='border-[2px] border-blue-400 flex flex-col items-center md:flex-row gap-4 relative'>
            <div className='border-[2px] border-black w-full md:w-[65%] h-auto'>
               {
                cart.map((item,index)=>(
                
                  <div key={index} className='border-[1px] border-orange-600 h-[120px] flex justify-between items-center mb-2'>
                          <div className='border-[1px] border-r-amber-300 w-1/4 h-full flex justify-center items-center'>
                              <button className='text-red-500 text-xl sm:text-2xl cursor-pointer' onClick={()=>{Removecart(item.id)}}><AiOutlineDelete size={25}/></button>
                          </div>
                           <div className='border-[1px] border-r-amber-300 w-1/4 h-full flex justify-center items-center'>
                            <img src={`http://localhost:5000${item.image}`} alt="img" className='h-20 md:h-25 w-[90%] object-contain' />
                           </div>
                           <div className='border-[1px] border-r-amber-300 w-1/4 h-full flex justify-center items-center'>
                            <h3 className='text-sm ml-2 min-[403px]:ml-0 sm:text-lg md:text-xl font-medium'>{item.name}</h3>
                           </div>
                           <div className='border-[1px] border-r-amber-300 w-1/4 h-full flex justify-center items-center'>
                             <h3 className='text-sm ml-2 min-[403px]:ml-0 sm:text-lg md:text-xl font-medium'>Price: <span className='text-md sm:text-lg md:text-xl text-orange-700'>{item.price}</span></h3>
                           </div>
                     </div>

                ))
               }
                 
                  
                 
                
             </div>
               <div className='border-[4px] border-red-800 w-[80%] sm:w-[60%] md:w-[35%] min-h-[200px] md:absolute top-0 right-0'>
                  <div className='border-[1px] border-black p-1 w-[90%] mx-auto'>
                    <p className='text-[18px] md:text-[20px] px-4 py-4 ml-10'>Subtotal: <span className='text-lg md:text-xl text-orange-700'> ₹{totalprice}</span></p> 
                    <p className='text-[18px] md:text-[20px] px-4 py-4 ml-10'>Shipping Charge: <span className='text-lg md:text-xl text-orange-700'> ₹{shippingCharge}</span></p> 
                    <p className='text-[18px] md:text-[20px] px-4 py-4 ml-10'>Discount (10%): <span className='text-lg md:text-xl text-green-700'> -₹{discount}</span></p> 
                    <p className='text-[18px] md:text-[20px] px-4 py-4 ml-10'>Final Amount: <span className='text-lg md:text-xl text-orange-700'> ₹{finalprice}</span></p> 
                  </div>
                  <div className='w-full flex items-center justify-center'>
                        <button onClick={handlecheckOut}
                         className='border-[1px] bg-orange-700 mt-8 px-6 md:px-2 py-2 w-[80%] md:w-[90%]  text-white text-[16px] min-[389px]:text-[18px] transition hover:bg-transparent hover:text-black hover:border-[2px]'>
                          Proceed To CheckOut
                        </button>
                 </div>
             </div> 
       </div>            
       </div>
      </div>
</div>
)
}

    </>
   )



}

export default Cart