import CategoriesMenu from "@/Components/products/CategoriesMenu"
import ProductsList from "@/Components/products/ProductsList"

export async function generateMetadata({params, searchParams}, parent){
    return{
        title: `Mi pagina - ${params.categoria}`
    }
}

const Productos = ({params})=>{
    const {categoria}= params
    return(
        <div className="min-h-screen mt-24 flex flex-col justify-center items-center sm:flex-row sm:gap-x-6 md:mt-6">
            <CategoriesMenu />
            <ProductsList categoria={categoria}/>
        </div>
    )
}

export default Productos