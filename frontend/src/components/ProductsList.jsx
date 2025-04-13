// import React, { useEffect, useState } from 'react'
// import { Link ,useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { Cartcontext } from '../context/CartContext';
// import  axios  from 'axios'

// import imggirl from '../assets/images/grilkurta1.jpg';

// function ProductsList() {

//   const navigate  = useNavigate()

//   const {Addtocart} = useContext(Cartcontext)
//   // console.log(data)

//     const [products,setProduct]= useState([])

   
   

//      useEffect(()=>{
//        const getProduct = async()=>{

//         try {
//           const res = await axios.get("http://localhost:5000/products")
//         //    console.log(res.data)
//         setProduct(res.data)
//         } catch (error) {
//            console.log(error) 
//         }

//        }
//        getProduct()

//      },[])

  
   

    

//   return (
//  <section className='border-[4px] border-black py-6 mt-2' id="product-section">
//   <div className='max-w-[1300px] mx-auto border-[3px] border-red-400'>
//         <h2 className='text-2xl font-bold text-center mb-4'>Latest Items</h2>
        
//         <div className='border-[2px] border-yellow-400 grid grid-cols-1 min-[450px]:grid-cols-2 min-[639px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 min-[1200px]:!grid-cols-4 xl:grid-cols-4 gap-4'>
           
//        {
//         products.map((product)=>(
//        <Link key={product.id} to={`/productdetail/${product.id}`}>
//              <div className='min-h-[350px] bg-white shadow-xl rounded-md'>
//               <div className='h-[180px] flex justify-center items-center overflow-hidden'>
//                   <img src={`http://localhost:5000${product.image}`} alt={product.name} className='h-full w-full object-contain scale-100 hover:scale-110' />   
//               </div>
//               <div className='min-h-[200px] mt-2 px-2 py-4 '>
//                    <h2 className='text-2xl font-semibold'>{product.name}</h2> 
//                    <p className='text-sm text-gray-500 mt-1'>{product.description}</p> 
//                    <p className='text-md mt-0.5'>Price <span className='text-xl text-orange-700'>₹{product.price}</span></p>
//                    <div className='flex justify-between items-center mt-8 pb-2 xl:pb-6 px-2 gap-2'>
//                      <button className='border-[1px] bg-orange-700 px-4 sm:px-6 py-1 text-white text-sm sm:text-md lg:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                       onClick={(e)=>{
//                        e.stopPropagation() 
//                        e.preventDefault()
//                        navigate(`/productdetail/${product.id}`)
//                       }}>BuyNow</button>
//                      <button className='border-[1px] bg-orange-700 px-4 sm:px-6 py-1 text-white text-sm sm:text-md lg:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                       onClick={(e)=>{
//                         e.stopPropagation()
//                         e.preventDefault()
//                         Addtocart(product)
//                       }}>AddToCart</button>
//                    </div>
//               </div>
//          </div>
//        </Link>
     
//         ))
//        }  
//      </div>
//  </div>
//  </section>
//   )
   
// }

// export default ProductsList





//    .................................................................................

// with loading effect


// import React, { useEffect, useState } from 'react'
// import { Link ,useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { Cartcontext } from '../context/CartContext';
// import  axios  from 'axios'
// import Loading from '../pages/Loading';

// import imggirl from '../assets/images/grilkurta1.jpg';

// function ProductsList() {

//   const navigate  = useNavigate()

//   const {Addtocart} = useContext(Cartcontext)
//   // console.log(data)

//     const [products,setProduct]= useState([])
//     const [loading,setLoading] = useState(false)

   
   

//      useEffect(()=>{
//        const getProduct = async()=>{
//           setLoading(true)
//         try {
//           const res = await axios.get("http://localhost:5000/products")
//         //    console.log(res.data)
//         setProduct(res.data)
//         } catch (error) {
//            console.log(error) 
//         }
//         setLoading(false)
//        }
//        getProduct()

//      },[])

  
   

    

//   return (
//  <section className='border-[4px] border-black py-6 mt-2' id="product-section">
//   <div className='max-w-[1300px] mx-auto border-[3px] border-red-400'>
//         <h2 className='text-2xl font-bold text-center mb-4'>Latest Items</h2>
        
//       {loading ? (
//        <>
//        <Loading/>
//        </>
//       ):(
//         <div className='border-[2px] border-yellow-400 grid grid-cols-1 min-[450px]:grid-cols-2 min-[639px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 min-[1200px]:!grid-cols-4 xl:grid-cols-4 gap-4'>
//         {
//          products.map((product)=>(
//         <Link key={product.id} to={`/productdetail/${product.id}`}>
//               <div className='min-h-[350px] bg-white shadow-xl rounded-md'>
//                <div className='h-[180px] flex justify-center items-center overflow-hidden'>
//                    <img src={`http://localhost:5000${product.image}`} alt={product.name} className='h-full w-full object-contain scale-100 hover:scale-110' />   
//                </div>
//                <div className='min-h-[200px] mt-2 px-2 py-4 '>
//                     <h2 className='text-2xl font-semibold'>{product.name}</h2> 
//                     <p className='text-sm text-gray-500 mt-1'>{product.description}</p> 
//                     <p className='text-md mt-0.5'>Price <span className='text-xl text-orange-700'>₹{product.price}</span></p>
//                     <div className='flex justify-between items-center mt-8 pb-2 xl:pb-6 px-2 gap-2'>
//                       <button className='border-[1px] bg-orange-700 px-4 sm:px-6 py-1 text-white text-sm sm:text-md lg:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                        onClick={(e)=>{
//                         e.stopPropagation() 
//                         e.preventDefault()
//                         navigate(`/productdetail/${product.id}`)
//                        }}>BuyNow</button>
//                       <button className='border-[1px] bg-orange-700 px-4 sm:px-6 py-1 text-white text-sm sm:text-md lg:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                        onClick={(e)=>{
//                          e.stopPropagation()
//                          e.preventDefault()
//                          Addtocart(product)
//                        }}>AddToCart</button>
//                     </div>
//                </div>
//           </div>
//         </Link>
      
//          ))
//         }  
//       </div>
//       )}
//  </div>
//  </section>
//   )
   
// }

// export default ProductsList



// .......................................................
//  with loading try catch finally or error ke sath 




// import React, { useEffect, useState } from 'react'
// import { Link ,useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { Cartcontext } from '../context/CartContext';
// import  axios  from 'axios'
// import Loading from '../pages/Loading';

// import imggirl from '../assets/images/grilkurta1.jpg';

// function ProductsList() {

//   const navigate  = useNavigate()

//   const {Addtocart} = useContext(Cartcontext)
//   // console.log(data)

//     const [products,setProduct]= useState([])
//     const [loading,setLoading] = useState(true)
//     const [error,setError] = useState(null)

   
   

//      useEffect(()=>{
//        const getProduct = async()=>{
  
//         try {
//           const res = await axios.get("http://localhost:5000/products")
//         //    console.log(res.data)
//         setProduct(res.data)
//         } catch (error) {
//            console.log(error)
//            setError("Failed to load products. Please try again.") 
//         } finally{
//           setLoading(false)
//         }
        
//        }
//        getProduct()

//      },[])

  
   

    

//   return (
//  <section className='border-[4px] border-black py-6 mt-2' id="product-section">
//   <div className='max-w-[1300px] mx-auto border-[3px] border-red-400'>
//         <h2 className='text-2xl font-bold text-center mb-4'>Latest Items</h2>
        
//       {loading ? (
//        <>
//        <Loading/>
//        </>
//       ): error ? (
//         <>
//          <p className='text-center text-red-500 text-2xl'>{error}</p>
//         </>
//       ) :(
//         <div className='border-[2px] border-yellow-400 grid grid-cols-1 min-[450px]:grid-cols-2 min-[639px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 min-[1200px]:!grid-cols-4 xl:grid-cols-4 gap-4'>
//         {
//          products.map((product)=>(
//         <Link key={product.id} to={`/productdetail/${product.id}`}>
//               <div className='min-h-[350px] bg-white shadow-xl rounded-md'>
//                <div className='h-[180px] flex justify-center items-center overflow-hidden'>
//                    <img src= {product.image.startsWith("http") ? product.image : `http://localhost:5000${product.image}`} alt={product.name} className='h-full w-full object-contain scale-100 hover:scale-110' />   
//                </div>
//                <div className='min-h-[200px] mt-2 px-2 py-4 '>
//                     <h2 className='text-2xl font-semibold'>{product.name}</h2> 
//                     <p className='text-sm text-gray-500 mt-1'>{product.description}</p> 
//                     <p className='text-md mt-0.5'>Price <span className='text-xl text-orange-700'>₹{product.price}</span></p>
//                     <div className='flex justify-between items-center mt-8 pb-2 xl:pb-6 px-2 gap-2'>
//                       <button className='border-[1px] bg-orange-700 px-4 sm:px-6 py-1 text-white text-sm sm:text-md lg:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                        onClick={(e)=>{
//                         e.stopPropagation() 
//                         e.preventDefault()
//                         navigate(`/productdetail/${product.id}`)
//                        }}>BuyNow</button>
//                       <button className='border-[1px] bg-orange-700 px-4 sm:px-6 py-1 text-white text-sm sm:text-md lg:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                        onClick={(e)=>{
//                          e.stopPropagation()
//                          e.preventDefault()
//                          Addtocart(product)
//                        }}>AddToCart</button>
//                     </div>
//                </div>
//           </div>
//         </Link>
      
//          ))
//         }  
//       </div>
//       )}
//  </div>
//  </section>
//   )
   
// }

// export default ProductsList







//  .........................................................................................................
// product List With Skelaton



// import React, { useEffect, useState } from 'react'
// import { Link ,useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { Cartcontext } from '../context/CartContext';
// import  axios  from 'axios'
// import ProductSkelaton from './ProductSkelaton';





// function ProductsList() {

//   const navigate  = useNavigate()

//   const {Addtocart} = useContext(Cartcontext)
//   // console.log(data)

//     const [products,setProduct]= useState([])
//     const [loading,setLoading] = useState(true)
//     const [error,setError] = useState(null)

//     // Failed to load products. Please try again.
   

//      useEffect(()=>{
//        const getProduct = async()=>{
  
//         try {
//           setError(null)
//           const res = await axios.get("http://localhost:5000/products")

//           setTimeout(() => {
//             setProduct(res.data)
//             setLoading(false)
//           }, 3000);
        
        
//         } catch (error) {
//            console.log(error)
//            setError("Failed to load products. Please try again.") 
//            setLoading(false)
//         } 
//        }
//        getProduct()

//      },[])

  
   

    

//   return (
//  <section className='border-[4px] border-black py-6 mt-2' id="product-section">
//   <div className='max-w-[1300px] mx-auto border-[3px] border-red-400'>
//         <h2 className='text-2xl font-bold text-center mb-4'>Latest Items</h2>
//         {
//           error && (
//             <p className='text-center text-red-500 text-lg'>{error}</p>
//           )
//         }
        
//         <div className='border-[2px] border-yellow-400 grid grid-cols-1 min-[450px]:grid-cols-2 min-[639px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 min-[1200px]:!grid-cols-4 xl:grid-cols-4 gap-4'>
//           {
//             loading ? 
//              Array(8)
//              .fill(0)
//              .map((_,index)=><ProductSkelaton key={index}/>)
//              : 
//              products.map((product)=>(
//             <Link key={product.id} to={`/productdetail/${product.id}`}>
//                   <div className='min-h-[350px] bg-white shadow-xl rounded-md'>
//                    <div className='h-[180px] flex justify-center items-center overflow-hidden'>
//                        <img src={`http://localhost:5000${product.image}`} alt={product.name} className='h-full w-full object-contain scale-100 hover:scale-110' />   
//                    </div>
//                    <div className='min-h-[200px] mt-2 px-2 py-4 '>
//                         <h2 className='text-2xl font-semibold'>{product.name}</h2> 
//                         <p className='text-sm text-gray-500 mt-1'>{product.description}</p> 
//                         <p className='text-md mt-0.5'>Price <span className='text-xl text-orange-700'>₹{product.price}</span></p>
//                         <div className='flex justify-between items-center mt-8 pb-2 xl:pb-6 px-2 gap-2'>
//                           <button className='border-[1px] bg-orange-700 px-4 sm:px-6 py-1 text-white text-sm sm:text-md lg:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                            onClick={(e)=>{
//                             e.stopPropagation() 
//                             e.preventDefault()
//                             navigate(`/productdetail/${product.id}`)
//                            }}>BuyNow</button>
//                           <button className='border-[1px] bg-orange-700 px-4 sm:px-6 py-1 text-white text-sm sm:text-md lg:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                            onClick={(e)=>{
//                              e.stopPropagation()
//                              e.preventDefault()
//                              Addtocart(product)
//                            }}>AddToCart</button>
//                         </div>
//                    </div>
//               </div>
//             </Link>
           
//              ))
//           } 
       
//      </div>
//  </div>
//  </section>
//   )
   
// }

// export default ProductsList





// ..........................................................
//  with dyanmic array products length


import React, { useEffect, useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Cartcontext } from '../context/CartContext';
import  axios  from 'axios'
import ProductSkelaton from './ProductSkelaton';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function ProductsList() {

  const navigate  = useNavigate()

  const {Addtocart} = useContext(Cartcontext)
  // console.log(data)

    const [products,setProduct]= useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [productCount,setProductCount] =useState(8)

    // Failed to load products. Please try again.
   

     useEffect(()=>{
       const getProduct = async()=>{
  
        try {
          setError(null)
          const res = await axios.get("http://localhost:5000/products")
          setProductCount(res.data.length > 0  ? res.data.length : 8)

          setTimeout(() => {
            setProduct(res.data)
            setLoading(false)
          }, 3000);
        
        
        } catch (error) {
           console.log(error)
           setError("Failed to load products. Please try again.") 
           setLoading(false)
        } 
       }
       getProduct()

     },[])

  
   

    

  return (
 <section className='border-[4px] border-black py-6 mt-2' id="product-section">
  <div className='max-w-[1300px] mx-auto border-[3px] border-red-400'>
        <h2 className='text-2xl font-bold text-center mb-4'>Latest Items</h2>
        {
          error && (
            <p className='text-center text-red-500 text-lg'>{error}</p>
          )
        }
        
        <div className='border-[2px] border-yellow-400 grid grid-cols-1 min-[450px]:grid-cols-2 min-[639px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 min-[1200px]:!grid-cols-4 xl:grid-cols-4 gap-4'>
          {
            loading ? 
             Array(productCount)
             .fill(0)
             .map((_,index)=><ProductSkelaton key={index}/>)
             : 
             products.map((product)=>(
            <Link key={product.id} to={`/productdetail/${product.id}`}>
                  <div className='min-h-[350px] bg-white shadow-xl rounded-md'>
                   <div className='h-[180px] flex justify-center items-center overflow-hidden'>
                       <img src={`http://localhost:5000${product.image}`} alt={product.name} className='h-full w-full object-contain scale-100 hover:scale-110' />   
                   </div>
                   <div className='min-h-[200px] mt-2 px-2 py-4 '>
                        <h2 className='text-2xl font-semibold'>{product.name}</h2> 
                        <p className='text-sm text-gray-500 mt-1'>{product.description}</p> 
                        <p className='text-md mt-0.5'>Price <span className='text-xl text-orange-700'>₹{product.price}</span></p>
                        <div className='flex justify-between items-center mt-8 pb-2 xl:pb-6 px-2 gap-2'>
                          <button className='border-[1px] bg-orange-700 px-4 sm:px-6 py-1 text-white text-sm sm:text-md lg:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
                           onClick={(e)=>{
                            e.stopPropagation() 
                            e.preventDefault()
                            navigate(`/productdetail/${product.id}`)
                           }}>BuyNow</button>
                          <button className='border-[1px] bg-orange-700 px-4 sm:px-6 py-1 text-white text-sm sm:text-md lg:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
                           onClick={(e)=>{
                             e.stopPropagation()
                             e.preventDefault()
                             Addtocart(product)
                             toast.success('item added to cart!')
                           }}>AddToCart</button>
                        </div>
                   </div>
              </div>
            </Link>
           
             ))
          } 
       
     </div>
 </div>
 </section>
  )
   
}

export default ProductsList




