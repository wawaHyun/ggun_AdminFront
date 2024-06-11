import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllNpsAPI } from "./jusik.api";


export const fetchAllNps: any = createAsyncThunk(
    'users/fetchAllNps',
    async () =>  await AllNpsAPI()
)