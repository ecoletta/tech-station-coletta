import Item from "../Item/Item"

const ItemList = ({itemList}) => {
    //Imprimo el listado de items que me llega por props
    console.log(itemList);
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