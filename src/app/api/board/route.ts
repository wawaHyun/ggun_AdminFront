'use server'

import { IBoard } from "../../redux/model/board.model";
import client from "../../../../_lib/prisma/db";

export async function allBoards() {
    const response: IBoard[] = await client.boards.findMany({})
    return response
}

export async function findSingleBoard(id: number) {
    try {
        const response = await client.boards.findFirst({
            where: {id: id,},
        })
        console.log(JSON.stringify(response))
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function updateBoard(data: IBoard) {
    const { id, title, description } = data
    console.log(id)
    const response = await client.boards.update({
        where: {
            id: id,
        },
        data: {
            title: title ?? "default title",
            description: description ?? "default description",  
        }
    })
    console.log(JSON.stringify("UpdateBoard :" + response))
    return response
}

export async function saveBoard(data: IBoard) {
    const { title, description } = data
    try {
        const response = await ({
            data: {
                title: title ?? "default title",
                description: description ?? "default description",  
            }
        })
        console.log(JSON.stringify("SaveBoard :" + response))
        return response
    } catch (err) {
        console.log(err)
    }
}