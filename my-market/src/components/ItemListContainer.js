import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList"
import {getFirestore} from "../../firebase/"

export const ItemListContainer= () =>{
    const [items, setItems] = useState([])

    useEffect(() =>{
        const db = getFirestore()
        const itemsCollection = db.collection('items')
        const prom = itemsCollection.get()
     promesa.then((resultado)=>{
        setItems(resultado)
     })
    }, [])
    return (
    <div className="container">
        <ItemList items={items}/>
        </div>
    )
}