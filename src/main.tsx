import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
//import RandomDog from './assets/components/RandomDog/RandomDog.tsx'
import ExchangeApi from './assets/components/ExchangeApi/ExchangeApi.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
         
         <ExchangeApi />

   
  </React.StrictMode>,
)
