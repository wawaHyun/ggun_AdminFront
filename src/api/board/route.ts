'use server'

import { IBoard } from "@/app/component/boards/model/board.model";
import client from "@/lib/db";

export async function AllBoards() {
    const response: IBoard[] = await client.boards.findMany({})
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

export async function UpdateBoard(data: IBoard) {
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

export async function SaveBoard(data: IBoard) {
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