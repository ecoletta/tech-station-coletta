import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import './styles.css';
import {useParams} from 'react-router-dom';
import {db} from "../../../utils/firebase"
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const{productId} = useParams();
    const[item,setItem] = useState({});

    useEffect(() => {
        const getProducto = async() => {
            const queryRef = doc(db, "items", productId);
            const response = await getDoc(queryRef);
            const newItem = {
                id: response.id,
                ...response.data(),
            }
            setItem(newItem);
        }
        getProducto();
    },[productId])

return(
    <>
   {
    <ItemDetail itemDetail={item} />
    }</>
  )
}

export default ItemDetailContainer