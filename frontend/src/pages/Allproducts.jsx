// import React, { useEffect, useState } from 'react'
// import { Link ,useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { Cartcontext } from '../context/CartContext';
// import  axios  from 'axios'


// function Allproducts() {

//     const navigate  = useNavigate()

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
//     <section className='border-[4px] border-black py-6 mt-25' id="product-section">
//     <div className='max-w-[1300px] mx-auto border-[3px] border-red-400'>
//           <h2 className='text-2xl font-bold mb-4'><span className='text-green-500 text-3xl'>All Products,</span> Latest & Top</h2>
          
//           <div className='border-[2px] border-yellow-400 grid grid-cols-1 min-[450px]:grid-cols-2 min-[639px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 min-[1200px]:!grid-cols-4 xl:grid-cols-4 gap-4'>
             
//          {
//           products.map((product)=>(
//          <Link key={product.id} to={`/productdetail/${product.id}`}>
//                <div className='min-h-[300px] bg-white shadow-xl rounded-md'>
//                 <div className='h-[180px] flex justify-center items-center overflow-hidden'>
//                     <img src={`http://localhost:5000${product.image}`} alt={product.name} className='h-full w-full object-contain scale-100 hover:scale-110' />   
//                 </div>
//                 <div className='h-[170px] mt-2 px-2'>
//                      <h2 className='text-2xl font-semibold'>{product.name}</h2> 
//                      <p className='text-sm text-gray-500 mt-1'>{product.description}</p> 
//                      <p className='text-md mt-0.5'>Price <span className='text-xl text-orange-700'>₹{product.price}</span></p>
//                      <div className='flex justify-between items-center mt-4 gap-2'>
//                        <button className='border-[1px] bg-orange-700 px-6 py-1 text-white text-sm sm:text-md md:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                         onClick={(e)=>{
//                          e.stopPropagation() 
//                          e.preventDefault()
//                          navigate(`/productdetail/${product.id}`)
//                         }}>BuyNow</button>
//                        <button className='border-[1px] bg-orange-700 px-6 py-1 text-white text-sm sm:text-md md:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                         onClick={(e)=>{
//                           e.stopPropagation()
//                           e.preventDefault()
//                           Addtocart(product)
//                         }}>AddToCart</button>
//                      </div>
//                 </div>
//            </div>
//          </Link>
       
//           ))
//          }  
//        </div>
//    </div>
//    </section>
//   )
// }

// export default Allproducts



// ...........................



// import React, { useEffect, useState } from 'react'
// import { Link ,useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { Cartcontext } from '../context/CartContext';
// import  axios  from 'axios'
// import { FaTimes } from "react-icons/fa";

// const Categories = ["All","Men","Women","Kids","Electronics","Shoes","Jwellary"]
// const SortOptions = ["none","lowtohigh","hightolow"]


// function Allproducts() {

//  const navigate  = useNavigate()

//   const {Addtocart} = useContext(Cartcontext)
//   const [products,setProduct]= useState([])
//   const [sort,setSort] = useState('none')
//   const [searchname,setSearchname] = useState('')
//   const [filter,setFilter] = useState('All')
//   const [isopen,setIsOpen] = useState(false)


//   useEffect(()=>{
//     if(isopen){
//       document.body.style.overflow = "hidden"
//     }else{
//         document.body.style.overflow = "auto"
//     }
//     return ()=>{
//          document.body.style.overflow = "auto"
//     };
//   },[isopen])

   
   

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

//     //  Serach Product 
//    const SearchFunction = (products)=>{
//      return products.filter((product)=>(
//       product.name.toLowerCase().includes(searchname.toLowerCase())
//      ))
//    }
 

//   const FilterFunction = (products) =>{
//     return filter === "All" ? products : products.filter((product) => product.category === filter)
//   }
  

//   const SortFunction = (products) =>{
//     if(sort === "lowtohigh") return [...products].sort((a,b) => a.price - b.price)
//     if(sort === "hightolow") return [...products].sort((a,b) => b.price - a.price)
//     return products;
//   }
 

//   const FinalFilterFunction = () =>{
//     let UpdatedProducts = [...products]
//     UpdatedProducts = SearchFunction(UpdatedProducts)
//     UpdatedProducts = FilterFunction(UpdatedProducts)
//     UpdatedProducts = SortFunction(UpdatedProducts)
//      return UpdatedProducts;
//   }

//   //   const result = FinalFilterFunction()
//   //  console.log(result,"updated")
//   // console.log(isopen)


//   const handlisOpenategories = (category) =>{
//      setFilter(category)
//      setIsOpen(false)
//   }

//   const handlisOpenSort = (option) =>{
//     setSort(option)
//     setIsOpen(false)
//   }

  

//   return ( 
//  <div>
   
// <section className='border-[4px] border-black py-6 mt-25' id="product-section">

//           {/* isOpen */}
//      {
//       isopen && (
//  <div className='bg-black text-white fixed inset-0 z-50 overflow-hidden'>
//    <div className='w-full h-full bg-white text-black absolute top-0 left-0 overflow-y-auto'>
        
//         <button className='text-3xl absolute top-2 right-2' onClick={()=>{setIsOpen(false)}}><FaTimes size={30}/></button>
//      <div className='mt-5'>

                  
//          <div className='px-4'>
//           <h2 className='text-xl font-bold'>Jobs Categories</h2>
//           <hr className='mt-2 text-gray-400' />
//          <div className='flex flex-col items-start gap-1 mt-5'>
//            {
//               Categories.map((category,index)=>(
//                 <button key={index} onClick={()=>{handlisOpenategories(category)}} 
//                 className = {`border-[1px] w-50 py-2 ${filter === category ? 'bg-blue-900 text-white': 'bg-gray-200 text-gray-700'} `}>
                  
//                   {category}</button>
//               ))
//             }
//           </div>

//           <h2 className='text-xl font-bold mt-4'>Salary Range</h2>
//           <hr className='mt-2 text-gray-400' />
//           <div className='mt-4'>
//             <ul className='flex flex-col items-start gap-2'>
//             {
//                   SortOptions.map((option,index) =>(
//                     <li key={index} className='list-none'>
//                       <button className='border-[1px] py-2 bg-blue-900 w-50 text-white' onClick={()=>{handlisOpenSort(option)}}>
//                        {option === 'none' ? 'Default' : option === 'lowtohigh' ? 'LowToHigh' :'HighToLow'}
//                        </button>
//                      </li> 
//                   ))
//                 }
//             </ul>
//           </div>
         
//          </div>
         
//      </div>
//   </div>
//  </div> 
//       )
//      }

//  <div className='w-full max-w-[1300px] mx-auto border-[3px] border-red-400'>
   
        
//   <div className='flex w-full border-[2px] border-yellow-400 gap-2'>
//      <div className='border-[2px] border-red-500 w-[22%] min-h-[500px] hidden min-[625px]:block p-4'>
//         <div>
//           <h2 className='text-xl font-bold'>Jobs Categories</h2>
//           <hr className='mt-2 text-gray-400' />
//           <div className='flex flex-col items-start mt-4 gap-1'>
//             {
//               Categories.map((category,index)=>(
//                 <button key={index} onClick={()=>{setFilter(category)}} 
                
//                 className = {`border-[1px] w-25 md:w-50 py-2 hover:bg-transparent hover:border-[1px] border-black hover:text-black ${filter === category ? 'bg-blue-900 text-white': 'bg-gray-200 text-gray-700'} `}>
                  
//                   {category}</button>
//               ))
//             }
          
//           </div>

//           <h2 className='text-xl font-bold mt-4'>Salary Range</h2>
//           <hr className='mt-2 text-gray-400' />
//           <div>
//             <ul className='flex flex-col items-start mt-4 gap-1'>
//                 {
//                   SortOptions.map((option,index) =>(
//                     <li key={index} className='list-none'>
//                       <button className='border-[1px] py-2 bg-blue-900 w-25 md:w-50 text-white' onClick={()=>{setSort(option)}}>
//                        {option === 'none' ? 'Default' : option === 'lowtohigh' ? 'LowToHigh' :'HighToLow'}
//                        </button>
//                      </li> 
//                   ))
//                 }
//             </ul>
//           </div>

//         </div>
//      </div> 
//      <div className='border-[2px] border-blue-500 w-full min-[625px]:w-[78%]'>
//         <div className='border-[1px] border-gray-950'>
//              <div className='border-[1px] border-red-950 p-2 w-full min-[625px]:max-w-[90%] mx-auto'>
//                <div className='flex justify-between items-center gap-4 w-full'>
//                  <input type="text" name="" id="" onChange={(e)=>{setSearchname(e.target.value)}} placeholder='Serach Products...' className='outline-none text-sm font-medium ' />
//                  <div className='block min-[625px]:hidden'>
//                    <button onClick={()=>{setIsOpen(true)}} className='border-[1px] border-gray-700 min-[478px]:px-6 min-[478px]:py-2 bg-white text-black'>Filter By Categories & Price</button>
//                  </div>
//                 </div>
//              </div>
//         </div>
//        <div className='border-[2px] border-yellow-400 grid grid-cols-1 min-[475px]:grid-cols-2 min-[630px]:grid-cols-2 min-[960px]:grid-cols-3 lg:grid-cols-3 gap-4 mt-2'>
             
//              {
//               FinalFilterFunction().map((product)=>(
//              <Link key={product.id} to={`/productdetail/${product.id}`}>
//                    <div className='min-h-[300px] bg-white shadow-xl rounded-md'>
//                     <div className='h-[180px] flex justify-center items-center overflow-hidden'>
//                         <img src={`http://localhost:5000${product.image}`} alt={product.name} className='h-full w-full object-contain scale-100 hover:scale-110' />   
//                     </div>
//                     <div className='h-[170px] mt-2 px-2'>
//                          <h2 className='text-2xl font-semibold'>{product.name}</h2> 
//                          <p className='text-sm text-gray-500 mt-1'>{product.description}</p> 
//                          <p className='text-md mt-0.5'>Price <span className='text-xl text-orange-700'>₹{product.price}</span></p>
//                          <div className='flex justify-between items-center mt-4 gap-2'>
//                            <button className='border-[1px] bg-orange-700 px-4  py-1 text-white text-sm sm:text-md xl:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                             onClick={(e)=>{
//                              e.stopPropagation() 
//                              e.preventDefault()
//                              navigate(`/productdetail/${product.id}`)
//                             }}>BuyNow</button>
//                            <button className='border-[1px] bg-orange-700 px-4  py-1 text-white text-sm sm:text-md xl:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                             onClick={(e)=>{
//                               e.stopPropagation()
//                               e.preventDefault()
//                               Addtocart(product)
//                             }}>AddToCart</button>
//                          </div>
//                     </div>
//                </div>
//              </Link>
             
//               ))
//              }  
//          </div> 
//      </div>  
//   </div>
     
// </div>


// </section>
//  </div>
//   )
// }

// export default Allproducts



//    search input   




// import React, { useEffect, useState } from 'react'
// import { Link ,useNavigate,useLocation } from 'react-router-dom'
// import { useContext } from 'react';
// import { Cartcontext } from '../context/CartContext';
// import  axios  from 'axios'
// import { FaTimes } from "react-icons/fa";

// const Categories = ["All","Men","Women","Kids","Electronics","Shoes","Jwellary"]
// const SortOptions = ["none","lowtohigh","hightolow"]


// function Allproducts() {

//  const navigate  = useNavigate()
//  const location = useLocation()

//   const {Addtocart} = useContext(Cartcontext)
//   const [products,setProduct]= useState([])
//   const [sort,setSort] = useState('none')
//   const [searchname,setSearchname] = useState('')
//   const [filter,setFilter] = useState('All')
//   const [isopen,setIsOpen] = useState(false)


//   useEffect(()=>{
//     if(isopen){
//       document.body.style.overflow = "hidden"
//     }else{
//         document.body.style.overflow = "auto"
//     }
//     return ()=>{
//          document.body.style.overflow = "auto"
//     };
//   },[isopen])


//   useEffect(()=>{
//     const queryparams = new URLSearchParams(location.search)
//     const searchquery = queryparams.get("query");
//     setSearchname(searchquery ? searchquery.toLowerCase() : "");
   
//   },[location.search])


  


   
   

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

//      },[filter,sort,searchname])

    

 

//   // const SearchFunction = (products)=>{
//   //   return searchname ? products.filter((product)=>product.name.toLowerCase().includes(searchname)): products;
//   // }
//   const SearchFunction = (products)=>{
//     if(!searchname.trim()) return products;
//     return products.filter((product)=>product.name.toLowerCase().includes(searchname))
//   }

//   const getFilteredCategories = () => {
//     if (!searchname.trim()) {
//       return Categories; // अगर search खाली है तो सारी categories दिखाओ
//     }
  
//     // Categories को filter करो सिर्फ उन्हीं products के लिए जो search से match कर रहे हैं
//     const filteredCategories = products
//       .filter((product) => product.name.toLowerCase().includes(searchname))
//       .map((product) => product.category); // Matching products की categories निकालो
  
//     return ["All", ...new Set(filteredCategories)]; // Duplicate हटाकर unique categories दिखाओ
//   };
  

 

//   const FilterFunction = (products) =>{
//     return filter === "All" ? products : products.filter((product) => product.category === filter)
//   }
  

//   const SortFunction = (products) =>{
//     if(sort === "lowtohigh") return [...products].sort((a,b) => a.price - b.price)
//     if(sort === "hightolow") return [...products].sort((a,b) => b.price - a.price)
//     return products;
//   }
 

//   const FinalFilterFunction = () =>{
//     let UpdatedProducts = [...products]
//     UpdatedProducts = SearchFunction(UpdatedProducts)
//     UpdatedProducts = FilterFunction(UpdatedProducts)
//     UpdatedProducts = SortFunction(UpdatedProducts)
//      return UpdatedProducts;
//   }

 

//   const handlisOpenategories = (category) =>{
//      setFilter(category)
//      setIsOpen(false)
//   }

//   const handlisOpenSort = (option) =>{
//     setSort(option)
//     setIsOpen(false)
//   }

  

//   return ( 
//  <div>
   
// <section className='border-[4px] border-black py-6 mt-25' id="product-section">

//           {/* isOpen */}
//      {
//       isopen && (
//  <div className='bg-black text-white fixed inset-0 z-50 overflow-hidden'>
//    <div className='w-full h-full bg-white text-black absolute top-0 left-0 overflow-y-auto'>
        
//         <button className='text-3xl absolute top-2 right-2' onClick={()=>{setIsOpen(false)}}><FaTimes size={30}/></button>
//      <div className='mt-5'>

                  
//          <div className='px-4'>
//           <h2 className='text-xl font-bold'>Jobs Categories</h2>
//           <hr className='mt-2 text-gray-400' />
//          <div className='flex flex-col items-start gap-1 mt-5'>
//            {
//               Categories.map((category,index)=>(
//                 <button key={index} onClick={()=>{handlisOpenategories(category)}} 
//                 className = {`border-[1px] w-50 py-2 ${filter === category ? 'bg-blue-900 text-white': 'bg-gray-200 text-gray-700'} `}>
                  
//                   {category}</button>
//               ))
//             }
//           </div>

//           <h2 className='text-xl font-bold mt-4'>Salary Range</h2>
//           <hr className='mt-2 text-gray-400' />
//           <div className='mt-4'>
//             <ul className='flex flex-col items-start gap-2'>
//             {
//                   SortOptions.map((option,index) =>(
//                     <li key={index} className='list-none'>
//                       <button className='border-[1px] py-2 bg-blue-900 w-50 text-white' onClick={()=>{handlisOpenSort(option)}}>
//                        {option === 'none' ? 'Default' : option === 'lowtohigh' ? 'LowToHigh' :'HighToLow'}
//                        </button>
//                      </li> 
//                   ))
//                 }
//             </ul>
//           </div>
         
//          </div>
         
//      </div>
//   </div>
//  </div> 
//       )
//      }

//  <div className='w-full max-w-[1300px] mx-auto border-[3px] border-red-400'>
   
        
//   <div className='flex w-full border-[2px] border-yellow-400 gap-2'>
//      <div className='border-[2px] border-red-500 w-[22%] min-h-[500px] hidden min-[625px]:block p-4'>
//         <div>
//           <h2 className='text-xl font-bold'>Jobs Categories</h2>
//           <hr className='mt-2 text-gray-400' />
//           <div className='flex flex-col items-start mt-4 gap-1'>
//             {
//               getFilteredCategories().map((category,index)=>(
//                 <button key={index} onClick={()=>{setFilter(category)}} 
                
//                 className = {`border-[1px] w-25 md:w-50 py-2 hover:bg-transparent hover:border-[1px] border-black hover:text-black ${filter === category ? 'bg-blue-900 text-white': 'bg-gray-200 text-gray-700'} `}>
                  
//                   {category}</button>
//               ))
//             }
          
//           </div>

//           <h2 className='text-xl font-bold mt-4'>Salary Range</h2>
//           <hr className='mt-2 text-gray-400' />
//           <div>
//             <ul className='flex flex-col items-start mt-4 gap-1'>
//                 {
//                   SortOptions.map((option,index) =>(
//                     <li key={index} className='list-none'>
//                       <button className='border-[1px] py-2 bg-blue-900 w-25 md:w-50 text-white' onClick={()=>{setSort(option)}}>
//                        {option === 'none' ? 'Default' : option === 'lowtohigh' ? 'LowToHigh' :'HighToLow'}
//                        </button>
//                      </li> 
//                   ))
//                 }
//             </ul>
//           </div>

//         </div>
//      </div> 
//      <div className='border-[2px] border-blue-500 w-full min-[625px]:w-[78%]'>
//         <div className='border-[1px] border-gray-950'>
//              <div className='border-[1px] border-red-950 p-2 w-full min-[625px]:max-w-[90%] mx-auto'>
//                <div className='flex justify-between items-center gap-4 w-full'>
                
//                  <div className='block min-[625px]:hidden'>
//                    <button onClick={()=>{setIsOpen(true)}} className='border-[1px] border-gray-700 min-[478px]:px-6 min-[478px]:py-2 bg-white text-black'>Filter By Categories & Price</button>
//                  </div>
//                 </div>
//              </div>
//         </div>
//        <div className='border-[2px] border-yellow-400 grid grid-cols-1 min-[475px]:grid-cols-2 min-[630px]:grid-cols-2 min-[960px]:grid-cols-3 lg:grid-cols-3 gap-4 mt-2'>
             
//              {
//               FinalFilterFunction().map((product)=>(
//              <Link key={product.id} to={`/productdetail/${product.id}`}>
//                    <div className='min-h-[300px] bg-white shadow-xl rounded-md'>
//                     <div className='h-[180px] flex justify-center items-center overflow-hidden'>
//                         <img src={`http://localhost:5000${product.image}`} alt={product.name} className='h-full w-full object-contain scale-100 hover:scale-110' />   
//                     </div>
//                     <div className='h-[170px] mt-2 px-2'>
//                          <h2 className='text-2xl font-semibold'>{product.name}</h2> 
//                          <p className='text-sm text-gray-500 mt-1'>{product.description}</p> 
//                          <p className='text-md mt-0.5'>Price <span className='text-xl text-orange-700'>₹{product.price}</span></p>
//                          <div className='flex justify-between items-center mt-4 gap-2'>
//                            <button className='border-[1px] bg-orange-700 px-4  py-1 text-white text-sm sm:text-md xl:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                             onClick={(e)=>{
//                              e.stopPropagation() 
//                              e.preventDefault()
//                              navigate(`/productdetail/${product.id}`)
//                             }}>BuyNow</button>
//                            <button className='border-[1px] bg-orange-700 px-4  py-1 text-white text-sm sm:text-md xl:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                             onClick={(e)=>{
//                               e.stopPropagation()
//                               e.preventDefault()
//                               Addtocart(product)
//                             }}>AddToCart</button>
//                          </div>
//                     </div>
//                </div>
//              </Link>
             
//               ))
//              }  
//          </div> 
//      </div>  
//   </div>
     
// </div>


// </section>
//  </div>
//   )
// }

// export default Allproducts



//  categories filter




// import React, { useEffect, useState } from 'react'
// import { Link ,useNavigate,useLocation } from 'react-router-dom'
// import { useContext } from 'react';
// import { Cartcontext } from '../context/CartContext';
// import  axios  from 'axios'
// import { FaTimes } from "react-icons/fa";

// const Categories = ["All","Men","Women","Kids","Electronics","Shoes","Jwellary"]
// const SortOptions = ["none","lowtohigh","hightolow"]


// function Allproducts() {

//  const navigate  = useNavigate()
//  const location = useLocation()

//   const {Addtocart} = useContext(Cartcontext)
//   const [products,setProduct]= useState([])
//   const [sort,setSort] = useState('none')
//   const [searchname,setSearchname] = useState('')
//   const [filter,setFilter] = useState('All')
//   const [isopen,setIsOpen] = useState(false)


//   useEffect(()=>{
//     if(isopen){
//       document.body.style.overflow = "hidden"
//     }else{
//         document.body.style.overflow = "auto"
//     }
//     return ()=>{
//          document.body.style.overflow = "auto"
//     };
//   },[isopen])


//   useEffect(()=>{
//     const queryparams = new URLSearchParams(location.search)
//     const searchquery = queryparams.get("query");
//     setSearchname(searchquery ? searchquery.toLowerCase() : "");
//     // console.log(searchquery)
    
//   // if (searchquery) {
//   //   setSearchname(searchquery.toLowerCase());
    
//   // }
//   },[location.search])


  


   
   

//     //  useEffect(()=>{
//     //    const getProduct = async()=>{
//     //     try {
//     //       const res = await axios.get("http://localhost:5000/products")
//     //     //    console.log(res.data)
//     //     setProduct(res.data)
//     //     } catch (error) {
//     //        console.log(error) 
//     //     }
//     //    }
//     //    getProduct()

//     //  },[filter,sort,searchname])


//     useEffect(()=>{
//       const getProduct = async()=>{
//        try {
//          const res = await axios.get("http://localhost:5000/products")
//        //    console.log(res.data)
//        setProduct(res.data)
//        } catch (error) {
//           console.log(error) 
//        }
//       }
//       getProduct()

//     },[])

    

 

//   // const SearchFunction = (products)=>{
//   //   return searchname ? products.filter((product)=>product.name.toLowerCase().includes(searchname)): products;
//   // }
//   const SearchFunction = (products)=>{
//     if(!searchname.trim()) return products;
//     return products.filter((product)=>product.name.toLowerCase().includes(searchname))
//   }

  
//  const getfilertcateories = ()=>{
//    if(!searchname.trim()){
//     return Categories;
//    }
//    const searchTerm = searchname.toLowerCase().trim()
//    const filterproduts = products.filter((product)=>
//     product.name.toLowerCase().split(/\s+/).includes(searchTerm)
//   )
 


//    return ["All", ...new Set(filterproduts.map(product => product.category))]
//  }
 
 

//   const FilterFunction = (products) =>{
//     return filter === "All" ? products : products.filter((product) => product.category === filter)
//   }
  

//   const SortFunction = (products) =>{
//     if(sort === "lowtohigh") return [...products].sort((a,b) => a.price - b.price)
//     if(sort === "hightolow") return [...products].sort((a,b) => b.price - a.price)
//     return products;
//   }
 

//   // const FinalFilterFunction = () =>{
//   //   let UpdatedProducts = [...products]
//   //   UpdatedProducts = SearchFunction(UpdatedProducts)
//   //   UpdatedProducts = FilterFunction(UpdatedProducts)
//   //   UpdatedProducts = SortFunction(UpdatedProducts)
//   //    return UpdatedProducts;
//   // }

//   const FinalFilterFunction = () =>{
//     let UpdatedProducts = [...products]

//     if(searchname){
//       UpdatedProducts = UpdatedProducts.filter((product)=>
//         product.name.toLowerCase().includes(searchname)
//       )
//     }
//     if(filter !== "All"){
//       UpdatedProducts = UpdatedProducts.filter(product => product.category === filter);
//     }

//     if (sort === "lowtohigh") {
//       UpdatedProducts.sort((a, b) => a.price - b.price);
//     } else if (sort === "hightolow") {
//       UpdatedProducts.sort((a, b) => b.price - a.price);
//     }
   
//      return UpdatedProducts;
//   }

 

//   const handlisOpenategories = (category) =>{
//      setFilter(category)
//      setIsOpen(false)
//   }

//   const handlisOpenSort = (option) =>{
//     setSort(option)
//     setIsOpen(false)
//   }

  

//   return ( 
//  <div>
   
// <section className='border-[4px] border-black py-6 mt-25' id="product-section">

//           {/* isOpen */}
//      {
//       isopen && (
//  <div className='bg-black text-white fixed inset-0 z-50 overflow-hidden'>
//    <div className='w-full h-full bg-white text-black absolute top-0 left-0 overflow-y-auto'>
        
//         <button className='text-3xl absolute top-2 right-2' onClick={()=>{setIsOpen(false)}}><FaTimes size={30}/></button>
//      <div className='mt-5'>

                  
//          <div className='px-4'>
//           <h2 className='text-xl font-bold'>Jobs Categories</h2>
//           <hr className='mt-2 text-gray-400' />
//          <div className='flex flex-col items-start gap-1 mt-5'>
//            {
//               Categories.map((category,index)=>(
//                 <button key={index} onClick={()=>{handlisOpenategories(category)}} 
//                 className = {`border-[1px] w-50 py-2 ${filter === category ? 'bg-blue-900 text-white': 'bg-gray-200 text-gray-700'} `}>
                  
//                   {category}</button>
//               ))
//             }
//           </div>

//           <h2 className='text-xl font-bold mt-4'>Salary Range</h2>
//           <hr className='mt-2 text-gray-400' />
//           <div className='mt-4'>
//             <ul className='flex flex-col items-start gap-2'>
//             {
//                   SortOptions.map((option,index) =>(
//                     <li key={index} className='list-none'>
//                       <button className='border-[1px] py-2 bg-blue-900 w-50 text-white' onClick={()=>{handlisOpenSort(option)}}>
//                        {option === 'none' ? 'Default' : option === 'lowtohigh' ? 'LowToHigh' :'HighToLow'}
//                        </button>
//                      </li> 
//                   ))
//                 }
//             </ul>
//           </div>
         
//          </div>
         
//      </div>
//   </div>
//  </div> 
//       )
//      }

//  <div className='w-full max-w-[1300px] mx-auto border-[3px] border-red-400'>
   
        
//   <div className='flex w-full border-[2px] border-yellow-400 gap-2'>
//      <div className='border-[2px] border-red-500 w-[22%] min-h-[500px] hidden min-[625px]:block p-4'>
//         <div>
//           <h2 className='text-xl font-bold'>Jobs Categories</h2>
//           <hr className='mt-2 text-gray-400' />
//           <div className='flex flex-col items-start mt-4 gap-1'>
//             {
//             getfilertcateories().map((category,index)=>(
//                 <button key={index} onClick={()=>{setFilter(category)}} 
                
//                 className = {`border-[1px] w-25 md:w-30 lg:w-40 py-2 hover:bg-transparent hover:border-[1px] border-black hover:text-black ${filter === category ? 'bg-blue-900 text-white': 'bg-gray-200 text-gray-700'} `}>
                  
//                   {category}</button>
//               ))
//             }
          
//           </div>

//           <h2 className='text-xl font-bold mt-4'>Salary Range</h2>
//           <hr className='mt-2 text-gray-400' />
//           <div>
//             <ul className='flex flex-col items-start mt-4 gap-2'>
//                 {
//                   SortOptions.map((option,index) =>(
//                     <li key={index} className='list-none'>
//                       <button className='border-[1px] py-2 md:py-3 text-sm md:text-md bg-blue-900 w-25 md:w-35 lg:w-50 text-white' onClick={()=>{setSort(option)}}>
//                        {option === 'none' ? 'Default' : option === 'lowtohigh' ? 'LowToHigh' :'HighToLow'}
//                        </button>
//                      </li> 
//                   ))
//                 }
//             </ul>
//           </div>

//         </div>
//      </div> 
//      <div className='border-[2px] border-blue-500 w-full min-[625px]:w-[78%]'>
//         <div className='border-[1px] border-gray-950'>
//              <div className='border-[1px] border-red-950 p-2 w-full min-[625px]:max-w-[90%] mx-auto'>
//                <div className='flex justify-between items-center gap-4 w-full'>
                
//                  <div className='block min-[625px]:hidden'>
//                    <button onClick={()=>{setIsOpen(true)}} className='border-[1px] border-gray-700 min-[478px]:px-6 min-[478px]:py-2 bg-white text-black'>Filter By Categories & Price</button>
//                  </div>
//                 </div>
//              </div>
//         </div>
//        <div className='border-[2px] border-yellow-400 grid grid-cols-1 min-[475px]:grid-cols-2 min-[630px]:grid-cols-2 min-[960px]:grid-cols-3 lg:grid-cols-3 gap-4 mt-2'>
             
//              {
//                FinalFilterFunction().length > 0 ?(
//                 FinalFilterFunction().map((product)=>(
//                   <Link key={product.id} to={`/productdetail/${product.id}`}>
//                         <div className='min-h-[300px] bg-white shadow-xl rounded-md'>
//                          <div className='h-[180px] flex justify-center items-center overflow-hidden'>
//                              <img src={`http://localhost:5000${product.image}`} alt={product.name} className='h-full w-full object-contain scale-100 hover:scale-110' />   
//                          </div>
//                          <div className='h-[170px] mt-2 px-2'>
//                               <h2 className='text-2xl font-semibold'>{product.name}</h2> 
//                               <p className='text-sm text-gray-500 mt-1'>{product.description}</p> 
//                               <p className='text-md mt-0.5'>Price <span className='text-xl text-orange-700'>₹{product.price}</span></p>
//                               <div className='flex justify-between items-center mt-4 gap-2'>
//                                 <button className='border-[1px] bg-orange-700 px-4  py-1 text-white text-sm sm:text-md xl:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                                  onClick={(e)=>{
//                                   e.stopPropagation() 
//                                   e.preventDefault()
//                                   navigate(`/productdetail/${product.id}`)
//                                  }}>BuyNow</button>
//                                 <button className='border-[1px] bg-orange-700 px-4  py-1 text-white text-sm sm:text-md xl:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                                  onClick={(e)=>{
//                                    e.stopPropagation()
//                                    e.preventDefault()
//                                    Addtocart(product)
//                                  }}>AddToCart</button>
//                               </div>
//                          </div>
//                     </div>
//                   </Link>
                  
//                    ))
//                ):(<>
//                 <div className='flex justify-center items-center h-[400px] w-full bg-gray-600 min-w-full border border-red-500 sm:ml-[120px]  md:ml-[180px] lg:ml-[290px] xl:ml-[300px]'>
//                        <h3 className='text-xl text-center text-red-500'>Opps! No Products Foundl</h3>
//                 </div>
//                </>)
//              }  
//          </div> 
//      </div>  
//   </div>
     
// </div>


// </section>
//  </div>
//   )
// }

// export default Allproducts







// .......................... with products not found center mai 


// import React, { useEffect, useState } from 'react'
// import { Link ,useNavigate,useLocation } from 'react-router-dom'
// import { useContext } from 'react';
// import { Cartcontext } from '../context/CartContext';
// import  axios  from 'axios'
// import { FaTimes } from "react-icons/fa";

// const Categories = ["All","Men","Women","Kids","Electronics","Shoes","Jwellary"]
// const SortOptions = ["none","lowtohigh","hightolow"]


// function Allproducts() {

//  const navigate  = useNavigate()
//  const location = useLocation()

//   const {Addtocart} = useContext(Cartcontext)
//   const [products,setProduct]= useState([])
//   const [sort,setSort] = useState('none')
//   const [searchname,setSearchname] = useState('')
//   const [filter,setFilter] = useState('All')
//   const [isopen,setIsOpen] = useState(false)


//   useEffect(()=>{
//     if(isopen){
//       document.body.style.overflow = "hidden"
//     }else{
//         document.body.style.overflow = "auto"
//     }
//     return ()=>{
//          document.body.style.overflow = "auto"
//     };
//   },[isopen])


//   useEffect(()=>{
//     const queryparams = new URLSearchParams(location.search)
//     const searchquery = queryparams.get("query");
//     setSearchname(searchquery ? searchquery.toLowerCase() : "");
//     // console.log(searchquery)
    
//   // if (searchquery) {
//   //   setSearchname(searchquery.toLowerCase());
    
//   // }
//   },[location.search])


  


   
   

//     //  useEffect(()=>{
//     //    const getProduct = async()=>{
//     //     try {
//     //       const res = await axios.get("http://localhost:5000/products")
//     //     //    console.log(res.data)
//     //     setProduct(res.data)
//     //     } catch (error) {
//     //        console.log(error) 
//     //     }
//     //    }
//     //    getProduct()

//     //  },[filter,sort,searchname])


//     useEffect(()=>{
//       const getProduct = async()=>{
//        try {
//          const res = await axios.get("http://localhost:5000/products")
//        //    console.log(res.data)
//        setProduct(res.data)
//        } catch (error) {
//           console.log(error) 
//        }
//       }
//       getProduct()

//     },[])

    

 

//   // const SearchFunction = (products)=>{
//   //   return searchname ? products.filter((product)=>product.name.toLowerCase().includes(searchname)): products;
//   // }
//   const SearchFunction = (products)=>{
//     if(!searchname.trim()) return products;
//     return products.filter((product)=>product.name.toLowerCase().includes(searchname))
//   }

  
//  const getfilertcateories = ()=>{
//    if(!searchname.trim()){
//     return Categories;
//    }
//    const searchTerm = searchname.toLowerCase().trim()
//    const filterproduts = products.filter((product)=>
//     product.name.toLowerCase().split(/\s+/).includes(searchTerm)
//   )
 


//    return ["All", ...new Set(filterproduts.map(product => product.category))]
//  }
 
 

//   const FilterFunction = (products) =>{
//     return filter === "All" ? products : products.filter((product) => product.category === filter)
//   }
  

//   const SortFunction = (products) =>{
//     if(sort === "lowtohigh") return [...products].sort((a,b) => a.price - b.price)
//     if(sort === "hightolow") return [...products].sort((a,b) => b.price - a.price)
//     return products;
//   }
 

//   // const FinalFilterFunction = () =>{
//   //   let UpdatedProducts = [...products]
//   //   UpdatedProducts = SearchFunction(UpdatedProducts)
//   //   UpdatedProducts = FilterFunction(UpdatedProducts)
//   //   UpdatedProducts = SortFunction(UpdatedProducts)
//   //    return UpdatedProducts;
//   // }

//   const FinalFilterFunction = () =>{
//     let UpdatedProducts = [...products]

//     if(searchname){
//       UpdatedProducts = UpdatedProducts.filter((product)=>
//         product.name.toLowerCase().includes(searchname)
//       )
//     }
//     if(filter !== "All"){
//       UpdatedProducts = UpdatedProducts.filter(product => product.category === filter);
//     }

//     if (sort === "lowtohigh") {
//       UpdatedProducts.sort((a, b) => a.price - b.price);
//     } else if (sort === "hightolow") {
//       UpdatedProducts.sort((a, b) => b.price - a.price);
//     }
   
//      return UpdatedProducts;
//   }

 

//   const handlisOpenategories = (category) =>{
//      setFilter(category)
//      setIsOpen(false)
//   }

//   const handlisOpenSort = (option) =>{
//     setSort(option)
//     setIsOpen(false)
//   }

  

//   return ( 
//  <div>
   
// <section className='border-[4px] border-black py-6 mt-25' id="product-section">

//           {/* isOpen */}
//      {
//       isopen && (
//  <div className='bg-black text-white fixed inset-0 z-50 overflow-hidden'>
//    <div className='w-full h-full bg-white text-black absolute top-0 left-0 overflow-y-auto'>
        
//         <button className='text-3xl absolute top-2 right-2' onClick={()=>{setIsOpen(false)}}><FaTimes size={30}/></button>
//      <div className='mt-5'>

                  
//          <div className='px-4'>
//           <h2 className='text-xl font-bold'>Jobs Categories</h2>
//           <hr className='mt-2 text-gray-400' />
//          <div className='flex flex-col items-start gap-1 mt-5'>
//            {
//               Categories.map((category,index)=>(
//                 <button key={index} onClick={()=>{handlisOpenategories(category)}} 
//                 className = {`border-[1px] w-50 py-2 ${filter === category ? 'bg-blue-900 text-white': 'bg-gray-200 text-gray-700'} `}>
                  
//                   {category}</button>
//               ))
//             }
//           </div>

//           <h2 className='text-xl font-bold mt-4'>Salary Range</h2>
//           <hr className='mt-2 text-gray-400' />
//           <div className='mt-4'>
//             <ul className='flex flex-col items-start gap-2'>
//             {
//                   SortOptions.map((option,index) =>(
//                     <li key={index} className='list-none'>
//                       <button className='border-[1px] py-2 bg-blue-900 w-50 text-white' onClick={()=>{handlisOpenSort(option)}}>
//                        {option === 'none' ? 'Default' : option === 'lowtohigh' ? 'LowToHigh' :'HighToLow'}
//                        </button>
//                      </li> 
//                   ))
//                 }
//             </ul>
//           </div>
         
//          </div>
         
//      </div>
//   </div>
//  </div> 
//       )
//      }

//  <div className='w-full max-w-[1300px] mx-auto border-[3px] border-red-400'>
   
        
//   <div className='flex w-full border-[2px] border-yellow-400 gap-2'>
//      <div className='border-[2px] border-red-500 w-[22%] min-h-[500px] hidden min-[625px]:block p-4'>
//         <div>
//           <h2 className='text-xl font-bold'>Jobs Categories</h2>
//           <hr className='mt-2 text-gray-400' />
//           <div className='flex flex-col items-start mt-4 gap-1'>
//             {
//             getfilertcateories().map((category,index)=>(
//                 <button key={index} onClick={()=>{setFilter(category)}} 
                
//                 className = {`border-[1px] w-25 md:w-30 lg:w-40 py-2 hover:bg-transparent hover:border-[1px] border-black hover:text-black ${filter === category ? 'bg-blue-900 text-white': 'bg-gray-200 text-gray-700'} `}>
                  
//                   {category}</button>
//               ))
//             }
          
//           </div>

//           <h2 className='text-xl font-bold mt-4'>Salary Range</h2>
//           <hr className='mt-2 text-gray-400' />
//           <div>
//             <ul className='flex flex-col items-start mt-4 gap-2'>
//                 {
//                   SortOptions.map((option,index) =>(
//                     <li key={index} className='list-none'>
//                       <button className='border-[1px] py-2 md:py-3 text-sm md:text-md bg-blue-900 w-25 md:w-35 lg:w-50 text-white' onClick={()=>{setSort(option)}}>
//                        {option === 'none' ? 'Default' : option === 'lowtohigh' ? 'LowToHigh' :'HighToLow'}
//                        </button>
//                      </li> 
//                   ))
//                 }
//             </ul>
//           </div>

//         </div>
//      </div> 
//      <div className='border-[2px] border-blue-500 w-full min-[625px]:w-[78%]'>
//         <div className='border-[1px] border-gray-950'>
//              <div className='border-[1px] border-red-950 p-2 w-full min-[625px]:max-w-[90%] mx-auto'>
//                <div className='flex justify-between items-center gap-4 w-full'>
                
//                  <div className='block min-[625px]:hidden'>
//                    <button onClick={()=>{setIsOpen(true)}} className='border-[1px] border-gray-700 min-[478px]:px-6 min-[478px]:py-2 bg-white text-black'>Filter By Categories & Price</button>
//                  </div>
//                 </div>
//              </div>
//         </div>
//        <div className='border-[2px] border-yellow-400 grid grid-cols-1 min-[475px]:grid-cols-2 min-[630px]:grid-cols-2 min-[960px]:grid-cols-3 lg:grid-cols-3 gap-4'
//        style={{display: FinalFilterFunction().length === 0 ? 'flex' : "grid",justifyContent:"center",alignItems:"center",minHeight:"400px" }}>
             
//              {
//                FinalFilterFunction().length > 0 ?(
//                 FinalFilterFunction().map((product)=>(
//                   <Link key={product.id} to={`/productdetail/${product.id}`}>
//                         <div className='min-h-[300px] bg-white shadow-xl rounded-md'>
//                          <div className='h-[180px] flex justify-center items-center overflow-hidden'>
//                              <img src={`http://localhost:5000${product.image}`} alt={product.name} className='h-full w-full object-contain scale-100 hover:scale-110' />   
//                          </div>
//                          <div className='h-[170px] mt-2 px-2'>
//                               <h2 className='text-2xl font-semibold'>{product.name}</h2> 
//                               <p className='text-sm text-gray-500 mt-1'>{product.description}</p> 
//                               <p className='text-md mt-0.5'>Price <span className='text-xl text-orange-700'>₹{product.price}</span></p>
//                               <div className='flex justify-between items-center mt-4 gap-2'>
//                                 <button className='border-[1px] bg-orange-700 px-4  py-1 text-white text-sm sm:text-md xl:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                                  onClick={(e)=>{
//                                   e.stopPropagation() 
//                                   e.preventDefault()
//                                   navigate(`/productdetail/${product.id}`)
//                                  }}>BuyNow</button>
//                                 <button className='border-[1px] bg-orange-700 px-4  py-1 text-white text-sm sm:text-md xl:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                                  onClick={(e)=>{
//                                    e.stopPropagation()
//                                    e.preventDefault()
//                                    Addtocart(product)
//                                  }}>AddToCart</button>
//                               </div>
//                          </div>
//                     </div>
//                   </Link>
                  
//                    ))
//                ):(<>
//                 <div className='flex justify-center items-center h-[400px] w-full'>
//                        <h3 className='text-2xl text-center'>Opps! No Products Found</h3>
//                 </div>
//                </>)
//              }  
//          </div> 
//      </div>  
//   </div>
     
// </div>


// </section>
//  </div>
//   )
// }

// export default Allproducts



// ......................................................................................................................................



// import React, { useEffect, useState } from 'react'
// import { Link ,useNavigate,useLocation } from 'react-router-dom'
// import { useContext } from 'react';
// import { Cartcontext } from '../context/CartContext';
// import  axios  from 'axios'
// import { FaTimes } from "react-icons/fa";
// import AllProductSkelaton from '../components/AllProductSkelaton'
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Categories = ["All","Men","Women","Kids","Electronics","Shoes","Jwellary"]
// const SortOptions = ["none","lowtohigh","hightolow"]


// function Allproducts() {

//  const navigate  = useNavigate()
//  const location = useLocation()

//   const {Addtocart} = useContext(Cartcontext)
//   const [products,setProduct]= useState([])
//   const [sort,setSort] = useState('none')
//   const [searchname,setSearchname] = useState('')
//   const [filter,setFilter] = useState('All')
//   const [isopen,setIsOpen] = useState(false)
//   const [isloading,setIsloading] =useState(true)

//   useEffect(()=>{
//     setTimeout(() => {
//       setIsloading(false)
//     }, 2000);
//   },[])


//   useEffect(()=>{
//     if(isopen){
//       document.body.style.overflow = "hidden"
//     }else{
//         document.body.style.overflow = "auto"
//     }
//     return ()=>{
//          document.body.style.overflow = "auto"
//     };
//   },[isopen])


//   useEffect(()=>{
//     const queryparams = new URLSearchParams(location.search)
//     const searchquery = queryparams.get("query");
//     setSearchname(searchquery ? searchquery.toLowerCase() : "");
//     // console.log(searchquery)
    
//   // if (searchquery) {
//   //   setSearchname(searchquery.toLowerCase());
    
//   // }
//   },[location.search])


  


   
   

//     //  useEffect(()=>{
//     //    const getProduct = async()=>{
//     //     try {
//     //       const res = await axios.get("http://localhost:5000/products")
//     //     //    console.log(res.data)
//     //     setProduct(res.data)
//     //     } catch (error) {
//     //        console.log(error) 
//     //     }
//     //    }
//     //    getProduct()

//     //  },[filter,sort,searchname])


//     useEffect(()=>{
//       const getProduct = async()=>{
//        try {
//          const res = await axios.get("http://localhost:5000/products")
//        //    console.log(res.data)
//        setProduct(res.data)
//        } catch (error) {
//           console.log(error) 
//        }
//       }
//       getProduct()

//     },[])

    

 

//   // const SearchFunction = (products)=>{
//   //   return searchname ? products.filter((product)=>product.name.toLowerCase().includes(searchname)): products;
//   // }
//   // const SearchFunction = (products)=>{
//   //   if(!searchname.trim()) return products;
//   //   return products.filter((product)=>product.name.toLowerCase().includes(searchname))
//   // }

  
//  const getfilertcateories = ()=>{
//    if(!searchname.trim()){
//     return Categories;
//    }
//    const searchTerm = searchname.toLowerCase().trim()
//    const filterproduts = products.filter((product)=>
//     product.name.toLowerCase().split(/\s+/).includes(searchTerm)
//   )
 


//    return ["All", ...new Set(filterproduts.map(product => product.category))]
//  }
 
 
 


//   // const FilterFunction = (products) =>{
//   //   return filter === "All" ? products : products.filter((product) => product.category === filter)
//   // }
  

//   // const SortFunction = (products) =>{
//   //   if(sort === "lowtohigh") return [...products].sort((a,b) => a.price - b.price)
//   //   if(sort === "hightolow") return [...products].sort((a,b) => b.price - a.price)
//   //   return products;
//   // }
 

//   // const FinalFilterFunction = () =>{
//   //   let UpdatedProducts = [...products]
//   //   UpdatedProducts = SearchFunction(UpdatedProducts)
//   //   UpdatedProducts = FilterFunction(UpdatedProducts)
//   //   UpdatedProducts = SortFunction(UpdatedProducts)
//   //    return UpdatedProducts;
//   // }

//   const FinalFilterFunction = () =>{
//     let UpdatedProducts = [...products]

//     if(searchname){
//       UpdatedProducts = UpdatedProducts.filter((product)=>
//         product.name.toLowerCase().includes(searchname)
//       )
//     }
//     if(filter !== "All"){
//       UpdatedProducts = UpdatedProducts.filter(product => product.category === filter);
//     }

//     if (sort === "lowtohigh") {
//       UpdatedProducts.sort((a, b) => a.price - b.price);
//     } else if (sort === "hightolow") {
//       UpdatedProducts.sort((a, b) => b.price - a.price);
//     }
   
//      return UpdatedProducts;
//   }

 

//   const handlisOpenategories = (category) =>{
//      setFilter(category)
//      setIsOpen(false)
//   }

//   const handlisOpenSort = (option) =>{
//     setSort(option)
//     setIsOpen(false)
//   }

//   // ...................skelaton

  
//     if(isloading){
//       return <AllProductSkelaton/>
//     }
  

  

//   return ( 
//  <div>
   
// <section className='border-[4px] border-black py-6 mt-25' id="product-section">

//           {/* isOpen */}
//      {
//       isopen && (
//  <div className='bg-black text-white fixed inset-0 z-50 overflow-hidden'>
//    <div className='w-full h-full bg-white text-black absolute top-0 left-0 overflow-y-auto'>
        
//         <button className='text-3xl absolute top-2 right-2' onClick={()=>{setIsOpen(false)}}><FaTimes size={30}/></button>
//      <div className='mt-5'>

                  
//          <div className='px-4'>
//           <h2 className='text-xl font-bold'>Jobs Categories</h2>
//           <hr className='mt-2 text-gray-400' />
//          <div className='flex flex-col items-start gap-1 mt-5'>
//            {
//               getfilertcateories().map((category,index)=>(
//                 <button key={index} onClick={()=>{handlisOpenategories(category)}} 
//                 className = {`border-[1px] w-50 py-2 ${filter === category ? 'bg-blue-900 text-white': 'bg-gray-200 text-gray-700'} `}>
                  
//                   {category}</button>
//               ))
//             }
//           </div>

//           <h2 className='text-xl font-bold mt-4'>Salary Range</h2>
//           <hr className='mt-2 text-gray-400' />
//           <div className='mt-4'>
//             <ul className='flex flex-col items-start gap-2'>
//             {
//                   SortOptions.map((option,index) =>(
//                     <li key={index} className='list-none'>
//                       <button className='border-[1px] py-2 bg-blue-900 w-50 text-white' onClick={()=>{handlisOpenSort(option)}}>
//                        {option === 'none' ? 'Default' : option === 'lowtohigh' ? 'LowToHigh' :'HighToLow'}
//                        </button>
//                      </li> 
//                   ))
//                 }
//             </ul>
//           </div>
         
//          </div>
         
//      </div>
//   </div>
//  </div> 
//       )
//      }

//  <div className='w-full max-w-[1300px] mx-auto border-[3px] border-red-400'>
   
        
//   <div className='flex w-full border-[2px] border-yellow-400 gap-2'>
//     {
//       searchname === '' &&(
//         <>
//          <div className='border-[2px] border-red-500 w-[22%] min-h-[500px] hidden min-[625px]:block p-4'>
//         <div>
//           <h2 className='text-xl font-bold'>Jobs Categories</h2>
//           <hr className='mt-2 text-gray-400' />
//           <div className='flex flex-col items-start mt-4 gap-1'>
//             {
//             getfilertcateories().map((category,index)=>(
//                 <button key={index} onClick={()=>{setFilter(category)}} 
                
//                 className = {`border-[1px] w-25 md:w-30 lg:w-40 py-2 hover:bg-transparent hover:border-[1px] border-black hover:text-black ${filter === category ? 'bg-blue-900 text-white': 'bg-gray-200 text-gray-700'} `}>
                  
//                   {category}</button>
//               ))
//             }
          
//           </div>

//           <h2 className='text-xl font-bold mt-4'>Salary Range</h2>
//           <hr className='mt-2 text-gray-400' />
//           <div>
//             <ul className='flex flex-col items-start mt-4 gap-2'>
//                 {
//                   SortOptions.map((option,index) =>(
//                     <li key={index} className='list-none'>
//                       <button className='border-[1px] py-2 md:py-3 text-sm md:text-md bg-blue-900 w-25 md:w-35 lg:w-50 text-white' onClick={()=>{setSort(option)}}>
//                        {option === 'none' ? 'Default' : option === 'lowtohigh' ? 'LowToHigh' :'HighToLow'}
//                        </button>
//                      </li> 
//                   ))
//                 }
//             </ul>
//           </div>

//         </div>
//      </div> 
//         </>
//       )
//     }
//      <div className={`border-[2px] border-blue-500 w-full min-[625px]:${searchname === '' ? 'w-[78%]' : 'w-full'} w-full`} >
//         <div className='border-[1px] border-gray-950'>
//              <div className='border-[1px] border-red-950 p-2 w-full min-[625px]:max-w-[90%] mx-auto'>
//                <div className='flex justify-between items-center gap-4 w-full'>
                
//                  <div className='block min-[625px]:hidden'>
//                    <button onClick={()=>{setIsOpen(true)}} className='border-[1px] border-gray-700 min-[478px]:px-6 min-[478px]:py-2 bg-white cursor-pointer text-black'>Filter By Categories & Price</button>
//                  </div>
//                 </div>
//              </div>
//         </div>
//        <div className='border-[2px] border-yellow-400 grid grid-cols-1 min-[475px]:grid-cols-2 min-[630px]:grid-cols-2 min-[960px]:grid-cols-3 lg:grid-cols-3 gap-4'
//        style={{display: FinalFilterFunction().length === 0 ? 'flex' : "grid",justifyContent:"center",alignItems:"center",minHeight:"400px" }}>
             
//              {
//                FinalFilterFunction().length > 0 ?(
//                 FinalFilterFunction().map((product)=>(
//                   <Link key={product.id} to={`/productdetail/${product.id}`}>
//                         <div className='min-h-[300px] bg-white shadow-xl rounded-md'>
//                          <div className='h-[180px] flex justify-center items-center overflow-hidden'>
//                              <img src={`http://localhost:5000${product.image}`} alt={product.name} className='h-full w-full object-contain scale-100 hover:scale-110' />   
//                          </div>
//                          <div className='h-[170px] mt-2 px-2'>
//                               <h2 className='text-2xl font-semibold'>{product.name}</h2> 
//                               <p className='text-sm text-gray-500 mt-1'>{product.description}</p> 
//                               <p className='text-md mt-0.5'>Price <span className='text-xl text-orange-700'>₹{product.price}</span></p>
//                               <div className='flex justify-between items-center mt-4 gap-2'>
//                                 <button className='border-[1px] bg-orange-700 px-4  py-1 text-white text-sm sm:text-md xl:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                                  onClick={(e)=>{
//                                   e.stopPropagation() 
//                                   e.preventDefault()
//                                   navigate(`/productdetail/${product.id}`)
//                                  }}>BuyNow</button>
//                                 <button className='border-[1px] bg-orange-700 px-4  py-1 text-white text-sm sm:text-md xl:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
//                                  onClick={(e)=>{
//                                    e.stopPropagation()
//                                    e.preventDefault()
//                                    Addtocart(product)
//                                    toast.success('item added to cart!')
//                                  }}>AddToCart</button>
//                               </div>
//                          </div>
//                     </div>
//                   </Link>
                  
//                    ))
//                ):(
//                 !isloading && products.length > 0 ? (
//                   <>
//                 <div className='flex justify-center items-center h-[400px] w-full'>
//                        <h3 className='text-2xl text-center'>Opps! No Products Found</h3>
//                 </div>
//                </>
//                 ) : null
//                )
//              }  
//          </div> 
//      </div>  
//   </div>
     
// </div>


// </section>
//  </div>
//   )
// }

// export default Allproducts




//   .....................................................................................


//  W I T H      U S E       M E M O   (With Use Memo)





import React, { useEffect, useMemo, useState } from 'react'
import { Link ,useNavigate,useLocation } from 'react-router-dom'
import { useContext } from 'react';
import { Cartcontext } from '../context/CartContext';
import  axios  from 'axios'
import { FaTimes } from "react-icons/fa";
import AllProductSkelaton from '../components/AllProductSkelaton'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Categories = ["All","Men","Women","Kids","Electronics","Shoes","Jwellary"]
const SortOptions = ["none","lowtohigh","hightolow"]


function Allproducts() {

 const navigate  = useNavigate()
 const location = useLocation()

  const {Addtocart} = useContext(Cartcontext)
  const [products,setProduct]= useState([])
  const [sort,setSort] = useState('none')
  const [searchname,setSearchname] = useState('')
  const [filter,setFilter] = useState('All')
  const [isopen,setIsOpen] = useState(false)
  const [isloading,setIsloading] =useState(true)



  useEffect(()=>{
    setTimeout(() => {
      setIsloading(false)
    }, 2000);
  },[])


  useEffect(()=>{
    if(isopen){
      document.body.style.overflow = "hidden"
    }else{
        document.body.style.overflow = "auto"
    }
    return ()=>{
         document.body.style.overflow = "auto"
    };
  },[isopen])


  useEffect(()=>{
    const queryparams = new URLSearchParams(location.search)
    const searchquery = queryparams.get("query");
    setSearchname(searchquery ? searchquery.toLowerCase() : "");
  
  },[location.search])


  


   
   

    

    useEffect(()=>{
      const getProduct = async()=>{
       try {
         const res = await axios.get("http://localhost:5000/products")
       //    console.log(res.data)
       setProduct(res.data)
       } catch (error) {
          console.log(error) 
       }
      }
      getProduct()

    },[])

    

 

  
 const getfilertcateories = ()=>{
   if(!searchname.trim()){
    return Categories;
   }
   const searchTerm = searchname.toLowerCase().trim()
   const filterproduts = products.filter((product)=>
    product.name.toLowerCase().split(/\s+/).includes(searchTerm)
  )
 


   return ["All", ...new Set(filterproduts.map(product => product.category))]
 }
 
 
 

 

  const FinalFilterFunction = useMemo(() =>{
    let UpdatedProducts = [...products]

    if(searchname){
      UpdatedProducts = UpdatedProducts.filter((product)=>
        product.name.toLowerCase().includes(searchname)
      )
    }
    if(filter !== "All"){
      UpdatedProducts = UpdatedProducts.filter(product => product.category === filter);
    }

    if (sort === "lowtohigh") {
      UpdatedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "hightolow") {
      UpdatedProducts.sort((a, b) => b.price - a.price);
    }

     return UpdatedProducts;
  },[products,searchname,filter,sort])

 

  const handlisOpenategories = (category) =>{
     setFilter(category)
     setIsOpen(false)
  }

  const handlisOpenSort = (option) =>{
    setSort(option)
    setIsOpen(false)
  }

  // ...................skelaton

  
    if(isloading){
      return <AllProductSkelaton/>
    }
  

  

  return ( 
 <div>
   
<section className='border-[4px] border-black py-6 mt-25' id="product-section">

          {/* isOpen */}
     {
      isopen && (
 <div className='bg-black text-white fixed inset-0 z-50 overflow-hidden'>
   <div className='w-full h-full bg-white text-black absolute top-0 left-0 overflow-y-auto'>
        
        <button className='text-3xl absolute top-2 right-2' onClick={()=>{setIsOpen(false)}}><FaTimes size={30}/></button>
     <div className='mt-5'>

                  
         <div className='px-4'>
          <h2 className='text-xl font-bold'>Jobs Categories</h2>
          <hr className='mt-2 text-gray-400' />
         <div className='flex flex-col items-start gap-1 mt-5'>
           {
              getfilertcateories().map((category,index)=>(
                <button key={index} onClick={()=>{handlisOpenategories(category)}} 
                className = {`border-[1px] w-50 py-2 ${filter === category ? 'bg-blue-900 text-white': 'bg-gray-200 text-gray-700'} `}>
                  
                  {category}</button>
              ))
            }
          </div>

          <h2 className='text-xl font-bold mt-4'>Salary Range</h2>
          <hr className='mt-2 text-gray-400' />
          <div className='mt-4'>
            <ul className='flex flex-col items-start gap-2'>
            {
                  SortOptions.map((option,index) =>(
                    <li key={index} className='list-none'>
                      <button className='border-[1px] py-2 bg-blue-900 w-50 text-white' onClick={()=>{handlisOpenSort(option)}}>
                       {option === 'none' ? 'Default' : option === 'lowtohigh' ? 'LowToHigh' :'HighToLow'}
                       </button>
                     </li> 
                  ))
                }
            </ul>
          </div>
         
         </div>
         
     </div>
  </div>
 </div> 
      )
     }

 <div className='w-full max-w-[1300px] mx-auto border-[3px] border-red-400'>
   
        
  <div className='flex w-full border-[2px] border-yellow-400 gap-2'>
    {
      searchname === '' &&(
        <>
         <div className='border-[2px] border-red-500 w-[22%] min-h-[500px] hidden min-[625px]:block p-4'>
        <div>
          <h2 className='text-xl font-bold'>Jobs Categories</h2>
          <hr className='mt-2 text-gray-400' />
          <div className='flex flex-col items-start mt-4 gap-1'>
            {
            getfilertcateories().map((category,index)=>(
                <button key={index} onClick={()=>{setFilter(category)}} 
                
                className = {`border-[1px] w-25 md:w-30 lg:w-40 py-2 hover:bg-transparent hover:border-[1px] border-black hover:text-black ${filter === category ? 'bg-blue-900 text-white': 'bg-gray-200 text-gray-700'} `}>
                  
                  {category}</button>
              ))
            }
          
          </div>

          <h2 className='text-xl font-bold mt-4'>Salary Range</h2>
          <hr className='mt-2 text-gray-400' />
          <div>
            <ul className='flex flex-col items-start mt-4 gap-2'>
                {
                  SortOptions.map((option,index) =>(
                    <li key={index} className='list-none'>
                      <button className='border-[1px] py-2 md:py-3 text-sm md:text-md bg-blue-900 w-25 md:w-35 lg:w-50 text-white' onClick={()=>{setSort(option)}}>
                       {option === 'none' ? 'Default' : option === 'lowtohigh' ? 'LowToHigh' :'HighToLow'}
                       </button>
                     </li> 
                  ))
                }
            </ul>
          </div>

        </div>
     </div> 
        </>
      )
    }
     <div className={`border-[2px] border-blue-500 w-full min-[625px]:${searchname === '' ? 'w-[78%]' : 'w-full'} w-full`} >
        <div className='border-[1px] border-gray-950'>
             <div className='border-[1px] border-red-950 p-2 w-full min-[625px]:max-w-[90%] mx-auto'>
               <div className='flex justify-between items-center gap-4 w-full'>
                
                 <div className='block min-[625px]:hidden'>
                   <button onClick={()=>{setIsOpen(true)}} className='border-[1px] border-gray-700 min-[478px]:px-6 min-[478px]:py-2 bg-white cursor-pointer text-black'>Filter By Categories & Price</button>
                 </div>
                </div>
             </div>
        </div>
       <div className='border-[2px] border-yellow-400 grid grid-cols-1 min-[475px]:grid-cols-2 min-[630px]:grid-cols-2 min-[960px]:grid-cols-3 lg:grid-cols-3 gap-4'
       style={{display: FinalFilterFunction.length === 0 ? 'flex' : "grid",justifyContent:"center",alignItems:"center",minHeight:"400px" }}>
             
             {
               FinalFilterFunction.length > 0 ?(
                FinalFilterFunction.map((product)=>(
                  <Link key={product.id} to={`/productdetail/${product.id}`}>
                        <div className='min-h-[300px] bg-white shadow-xl rounded-md'>
                         <div className='h-[180px] flex justify-center items-center overflow-hidden'>
                             <img src={`http://localhost:5000${product.image}`} alt={product.name} className='h-full w-full object-contain scale-100 hover:scale-110' />   
                         </div>
                         <div className='h-[170px] mt-2 px-2'>
                              <h2 className='text-2xl font-semibold'>{product.name}</h2> 
                              <p className='text-sm text-gray-500 mt-1'>{product.description}</p> 
                              <p className='text-md mt-0.5'>Price <span className='text-xl text-orange-700'>₹{product.price}</span></p>
                              <div className='flex justify-between items-center mt-4 gap-2'>
                                <button className='border-[1px] bg-orange-700 px-4  py-1 text-white text-sm sm:text-md xl:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
                                 onClick={(e)=>{
                                  e.stopPropagation() 
                                  e.preventDefault()
                                  navigate(`/productdetail/${product.id}`)
                                 }}>BuyNow</button>
                                <button className='border-[1px] bg-orange-700 px-4  py-1 text-white text-sm sm:text-md xl:text-lg transition hover:bg-transparent hover:text-black hover:border-[2px]'
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
                !isloading && products.length > 0 ? (
                  <>
                <div className='flex justify-center items-center h-[400px] w-full'>
                       <h3 className='text-2xl text-center'>Opps! No Products Found</h3>
                </div>
               </>
                ) : null
               )
             }  
         </div> 
     </div>  
  </div>
     
</div>


</section>
 </div>
  )
}

export default Allproducts






















 









// border-[2px] border-blue-500 w-full min-[625px]:w-[78%]



