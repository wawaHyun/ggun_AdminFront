import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllBoardsAPI, FindSingleBoardAPI, SaveBoardAPI, UpdateBoardAPI } from "./board.api";
import { idID } from "@mui/material/locale";
import { IBoard } from "../model/board-model";

export const fetchAllBoards: any = createAsyncThunk(
    'articles/fetchAllBoards',
    async () =>  await AllBoardsAPI()
)

export const fetchFindSingleBoard: any = createAsyncThunk(
    'articles/fetchFindSingleBoard',
    async (id:number) =>  await FindSingleBoardAPI(id)
)

export const fetchUpdateBoard: any = createAsyncThunk(
    'articles/fetchUpdateBoard',
    async (board:IBoard) =>  await UpdateBoardAPI(board)
)

export const fetchSaveBoard: any = createAsyncThunk(
    'articles/fetchSaveBoard',
    async (board:IBoard) =>  await SaveBoardAPI(board)
)
