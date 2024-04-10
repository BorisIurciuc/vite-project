import React from 'react'
import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

export default function NavBar(): JSX.Element {
  return (
    <nav className={style.navigation}>
        <ul className={style.navList}>
            <li >
                <NavLink to="/users" className={style.navElement}>Users</NavLink></li>
            <li><NavLink to="/wurzburg" className={style.navElement}>Wurtburg</NavLink></li>
        </ul>
    </nav>
  )
}

