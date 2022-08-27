import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
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
    <>
        <div id='ItemCount'>
            <button onClick={resta}>-</button>
            <h1>{contador}</h1>
            <button onClick={suma}>+</button>
        </div>
        <div id='ItemCount'>
            <button onClick={onAdd(contador)}>Agregar al Carrito</button>
        </div>
    </>
  )
}

export default ItemCount