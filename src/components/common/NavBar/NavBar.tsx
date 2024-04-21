import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

export default function NavBar(): JSX.Element {
  return (
    <nav className={style.navigation}>
        <ul className={style.navList}>
            <li><NavLink to="/" className={style.navElement}>Start Page</NavLink></li>
            <li><NavLink to="/wurzburg" className={style.navElement}>Wurzburg</NavLink></li>
            <li><NavLink to="/bayernSalad" className={style.navElement}>Bayern Salad</NavLink></li>
            <li><NavLink to="/titleImage" className={style.navElement}>Title Image</NavLink></li>
            <li><NavLink to="/wines" className={style.navElement}>Wines</NavLink></li>
            <li><NavLink to="/menuApp" className={style.navElement}>Menu</NavLink></li>
        </ul>
    </nav>
  )
}

