import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllUsersAPI, DeleteUserAPI, ExistUserAPI, JoinUserAPI, LoginUserAPI, LogoutUserAPI, SingleUserAPI } from "./user.api";
import { IUser } from "../model/user.model";

export const fetchAllUsers: any = createAsyncThunk(
    'users/fetchAllUsers',
    async () =>  await AllUsersAPI()
)

export const fetchSingleUser: any = createAsyncThunk(
    'users/fetchSingleUser',
    async (id:number) =>  await SingleUserAPI(id)
)

export const fetchDeleteUser: any = createAsyncThunk(
    'users/fetchDeleteUser',
    async (id:number) =>  await DeleteUserAPI(id)
)

export const fetchExistUser: any = createAsyncThunk(
    'users/fetchExistUser',
    async (username: string) =>  await ExistUserAPI(username)
)

export const fetchLoginUser: any = createAsyncThunk(
    'users/fetchLoginUser',
    async (user: IUser) =>  await LoginUserAPI(user)
)

export const fetchLogoutUser: any = createAsyncThunk(
    'users/fetchLogoutUser',
    async (id:number) =>  await LogoutUserAPI(id)
)

export const fetchJoinUser: any = createAsyncThunk(
    'users/fetchJoinUser',
    async (user: IUser) =>  await JoinUserAPI(user)
)
