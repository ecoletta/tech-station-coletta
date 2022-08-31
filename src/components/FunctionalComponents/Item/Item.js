
const Item = ({id, name, description, price, image, stock}) =>{
    return (
        <div>
            <h1>{name}</h1>
            <img className="itemImage" src={image} alt="imagen" />
            <p>{description}</p>
            <p>{price}</p>
            <p>Stock disponible: {stock}</p>
            <br></br>
        </div>
    )
}

export default Item