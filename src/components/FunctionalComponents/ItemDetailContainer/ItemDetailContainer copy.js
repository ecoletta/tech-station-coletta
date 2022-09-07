import ItemDetail from "../ItemDetail/ItemDetail";
import data from "../../data/mock-data";
import { useState, useEffect } from "react";
import './styles.css';
import {useParams} from 'react-router-dom';


const ItemDetailContainer = () => {
    const {productId} = useParams();
    console.log('param: ',productId);
    const [items, setItems] = useState([]);

    const getData = (id) => {
    return new Promise ((resolve, reject) =>{
        console.log('param prev: ',productId)
        const  producto = data.find(item => item.id === parseInt(productId));
            resolve(data)
        });
    }

    useEffect(() =>{
        const getProducto = async() => {
            const producto = await getData();
            setItems(producto);
        }
        getProducto();
    },[productId])
    /*}
    const getData = new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(data)
        }, 2000);
        });

    */
/*
useEffect(() => {
    getData.then((result) => {
        setItems(result);

    },[productId]);
})
*/
  return (
    <>
    {/*Se agrega esta linea para identifiar que se invoca a ItemDetailContainer en el navegador*/}
    <h1>---ItemDetailContainer---</h1>
    {
        items.length > 0 ? (<ItemDetail itemDetail={items} />) : (<h1>Cargando detalles...</h1>)
    }</>
  )
}

export default ItemDetailContainer