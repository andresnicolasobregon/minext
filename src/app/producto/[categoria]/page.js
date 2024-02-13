import CategoriesMenu from "@/Components/products/CategoriesMenu"
import ProductsList from "@/Components/products/ProductsList"

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
                <ProductsList categoria={categoria} />
            </div>
        </main>
    )
}

export default Productos;