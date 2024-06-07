'use server'

import { IArticle } from "@/app/component/articles/model/article.model";
import client from "@/lib/db";

export async function AllArticleList() {
    const response: IArticle[] = await client.articles.findMany({})
    return response
}

export async function MyArticleList(id: number) {

    const response: IArticle[] = await client.articles.findMany({
        // where: {
        //     board_id: id,
        // },
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

export async function SaveArticle(aricle: IArticle) {
    const { title, content, board_id,writer_id } = aricle || {}

    const response = await client.articles.create({
        data: {
            board_id: board_id,
            title: title,
            content: content,
            writer_id: writer_id
        },
    })
    // console.log(JSON.stringify(response))
    return response
}

export async function UpdateAricle(aricle: IArticle) {
    const { id, title, content, board_id, writer_id } = aricle || {}
    console.log("UpdateAricleAPI : "+JSON.stringify(aricle))
    const response = await client.articles.update({
        where: {
            id: id,
        },
        data: {
            id:id,
            board_id: board_id,
            title: title,
            content: content,
            writer_id: writer_id
        },
    })
    // console.log(JSON.stringify(response))
    return response
}
