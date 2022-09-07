import Item from "../Item/Item"

const ItemList = ({itemList}) => {
  return (
    <div>
        {itemList.map((producto) => {
            return (
                <Item producto={producto} key={producto.id}
                />
            )
        })
    }
    </div>
  )
}

export default ItemList