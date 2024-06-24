import { createAsyncThunk } from "@reduxjs/toolkit";
import { allAdminsAPI, deleteAdminAPI, existAdminAPI, joinAdminAPI, loginAdminAPI, logoutAdminAPI, singleAdminAPI } from "../api/admin.api";
import { IAdmin } from "../model/admin.model";

export const fetchAllAdmins: any = createAsyncThunk(
    'admins/fetchAllAdmins',
    async () => await allAdminsAPI()
)

export const fetchSingleAdmin: any = createAsyncThunk(
    'admins/fetchSingleAdmin',
    async (id: number) => await singleAdminAPI(id)
)

export const fetchDeleteAdmin: any = createAsyncThunk(
    'admins/fetchDeleteAdmin',
    async (id: number) => await deleteAdminAPI(id)
)

export const fetchExistAdmin: any = createAsyncThunk(
    'admins/fetchExistAdmin',
    async (username: string) => await existAdminAPI(username)
)

export const fetchLoginAdmin: any = createAsyncThunk(
    'admins/fetchLoginAdmin',
    async (admin: IAdmin) => await loginAdminAPI(admin)
)

export const fetchLogoutAdmin: any = createAsyncThunk(
    'admins/fetchLogoutAdmin',
    async () => await logoutAdminAPI()
)

export const fetchJoinAdmin: any = createAsyncThunk(
    'admins/fetchJoinAdmin',
    async (admin: IAdmin) => await joinAdminAPI(admin)
)
