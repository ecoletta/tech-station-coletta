import React, { useState } from "react";



export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [productCartList, setProductCartList] = useState([]);

    const addItem = (item, quantity) => {
        const newProduct = {
            ...item,
            quantity
        }
        if(isInCart(item.id)){
            const productPos = productCartList.findIndex(product => product.id ===item.id )
            const newArreglo = [...productCartList];
            newArreglo[productPos].quantity = newArreglo[productPos].quantity + quantity;
            newArreglo[productPos].quantityPrice = newArreglo[productPos].quantity * newArreglo[productPos].price;
            setProductCartList(newArreglo);
        }else{
        const newArreglo = [...productCartList];
        newProduct.quantityPrice = newProduct.quantity * newProduct.price;
        newArreglo.push(newProduct);
        setProductCartList(newArreglo);
        }
    }

    const removeItem = (itemId) => {
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