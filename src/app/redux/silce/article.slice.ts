import { createSlice } from "@reduxjs/toolkit";
import { fetchAllArticles, fetchDeleteArticle, fetchFindArticleById, fetchMyArticleList, fetchSaveArticle, fetchUpdateAricle } from '../service/article.service';
import { IArticle } from "../model/article.model";

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

interface articleState {
    message? : string,
    json? : IArticle,
    array? : Array<IArticle>
}

export const initialState:articleState = {
    message : '',
    json : {} as IArticle,
    array : []
}


export const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const { pending, rejected } = status;

        builder
            .addCase(fetchAllArticles.fulfilled, (state: any, { payload }: any) => { state.array = payload })
            .addCase(fetchMyArticleList.fulfilled, (state: any, { payload }: any) => { state.array = payload })
            .addCase(fetchDeleteArticle.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(fetchFindArticleById.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(fetchSaveArticle.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(fetchUpdateAricle.fulfilled, (state: any, { payload }: any) => { state.json = payload }) 
    }
})


export const getAllArticles = (state: any) => state.article.array;
export const getSingleArticle = (state: any) => state.article.json;
export const getCountArticle = (state:any) => state.article.count;
export const getMsgArticle = (state:any) => state.article.message;

export const { } = articleSlice.actions

export default articleSlice.reducer;