'use server'

import { INps } from "@/app/component/jusik/model/jusik.model";
import client from "@/lib/prisma/db";

export async function AllNps() {
    const response:INps[] = await client.users.findMany({
    })
    return response
}