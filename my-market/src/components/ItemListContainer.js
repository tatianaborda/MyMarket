import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase"

export const ItemListContainer= () =>{
    const {catId}= useParams();
    const [items, setItems] = useState([])

    useEffect(() =>{
        const db = getFirestore()
        const itemsCollection = db.collection('items')
        if(catId){
            itemsCollection= itemsCollection.where ('catid', '==', Number(catId));
        }
        itemsCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0){
            console.log('Sin resultados');
            } 
            setItems (querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        })
            .catch((error) =>{console.log("Error", error);}) 
},[catId]);
    return (
    <div className="container">
        <ItemList items={items}/>
        </div>
    )
}