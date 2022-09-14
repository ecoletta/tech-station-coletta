import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';


const CartContainer = () => {
  const value = useContext(CartContext);
  return (
    <div>
      <h1>CartContainer</h1>
      {value.productCartList.map(item=>(
        <p>{item}</p>
      ))}
    </div>
  )
}

export default CartContainer