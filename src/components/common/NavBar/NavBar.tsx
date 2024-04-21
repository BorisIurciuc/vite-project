
import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

export default function NavBar(): JSX.Element {
  return (
    <nav className={style.navigation}>
        <ul className={style.navList}>
            <li><NavLink to="/" className={style.navElement}>StartPage</NavLink></li>
            <li><NavLink to="/users" className={style.navElement}>Users</NavLink></li>
            <li><NavLink to="/wurzburg" className={style.navElement}>Wurzburg</NavLink></li>
            <li><NavLink to="/bayernSalad" className={style.navElement}>BayernSalad</NavLink></li>
            <li><NavLink to="/titleImage" className={style.navElement}>TitleImage</NavLink></li>
            <li><NavLink to="/BtnTest" className={style.navElement}>BtnTest</NavLink></li>
            <li><NavLink to="/Chucknorris" className={style.navElement}>Chucknorris</NavLink></li>
            <li><NavLink to="/wines" className={style.navElement}>Wines</NavLink></li>
            <li><NavLink to="/menuApp" className={style.navElement}>MenuApp</NavLink></li>

        </ul>
    </nav>
  )
}

