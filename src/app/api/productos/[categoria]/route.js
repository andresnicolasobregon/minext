import { NextResponse } from "next/server";
import { listaproductos } from "@/data/Products";
import { revalidateTag, revalidatePath } from "next/cache";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer))
}


export async function GET(request, {params}) {
    const {categoria} = params
    const data = categoria === "todos" ? listaproductos: listaproductos.filter(item => item.type === categoria)
    
    await sleep(1000)
    revalidateTag("productos") 
    return NextResponse.json(data)
}