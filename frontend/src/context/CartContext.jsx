// import {createContext,useState,useEffect} from 'react'

// export const Cartcontext = createContext()

// export const Cartprovider = ({children}) =>{
 
//     const [cart,setCart] = useState([])


//     // localStorage get cart
//     useEffect(()=>{
//     try {
//         const SaveCart = JSON.parse(localStorage.getItem('cart')) || [];
//         setCart(SaveCart)  
      
//     } catch (error) {
//         console.log(error) 
//         setCart([])
//     }

//     },[])
//     // console.log(cart)

//     // localStorage Save Cart 
//     useEffect(()=> {
//         localStorage.setItem('cart',JSON.stringify(cart))
//     },[cart])

//     const Addtocart = (product) =>{
//         // setCart([...cart,product])
//         setCart((prevcart)=> [...prevcart,product])
//     }

//     const Removecart = (id) =>{
//         // setCart(cart.filter((item) => item.id !== id))
//         setCart((prevcart)=> prevcart.filter((item)=> item.id !==id));
//     }

//     return(
//         <Cartcontext.Provider value={{cart,setCart,Addtocart,Removecart}}>
//             {children}
//         </Cartcontext.Provider>
//     )
// }


// .........................................................

//  with shipping charge 


// import {createContext,useState,useEffect} from 'react'

// export const Cartcontext = createContext()

// export const Cartprovider = ({children}) =>{
 
//  const [cart,setCart] = useState([])


// const totalprice = cart.reduce((acc,item) => acc + item.price,0 )
// const shippingCharge = 50
// const discount = Number((totalprice * 0.1).toFixed(2));
// const finalprice = Number((totalprice + shippingCharge - discount).toFixed(2))

// console.log(cart,"context")
// console.log("totalprice",totalprice)
// console.log("finalprice cart context",finalprice)



//     // localStorage get cart
//     useEffect(()=>{
//     try {
//         const SaveCart = JSON.parse(localStorage.getItem('cart')) || [];
//         setCart(SaveCart)  
//         console.log("firts render")
      
//     } catch (error) {
//         console.log(error) 
//         setCart([])
//     }

//     },[])
//     // console.log(cart)

//     // localStorage Save Cart 
//     useEffect(()=> {
//         localStorage.setItem('cart',JSON.stringify(cart))
//         console.log("second render")
//     },[cart])

//     const Addtocart = (product) =>{
//         // setCart([...cart,product])
//         setCart((prevcart)=> [...prevcart,product])
//     }

//     const Removecart = (id) =>{
//         // setCart(cart.filter((item) => item.id !== id))
//         setCart((prevcart)=> prevcart.filter((item)=> item.id !==id));
//     }

//     return(
//         <Cartcontext.Provider value={{cart,setCart,Addtocart,Removecart,totalprice,shippingCharge,discount,finalprice}}>
//             {children}
//         </Cartcontext.Provider>
//     )
// }







//  ......................................................
//  fisrt render per cart ematy or final price 50 aa raha tha problm




import {createContext,useState,useEffect} from 'react'

export const Cartcontext = createContext()

export const Cartprovider = ({children}) =>{
 
 const [cart,setCart] = useState([])
 const [totalprice,settotalprice]= useState(0)
 const [discount,setdiscount]= useState(0)
 const [finalprice,setfinalprice]= useState(0)

 const shippingCharge = 50










    // localStorage get cart
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
        // console.log(cart,"context")
        // console.log("totalprice",totalprice)
        // console.log("finalprice cart context",finalprice)
    },[cart])



    const Addtocart = (product) =>{
        // setCart([...cart,product])
        setCart((prevcart)=> [...prevcart,product])
    }

    const Removecart = (id) =>{
        // setCart(cart.filter((item) => item.id !== id))
        setCart((prevcart)=> prevcart.filter((item)=> item.id !==id));
    }

    return(
        <Cartcontext.Provider value={{cart,setCart,Addtocart,Removecart,totalprice,shippingCharge,discount,finalprice}}>
            {children}
        </Cartcontext.Provider>
    )
}