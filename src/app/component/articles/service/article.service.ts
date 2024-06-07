import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllArticlesAPI} from "./article.api";


export const fetchAllArticles: any = createAsyncThunk(
    'articles/fetchAllArticles',
    async () =>  await AllArticlesAPI()
)
