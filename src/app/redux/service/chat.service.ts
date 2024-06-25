import { createAsyncThunk } from "@reduxjs/toolkit";
import { allChatsAPI, findChartByIdAPI, sendChatAPI } from "../api/chat.api";
import { IChat } from "../model/chat.model";


export const fetchAllChats: any = createAsyncThunk(
    'boards/fetchAllChats',
    async () =>  await allChatsAPI()
)
export const fetchChatById: any = createAsyncThunk(
    'boards/fetchChatById',
    async (id:number) =>  await findChartByIdAPI(id)
)
export const fetchSendChat: any = createAsyncThunk(
    'boards/fetchSendChat',
    async (chat: IChat) =>  await sendChatAPI(chat)
)
