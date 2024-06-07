'use server'

import { IArticle } from "@/app/component/articles/model/article.model";
import client from "@/lib/db";

export async function AllArticleList() {
    const response = await client.articles.findMany({})
    return response
}

export async function MyArticleList(board: number) {
    // const { board } = board
    // const board = parseInt(id);
    console.log("MyArticleList route : "+board)
    const response = await client.articles.findMany({
        where: {
            board: board
        },
    })
    // console.log(JSON.stringify(response))
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
    const { title, content, board,writer } = aricle || {}
    const response = await client.articles.create({
        data: {
            board: board,
            title: title,
            content: content,
            writer: writer
        },
    })
    // console.log(JSON.stringify(response))
    return response
}

export async function UpdateAricle(aricle: IArticle) {
    const { id, title, content, board, writer} = aricle || {}
    console.log("UpdateAricleAPI : "+JSON.stringify(aricle))
    const response = await client.articles.update({
        where: {
            id: id,
        },
        data: {
            id:id,
            board: board,
            title: title,
            content: content,
            writer: writer
        },
    })
    // console.log(JSON.stringify(response))
    return response
}
