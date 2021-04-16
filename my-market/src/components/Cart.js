import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const Cart = () => {
    const {cart, setCart, removeItem, precioTotal}= useContext(CartContext); // con esto me traigo el carrito

    return (
        <>
        <h1>Carrito de compras</h1>
        { cart.length === 0 ? <>
                <p>Tu carrito esta vacío. Para empezar a llenarlo, tocá acá: </p>
                <Link to='/'>
                <button>Comprar</button>
                </Link>
        </>: 
        <div> 
            {cart.map(({itemNvo}) => 
                   <ul className="collection">
                        <li className="collection-item avatar">
                        <img src={itemNvo.item.img} alt="" className="circle"></img>
                        <span className="title">{itemNvo.item.nombre}</span>
                        <p> Total: {itemNvo.item.price} <br></br>
                            cantidad: {itemNvo.cantidad}
                        </p>
                        <button  className="secondary-content" onClick={()=>removeItem(itemNvo.item.id)}><i className="material-icons">remove_shopping_cart</i></button>
                        </li>

                    </ul>                   

                )}
                total= {precioTotal()}

        </div> }
        </>
        )
    }