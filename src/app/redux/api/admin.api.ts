'use server'

import { instance } from "@/app/common/config/axios-config"
import { IAdmin } from "@/app/redux/model/admin.model"
// import { instance } from "@/app/common/config/axios-config"

export const allAdminsAPI = async () => {
    const response = await instance().get('/admins/list', {})
    return response.data
}

export const findAdminByIdAPI = async (id: number) => {
    try {
        const response = await instance().get('/admins/detail', {
            params: { id }
        })
        console.log("findAdminByIdAPI : " + response.data)
        return response.data
    } catch (error) {
        console.log("findAdminByIdAPI EERR!!!" + error)
        return error
    }
}

export const deleteAdminAPI = async (id: number) => {
    try {
        const response = await instance().delete('/admins/delete', {
            params: { id }
        })
        console.log("DeleteAdminAPI : " + response.data)
        return response.data
    } catch (error) {
        console.log("DeleteAdminAPI EERR!!!" + error)
        return error
    }
}

export const existAdminAPI = async (username: string) => {
    try {
        const response = await instance().get('/auth/exists-username', {
            params: { username }
        })
        return response.data
    } catch (error: any) {
        console.log("ExistAdminAPI EERR!!!", error)
        return error
    }
}

export const loginAdminAPI = async (admin: IAdmin) => {
    try {
        const response = await instance().post('/auth/login', admin)
        console.log("LoginAdminAPI : " + response.data)
        return response.data
    } catch (error) {
        console.log("LoginAdminAPI EERR!!! " + error)
        return error
    }
}

export const logoutAdminAPI = async () => {
    try {
        console.log("fdf")
        const response = await instance().get('/admins/logout',)
        console.log('LogoutAdminAPI : ', response.data)
        return response.data
    } catch (error) {
        console.log(error, "LogoutAdminAPI EERR!!!")
        return error
    }
}

export const joinAdminAPI = async (admin: IAdmin) => {
    try {
        const response = await instance().post('/admins/save', admin)
        console.log("JoinAdminAPI : " + response)
        return response
    } catch (error) {
        console.log("JoinAdminAPI EERR!!!" + error)
        return error
    }
}