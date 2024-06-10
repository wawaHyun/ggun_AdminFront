import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllUsersAPI, DeleteUserAPI, ExistUserAPI, JoinUserAPI, LoginUserAPI, LogoutUserAPI, SingleUserAPI } from "./user.api";
import { IUser } from "../model/user.model";

export const fetchAllUsers: any = createAsyncThunk(
    'articles/fetchAllUsers',
    async () =>  await AllUsersAPI()
)

export const fetchSingleUser: any = createAsyncThunk(
    'articles/fetchSingleUser',
    async (id:number) =>  await SingleUserAPI(id)
)

export const fetchDeleteUser: any = createAsyncThunk(
    'articles/fetchDeleteUser',
    async (id:number) =>  await DeleteUserAPI(id)
)


export const fetchExistUser: any = createAsyncThunk(
    'articles/fetchExistUser',
    async (username: string) =>  await ExistUserAPI(username)
)

export const fetchLoginUser: any = createAsyncThunk(
    'articles/fetchLoginUser',
    async (user: IUser) =>  await LoginUserAPI(user)
)

export const fetchLogoutUser: any = createAsyncThunk(
    'articles/fetchLogoutUser',
    async (id:number) =>  await LogoutUserAPI(id)
)

export const fetchJoinUser: any = createAsyncThunk(
    'articles/fetchJoinUser',
    async (user: IUser) =>  await JoinUserAPI(user)
)
function AllUserAPI(): any {
    throw new Error("Function not implemented.");
}

