import { createAsyncThunk } from "@reduxjs/toolkit";
import { allBoardsAPI, findSingleBoardAPI, saveBoardAPI, updateBoardAPI } from "../api/board.api";
import { IBoard } from "../model/board.model";

export const fetchAllBoards: any = createAsyncThunk(
    'boards/fetchAllBoards',
    async () =>  await allBoardsAPI()
)

export const fetchFindSingleBoard: any = createAsyncThunk(
    'boards/fetchFindSingleBoard',
    async (id:number) =>  await findSingleBoardAPI(id)
)

export const fetchUpdateBoard: any = createAsyncThunk(
    'boards/fetchUpdateBoard',
    async (board:IBoard) =>  await updateBoardAPI(board)
)

export const fetchSaveBoard: any = createAsyncThunk(
    'boards/fetchSaveBoard',
    async (board:IBoard) =>  await saveBoardAPI(board)
)
