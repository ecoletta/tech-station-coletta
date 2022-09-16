import { useState, useContext } from "react";
import Item from "../Item/ItemD";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({itemDetail}) => {
  const {addItem} = useContext(CartContext);
  const [contador, setContador] = useState(0);
  const onAdd = (dato) => {
    console.log("Hizo una compra de " , dato, " productos.");
    setContador(dato);
    addItem(itemDetail, dato);
  }
  return (
    <div>
      <Item producto={itemDetail} key={itemDetail.id}/>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    {
      contador > 0 && 
      <Link to={"/Cart"}>
        <br></br>
        <button>Finalizar compra</button>
      </Link>
    }
    </div>
  )
}

export default ItemDetail