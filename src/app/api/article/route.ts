'use server'


import client from "@/lib/db";
import { IArticletype } from "./model/articel-model";

export async function AllArticleList() {
    const response: IArticletype[] = await client.articles.findMany({})
    return response
}

export async function MyArticleList(id: string) {
    const response: IArticletype[] = await client.articles.findMany({
        where: {
            board_id: id,
        },
    })
    console.log(JSON.stringify(response))
    return response
}

export async function DeleteArticle(id: number) {
    try {
        const response = await client.articles.delete({
            where: {
                id: id,
            },
        })
    } catch (err) {
        console.log(err)
    }
}

export async function FindSingleArticle(id: number) {
    const response = await client.articles.findFirst({
        where: { id: id },
    })
    return response
}

export async function SaveArticle(aricle: IArticletype) {
    const { title, content, board,writer } = aricle || {}

    const response = await client.articles.create({
        data: {
            board_id: board,
            title: title,
            content: content,
            writer_id: writer
        },
    })
    // console.log(JSON.stringify(response))
    return response
}

export async function UpdateAricle(aricle: IArticletype) {
    const { id, title, content, board, writer } = aricle || {}
    console.log("UpdateAricleAPI : "+JSON.stringify(aricle))
    const response = await client.articles.update({
        where: {
            id: id,
        },
        data: {
            board_id: board,
            title: title,
            content: content,
            writer_id: writer
        },
    })
    // console.log(JSON.stringify(response))
    return response
}
