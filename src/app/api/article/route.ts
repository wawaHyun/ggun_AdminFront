'use server'

import { IArticle } from "@/app/redux/model/article.model";
import client from "../../../../_lib/prisma/db";
import { IpArticle } from "./model/article.model";

export async function allArticleList() {
    const response = await client.articles.findMany({})
    return response
}

export async function myArticleList(board_id: number) {
    try{
        console.log("MyArticleList route : "+ board_id)
        const response:IpArticle[] = await client.articles.findMany({
            where: {
                board_id: board_id
            },
        })
        // console.log(JSON.stringify(response))
        return response
    }catch(error){
        console.log("myArticleList EERR!!!" + error)
        return error
    }
}

export async function deleteArticle(id: number) {
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

export async function findSingleArticle(id: number) {
    const response = await client.articles.findFirst({
        where: { id: id },
    })
    return response
}

export async function saveArticle(aricle: IpArticle) {
    // const { title, content, board_id, writer_id } = aricle || {}
    // const response = await client.articles.create({
    //     data: {
    //         title: title ?? "default title",
    //         content: content ?? "default content",
    //         writer_id: writer_id ?? null,
    //         board_id: board_id ?? null,
    //     },
    // })
    // console.log(JSON.stringify(response))
    // return response
}

export async function updateAricle(aricle: IArticle) {
    // const { id, title, content, board_id, writer_id} = aricle || {}
    // console.log("UpdateAricleAPI : "+JSON.stringify(aricle))
    // const response = await client.articles.update({
    //     where: {
    //         id: id,
    //     },
    //     data: {
    //         // id:id,
    //         title: title,
    //         content: content,
    //         board_id: board_id,
    //         writer_id: writer_id
    //     },
    // })
    // console.log(JSON.stringify(response))
    // return response
}
