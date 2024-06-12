'use server'

import { IBoard } from "../model/board.model"
import { AllBoards, FindSingleBoard, SaveBoard, UpdateBoard } from "@/api/board/route"


export const AllBoardsAPI = async () => {
    try {
        const response:IBoard[] = await AllBoards ()
        console.log("AllBoardsAPI : "+ response)
        return response
    } catch (error) {
        console.log("AllBoardsAPI EERR!!!"+ error)
        return error
    }
}

export const FindSingleBoardAPI = async (id:number) => {
    try {
        const response = await FindSingleBoard(id)
        console.log("FindSingleBoardAPI : "+ response)
        return response
    } catch (error) {
        console.log("FindSingleBoardAPI EERR!!!"+ error)
        return error
    }
}

export const UpdateBoardAPI = async (board:IBoard) => {
    try {
        const response:any = await UpdateBoard(board)
        console.log("UpdateBoardAPI : "+ response)
        return response
    } catch (error) {
        console.log("UpdateBoardAPI EERR!!!"+ error)
        return error
    }
}

export const SaveBoardAPI = async (board:IBoard) => {
    try {
        const response:any = await SaveBoard(board)
        // console.log("SaveBoardAPI : "+ response)
        return response
    } catch (error) {
        console.log("SaveBoardAPI EERR!!!"+ error)
        return error
    }
}