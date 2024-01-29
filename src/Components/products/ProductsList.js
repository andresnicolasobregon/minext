import { listaproductos } from "@/data/Products";
import ProductCard from "./ProductCard";

export default function ProductsList({categoria}) {
    const items = categoria === "todos" ? listaproductos : listaproductos.filter(item =>item.type === categoria)
    return (
      <section className="container m-auto flex justify-center gap-12 flex-wrap">
        {
            items.map(item => <ProductCard key={item.slug} item={item}/>)
        }
      </section>
      
    );
  }