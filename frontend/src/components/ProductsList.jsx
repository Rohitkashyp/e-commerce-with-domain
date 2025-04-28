
import React, { useEffect, useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Cartcontext } from '../context/CartContext';
import  axios  from 'axios'
import ProductSkelaton from './ProductSkelaton';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// API LIVE URL

// const API_URL= import.meta.env.VITE_API_URL;

function ProductsList() {

  const navigate  = useNavigate()

  const {Addtocart} = useContext(Cartcontext)


    const [products,setProduct]= useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [productCount,setProductCount] =useState(8)

   
   

     useEffect(()=>{
       const getProduct = async()=>{
  
        try {
          setError(null)
          const res = await axios.get(`http://localhost:4000/products`)

          await new Promise(resolve => setTimeout(resolve,300))
          setProduct(res.data)
          setProductCount(res.data.length > 0  ? res.data.length : 8)

        } catch (error) {
           console.log(error)
           setError("Failed products. Please try again.") 
        }finally{
          setLoading(false)
        }
       }
       getProduct()

     },[])



return (
  <section className='py-6 mt-2' id="product-section">
   <div className='max-w-[1300px] mx-auto'>
    
           <h2 className='text-2xl font-bold text-center'>Latest Items</h2>
        
       
         
         <div className='mt-6 grid grid-cols-1 min-[450px]:grid-cols-2 min-[639px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 min-[1200px]:!grid-cols-4 xl:grid-cols-4 gap-4 p-3 min-[450px]:p-2'>

         {
          loading ? 
          Array(productCount)
          .fill(0)
          .map((_,index)=><ProductSkelaton key={index}/>)
          : error ?(
            <div className='flex justify-center items-center mt-6 col-span-full p-2'>
             <p className='font-semibold text-red-500 text-lg'>{error}</p>
            </div>
          ): products .length > 0 ?(
            products.map((product)=>(
              <Link key={product.id} to={`/productdetail/${product.id}`}
                onClick={()=> {window.scroll(0,0)}}>
                    <div className='min-h-[350px] bg-white shadow-xl rounded-md'>
                     <div className='h-[180px] flex justify-center items-center overflow-hidden'>
                         <img src={`http://localhost:4000${product.image}`} alt={product.name} className='h-full w-full object-contain scale-100 hover:scale-110' />   
                     </div>
                     <div className='min-h-[200px] mt-2 px-2 py-4 '>
                          <h2 className='text-2xl font-semibold'>{product.name}</h2> 
                          <p className='text-sm text-gray-500 mt-1'>{product.description}</p> 
                          <p className='text-md mt-0.5'>Price <span className='text-xl text-orange-700'>₹{product.price}</span></p>
                          <div className='flex justify-between items-center mt-8 pb-2 xl:pb-6 px-2 gap-2'>
                            <button className='rounded-md bg-orange-700 text-white px-4 min-[450px]:px-3 min-[590px]:px-4 py-1 text-[18px] min-[450px]:text-[15px] min-[590px]:text-[18px] transition hover:opacity-90 sm:hover:bg-transparent cursor-pointer sm:hover:text-black hover:border-[2px]'
                             onClick={(e)=>{
                              e.stopPropagation() 
                              e.preventDefault()
                              navigate(`/productdetail/${product.id}`)
                              window.scroll(0,0)
                             }}>BuyNow</button>
                            <button className='rounded-md bg-orange-700 text-white px-4 min-[450px]:px-3 min-[590px]:px-4 py-1 text-[18px] min-[450px]:text-[15px] min-[590px]:text-[18px] transition hover:opacity-90 sm:hover:bg-transparent cursor-pointer sm:hover:text-black hover:border-[2px]'
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
          ):(
            <div className='flex justify-center items-center h-[200px] col-span-full'>
            <p className='text-2xl font-semibold text-red-500'>Opps! No Products Found</p>
            </div>
          )
         }
 
        
      </div>
  </div>
  </section>
   )
   
}

export default ProductsList




