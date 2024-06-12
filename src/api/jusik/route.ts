'use server'

import { INps } from "@/app/component/jusik/model/jusik.model";
import client from "@/lib/prisma/db";

export async function AllNps() {
    const response:INps[] = await client.npsStat.findMany({})
    return response
}

export async function Top10Nps() {
    const response:INps[] = await client.npsStat.findMany({
    take : 5,
    })
    return response
}