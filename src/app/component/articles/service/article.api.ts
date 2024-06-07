'use server'
import { AllArticleList } from "@/api/article/route"
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
