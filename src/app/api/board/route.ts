'use server'

import { IBoard } from "../../redux/model/board.model";
import client from "../../../../_lib/prisma/db";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    console.log("board Get in")
    if(!req.body.id){
    try {
        const response = await client.boards.findFirst({
            where: {id: req.body.id},
        })
        console.log(JSON.stringify(response))
        return res.status(200).json({ message: 'SUCCESS', body: response })
    } catch (err) {
        res.status(500).send({ error: 'Failed to board GET one' })
        }
    } else {
        try {
            const response = await client.boards.findMany({})
            console.log(JSON.stringify(response))
            return res.status(200).json({ message: 'SUCCESS', body: response })
        } catch (err) {
            res.status(500).send({ error: 'Failed to board GET many' })
            }
    }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    if(!req.body.id){
        try {
            const { id, title, description } = req.body
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
            return res.status(200).json({ message: 'SUCCESS', body: response })
        } catch (err) {
            res.status(500).send({ error: 'Failed to board POST save' })
        }
        } else {
            const { title, description } = req.body
            try {
                const response = await ({
                    data: {
                        title: title ?? "default title",
                        description: description ?? "default description",  
                    }
                })
                console.log(JSON.stringify("SaveBoard :" + response))
                return res.status(200).json({ message: 'SUCCESS', body: response })
            } catch (err) {
                res.status(500).send({ error: 'Failed to board POST update' })
            }
        }
}
