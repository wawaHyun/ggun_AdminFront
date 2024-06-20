'use server'

import { AllArticleList, DeleteArticle, FindSingleArticle, MyArticleList, SaveArticle, UpdateAricle } from "@/app/api/article/route"
// import { instance } from "../../common/config/axios-config"
import { IArticle } from "../model/article.model"


export const AllArticlesAPI = async () => {
    try {
        const response = await AllArticleList ()
        // console.log("AllArticlesAPI : "+ response)
        return response
        return response
    } catch (error) {
        console.log("AllArticlesAPI EERR!!!"+ error)
        return error
    }
}

export const MyArticleListAPI = async (board:number) => {
    console.log("MyArticleListAPI : "+ board)
        const response = await MyArticleList(board)
        // console.log("MyArticleListAPI : "+ response)
        return response
}

export const DeleteArticleAPI = async (id:number) => {
    try {
        const response:any = await DeleteArticle(id)
        console.log("DeleteArticleAPI : "+ response)
        return response
    } catch (error) {
        console.log("DeleteArticleAPI EERR!!!"+ error)
        return error
    }
}

export const FindSingleArticleAPI = async (id:number) => {
    try {
        const response:any = await FindSingleArticle(id)
        console.log("FindSingleArticleAPI : "+ response)
        return response
    } catch (error) {
        console.log("FindSingleArticleAPI EERR!!!"+ error)
        return error
    }
}

export const SaveArticleAPI = async (aricle: IArticle) => {
    try {
        const response = await SaveArticle(aricle)
        console.log("SaveArticleAPI : "+ response)
        return response
    } catch (error) {
        console.log("SaveArticleAPI EERR!!!"+ error)
        return error
    }
}

export const UpdateAricleAPI = async (aricle: IArticle) => {
    try {
        const response = await UpdateAricle(aricle)
        console.log("UpdateAricleAPI : "+ response)
        return response
    } catch (error) {
        console.log("UpdateAricleAPI EERR!!!"+ error)
        return error
    }
}
