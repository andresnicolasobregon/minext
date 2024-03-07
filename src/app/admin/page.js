import ProductsTable from "@/Components/admin/ProductsTable"
import LogoutButton from "@/Components/admin/LogoutButton"


const Admin = () => {
    return (
        <div className="container m-auto mt-6">

            <div className="grid grid-cols-4 gap-4 border-b mb-6">
                <h2 className="text-2xl pb-4 text-red-600 align-top">Panel de administración</h2>
                <div className="col-start-5" >
                    <LogoutButton />
                </div>
            </div>

            
            <ProductsTable />
        </div>
    )
}

export default Admin