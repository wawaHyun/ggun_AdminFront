import { createSlice } from "@reduxjs/toolkit"
import { fetchAllAdmins, fetchExistAdmin, fetchJoinAdmin, fetchLoginAdmin, fetchLogoutAdmin, fetchSingleAdmin } from "./admin.service"
import { IAdmin } from "../model/admin.model"

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}


interface adminState {
    json?: IAdmin,
    array?: Array<IAdmin>,
}

export const initialState: adminState = {
    json: {} as IAdmin,
    array: [],
}

export const userSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const { pending, rejected } = status;
        builder
            .addCase(fetchAllAdmins.fulfilled, (state: any, { payload }: any) => { state.array = payload })
            .addCase(fetchSingleAdmin.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(fetchExistAdmin.fulfilled, (state: any, { payload }: any) => { state.text = payload })
            .addCase(fetchLoginAdmin.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(fetchLogoutAdmin.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(fetchJoinAdmin.fulfilled, (state: any, { payload }: any) => { state.json = payload })
    }
})

export const getAllAdmins = (state: any) => state.user.array;
export const getSingleAdmin = (state: any) => state.user.json;
export const getCountAdmin = (state: any) => state.user.count;
export const getAuth = (state: any) => state.user.auth;
export const getMsgAdmin = (state: any) => state.user.text;

export const { } = userSlice.actions

export default userSlice.reducer;