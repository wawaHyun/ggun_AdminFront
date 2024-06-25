import { createAsyncThunk } from "@reduxjs/toolkit";
import { allBoardsAPI, findBoardByIdAPI, saveBoardAPI, updateBoardAPI } from "../api/board.api";
import { IBoard } from "../model/board.model";

export const fetchAllBoards: any = createAsyncThunk(
    'boards/fetchAllBoards',
    async () =>  await allBoardsAPI()
)

export const fetchFindBoardById: any = createAsyncThunk(
    'boards/fetchFindBoardById',
    async (id:number) =>  await findBoardByIdAPI(id)
)

export const fetchUpdateBoard: any = createAsyncThunk(
    'boards/fetchUpdateBoard',
    async (board:IBoard) =>  await updateBoardAPI(board)
)

export const fetchSaveBoard: any = createAsyncThunk(
    'boards/fetchSaveBoard',
    async (board:IBoard) =>  await saveBoardAPI(board)
)
