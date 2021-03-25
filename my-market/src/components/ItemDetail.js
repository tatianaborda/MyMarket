import React from "react";

export const ItemDetail = ({ item }) => {
    return(
<div className="card bg-dark text-white">
  <img className="card-img" src={item.img} alt="Card image"/>
  <div className="card-img-overlay">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description}</p>
    <p className="card-text">${item.price}</p>
  </div>
</div>
)
}