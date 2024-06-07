
import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../model/board-model";
import { fetchAllBoards, fetchFindSingleBoard, fetchSaveBoard, fetchUpdateBoard } from "./board.service";

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}


interface BoardState {
    json?: IBoard,
    array?: Array<IBoard>
}

export const initialState: BoardState = {
    json: {} as IBoard,
    array: []
}


export const boardSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const { pending, rejected } = status;

        console.log('------------------ conclusion ---------------')
        builder
            .addCase(fetchAllBoards.fulfilled, (state: any, { payload }: any) => { state.array = payload }) //all list
            .addCase(fetchFindSingleBoard.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(fetchUpdateBoard.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(fetchSaveBoard.fulfilled, (state: any, { payload }: any) => { state.json = payload })
    }
})


export const getAllBoards = (state: any) => state.board.array;
export const getSingleBoard = (state: any) => state.board.json;
export const getCountBoard = (state: any) => state.board.count;

export const { } = boardSlice.actions

export default boardSlice.reducer;