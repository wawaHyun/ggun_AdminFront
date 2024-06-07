'use server'

import { IArticle } from "@/app/component/articles/model/article.model";
import client from "@/lib/db";

export async function AllArticleList() {
    const response: IArticle[] = await client.articles.findMany({})
    return response
}