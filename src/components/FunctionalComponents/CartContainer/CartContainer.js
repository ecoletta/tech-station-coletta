import React, {useContext, useState} from 'react';
import { CartContext } from '../../context/CartContext';
import './CartContainer.css'
import { Link } from 'react-router-dom';
import {db} from "../../../utils/firebase";
import { collection, addDoc } from 'firebase/firestore';


const CartContainer = () => {
  const {productCartList, removeItem, clear, getTotalPrice} = useContext(CartContext);
  const [idOrder, setIdOrder] = useState("");

const sendOrder = (event) => {
  event.preventDefault();
  const order = {
    buyer: {
      name: event.target[0].value,
      phone: event.target[1].value,
      email: event.target[2].value,
    },
    item: productCartList,
    total: getTotalPrice()
  }
  //crear la referencia donde se va a guardar el documento
  const queryRef = collection(db, "orders");
  //Crear el documento en firebase, muestro la respuesta y obtengo el id de documento de firebase
  addDoc(queryRef, order).then(response => setIdOrder(response.id));
  clear();
}


  return (
    <div>
      {idOrder ? 
      <>
        <p className='alerta'>Su orden fue creada. ID: {idOrder}</p> 
        <br></br>
        <Link to="/">Ir al listado de productos</Link>
      </>
      :
      <div>
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
            <form onSubmit={sendOrder}>
              <label>Nombre: </label>
              <input type="text" />
              <label>Telefono: </label>
              <input type="text" />
              <label>Correo: </label>
              <input type="email" />
              <button type='submit'> Enviar Orden</button>
            </form>
          </div>
          : 
          <div>
            <Link to={"/"}>
            <h1>El carrito se encuentra vacio. Haga click aqui para ir al inicio.</h1> 
            </Link>
          </div>
      }
      </div>
            }
    </div>
  )
}

export default CartContainer