import React, { useState } from 'react'

export const CartContext = React.createContext({});

export const CartProvider= ({defaultValue=[], children})=>{ 
    const [cart, setCart]= useState(defaultValue);

    const removeItem = (id) =>{
        setCart (cart.filter(({itemNvo})=> itemNvo.item.id !== id));
    };

    const addItem = (itemNvo, cantidad)=>{
        let productoIndex= []
            productoIndex=cart.findIndex(producto => itemNvo.item.id === producto.itemNvo.item.id);
          console.log(productoIndex)
         if (productoIndex === -1){
            setCart(cart=>[...cart, {itemNvo, cantidad}]);	
        } else{
            let modificarCart=[...cart];
            modificarCart[productoIndex].itemNvo.cantidad += itemNvo.cantidad;
            setCart(modificarCart);
            }
    }
  
   const clear = ()=>{
        setCart([])
    } 

    const precioTotal =() =>{
        let total=0;
        cart.forEach(({itemNvo}) => { total +=parseInt(itemNvo.item.price) * parseInt(itemNvo.cantidad)});
        return parseInt(total);
    }

    const cantidadTotal =() =>{
        let cantidad=0;
        cart.forEach(({itemNvo}) => { cantidad += parseInt(itemNvo.cantidad)});
        return parseInt(cantidad);
    }

 
    return <CartContext.Provider value= {{cart, addItem,removeItem, clear, precioTotal, cantidadTotal}}>{children}</CartContext.Provider>
}