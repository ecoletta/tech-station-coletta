import './styles.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => {
const onAdd =(cantidad) =>{
  console.log(cantidad);
}
  return (
    <div>
        <h1>{greeting}</h1>
        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer