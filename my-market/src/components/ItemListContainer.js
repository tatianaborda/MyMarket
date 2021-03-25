import React, { useEffect, useState } from "react";
import { ItemCount } from "./ItemCount"
import { ItemList } from "./ItemList"

export const ItemListContainer= () =>{
    const [items, setItems] = useState([])

    useEffect(() =>{
     const promesa = new Promise((resolve,reject)=>{
setTimeout(() =>{
    resolve([
        { id:1, title:"Remera ÁNGEL", price:1000, img:"../img/angel.jpg"},
        {id:2, title:"Remera EN LLAMAS", price:1000, img:"../img/rosa.jpg"},
        {id:3, title:"Remera LOST", price:1000, img:"../img/lost.jpg"}
    ])
}, 5000)
     })
     promesa.then((resultado)=>{
        setItems(resultado)
     })
    }, [])
    return (
    <div className="container">
        <ItemList items={items}/>
        <ItemCount stock="5" initial="1"/>
        </div>
    )
}