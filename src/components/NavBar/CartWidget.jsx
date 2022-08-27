import imagenCarrito from './cart.png';
import './CartWidget.css';

const CartWidget = ({numeroCarrito}) => {
  return (
    <div id='Banner'><img src={imagenCarrito} alt='ImagenCarrito'/>{numeroCarrito} </div>
  )
}

export default CartWidget