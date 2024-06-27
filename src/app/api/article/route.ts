'use server'

import { IArticle } from "@/app/redux/model/article.model";
import client from "../../../../_lib/prisma/db";
import { IpArticle } from "./model/article.model";
import { NextApiRequest, NextApiResponse } from "next";

export async function articleHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'POST') {
        const { id, title, content, board_id, writer_id } = req.body || {}
        try {
            await client.articles.create({
                data: {
                    id: id,
                    title: title ?? "default title",
                    content: content ?? "default content",
                    writer_id: writer_id ?? null,
                    board_id: board_id ?? null,
                },
            })
            return res.status(200).json({ message: 'SUCCESS' })
        } catch (error) {
            res.status(500).send({ error: 'Failed to article POST save' })
        }
    }

    if (req.method == 'GET') { 
        console.log("article Get in")
        try {
            const board = parseInt(req.body.board_id)
            console.log("MyArticleList route : " + board)
            const response: IpArticle[] = await client.articles.findMany({
                where: {
                    board_id: board
                },
            })
            console.log(JSON.stringify(response))
            return res.status(200).json({ message: 'SUCCESS' })
        } catch (error) {
            res.status(500).send({ error: 'Failed to article GET find mylist' })
        }
    }

    if (req.method == 'DELETE') { //delete
        try {
            await client.articles.delete({
                where: {
                    id: req.body.id,
                },
            })
            return res.status(200).json({ message: 'SUCCESS' })
        } catch (error) {
            res.status(500).send({ error: 'Failed to article DELETE' })
        }
    }
}


export async function allArticleList() {
    const response = await client.articles.findMany({})
    return response
}


export async function limitArticleList() {
    const response = await client.articles.findMany({
        take: 30,
    })
    return response
}


export async function findArticleById(id: number) {
    const response = await client.articles.findFirst({
        where: { id: id },
    })
    return response
}

export async function updateAricle(aricle: IArticle) {
    const { id, title, content, board_id, writer_id} = aricle || {}
    console.log("UpdateAricleAPI : "+JSON.stringify(aricle))
    const response = await client.articles.update({
        where: {
            id: id,
        },
        data: {
            id:id,
            title: title,
            content: content,
            board_id: board_id,
            writer_id: writer_id
        },
    })
    console.log(JSON.stringify(response))
    return response
}
