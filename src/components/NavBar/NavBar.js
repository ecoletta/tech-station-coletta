import logo from '../../logo.svg';
import logo2 from '../../logo192.png';
import './styles.css';

const NavBar =() => {
    return(
        <div className="navbar-container">
            <div>
                <img src={logo2} alt= "logo"/>
            </div>
            <div>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    
                    
                </ul>
            </div>
            <div>Login</div>
        </div>
    )
}

export default NavBar;