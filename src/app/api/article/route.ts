'use server'

import { instance } from "@/app/common/config/axios-config";
import { IArticle } from "@/app/redux/model/article.model";
import { Content } from "next/font/google";

export async function allArticleList() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/articles/list`)
    const data = await response.json();
    // console.log("allArticleList : ", data)
    return data;
}


export const myArticleList = async (board_id: string) => {
    const board = parseInt(board_id)
    try {                            
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/articles/myList?id=${board}`);
        const data = await response.json();
        console.log("myArticleList : " + JSON.stringify(data))
        return data
    } catch (error: any) {
        console.log("myArticleList EERR!!!" + error)
        return error
    }
}

export const saveArticle = async (article: IArticle) => {
    // console.log("saveArticle : " + JSON.stringify(article))
    const { title, content, writerId, boardId } = article || {}
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/articles/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title :title,
                content : content,
                writerId : writerId,
                boardId: "2",
            })
        })
        console.log("saveArticle : " + JSON.stringify(article))
        const data = await response.json();
        return data
    } catch (error) {
        console.log("saveArticle EERR!!!" + error)
        return error
    }
}

// export const deleteArticleAPI = async (id:number) => {
//     try {
//         const response:any = await instance().delete('/articles/delete',{
//             params: {id}
//         })
//         console.log("DeleteArticleAPI : "+ response.data)
//         return response.data
//     } catch (error) {
//         console.log("DeleteArticleAPI EERR!!!"+ error)
//         return error
//     }
// }

export const findArticleById = async (id: number) => {
    try {
        const response: any = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/articles/detail?id=${id}`)
        const data = await response.json();
        // console.log("myArticleList : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.log("findArticleByIdAPI EERR!!!" + error)
        return error
    }
}
