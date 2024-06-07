import { createSlice } from "@reduxjs/toolkit";
import { fetchAllArticles } from './article.service';
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
            // .addCase(fetchMylistArticles.fulfilled, (state: any, { payload }: any) => { state.array = payload })
            // .addCase(findArticleById.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            // .addCase(findCountArticle.fulfilled, (state: any, { payload }: any) => { state.count = payload })
            // .addCase(modifyArticleById.fulfilled, (state: any, { payload }: any) => { state.array = payload })
            // .addCase(deleteArticleById.fulfilled, (state: any, { payload }: any) => { state.json = payload }) 
            // .addCase(saveArticle.fulfilled, (state: any, { payload }: any) => { state.message = payload }) 
            // .addCase(findByBoard.fulfilled, (state: any, { payload }: any) => { state.array = payload }) 
    }
})


export const getAllArticles = (state: any) => state.article.array;
export const getSingleArticle = (state: any) => state.article.json;
export const getCountArticle = (state:any) => state.article.count;
export const getSaveArticle = (state:any) => state.article.message;

export const { } = articleSlice.actions

export default articleSlice.reducer;