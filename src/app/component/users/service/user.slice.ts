import { createSlice } from "@reduxjs/toolkit"
import { IUser } from "../model/user-model"
import { fetchExistUser, fetchJoinUser, fetchLoginUser, fetchLogoutUser, fetchSingleUser } from "./user.service"

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

interface IAuth{
    status? : number,
    message? : string,
    Token? : string
}

interface userState {
    json? : IUser,
    array? : Array<IUser>,
    auth? : IAuth
}

export const initialState:userState = {
    json : {} as IUser,
    array : [],
    auth : {} as IAuth
}



export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const { pending, rejected } = status;
        builder
            .addCase(fetchSingleUser.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(fetchExistUser.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(fetchLoginUser.fulfilled, (state: any, { payload }: any) => { state.json = payload })
            .addCase(fetchLogoutUser.fulfilled, (state: any, { payload }: any) => { state.json  = payload })
            .addCase(fetchJoinUser.fulfilled, (state: any, { payload }: any) => { state.json = payload })
    }
})

export const getAllUsers = (state: any) => state.user.array;
export const getSingleUser = (state: any) => state.user.json;
export const getCountUser = (state: any) => state.user.count;
export const getAuth = (state: any) => state.user.auth;
export const getflag = (state: any) => state.user.text;

export const { } = userSlice.actions

export default userSlice.reducer;