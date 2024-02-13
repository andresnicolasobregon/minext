import { NextResponse } from "next/server";
import { collection, getDocs, query, where} from "firebase/firestore";
import {db} from "@/app/api/firebase/config"

export async function GET(request, {params}) {
    const {categoria} = params
    
    const productoRef = collection(db, "productos")
    
    const q = categoria === 'todos'
    ? productoRef
    : query(productoRef, where('type', '==', categoria))

    const querySnapshot = await getDocs(q)
    const docs = querySnapshot.docs.map(doc=>doc.data())
    return NextResponse.json(docs)
}