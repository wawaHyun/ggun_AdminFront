import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllArticlesAPI, DeleteArticleAPI, FindSingleArticleAPI, MyArticleListAPI, SaveArticleAPI, UpdateAricleAPI} from "./article.api";
import { IArticle } from "../model/article.model";


export const fetchAllArticles: any = createAsyncThunk(
    'articles/fetchAllArticles',
    async () =>  await AllArticlesAPI()
)

export const fetchMyArticleList: any = createAsyncThunk(
    'articles/fetchMyArticleList',
    async (board:number) =>  await MyArticleListAPI(board)
)

export const fetchDeleteArticle : any = createAsyncThunk(
    'articles/fetchDeleteArticle',
    async (id:number) =>  await DeleteArticleAPI(id)
)

export const fetchFindSingleArticle : any = createAsyncThunk(
    'articles/fetchFindSingleArticle',
    async (id:number) =>  await FindSingleArticleAPI(id)
)

export const fetchSaveArticle : any = createAsyncThunk(
    'articles/fetchSaveArticle',
    async (aricle: IArticle) =>  await SaveArticleAPI(aricle)
)

export const fetchUpdateAricle : any = createAsyncThunk(
    'articles/fetchUpdateAricle',
    async (aricle: IArticle) =>  await UpdateAricleAPI(aricle)
)