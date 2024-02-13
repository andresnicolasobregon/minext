import { listaproductos } from "@/data/Products";
import ProductCard from "./ProductCard";

const ProductsList = async ({categoria}) => {
    const items = await fetch(`http://localhost:3000/api/productos/${categoria}`, {
        cache: "no-store",
        next: {
            tags: ["productos"]
        }
    })
    .then(r => r.json())

    return (
      <main className="min-h-screen mt-24 flex flex-col justify-center items-center">
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {
                items.map(item => <ProductCard key={item.slug} item={item} />)
            }
        </section>
      </main>
    )
}

export default ProductsList