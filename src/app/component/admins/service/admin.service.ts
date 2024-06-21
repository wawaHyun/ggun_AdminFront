import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllAdminsAPI, DeleteAdminAPI, ExistAdminAPI, JoinAdminAPI, LoginAdminAPI, LogoutAdminAPI, SingleAdminAPI } from "./admin.api";
import { IAdmin } from "../model/admin.model";

export const fetchAllAdmins: any = createAsyncThunk(
    'admins/fetchAllAdmins',
    async () => await AllAdminsAPI()
)

export const fetchSingleAdmin: any = createAsyncThunk(
    'admins/fetchSingleAdmin',
    async (id: number) => await SingleAdminAPI(id)
)

export const fetchDeleteAdmin: any = createAsyncThunk(
    'admins/fetchDeleteAdmin',
    async (id: number) => await DeleteAdminAPI(id)
)

export const fetchExistAdmin: any = createAsyncThunk(
    'admins/fetchExistAdmin',
    async (username: string) => await ExistAdminAPI(username)
)

export const fetchLoginAdmin: any = createAsyncThunk(
    'admins/fetchLoginAdmin',
    async (admin: IAdmin) => await LoginAdminAPI(admin)
)

export const fetchLogoutAdmin: any = createAsyncThunk(
    'admins/fetchLogoutAdmin',
    async () => await LogoutAdminAPI()
)

export const fetchJoinAdmin: any = createAsyncThunk(
    'admins/fetchJoinAdmin',
    async (admin: IAdmin) => await JoinAdminAPI(admin)
)
