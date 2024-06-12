import { createSlice } from "@reduxjs/toolkit"
import { fetchAllNps, fetchTop10Nps } from "./transaction.service";
import { INps } from "../model/nps.model";


const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}


interface npsState {
    json?: INps,
    array?: Array<INps>,
}

export const initialState: npsState = {
    json: {} as INps,
    array: [],
}

export const npsSlice = createSlice({
    name: "nps",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const { pending, rejected } = status;
        builder
            .addCase(fetchAllNps.fulfilled, (state: any, { payload }: any) => { state.array = payload })
            .addCase(fetchTop10Nps.fulfilled, (state: any, { payload }: any) => { state.array = payload })
    }
})

export const getAllNps = (state: any) => state.nps.array;
export const getSingleNps = (state: any) => state.nps.json;
export const getCountNps = (state: any) => state.nps.count;
export const getMsgNps = (state: any) => state.nps.text;

export const { } = npsSlice.actions

export default npsSlice.reducer;