// import {react,createContext,useState,useEffect} from "react"

// export const Usercontext = createContext();

// export const UserProvider = ({children}) => {
 
//     const [user,setUser] = useState(null)

//     useEffect(()=>{
//     const loggedInuser = localStorage.getItem('user')
//     if(loggedInuser){
//         setUser(loggedInuser ? JSON.parse(loggedInuser) : null)
//     }

//     },[])

//     return <Usercontext.Provider value={{user,setUser}}>
//         {children}
//        </Usercontext.Provider>

// }

import {react,createContext,useState,useEffect} from "react"

export const Usercontext = createContext();

export const UserProvider = ({children}) => {
 
    const [user,setUser] = useState(null)

    useEffect(()=>{
    const loggedInuser = localStorage.getItem('user')
    if(loggedInuser){
        setUser(loggedInuser)
    }

    },[])

    return <Usercontext.Provider value={{user,setUser}}>
        {children}
       </Usercontext.Provider>

}
// import {react,createContext,useState,useEffect} from "react"

// export const Usercontext = createContext();

// export const UserProvider = ({children}) => {
 
//     const [user,setUser] = useState(null)

//     useEffect(()=>{
//     const loggedInuser = localStorage.getItem('user')
//     if(loggedInuser){
//         try {
//             setUser(JSON.parse(loggedInuser))    
//         } catch (error) {
//             console.log(error)
//           localStorage.removeItem('user')
//           setUser(null)
//         }
//     }

//     },[])

//     return <Usercontext.Provider value={{user,setUser}}>
//         {children}
//        </Usercontext.Provider>

// }


