import Image from "next/image";
import Link from "next/link"

export default function ProductCard ({item}) {
    return(
        <article className="basig-72 shadow-lg rounded">
            <Link href={`/producto/detail/${item.slug}`}>
            <div className="px-4 border-t border-gray-200 p-3 rounded">
                    <Image
                        alt={item.title}
                        src={item.image}
                        width={288}
                        height={288}
                    />
                <h4>Producto: {item.title}</h4>
                <p>Pecio: $ {item.price}</p>
                <p>Descripción: {item.description}</p>
            </div>
            </Link>
        </article>
        
    )
        
  }