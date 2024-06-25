'use server'

import { IBoard } from "../model/board.model"
import { allBoards, findSingleBoard, saveBoard, updateBoard } from "../../api/board/route"


export const allBoardsAPI = async () => {
    try {
        const response:IBoard[] = await allBoards ()
        console.log("AllBoardsAPI : "+ response)
        return response
    } catch (error) {
        console.log("AllBoardsAPI EERR!!!"+ error)
        return error
    }
}

export const findSingleBoardAPI = async (id:number) => {
    try {
        const response = await findSingleBoard(id)
        console.log("FindSingleBoardAPI : "+ response)
        return response
    } catch (error) {
        console.log("FindSingleBoardAPI EERR!!!"+ error)
        return error
    }
}

export const updateBoardAPI = async (board:IBoard) => {
    try {
        const response:any = await updateBoard(board)
        console.log("UpdateBoardAPI : "+ response)
        return response
    } catch (error) {
        console.log("UpdateBoardAPI EERR!!!"+ error)
        return error
    }
}

export const saveBoardAPI = async (board:IBoard) => {
    try {
        const response:any = await saveBoard(board)
        // console.log("SaveBoardAPI : "+ response)
        return response
    } catch (error) {
        console.log("SaveBoardAPI EERR!!!"+ error)
        return error
    }
}