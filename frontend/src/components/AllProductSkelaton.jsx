// import React from 'react'

// function AllProductSkelaton() {
//   return (
 

//     <div>
   
//     <section className='border-[4px] border-black py-6 mt-25' id="product-section">
    
        
    
//      <div className='w-full max-w-[1300px] mx-auto border-[3px] border-red-400'>
       
            
//       <div className='flex w-full border-[4px] border-green-400 gap-2'>
       
//              <div className='border-[2px] border-red-500 w-[22%] min-h-[500px] p-0.5 sm:p-2'>
//                <div className='h-6 sm:h-8 w-full max-w-[220px] bg-gray-300 rounded-md animate-pulse'></div>
//             <div className='mt-6'>
//             {
//                 Array(7)
//                 .fill()
//                 .map((_,index)=>(
//                   <div key={index} className='h-6 sm:h-8 w-full max-w-[160px] bg-gray-300 rounded-md animate-pulse mt-2'></div>
//                 ))
//               }
//             </div>

//             <div className='h-6 sm:h-8 w-full max-w-[220px] bg-gray-300 rounded-md animate-pulse mt-6'></div>

//             <div className='mt-6'>
//             {
//                 Array(3)
//                 .fill()
//                 .map((_,index)=>(
//                   <div key={index} className='h-6 sm:h-10 w-full max-w-[200px] bg-gray-300 rounded-md animate-pulse mt-2'></div>
//                 ))
//               }
//             </div>
               
//             </div> 
         
//            <div className='border-[2px] border-blue-500 w-full min-[625px]:w-[78%]'>
           
//            <div className='border-[2px] border-yellow-400 grid grid-cols-1 min-[475px]:grid-cols-2 min-[630px]:grid-cols-2 min-[960px]:grid-cols-3 lg:grid-cols-3 gap-4'>
                 
//             {
//               Array(8)
//               .fill()
//               .map((_,index)=>(
//                 <div key={index} className='min-h-[300px] border-[1px] border-black rounded-md animate-pulse space-y-2'>
//                 <div className='h-40 bg-gray-300 rounded-md'></div>
//                 <div className='h-5 w-3/4 bg-gray-300 rounded-md'></div>
//                 <div className='h-4 w-1/2 bg-gray-300 rounded-md'></div>
//                 <div className='h-10 w-full bg-gray-300 rounded-md'></div>
//                </div>  
//               ))
//             }
                 
            
                 
             
             
//            </div> 
//          </div>  
//       </div>
         
//     </div>
    
    
//     </section>
//      </div>

 
 
//   )
// }

// export default AllProductSkelaton




// ............................................................

import React from 'react'

function AllProductSkelaton() {
  return (
 

    <div>
   
    <section className='border-[4px] border-black py-6 mt-25' id="product-section">
    
        
    
     <div className='w-full max-w-[1300px] mx-auto border-[3px] border-red-400'>
       
            
      <div className='flex w-full border-[4px] border-green-400 gap-2'>
       
             <div className='border-[2px] border-red-500 w-[22%] min-h-[500px] p-0.5 sm:p-2 hidden min-[625px]:block'>
               <div className='h-6 sm:h-8 w-full max-w-[220px] bg-gray-300 rounded-md animate-pulse'></div>
            <div className='mt-6'>
            {
                Array(7)
                .fill()
                .map((_,index)=>(
                  <div key={index} className='h-6 sm:h-8 w-full max-w-[160px] bg-gray-300 rounded-md animate-pulse mt-2'></div>
                ))
              }
            </div>

            <div className='h-6 sm:h-8 w-full max-w-[220px] bg-gray-300 rounded-md animate-pulse mt-6'></div>

            <div className='mt-6'>
            {
                Array(3)
                .fill()
                .map((_,index)=>(
                  <div key={index} className='h-6 sm:h-10 w-full max-w-[200px] bg-gray-300 rounded-md animate-pulse mt-2'></div>
                ))
              }
            </div>
               
            </div> 
         
           <div className='border-[2px] border-blue-500 w-full min-[625px]:w-[78%]'>
           
           <div className='border-[2px] border-yellow-400 grid grid-cols-1 min-[475px]:grid-cols-2 min-[630px]:grid-cols-2 min-[960px]:grid-cols-3 lg:grid-cols-3 gap-4'>
                 
            {
              Array(13)
              .fill()
              .map((_,index)=>(
                <div key={index} className='min-h-[300px] border-[1px] border-black rounded-md animate-pulse space-y-2'>
                <div className='h-40 bg-gray-300 rounded-md'></div>
                <div className='h-5 w-3/4 bg-gray-300 rounded-md'></div>
                <div className='h-4 w-1/2 bg-gray-300 rounded-md'></div>
                <div className='h-10 w-full bg-gray-300 rounded-md'></div>
               </div>  
              ))
            }
                 
            
                 
             
             
           </div> 
         </div>  
      </div>
         
    </div>
    
    
    </section>
     </div>

 
 
  )
}

export default AllProductSkelaton




