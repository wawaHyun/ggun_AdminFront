'use server'

import { IArticle } from "../model/article.model"
import { instance } from "../../common/config/axios-config"


export const allArticlesAPI = async () => {
    console.log("allAdminsAPI 진입 : " )
    try {
        const response = await instance().get('/articles/list',{})
        // console.log("AllArticlesAPI : "+ response.data)
        return response.data
    } catch (error) {
        console.log("AllArticlesAPI EERR!!!"+ error)
        return error
    }
}

// export const myArticleListAPI = async (id:number) => {
//     // const board = parseInt(board_id)
//     try{                                                        
//         const response = await instance().get('/articles/myList',{
//             params: {id}
//         })
//          console.log("MyArticleListAPI : "+ response.data)
//         return response.data
//     }catch(error:any){
//         console.log(error)
//         return error
//     }
// }

export const myArticleListAPI = async (id:number) => {
    // const board = parseInt(board_id)
    try{                         
        const response:any = await instance().get('/articles/mylist',{
            params: {id}
        })                               
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/articles/list`)
        // console.log("MyArticleListAPI : "+ `${process.env.NEXT_PUBLIC_API_URL}/admins/articles/list`)
        console.log("MyArticleListAPI : "+ response.data)
        return response.data;
    }catch(error:any){
        console.log("MyArticleListAPI EERR!!!"+ error)
        return error
    }
}


export const deleteArticleAPI = async (id:number) => {
    try {
        const response:any = await instance().delete('/articles/delete',{
            params: {id}
        })
        console.log("DeleteArticleAPI : "+ response.data)
        return response.data
    } catch (error) {
        console.log("DeleteArticleAPI EERR!!!"+ error)
        return error
    }
}

export const findArticleByIdAPI = async (id:number) => {
    try {
        const response:any = await instance().get('/articles/detail',{
            params: {id}
        })
        console.log("findArticleByIdAPI : "+ response.data)
        return response.data
    } catch (error) {
        console.log("findArticleByIdAPI EERR!!!"+ error)
        return error
    }
}

export const saveArticleAPI = async (article: IArticle) => {
    try {
        const response = await instance().post('/articles/save', article)
        console.log("SaveArticleAPI : "+ response.data)
        return response.data
    } catch (error) {
        console.log("SaveArticleAPI EERR!!!"+ error)
        return error
    }
}

export const updateAricleAPI = async (article: IArticle) => {
    try {
        const response = await instance().put('/articles/modify', article)
        console.log("UpdateAricleAPI : "+ response.data)
        return response.data
    } catch (error) {
        console.log("UpdateAricleAPI EERR!!!"+ error)
        return error
    }
}
