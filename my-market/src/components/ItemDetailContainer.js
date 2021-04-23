import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import {getFirestore} from "../firebase"

const getItems = (id) =>{
    const db = getFirestore()
    const itemsCollection = db.collection('items')
    const item = itemsCollection.doc(id)
    return item.get()

}
export const ItemDetailContainer= () =>{
    const [item, setItem] = useState({})
    const {itemId} = useParams()

    useEffect(() =>{
        getItems(itemId)
        .then((res)=> {
            if(res.exists){
                setItem(res.data())
            }
        })
        return;
    }, [itemId])
    return (
    <div className="container">
        {itemId} - {item.id}
        <ItemDetail item={item}/>
        </div>
    )
}