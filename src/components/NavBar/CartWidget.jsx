import imagenCarrito from './cart.png';
import './CartWidget.css';
import {Link} from 'react-router-dom';

const CartWidget = ({numeroCarrito}) => {
  return (
    <Link to="/cart">
      <div id='Banner'><img src={imagenCarrito} alt='ImagenCarrito'/>{numeroCarrito} </div>
    </Link>
  )
}

export default CartWidget