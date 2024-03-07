"use client"
import { useAuthContext } from "../Context/AuthContext";
import { Boton } from "@/Components/ui/Boton";

const LogoutButton = () => {
    const { logOut } = useAuthContext()

    return (
        <>
            <Boton onClick={logOut}>
                Cerrar sesión
            </Boton>
        </>
    )
}

export default LogoutButton