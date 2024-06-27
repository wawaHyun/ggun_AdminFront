'use server'

import { instance } from "@/app/common/config/axios-config"
import { IChat } from "../model/chat.model"


export const allChatsAPI = async () => {
    try {
        const response:IChat[] = await instance().get('/chats/list', {})
        return response;
    } catch (error) {
        console.log("allChatsAPI EERR!!!"+ error)
        return error
    }
}

export const findChartByIdAPI = async (id:number) => {
    try {
        const response:any = await instance().get('/chats/recieve/${roomId}',{
            params: {id}
        })
        console.log("findChartByIdAPI : "+ response.data)
        return response.data
    } catch (error) {
        console.log("findChartByIdAPI EERR!!!"+ error)
        return error
    }
}

export const sendChatAPI = async (chat: IChat) => {
    try {
        const response = await instance().post('/chats/send', chat)
        console.log("sendChatAPI : "+ response.data)
        return response.data
    } catch (error) {
        console.log("sendChatAPI EERR!!!"+ error)
        return error
    }
}
