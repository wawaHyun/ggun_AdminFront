
import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../model/board.model";
import { fetchAllBoards, fetchFindBoardById, fetchSaveBoard, fetchUpdateBoard } from "../service/board.service";

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

interface BoardState {
    message? : string,
    json?: IBoard,
    array?: Array<IBoard>
}

export const initialState: BoardState = {
    message : '',
    json: {} as IBoard,
    array: []
}


export const boardSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const { pending, rejected } = status;

        builder
            .addCase(fetchAllBoards.fulfilled, (state: any, { payload }: any) => { state.array = payload }) 
            .addCase(fetchFindBoardById.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(fetchUpdateBoard.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(fetchSaveBoard.fulfilled, (state: any, { payload }: any) => { state.json = payload })
    }
})


export const getAllBoards = (state: any) => state.board.array;
export const getSingleBoard = (state: any) => state.board.json;
export const getCountBoard = (state: any) => state.board.count;

export const { } = boardSlice.actions

export default boardSlice.reducer;