import Item from "../Item/ItemD";

const ItemDetail = ({itemDetail}) => {
  return (
      <Item producto={itemDetail} key={itemDetail.id}/>
  )
}

export default ItemDetail