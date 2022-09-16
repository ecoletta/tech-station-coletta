import './styles.css';
import data from '../../data/mock-data';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';


const ItemListContainer = () => {
  const {categoryId} = useParams();
  const [items, setItem] = useState([]);

  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 2000);
    });

  useEffect(() =>{
    getData.then((result) =>{
      if(categoryId){
        const newProducts = result.filter(item => item.category === categoryId);
        setItem(newProducts);
      }else{
        setItem(result);
      }
    },[categoryId])
  });

  return (
    <>
    {
      items.length > 0 ? (<ItemList itemList={items} />) : (<h1>Cargando lista...</h1>)
    }
    </>
  )
}

export default ItemListContainer