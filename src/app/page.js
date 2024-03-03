
import ProductsList from "@/Components/products/ProductsList";
import { Carousel } from "@/Components/ui/Carousel";


export const metadata = {
  title: "ElectroWeb - Todo para la casa",
  description: "Plataforma de venta de electrodomésticos",
  keywords: ["pagina web", "eventos"]
}

export default function Home() {
  return (
    <>
    <main className="min-h-screen mt-24 flex flex-col justify-center items-center bg-gray-100">
    <Carousel />
    <br />
    <h1 className="text-2xl text-bold">Las Mejores Ofertas:</h1>
        <hr />
        <br />

        <ProductsList categoria={"tvs"} />
        <br />
        <ProductsList categoria={"mouse"} />
    </main>
    </>
    
  );
}
