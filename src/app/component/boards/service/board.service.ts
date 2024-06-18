import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllBoardsAPI, FindSingleBoardAPI, SaveBoardAPI, UpdateBoardAPI } from "./board.api";
import { idID } from "@mui/material/locale";
import { IBoard } from "../model/board.model";

export const fetchAllBoards: any = createAsyncThunk(
    'boards/fetchAllBoards',
    async () =>  await AllBoardsAPI()
)

export const fetchFindSingleBoard: any = createAsyncThunk(
    'boards/fetchFindSingleBoard',
    async (id:number) =>  await FindSingleBoardAPI(id)
)

export const fetchUpdateBoard: any = createAsyncThunk(
    'boards/fetchUpdateBoard',
    async (board:IBoard) =>  await UpdateBoardAPI(board)
)

export const fetchSaveBoard: any = createAsyncThunk(
    'boards/fetchSaveBoard',
    async (board:IBoard) =>  await SaveBoardAPI(board)
)
