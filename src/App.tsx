import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/common/Layout/Layout'
import Users from './components/pages/Users/Users'
import Wurzburg from './components/pages/Wurzburg/Wurzburg'
import UserPage from './components/pages/UserPage/UserPage'
import BtnTest from './components/pages/BtnTest/BtnTest'
import BayernSalad from './components/pages/BayernSalad/BayernSalad'
import TitleImage from './components/pages/TitleImage/TitleImage'
import StartPage from './components/pages/StartPage/StartPage'
import Chucknorris from './components/pages/Chucknorris/Chucknorris'
import Wines from './components/pages/Wines/Wines'
import WInePage from './components/pages/WInePage/WInePage'
import MenuApp from './components/pages/Menu/MenuApp'

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
        <Route path='/btnTest' element={<BtnTest />} />
        <Route path='/Chucknorris' element={<Chucknorris />} />
        <Route path='/wines' element={<Wines />} />
        <Route path='/wines/:wineId' element={<WInePage />} />
        <Route path='/menuApp' element={<MenuApp />} />
      </Route>
    </Routes>
  );
}
export default App;
