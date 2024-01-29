import React from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
	{ name: "Sobre nosotros", href: "/nosotros" },
	{ name: "Contacto", href: "/contacto" },
	{ name: "Tienda", href: "/tienda" },
];

export function Header(){
    return (
        <header className="py-2 px-8 w-full fixed top-0 z-50 bg-white/75 backdrop-blur-sm">
            <nav className="flex justify-between items-center">
                <Link href={"/"}>
                    <Image
                        src={"/logocresi.ico"}
                        alt="Logotipo de CrESI"
                        width={64}
                        height={64}
                    />
                </Link>
                <ul className="hidden md:flex gap-4">
						{links.map(({ name, href }) => (
							<li key={name}>
								<Link
									href={href}
									className="px-4 py-2 rounded-full font-medium transition duration-150 hover:bg-white hover:text-primary"
								>
									{name}
								</Link>
							</li>
						))}
				</ul>

            </nav>
        </header>
    
    )
}
