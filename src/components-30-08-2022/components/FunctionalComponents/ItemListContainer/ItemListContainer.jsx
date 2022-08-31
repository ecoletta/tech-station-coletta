import './styles.css';
import ItemCount from '../ItemCount/ItemCount';
import data from '../../data/mock-data';

const ItemListContainer = ({greeting}) => {

  return (
    <div>
        <h1>{greeting}</h1>
        <ItemCount stock={10} initial={1} />
    </div>
  )
}

export default ItemListContainer