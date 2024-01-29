import React from "react";
import Image from "next/image";

export function Header(){
    return (
        <header className="py-2 px-8 w-full fixed top-0 z-50 bg-white/75 backdrop-blur-sm">
            
            
            <nav className="flex justify-between items-center">
                <Image
                    src={"/logocresi.ico"}
                    alt="Logotipo de CrESI"
                    width={64}
                    height={64}
        
                />
                <a className="flex items-center gap-4">
                    Enlace 1
                </a>
                <a className="flex items-center gap-4">
                    Enlace 2
                </a>
                <a className="flex items-center gap-4">
                    Enlace 3
                </a>

            </nav>
        </header>
    
    )
}
