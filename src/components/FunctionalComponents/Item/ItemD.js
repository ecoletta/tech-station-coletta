//Componente para ItemDetails

const Item = ({producto}) =>{
    //Envio directamente el producto entero
    return (
        <div style={{width:"100%"}} className="'detail-container">
            <h1 style={{width:"100%"}}>{producto.name}</h1>
            <br></br> 
            <div className="img-container">
                <img className="itemImage" src={producto.image} alt="imagen" />
            <br></br> 
                <p>Descripcion: {producto.description}</p>
                <p>Categoria: {producto.category}</p>
                <p>Precio: {producto.price}$</p>
                <p>Stock disponible: {producto.stock}</p>
            </div>
        </div>
    )
}

export default Item