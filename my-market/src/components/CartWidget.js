import React, { useContext } from "react"
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const imgStyles={
    width: 50,
    height: 50
}; 

export const CartWidget = () =>{
    const {cart, cantidadTotal} = useContext(CartContext);

    return (
        <Link to='/cart'>    
     <img style={imgStyles} alt="cartwidget" src={require('../img/cart_widget.svg').default}/>
     {cart.length ===0 ? <></> :
            <i>Items en Carrito: {cantidadTotal()}</i>}
        </Link>
)
}