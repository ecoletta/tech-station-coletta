
const Item = ({producto}) =>{
    //Envio directamente el producto entero
    return (
        <div>
            <h1>{producto.name}</h1>
            <img className="itemImage" src={producto.image} alt="imagen" />
            <p>{producto.description}</p>
            <p>{producto.price}</p>
            <p>Stock disponible: {producto.stock}</p>
            <br></br> 
    </div>
    )
}

export default Item