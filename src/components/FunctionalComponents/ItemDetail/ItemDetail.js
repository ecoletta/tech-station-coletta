import Item from "../Item/Item"

const ItemDetail = ({itemDetail}) => {
  return (
    <div>
        {itemDetail.map( (producto) => {
            return (
                <Item producto={producto} key={producto.id}
                />
            )
        })}
    </div>
  )
}

export default ItemDetail