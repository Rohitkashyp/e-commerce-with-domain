import React from 'react'
import emptycart from '../assets/images/CartEmpty.png'

function EmptyCart() {
  return (
<div className='w-full max-w-[1300px] mx-auto '>     
<div className='max-w-[1000px] mx-auto flex flex-col justify-center items-center gap-6 mt-4'>
 <div className='border-[1px] border-gray-300 bg-white rounded-md shadow-md w-[50%] h-[200px]'>
    <img src={emptycart} alt="emptycart" className='h-full w-full object-contain' />
 </div>
 <div className=''>
        <h2 className='text-xl sm:text-2xl md:text-4xl font-medium'>Your Cart is empty</h2>
 </div>
</div>
</div>
  )
}

export default EmptyCart
