import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherUser = "muzmail hussain"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  ' click me to visit google ',
  anotherUser
)




createRoot(document.getElementById('root')).render(
  
  reactElement
)
