import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import './CartContainer.css'


const CartContainer = () => {
  const {productCartList, removeItem, clear, isInCart} = useContext(CartContext);
  return (
    <div>
      <h1>CartContainer</h1>
      {productCartList.map(item=>(
        <div className='producto-cart' key={item.id}>
          <>
            <p>Producto: {item.name} - Cantidad: {item.quantity}</p>
            <button onClick={()=>removeItem(item.id)}>Eliminar</button>
          </>
        </div>
      ))}
      <button onClick={()=>clear()}>Vaciar Carrito</button>
      {/*El boton de abajo chequea si el producto 2 esta en el carrito, si es asi arroja true */}
      <button onClick={()=>isInCart(2)}>Chequear duplicado</button>
    </div>
  )
}

export default CartContainer