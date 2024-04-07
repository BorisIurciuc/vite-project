import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import UsersArraySelectForm from './assets/components/UsersArraySelect/UsersArraySelectForm.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UsersArraySelectForm />
  </React.StrictMode>,
)
