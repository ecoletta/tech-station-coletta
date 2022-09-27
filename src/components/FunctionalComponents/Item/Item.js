import {Link} from 'react-router-dom'

const Item = ({producto}) =>{
    return (
        <div>
            <h3>{producto.name}</h3>
            <br></br> 
            <img className="itemImage" src={producto.image} alt="imagen" />
            <p>Precio: {producto.price}$</p>
            <br></br> 
            <Link  to={`/item/${producto.id}`}>
                <button className="boton-ver">Ver detalle...</button>
            </Link>
    </div>
    )
}

export default Item