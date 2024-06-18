import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllNpsAPI, Top10NpsAPI } from "./transaction.api";


export const fetchAllNps: any = createAsyncThunk(
    'nps/fetchAllNps',
    async () =>  await AllNpsAPI()
)

export const fetchTop10Nps: any = createAsyncThunk(
    'nps/fetchTop10Nps',
    async () =>  await Top10NpsAPI()
)