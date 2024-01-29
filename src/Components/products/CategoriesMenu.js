"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const link = [
    {label: "Todos", href:"/producto/todos"},
    {label: "TVs", href:"/producto/tvs"},
    {label: "Aires", href:"/producto/aires"}
]

export default function CategoriesMenu() {
    const pathname = usePathname()

    return(
        <aside className="flex flex-col gap-3">
            {link.map(link => (
								<Link
									key ={link.label}
                                    href ={link.href}
                                    className = {`${pathname == link.href ? "font-semibold border-b" : ''}` } 
								>
									{link.label}
                                </Link>
						))}
        </aside>
    )
        
  }