import ItemDetail from "../ItemDetail/ItemDetail";
import data from "../../data/mock-data";
import { useState, useEffect } from "react";
import './styles.css';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const{productId} = useParams();
    const[item,setItem] = useState({});

    const getItem = (productId) => {
        return new Promise((resolve, reject) => {
            const item = data.find(item => item.id === parseInt(productId));
            resolve(item);
        })
    }

useEffect(() => {
    const getProducto = async() => {
        const producto = await getItem(productId);
        setItem(producto);
    }
    getProducto();
},[productId])
return(
    <>
    {/*Se agrega esta linea para identifiar que se invoca a ItemDetailContainer en el navegador*/}
    <h1>---ItemDetailContainer---</h1>
    {
    <ItemDetail itemDetail={item} />
    }</>
  )
}

export default ItemDetailContainer