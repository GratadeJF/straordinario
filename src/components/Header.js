import { NavLink } from "react-router-dom";
import '../styles/Header.css'
import logo from '../assets/STR-1.jpg'

const Header = () => {
    return (
    <div className="navbar">
        <NavLink to='/' className='navbar-logo'>
           <img src="STR-1.jpg" alt={logo} />
        </NavLink>
        <ul className="navbar-list">
            <NavLink to='/' className={(navData) => (navData.isActive ? 'chosen' : '')}>
                <li className="ItemNavMenu">Accueil</li>
            </NavLink>
            <NavLink to='/Pilotes' className={(navData) => (navData.isActive ? 'chosen' : '')}>
                <li className="ItemNavMenu">Pilotes</li>
            </NavLink>
            <NavLink to='/Constructeurs' className={(navData) => (navData.isActive ? 'chosen' : '')}>
                <li className="ItemNavMenu">Constructeurs</li>
            </NavLink>
            <NavLink to='/Circuits' className={(navData) => (navData.isActive ? 'chosen' : '')}>
                <li className="ItemNavMenu">Circuits</li>
            </NavLink>
            <NavLink to='/Dates' className={(navData) => (navData.isActive ? 'chosen' : '')}>
                <li className="ItemNavMenu">Dates</li>
            </NavLink>
        </ul>
    </div>
    );
}
export default Header