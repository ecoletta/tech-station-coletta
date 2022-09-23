import './styles.css';
import { db } from '../../../utils/firebase';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = () => {
  const {categoryId} = useParams();
  const [items, setItem] = useState([]);

  useEffect(() =>{
    const queryRef = !categoryId ? collection(db,"items") : query(collection(db,"items"),where("category","==",categoryId));
    getDocs(queryRef).then(response => {
      const resultados = response.docs.map(doc =>{
        const newItem = {
          id: doc.id,
          ...doc.data(),
        }
        return newItem;
      })
      setItem(resultados);
    })
  },[categoryId])

  return (
    <>
    {
      items.length > 0 ? (<ItemList itemList={items} />) : (<h1>Cargando lista...</h1>)
    }
    </>
  )
}

export default ItemListContainer