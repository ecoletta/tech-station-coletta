import React, { useState } from "react";



export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [productCartList, setProductCartList] = useState([]);

    const addItem = (item, quantity) => {
        //Le agrego a mi item la cantidad que el cliente esta queriendo comprar
        const newProduct = {
            ...item,
            quantity
        }
        //PUNTO DE VALIDACION: Si el producto existe, buscarlo en el arreglo y reemplazar la cantidad
        if(isInCart(item.id)){
            const productPos = productCartList.findIndex(product => product.id ===item.id )
            const newArreglo = [...productCartList];
            newArreglo[productPos].quantity = newArreglo[productPos].quantity + quantity;
            newArreglo[productPos].quantityPrice = newArreglo[productPos].quantity * newArreglo[productPos].price;
            setProductCartList(newArreglo);
        }else{
        //Hago un nuevo arreglo para agregar el item que el cliente quiere comprar, hago push, y lo cargo al carrito
        const newArreglo = [...productCartList];
        //Agrego la logica de cantidad de productos x precio
        newProduct.quantityPrice = newProduct.quantity * newProduct.price;
        newArreglo.push(newProduct);
        setProductCartList(newArreglo);
        }
    }

    const removeItem = (itemId) => {
        //Recorro el carrito pero filtro el producto que quiero eliminar
        const newArreglo = productCartList.filter(product=>product.id !== itemId);
        setProductCartList(newArreglo);
        console.log("Se elimino el producto con id ", itemId);
    }

    const clear = () => {
        setProductCartList([]);
        console.log("Carrito Vaciado");
    }

    const isInCart = (itemID) => {
        let flag = false;
        productCartList.forEach(item =>{
            if(item.id === itemID){
                flag = true;
            }
        })
        return flag;
    }

    const getTotalPrice = () => {
        //Funcion con acumulador que va recorriendo el arreglo y sumando el precio al acumulador
        const totalPrice = productCartList.reduce((acc,item) => acc + item.quantityPrice,0);
        return totalPrice;
    }

    const getTotalProducts = () => {
        const totalProducts = productCartList.reduce((acc,item) => acc + item.quantity,0);
        return totalProducts;

    }

    return (
        <CartContext.Provider value ={{productCartList, addItem, removeItem, clear,getTotalPrice,getTotalProducts}}>
            {children}
        </CartContext.Provider>
    )
}