import CategoriesMenu from "@/Components/products/CategoriesMenu"
import ProductsList from "@/Components/products/ProductsList"
import { Suspense } from "react"

export async function generateMetadata({ params, searchParams }, parent) {
    return {
        title: `Productos - ${params.categoria}`
    }

}

const Productos = ({ params }) => {
    const { categoria } = params

    return (
        <main className="min-h-screen mt-24 flex flex-col justify-center items-center">
            <h2 className="text-2xl pb-4">Productos</h2>
            <div className="flex gap-10">
                <CategoriesMenu />
                <Suspense fallback={<div>Cargando...</div>}>
                    <ProductsList categoria={categoria} />
                </Suspense>
            </div>
        </main>
    )
}

export default Productos;