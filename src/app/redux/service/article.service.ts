import { createAsyncThunk } from "@reduxjs/toolkit";
import { allArticlesAPI, deleteArticleAPI, findSingleArticleAPI, myArticleListAPI, saveArticleAPI, updateAricleAPI} from "../api/article.api";
import { IArticle } from "../model/article.model";


export const fetchAllArticles: any = createAsyncThunk(
    'articles/fetchAllArticles',
    async () =>  await allArticlesAPI()
)

export const fetchMyArticleList: any = createAsyncThunk(
    'articles/fetchMyArticleList',
    async (board:number) =>  await myArticleListAPI(board)
)

export const fetchDeleteArticle : any = createAsyncThunk(
    'articles/fetchDeleteArticle',
    async (id:number) =>  await deleteArticleAPI(id)
)

export const fetchFindSingleArticle : any = createAsyncThunk(
    'articles/fetchFindSingleArticle',
    async (id:number) =>  await findSingleArticleAPI(id)
)

export const fetchSaveArticle : any = createAsyncThunk(
    'articles/fetchSaveArticle',
    async (aricle: IArticle) =>  await saveArticleAPI(aricle)
)

export const fetchUpdateAricle : any = createAsyncThunk(
    'articles/fetchUpdateAricle',
    async (aricle: IArticle) =>  await updateAricleAPI(aricle)
)