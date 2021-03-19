import React, { useEffect, useState } from "react";

export function ItemCount({stock, initial, onAdd}){
    const [count, setCount] = useState(parseInt(initial));

    useEffect(() => {
        setCount(parseInt(initial))
        return;
    }, [initial])

    const add = () =>{
        setCount(count + 1)
    }

    const remove = () =>{
        setCount(count - 1)
    }

    return(
        <div className="w-25 flex-column align-items-stretch">
            <div className="m-2 p-2 d-flex flex-row justify-content-around">
                <button
                disabled= {count <= 0}
                className="btn btn-outline-primary"
                type= "button"
                onClick= {remove}
                >
                    -
                </button>
              <div>{count}</div>
              <button
                disabled={count >= stock}
                className="btn btn-outline-primary"
                type= "button"
                onClick= {add}
                >
                    +
                </button>
            </div>
            <div className="m-2 p-2 d-flex flex-row justify-content-around">
                <button
                className="btn btn-outline-primary w-75"
                type= "button"
                onClick= {onAdd}>
                    Agregar producto
                </button>
            </div>
        </div>
    )
}

export default ItemCount;