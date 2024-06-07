'use server'

import { AllArticleList, DeleteArticle, FindSingleArticle, MyArticleList, SaveArticle, UpdateAricle } from "@/api/article/route"
import { instance } from "../../common/config/axios-config"
import { IArticle } from "../model/article.model"


export const AllArticlesAPI = async () => {
    try {
        const response:IArticle[] = await AllArticleList ()
        console.log("AllArticlesAPI : "+ response)
        return response
    } catch (error) {
        console.log("AllArticlesAPI EERR!!!"+ error)
        return error
    }
}

export const MyArticleListAPI = async (id:number) => {
    try {
        const response:IArticle[] = await MyArticleList(id)
        console.log("MyArticleListAPI : "+ response)
        return response
    } catch (error) {
        console.log("MyArticleListAPI EERR!!!"+ error)
        return error
    }
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
        const response:IArticle = await SaveArticle(aricle)
        console.log("SaveArticleAPI : "+ response)
        return response
    } catch (error) {
        console.log("SaveArticleAPI EERR!!!"+ error)
        return error
    }
}

export const UpdateAricleAPI = async (aricle: IArticle) => {
    try {
        const response:any = await UpdateAricle(aricle)
        console.log("UpdateAricleAPI : "+ response)
        return response
    } catch (error) {
        console.log("UpdateAricleAPI EERR!!!"+ error)
        return error
    }
}
