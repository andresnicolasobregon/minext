import Image from "next/image";
import Qtyselector from "./Qtyselector";

const ProducDetail = async ({ slug }) => {
    console.log(slug)

    const item = await fetch(`http://localhost:3000/api/product/${slug}`, {
        cache: "no-store",
        next: { revalidate: 0 }
    })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .catch(error => console.error('Fetch error:', error));

    return(
        <>
        <main className="min-h-screen flex flex-col justify-center items-center mt-24">
            <h2>Detalle de Producto</h2>
            <div className="flex gap-10"> 
                    <Image
                        alt={item.title}
                        src={`/img/${item.image}`}
                        width={288}
                        height={288}
                    />      
                <h4>Producto: {item.title}</h4>
                <p>Pecio: $ {item.price}</p>
                <p>Descripción: {item.description}</p>
            <Qtyselector item = {item} />
            </div>
        </main>
        </> 
    )
}

export default ProducDetail