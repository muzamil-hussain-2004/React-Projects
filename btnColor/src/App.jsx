import React, { useState } from 'react'

function App() {

  const [color , setColor] = useState("black")



  return (
    
    <div className="w-screen h-screen duration-200 " style={{backgroundColor: color }}>

      <h1 className='flex justify-center flex-direction row '> ---REACT FIRST WORK--- </h1>

       <div className=" fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2 bg-white h-13 py-3   " > 

        <div className='flex flex-wrap justify-center gap-2 shadow-lg  px-1  rounded-3xl  '>
        <button className='outline-none px-6 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}} onClick={()=>setColor("red")} >RED</button>
        </div>

        <div className='flex flex-wrap justify-center gap-2 shadow-lg  px-1  rounded-3xl '>
        <button className='outline-none px-6 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>GREEN</button>
        </div>

        <div className='flex flex-wrap justify-center gap-2 shadow-lg  px-1  rounded-3xl '>
        <button className='outline-none px-6 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>BLUE</button>
        </div>

        <div className='flex flex-wrap justify-center gap-2 shadow-lg  px-1  rounded-3xl '>
        <button className='outline-none px-6 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"brown"}} onClick={()=>setColor("brown")}>BROWN</button>
        </div>

        <div className='flex flex-wrap justify-center gap-2 shadow-lg  px-1  rounded-3xl '>
        <button className='outline-none px-6 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>PINK</button>
        </div>

        <div className='flex flex-wrap justify-center gap-2 shadow-lg  px-1  rounded-3xl '>
        <button className='outline-none px-6 py-2 rounded-full text-white shadow-lg' style={{backgroundColor:"gray"}} onClick={()=>setColor("gray")}>GRAY</button>

        </div>


      </div>
    </div>


   
  )
}

export default App
