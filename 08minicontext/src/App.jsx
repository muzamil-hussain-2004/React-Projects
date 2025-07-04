import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './compoents/Login'
import Profile from './compoents/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      
     <h1> Context Api </h1>
     <Login/>
     <Profile/>

    </UserContextProvider>
  )
}

export default App
