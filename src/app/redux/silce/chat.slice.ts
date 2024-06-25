import { createSlice } from "@reduxjs/toolkit";
import { IChat } from "../model/chat.model";
import { fetchAllChats, fetchChatById, fetchSendChat } from "../service/chat.service";


const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

interface ChatState {
    message? : string,
    json?: IChat,
    array?: Array<IChat>
}

export const initialState: ChatState = {
    message : '',
    json: {} as IChat,
    array: []
}


export const chatSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const { pending, rejected } = status;

        builder
            .addCase(fetchAllChats.fulfilled, (state: any, { payload }: any) => { state.array = payload }) 
            .addCase(fetchChatById.fulfilled, (state: any, { payload }: any) => { state.array = payload })
            .addCase(fetchSendChat.fulfilled, (state: any, { payload }: any) => { state.json = payload })
    }
})


export const getAllChats = (state: any) => state.chat.array;
export const getSingleChat = (state: any) => state.chat.json;

export const { } = chatSlice.actions

export default chatSlice.reducer;