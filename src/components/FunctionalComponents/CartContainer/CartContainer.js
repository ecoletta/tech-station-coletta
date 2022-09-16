import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import './CartContainer.css'
import { Link } from 'react-router-dom';


const CartContainer = () => {
  const {productCartList, removeItem, clear, getTotalPrice} = useContext(CartContext);
  return (
    <div>

      {/*ACA TENDRIA QUE AGREGAR EL CONDICIONAL Y POR NO, PONER EL CARTEL Y UN LINK AL HOME*/}
      {
      productCartList.length > 0 ?
      <div>
        {productCartList.map(item=>(
          <div className='producto-cart' key={item.id}>
            <>
              <p>Producto: {item.name} - Cantidad: {item.quantity} - Precio: {item.quantityPrice}$</p>
              <button onClick={()=>removeItem(item.id)}>Eliminar</button>
            </>
          </div>
        ))}
        <br></br>
        <button onClick={()=>clear()}>Vaciar Carrito</button>
        <p>Precio Total: {getTotalPrice()}$</p>
      </div>
      : 
      <div>
        <Link to={"/"}>
         <h1>El carrito se encuentra vacio. Haga click aqui para ir al inicio.</h1> 
        </Link>
      </div>
    }
    </div>
  )
}

export default CartContainer