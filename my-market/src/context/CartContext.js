import React, { useState } from 'react'

export const CartContext = React.createContext({});

export const CartProvider= ({defaultValue=[], children})=>{ 
    const [cart, setCart]= useState(defaultValue);

    const isInCart = (id) =>{
        return cart.some(({item}) => item.id===id);
    }


    const removeItem = (id) =>{
        setCart (cart.filter(({item})=> item.id !== id));
    };

    const addItem = (item, cantidad)=>{
        console.log('add item en cartContext', item);
        console.log(cart);
        if (isInCart(item.id)){
            console.log("este item ya esta en el carrito");
            return;
        }
        
        setCart([...cart, 
                { item, cantidad}])
    };
  
   const clear = ()=>{
        setCart([])
    } 

 
    return <CartContext.Provider value= {{cart, addItem,removeItem, clear, isInCart}}>{children}</CartContext.Provider>
}