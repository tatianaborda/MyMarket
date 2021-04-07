import React, { useState } from "react";
import { ItemCount } from "./ItemCount"
import { Link } from "react-router-dom"

export const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(0)

  const addHandler = (e) => {
    console.log("se agregó un item", e)
    setCount(e)
  }
return(
<div className="card bg-dark text-white">
  <img className="card-img" src={item.img} alt="Card image"/>
  <div className="card-img-overlay">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description}</p>
    <p className="card-text">${item.price}</p>
    { count == 0 ?
    <ItemCount stock="5" initial="1" onAdd={addHandler}/> :
    <Link to="/cart">
    <button>Terminar mi compra</button>
    </Link>
  }
  </div>
</div>
)
}