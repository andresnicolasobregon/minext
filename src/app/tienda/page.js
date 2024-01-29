"use client"
import { useRouter } from "next/navigation";
import { Boton } from "@/Components/ui/Boton";


  
  export default function Tienda() {
    const router = useRouter()
    return (
      <>
      <main className="min-h-screen mt-24 flex flex-col justify-center items-center sm:flex-row sm:gap-x-6 md:mt-6">
          <p>Pagina en construcción</p>
          <Boton onClick= {()=>router.back()}>Volver</Boton>
      </main>
      </>
      
    );
  }
  