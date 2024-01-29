import React from "react";

export function Boton({children, className = "", ...args}){
    return (
       <button className="rounded-xl px-3 bg-blue-400 ${classname}" {...args} >
            {children}
       </button>
    
    )
}
