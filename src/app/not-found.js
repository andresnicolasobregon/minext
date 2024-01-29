"use client"
import { Boton } from "@/Components/ui/Boton";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter()
    return (
      <>
      <main className="min-h-screen mt-24 flex flex-col justify-center items-center sm:flex-row sm:gap-x-6 md:mt-6">
        <h1>Página no encontrada</h1>
        <Boton onClick= {()=>router.back()}>Volver</Boton>
      </main>
      </>
      
    );
  }