import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
    return(
    <div class="container">
        <div class="row align-items-center">
        <div class="row align-items-center">
    <div className="card m-2">
        <img src={item.img} style={{width: "18rem"}} alt="remera"/>
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="price text-success">${item.price}</p>
            <Link to={`item/${item.id}`} className="btn">Detalle</Link>
        </div>
    </div>
    </div>
    </div>
    </div>
    )
}