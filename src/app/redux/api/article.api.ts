'use server'

import { allArticleList, deleteArticle, findSingleArticle, myArticleList, saveArticle, updateAricle } from "../../api/article/route"
import { IArticle } from "../model/article.model"
import { instance } from "../../common/config/axios-config"


export const AllArticlesAPI = async () => {
    try {
        const response = await instance().get('/articles/list',{})
        // console.log("AllArticlesAPI : "+ response.data)
        return response.data
    } catch (error) {
        console.log("AllArticlesAPI EERR!!!"+ error)
        return error
    }
}

export const MyArticleListAPI = async (board:number) => {
    try{                                                        
        const response = await instance().get('/articles/myList',{
            params: {board}
        })
         console.log("MyArticleListAPI 11 : "+ response)
         console.log("MyArticleListAPI 22 : "+ response.data)
        return response.data
    }catch(error:any){
        console.log(error)
        return error
    }

}

export const DeleteArticleAPI = async (id:number) => {
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

export const FindSingleArticleAPI = async (id:number) => {
    try {
        const response:any = await instance().get('/articles/detail',{
            params: {id}
        })
        console.log("FindSingleArticleAPI : "+ response.data)
        return response.data
    } catch (error) {
        console.log("FindSingleArticleAPI EERR!!!"+ error)
        return error
    }
}

export const SaveArticleAPI = async (article: IArticle) => {
    try {
        const response = await instance().post('/articles/save', article)

        console.log("SaveArticleAPI : "+ response.data)
        return response.data
    } catch (error) {
        console.log("SaveArticleAPI EERR!!!"+ error)
        return error
    }
}

export const UpdateAricleAPI = async (article: IArticle) => {
    try {
        const response = await instance().put('/articles/modify', article)
        console.log("UpdateAricleAPI : "+ response.data)
        return response.data
    } catch (error) {
        console.log("UpdateAricleAPI EERR!!!"+ error)
        return error
    }
}
