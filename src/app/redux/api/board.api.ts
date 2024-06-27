'use server'

import { IBoard } from "../model/board.model"
import { instance } from "@/app/common/config/axios-config"


export const allBoardsAPI = async () => {
    try {
        const response:IBoard[] = await instance().get('/boards/list',{})
        console.log("AllBoardsAPI : "+ response)
        return response
    } catch (error) {
        console.log("AllBoardsAPI EERR!!!"+ error)
        return error
    }
}

export const findBoardByIdAPI = async (id:number) => {
    // try {
    //     const response = await findSingleBoard(id)
    //     console.log("findBoardByIdAPI : "+ response)
    //     return response
    // } catch (error) {
    //     console.log("findBoardByIdAPI EERR!!!"+ error)
    //     return error
    // }
}

export const updateBoardAPI = async (board:IBoard) => {
    try {
        // const response:any = await instance().put('/boards/modify', board)
        // console.log("UpdateBoardAPI : "+ response)
        // return response
    } catch (error) {
        console.log("UpdateBoardAPI EERR!!!"+ error)
        return error
    }
}

export const saveBoardAPI = async (board:IBoard) => {
    try {
        // const response:any = await saveBoard(board)
        // // console.log("SaveBoardAPI : "+ response)
        // return response
    } catch (error) {
        console.log("SaveBoardAPI EERR!!!"+ error)
        return error
    }
}