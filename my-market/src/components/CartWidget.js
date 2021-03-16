import React from "react";

const imgStyles={
    width: 100,
    height: 50
}; 

export const CartWidget = () =>{
    return <img style={imgStyles} alt="cartwidget" src={require('../img/cart_widget.svg').default}/>
}