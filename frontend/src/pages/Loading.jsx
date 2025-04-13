import React from 'react'
import loadingGif from '../assets/images/loading.gif'

function Loading() {
  return (
    <div className='flex justify-center items-center h-full'>
      <img src={loadingGif} alt="loadingGif" />
    </div>
  )
}

export default Loading
