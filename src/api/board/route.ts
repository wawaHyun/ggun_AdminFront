'use server'

import client from "@/lib/db";
import { IBoardtype } from "./model/board-model";

export async function AllBoardList() {
    const response: IBoardtype[] = await client.boards.findMany({})
    return response
}

export async function FindSingleBoard(id: number) {
    try {
        const response = await client.boards.findFirst({
            where: {
                id: id,
            },
        })
        console.log(JSON.stringify(response))
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function UpdateBoard(data: IBoardtype) {
    const { id, title, description } = data
    console.log(id)
    const response = await client.boards.update({
        where: {
            id: id,
        },
        data: {
            title: title,
            description: description,
        }
    })
    console.log(JSON.stringify("UpdateBoard :" + response))
    return response
}

export async function SaveBoard(data: IBoardtype) {
    const { id, title, description } = data
    try {
        const response = await client.boards.create({
            data: {
                title: title,
                description: description,
            }
        })
        console.log(JSON.stringify("SaveBoard :" + response))
        return response
    } catch (err) {
        console.log(err)
    }
}