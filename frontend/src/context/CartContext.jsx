
import {createContext,useState,useEffect} from 'react'

export const Cartcontext = createContext()

export const Cartprovider = ({children}) =>{
 
 const [cart,setCart] = useState([])
 const [totalprice,settotalprice]= useState(0)
 const [discount,setdiscount]= useState(0)
 const [finalprice,setfinalprice]= useState(0)

 const shippingCharge = 50



    useEffect(()=>{
    try {
        const SaveCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(SaveCart)  
     
      
    } catch (error) {
        console.log(error) 
        setCart([])
    }

    },[])
    
    useEffect(()=> {
        localStorage.setItem('cart',JSON.stringify(cart))
    
    },[cart])

    useEffect(()=>{
        const total = cart.reduce((acc,item) => acc + item.price,0)
        const discounts = Number((total * 0.1).toFixed(2));
        const final = cart.length === 0 ? 0 : Number((total + shippingCharge - discounts).toFixed(2))

        settotalprice(total)
        setdiscount(discounts)
        setfinalprice(final)
      
    },[cart])



    const Addtocart = (product) =>{
       
        setCart((prevcart)=> [...prevcart,product])
    }

    const Removecart = (id) =>{
      
        setCart((prevcart)=> prevcart.filter((item)=> item.id !==id));
    }

    return(
        <Cartcontext.Provider value={{cart,setCart,Addtocart,Removecart,totalprice,shippingCharge,discount,finalprice}}>
            {children}
        </Cartcontext.Provider>
    )
}