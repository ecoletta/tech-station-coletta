import Item from "../Item/Item"

const ItemDetail = ({itemDetail}) => {
  return (
    <div>
        {itemDetail.map( (producto) => {
            return (
                <Item key={producto.id}
                name={producto.name}
                description={producto.description}
                price={producto.price}
                image={producto.image}
                stock={producto.stock}
                />
            )
        })}
    </div>
  )
}

export default ItemDetail