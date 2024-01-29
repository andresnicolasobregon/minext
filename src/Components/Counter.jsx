"use client"
import { useState } from "react"
import { Boton } from "./ui/Boton"

export function Counter(){
    const [count, setCount]= useState(0)
    return (
        <div className="w-full justify-center items-center gap-y-4 flex flex-col">
            <div className="flex flex-row gap-x-4  w-full items-center justify-center my-4 py-2">
                <Boton onClick={()=>setCount(count - 1)}>-</Boton>
                <span className="font-bold text-xl">{count}</span>
                <Boton onClick={()=>setCount(count + 1)}>+</Boton>
            </div>
        </div>

    )
}
