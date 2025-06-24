import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './components/cards'
import './App.css'

function App({userName}) {
  const [count, setCount] = useState(0)

  let myObj = {
    userName: "asfand",
    age: "21",
    city:"karachi",
  }

  return (
    <>
    <h1 className='bg-green-400'>Tailwind test</h1>

    <Cards userName = "muzamil" age = "25" btnTxt2="batan"  />
    <Cards  userName="yasir" btnTxt="baloon" />
    </>
  )
}

export default App


