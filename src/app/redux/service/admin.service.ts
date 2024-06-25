import { createAsyncThunk } from "@reduxjs/toolkit";
import { allAdminsAPI, deleteAdminAPI, existAdminAPI, findAdminByIdAPI, joinAdminAPI, loginAdminAPI, logoutAdminAPI } from "../api/admin.api";
import { IAdmin } from "../model/admin.model";

export const fetchAllAdmins: any = createAsyncThunk(
    'admins/fetchAllAdmins',
    async () => await allAdminsAPI()
)

export const fetchFindAdminById: any = createAsyncThunk(
    'admins/fetchFindAdminById',
    async (id: number) => await findAdminByIdAPI(id)
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
