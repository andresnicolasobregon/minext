"use client"
import { useState } from "react"
import { Boton } from "./ui/Boton"

export function Counter({counter, setCounter, max}){
    const increase = () => counter < max && setCounter(counter + 1)
    const decrease = () => counter > 1 && setCounter(counter - 1)
    return (
        <div className="w-full justify-center items-center gap-y-4 flex flex-col">
            <div className="flex flex-row gap-x-4  w-full items-center justify-center my-4 py-2">
                <Boton onClick={decrease}>-</Boton>
                <span className="font-bold text-xl">{counter}</span>
                <Boton onClick={increase}>+</Boton>
            </div>
        </div>

    )
}
