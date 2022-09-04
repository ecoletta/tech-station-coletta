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
    },[])
  });

  return (
    <>{
      items.length > 0 ? (<ItemList itemList={items} />) : (<h1>Cargando lista...</h1>)
    }</>
  )
}

export default ItemListContainer