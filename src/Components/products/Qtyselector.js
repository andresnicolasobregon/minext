"use client"
import { useState } from "react"
import { Boton } from "../ui/Boton"
import { Counter } from "../Counter"

const Qtyselector = ({item}) => {
    const [quantity, setQuantity]= useState(1)
    
    return (
        <div className="w-full justify-center items-center gap-y-4 flex flex-col">
            <div className="flex flex-row gap-x-4  w-full items-center justify-center my-4 py-2">
                <Counter max={item.inStock} counter={quantity} setCounter={setQuantity} />
                <Boton>Agregar Carrito</Boton>
            </div>
        </div>

    )
}

export default Qtyselector