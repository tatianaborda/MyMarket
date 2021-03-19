import React from "react";
import { ItemCount } from "./ItemCount"

export const ItemListContainer= () =>{
    return <div className="container">
        Lista de productos
        <ItemCount stock="5" initial="1"/>
        </div>

}