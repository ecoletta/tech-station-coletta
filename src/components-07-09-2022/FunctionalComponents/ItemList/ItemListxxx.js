import Item from "../Item/Item"

const ItemList = ({itemList}) => {
  return (
    <div>
        {itemList.map((producto) => {
            return (
                <Item key={producto.id}
                name={producto.name}
                description={producto.description}
                price={producto.price}
                image={producto.image}
                stock={producto.stock}
                />
            )
        })
    }
    </div>
  )
}

export default ItemList