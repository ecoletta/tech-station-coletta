import { useState } from "react";
import Item from "../Item/ItemD";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({itemDetail}) => {
  const [contador, setContador] = useState(0);
  const onAdd = (dato) => {
    console.log("Hizo una compra de " , dato, " productos.");
    setContador(dato);
  }
  return (
    <div>
      <Item producto={itemDetail} key={itemDetail.id}/>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail