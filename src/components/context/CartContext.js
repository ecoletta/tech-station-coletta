import React, { useState } from "react";



export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [productCartList, setProductCartList] = useState([]);

    const addItem = (item, quantity) => {
        console.log("item: ", item, "quantity: ", quantity);
    }

    return (
        <CartContext.Provider value ={{productCartList, addItem}}>
            {children}
        </CartContext.Provider>
    )
}