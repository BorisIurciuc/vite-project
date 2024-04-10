import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './assets/components/Layout/Layout'
import Users from './assets/components/Users/Users'
import Wurzburg from './assets/components/Wurzburg/Wurzburg'
import UserPage from './assets/components/UserPage/UserPage'

function App(): JSX.Element {
 
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route path='/users' element={<Users />}/>
      <Route path='/users/:userId' element={<UserPage />} />
      <Route path='/wurzburg' element={<Wurzburg />} />
      </Route>
    </Routes>
  )
}
export default App;
