import ItemDetail from "../ItemDetail/ItemDetail";
import data from "../../data/mock-data";
import { useState, useEffect } from "react";
import './styles.css';


const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);

    const getData = new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(data)
        }, 2000);
        });

useEffect(() => {
    getData.then((result) => {
        setItems(result);

    },[]);
})

  return (
    <>{
        items.length > 0 ? (<ItemDetail itemDetail={items} />) : (<h1>Cargando detalles...</h1>)
    }</>
  )
}

export default ItemDetailContainer