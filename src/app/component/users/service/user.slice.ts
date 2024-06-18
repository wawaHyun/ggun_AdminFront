import { createSlice } from "@reduxjs/toolkit"
import { fetchAllUsers, fetchExistUser, fetchJoinUser, fetchLoginUser, fetchLogoutUser, fetchSingleUser } from "./user.service"
import { IUser } from "../model/user.model"

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}


interface userState {
    json?: IUser,
    array?: Array<IUser>,
}

export const initialState: userState = {
    json: {} as IUser,
    array: [],
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const { pending, rejected } = status;
        builder
            .addCase(fetchAllUsers.fulfilled, (state: any, { payload }: any) => { state.array = payload })
            .addCase(fetchSingleUser.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(fetchExistUser.fulfilled, (state: any, { payload }: any) => { state.text = payload })
            .addCase(fetchLoginUser.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(fetchLogoutUser.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(fetchJoinUser.fulfilled, (state: any, { payload }: any) => { state.json = payload })
    }
})

export const getAllUsers = (state: any) => state.user.array;
export const getSingleUser = (state: any) => state.user.json;
export const getCountUser = (state: any) => state.user.count;
export const getAuth = (state: any) => state.user.auth;
export const getMsgUser = (state: any) => state.user.text;

export const { } = userSlice.actions

export default userSlice.reducer;