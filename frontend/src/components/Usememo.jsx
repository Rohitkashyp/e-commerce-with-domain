import React, { useState,useMemo } from 'react'

function Usememo() {

    const [count,setCount] = useState(0)
    const [text,setText] = useState('')

    // const doubleCount = ()=>{
    //     console.log("calculating double count")
    //     return count * 2
    // }

    const doubleCount = useMemo(()=>{
           console.log("calculating double count")
        return count * 2
    },[count])

  return (
    <div className='mt-2'>
     <h1>Count: {count}</h1>
     <h1>double count: {doubleCount}</h1>
     <p>text: {text}</p>
     <button onClick={()=>{setCount(count+1)}}>Increase Count</button>
     <input className='border-[1px] border-red-400' type="text" onChange={(e)=>{setText(e.target.value)}} />
    </div>
  )
}

export default Usememo
