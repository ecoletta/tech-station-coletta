import imagenCarrito from './cart.png';
import './CartWidget.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const {getTotalProducts} = useContext(CartContext);
  return (
    <Link to="/cart">
      <div id='Banner'><img src={imagenCarrito} alt='ImagenCarrito'/>{getTotalProducts()} </div>
    </Link>
  )
}

export default CartWidget