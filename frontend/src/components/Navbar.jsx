
import React, { useState ,useContext, useEffect } from 'react'
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link ,useLocation,useNavigate} from 'react-router-dom';
import { Cartcontext } from '../context/CartContext';
import { CgShoppingCart } from "react-icons/cg";



function Navbar() {

  const location = useLocation()
  // console.log(location.pathname)

  const {cart} = useContext(Cartcontext)
  const navigate = useNavigate()

const [isopen,setisopen] = useState(false)
const [search,setSearch] =useState('')
const getUser =localStorage.getItem("user")
const User = getUser ? JSON.parse(getUser) : null;


const handleToggle = () =>{
 setisopen(!isopen)

}

const handleMobileNavigate =(path)=>{
   setisopen(false)
   setTimeout(() => {
    navigate(path)
   }, 300);
}





useEffect(()=>{
  if(search.trim() !== ""){
    navigate(`/all_products?query=${search}`)
  }
},[search,navigate])
  

//     logout 

const handleLogout = ()=>{
  localStorage.removeItem("user")
  navigate("/login")

}


  return (
  <>
 <nav className={`px-2 py-0.5 min-[450px]:p-6 shadow-xl bg-white w-full fixed top-0 left-0 right-0 z-50 ${isopen ? 'hidden':'block'}`}>

  
 <div className='max-w-[1300px] mx-auto'>
  <div className='flex justify-between items-center w-full'>
     <div>
        
        <h1 className='text-[24px] sm:text-[30px] font-bold mb-3 min-[450px]:mb-0'>Best,<span className='text-green-500 text-[20px] sm:text-[24px]'>Deals</span></h1>
     </div>
     {/* search input  */}
      <div className='border-b-[0.3px] min-[450px]:border-[1px] mb-0.5 relative border-gray-500 w-[160px] min-[450px]:w-[200px] min-[639px]:w-[300px]
       p-2 min-[450px]:mt-0 mt-12 min-[450px]:mr-0 mr-16 min-[450px]:rounded-md'>
     <input type="text" name="" value={search} id="" onChange={(e)=>setSearch(e.target.value)} placeholder='Serach Products...' className='outline-none text-sm font-medium ' />
    


     {
      search.trim() !== "" && (
        <button onClick={() =>{
          setSearch("")
          navigate('/all_products')
        }} className='text-base md:text-xl absolute top-3 right-3'><FaTimes /></button>
      )
    }
      
     </div>
     <div>
   
          <ul className='hidden min-[850px]:flex gap-4'>

          <Link to='/' className='hover:underline' onClick={()=>{window.scroll(0,0)}}>
             <li>
                 Home
             </li>
           </Link>
           <Link to='/all_products' className='hover:underline'onClick={()=>{window.scroll(0,0)}}>
             <li>
               All Products
             </li>
           </Link>
           {
            User ? (
              <li>
               <button onClick={handleLogout}>Logout</button>
             </li>

            ):(
             <>
                <Link to='/sign_up' className='hover:underline'>
              <li>
                SignUp
              </li>
              </Link>
              <Link to='/login' className='hover:underline'>
              <li>
              Login
              </li>
              </Link>
             </>
            )
           }
         
         
        
           <Link to='/profile' className='hover:underline' onClick={()=>{window.scroll(0,0)}}>
             <li>
               profile
             </li>
           </Link>
           <Link to='/cart' className='cursor-pointer' onClick={()=>{window.scroll(0,0)}}>
             <li className='cursor-pointer'>
                 <div className='flex gap-2'>
                   <button className='text-2xl cursor-pointer'><CgShoppingCart/></button>
                   <h3>Cart</h3>
                 </div>
                 <p className='text-[12px] absolute top-4 right-14 bg-red-500 text-white px-2 py-0.5 rounded-full'>{cart.length}</p>
             </li>
           </Link>
       
         </ul>
     <div className='min-[850px]:hidden'>
         <button onClick={handleToggle} className='absolute top-8 right-1 cursor-pointer'>
             <FaBars size={25}/>
         </button> 
           <div className=''>
            <Link to='/cart' className='' onClick={()=>{window.scroll(0,0)}}>
              <div className='flex'>
                <button className='absolute top-8 right-10 cursor-pointer'><CgShoppingCart size={26}/></button>
                <h4 className='text-[12px] absolute top-4 right-9 bg-red-500 text-white px-1.5 py-0.5 rounded-full cursor-pointer'>{cart.length}</h4>
              </div>
           </Link> 
          </div> 
     </div>
   </div>

  </div>
</div>

</nav>


{
    isopen && (
     <div className='fixed inset-0 bg-white z-40 flex flex-col items-center justify-center overflow-hidden'>
        
     
       <button onClick={handleToggle} className='text-3xl absolute top-2 right-2 cursor-pointer'><FaTimes/></button>
    

       <div className=''>
          <ul className='flex flex-col gap-4'>
            <li className='text-2xl font-medium cursor-pointer transition hover:text-blue-700' onClick={()=>{
              handleMobileNavigate('/')
              window.scroll(0,0)

            }}>Home</li>
            <li className='text-2xl font-medium cursor-pointer transition hover:text-blue-700' onClick={()=>{
              handleMobileNavigate('/all_products')
              window.scroll(0,0)
              }}>All Products</li>
            {
              User ? (
                <li className='text-2xl font-medium cursor-pointer transition hover:text-blue-700' onClick={handleLogout}>Logout</li>
              ):(
              <>  
              <li className='text-2xl font-medium cursor-pointer transition hover:text-blue-700' onClick={()=>{handleMobileNavigate('/sign_up')}}>SignUp</li>
        
               <li className='text-2xl font-medium cursor-pointer transition hover:text-blue-700' onClick={()=>{handleMobileNavigate('/login')}}>Login</li>
              </>
              )
            }
           
           
            <li className='text-2xl font-medium cursor-pointer transition hover:text-blue-700' onClick={()=>{handleMobileNavigate('/profile')}}> profile</li>
           
          </ul>
       </div>
      


   
       
 </div>
    )
}


  </>
  )
}

export default Navbar


