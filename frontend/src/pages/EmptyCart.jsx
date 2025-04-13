import React from 'react'
import emptycart from '../assets/images/CartEmpty.png'

function EmptyCart() {
  return (
    
 <div className='w-full max-w-[1300px] mx-auto border-[4px] border-red-400'>     
     <div className='border-[3px] border-yellow-400 w-full flex gap-2 mt-2'>
      <div className='border-[2px] border-black w-[40%]'>
         <img src={emptycart} alt="emptycart" />
      </div>
      <div className='border-[2px] border-black w-[60%] flex justify-center items-center'>
          <div className='flex justify-center items-center'>
             <h2 className='text-xl sm:text-2xl md:text-4xl font-medium'>Your Cart is empty</h2>
          </div>
      </div>
     </div>
</div>
  )
}

export default EmptyCart
