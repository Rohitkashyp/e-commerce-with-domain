
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



