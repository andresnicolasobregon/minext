import { NextResponse } from "next/server";
import { collection, getDocs, Query } from "firebase/firestore";
import {db} from "@/firebase/config"

export async function GET(request, {params}) {
    const {categoria} = params
    
    
    
}