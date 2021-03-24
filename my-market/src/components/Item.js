import React from "react";

export const Item = ({ item }) => {
    return(
    <div className="card" style={{width: "18 rem"}}>
        <img className="card-img-top" src={item.img} alt="remera"/>
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">${item.price}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    )
}