import './ItemCount.css';
import { useState } from 'react';

export const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial);
    const suma = () => {
        if (contador < stock){
        setContador(contador +1)}
    };
    const resta = () => {
        if (contador > 0){
        setContador(contador -1)}
    };

  return (
        <div id='ItemCount'>
            <button onClick={resta}>-</button>
            <h1>{contador}</h1>
            <button onClick={suma}>+</button>

            <button onClick={()=>console.log(contador)}>Agregar al Carrito</button>
        </div>
  )
}

export default ItemCount