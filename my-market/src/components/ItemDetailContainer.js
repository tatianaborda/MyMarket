import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail"

export const ItemDetailContainer= () =>{
    const [item, setItem] = useState({})

    useEffect(() =>{
     const promesa = new Promise((resolve,reject)=>{
    setTimeout(() =>{
         resolve({title:"Remera ÁNGEL", description:"Remera color crudo, 100% algodón premium. Bordada a mano.", price:1000, img:"https://scontent.fcor10-3.fna.fbcdn.net/v/t1.0-9/66243762_349034542430105_3367056589704921088_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=a26aad&_nc_ohc=JCAVzMnlYNcAX-VpUiE&_nc_ht=scontent.fcor10-3.fna&oh=e60bbda2a5cb14573339d2dabd3beb71&oe=60823D14"})
    }, 2000)
     })
     promesa.then((resultado)=>{
        setItem(resultado)
     })
    }, {})
    return (
    <div className="container">
        <ItemDetail item={item}/>
        </div>
    )
}