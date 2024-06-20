'use server'

import client from "@/_lib/prisma/db";

export async function AllTrade() {
    const response = await client.npsStat.findMany({})
    return response
}

export async function Top10Trade() {
    const response = await client.npsStat.findMany({
    take : 5,
    })
    return response
}