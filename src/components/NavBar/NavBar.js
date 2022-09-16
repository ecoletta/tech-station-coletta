import logo from '../../logo.svg';
import CartWidget from './CartWidget';
import './styles.css';
import {Link, NavLink} from 'react-router-dom';

const NavBar =() => {
    return(
        <nav className="navbar-container">
            <Link to="/">
                <img src={logo} alt= "logo"/>
            </Link>
            <div>
                <ul>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "isActive": "" } to="/"><h2>INICIO</h2></NavLink>
                    </li>
                    <li>
                    <NavLink className={({isActive}) => isActive ? "isActive": "" } to="/productos/camisas"><h2>CAMISAS</h2></NavLink>
                    </li>
                    <li>
                    <NavLink className={({isActive}) => isActive ? "isActive": "" } to="/productos/calzados"><h2>CALZADOS</h2></NavLink>
                    </li>
                    <li>
                    <NavLink className={({isActive}) => isActive ? "isActive": "" } to="/productos/accesorios"><h2>ACCESORIOS</h2></NavLink>
                    </li>
                    <li>
                    <NavLink className={({isActive}) => isActive ? "isActive": "" } to="/contacto"><h2>CONTACTO</h2></NavLink>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;