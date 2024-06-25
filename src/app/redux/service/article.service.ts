import { createAsyncThunk } from "@reduxjs/toolkit";
import { allArticlesAPI, deleteArticleAPI, findArticleByIdAPI, myArticleListAPI, saveArticleAPI, updateAricleAPI} from "../api/article.api";
import { IArticle } from "../model/article.model";


export const fetchAllArticles: any = createAsyncThunk(
    'articles/fetchAllArticles',
    async () =>  await allArticlesAPI()
)

export const fetchMyArticleList: any = createAsyncThunk(
    'articles/fetchMyArticleList',
    async (id:number) =>  await myArticleListAPI(id)
)

export const fetchDeleteArticle : any = createAsyncThunk(
    'articles/fetchDeleteArticle',
    async (id:number) =>  await deleteArticleAPI(id)
)

export const fetchFindArticleById : any = createAsyncThunk(
    'articles/fetchFindArticleById',
    async (id:number) =>  await findArticleByIdAPI(id)
)

export const fetchSaveArticle : any = createAsyncThunk(
    'articles/fetchSaveArticle',
    async (aricle: IArticle) =>  await saveArticleAPI(aricle)
)

export const fetchUpdateAricle : any = createAsyncThunk(
    'articles/fetchUpdateAricle',
    async (aricle: IArticle) =>  await updateAricleAPI(aricle)
)