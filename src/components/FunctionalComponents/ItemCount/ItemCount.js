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
            <button className='boton-operador' onClick={resta}>-</button>
            <h3>{contador}</h3>
            <button className='boton-operador' onClick={suma}>+</button>

            <button className='botonAgregar' onClick={() => onAdd(contador)}>Agregar al Carrito</button>
        </div>
  )
}

export default ItemCount