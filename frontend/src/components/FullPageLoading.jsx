import React from 'react'

function FullPageLoading() {
  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center bg-gray-100'>
      <div className='w-[60px] h-[60px] border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin'>
      </div>
      <p className='text-gray-600 mt-4 text-lg'>Loading please wait...</p>
    </div>
  )
}

export default FullPageLoading
