import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/common/Layout/Layout'
import Users from './components/pages/Users/Users'
import Wurzburg from './components/pages/Wurzburg/Wurzburg'
import UserPage from './components/pages/UserPage/UserPage'
import BtnTest from './components/pages/BtnTest/BtnTest'
import BayernSalad from './components/pages/BayernSalad/BayernSalad'
import TitleImage from './components/pages/TitleImage/TitleImage'
import Products from './components/pages/Products/Products'
import ProductPage from './components/pages/ProductPage/ProductPage'
import StartPage from './components/pages/StartPage/StartPage'
import Chucknorris from './components/pages/Chucknorris/Chucknorris'

function App(): JSX.Element {
 
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<StartPage />} /> 
        <Route path='/users' element={<Users />}/>
        <Route path='/users/:userId' element={<UserPage />} />
        <Route path='/wurzburg' element={<Wurzburg />} />
        <Route path='/bayernSalad' element={<BayernSalad />} />
        <Route path='/titleImage' element={<TitleImage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<ProductPage />} />
        <Route path='/btnTest' element={<BtnTest />} />
        <Route path='/Chucknorris' element={<Chucknorris />} />
      </Route>
    </Routes>
  );
}
export default App;
