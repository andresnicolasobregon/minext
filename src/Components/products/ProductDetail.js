import { listaproductos } from "@/data/Products";
import Qtyselector from "./Qtyselector";

const ProducDetail = ({slug})=>{
    const item =listaproductos.find(p=>p.slug === slug)
    return(
        <>
        <main className="min-h-screen flex flex-col justify-center items-center mt-24">
            <h2>Detalle de Producto</h2>
            <div className="flex gap-10">        
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