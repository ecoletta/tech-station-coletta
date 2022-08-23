import imagenCarrito from './cart.png';
import './CartWidget.css';

const CartWidget = ({numeroCarrito}) => {
  return (
    <banner><img src={imagenCarrito} alt='ImagenCarrito'/>{numeroCarrito} </banner>
  )
}

export default CartWidget