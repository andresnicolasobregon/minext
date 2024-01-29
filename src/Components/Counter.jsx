"use client"
import { useState } from "react"
import { Title } from "./Title"

export function Counter(){
    const [count, setCount]= useState(0)
    return (
        <div className="w-full justify-center items-center gap-y-4 flex flex-col">
            <Title text={"Contador"} />
            <div className="flex flex-row gap-x-4  w-full items-center justify-center my-4 py-2">
                <button onClick={()=>setCount(count - 1)}>-</button>
                <span className="font-bold text-xl">{count}</span>
                <button onClick={()=>setCount(count + 1)}>+</button>
            </div>
        </div>

    )
}
