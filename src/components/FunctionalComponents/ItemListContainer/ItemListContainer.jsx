import './styles.css';
import data from '../../data/mock-data';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({greeting}) => {
  const [items, setItem] = useState([]);

  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 2000);
    });

  useEffect(() =>{
    getData.then((result) =>{
      setItem(result);
      //Muestro los datos obtenidos desde data que cargue en item
      console.log(result);
    },[])
  });

  return (
    <>{
      items.length > 0 ? (<ItemList itemList={items} />) : (<div>Cargando...</div>)
    }</>
  )
}

export default ItemListContainer