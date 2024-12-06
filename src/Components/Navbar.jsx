import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={style.nav}>
            <ul>
                <li>
                    <NavLink to='/'>HomePage</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}