import React, { useState } from "react";



export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [productCartList, setProductCartList] = useState([]);

    const addItem = (item, quantity) => {
        console.log("item: ", item, "quantity: ", quantity);
        //Le agrego a mi item la cantidad que el cliente esta queriendo comprar
        const newProduct = {
            ...item,
            quantity
        }
        //Hago un nuevo arreglo para agregar el item que el cliente quiere comprar, hago push, y lo cargo al carrito
        const newArreglo = [...productCartList];
        newArreglo.push(newProduct);
        setProductCartList(newArreglo);
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
        console.log("is in Cart: ", flag)
        return flag;
    }

    return (
        <CartContext.Provider value ={{productCartList, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}