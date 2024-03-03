import React from "react";
import Image from "next/image";

export function Footer(){
    return (
        <footer className="w-full p-4 bg-gray-300">
            <div className="p-2 flex flex-col items-center">
                <Image
                    src={"/logo.png"}
                    alt="Logotipo de CrESI"
                    width={64}
                    height={64}
        
                />
				</div>
        </footer>
    
    )
}
