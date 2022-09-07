import logo from '../../logo.svg';
import CartWidget from './CartWidget';
import './styles.css';

const NavBar =() => {
    return(
        <div className="navbar-container">
            <div>
                <img src={logo} alt= "logo"/>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    
                    
                </ul>
            </nav>
            <CartWidget numeroCarrito={2}/>
        </div>
    )
}

export default NavBar;