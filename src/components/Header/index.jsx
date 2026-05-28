import './index.scss'
import logo from '../../assets/LOGO.png'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <img src={logo} alt="Kasa" />
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/apropos">A Propos</NavLink>
            </nav>
        </header>
    )
}
export default Header