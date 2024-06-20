'use server'

import { AllUsers, DeleteUser, ExistUser, JoinUser, LoginUser, LogoutUser, SingleUser } from "@/app/api/user/route"
import { IUser } from "../model/user.model"

export const AllUsersAPI = async () => {
        const response = await AllUsers ()
        return response
}

export const SingleUserAPI = async (id:number) => {
    try {
        const response = await SingleUser (id)
        console.log("SingleUserAPI : "+ response)
        return response
    } catch (error) {
        console.log("SingleUserAPI EERR!!!"+ error)
        return error
    }
}

export const DeleteUserAPI = async (id:number) => {
    try {
        const response = await DeleteUser (id)
        console.log("DeleteUserAPI : "+ response)
        return response
    } catch (error) {
        console.log("DeleteUserAPI EERR!!!"+ error)
        return error
    }
}

export const ExistUserAPI = async (username: string) => {
    try {
        const response = await ExistUser(username)
        console.log("ExistUserAPI : "+ response)
        return response
    } catch (error) {
        console.log("ExistUserAPI EERR!!!"+ error)
        return error
    }
}

export const LoginUserAPI = async (user: IUser) => {
    try {
        const response = await LoginUser(user)
        console.log("LoginUserAPI : "+ response)
        return response
    } catch (error) {
        console.log("LoginUserAPI EERR!!!"+ error)
        return error
    }
}

export const LogoutUserAPI = async (id:number) => {
    try {
        const response:any = await LogoutUser(id)
        console.log("LogoutUserAPI : "+ response)
        return response
    } catch (error) {
        console.log("LogoutUserAPI EERR!!!"+ error)
        return error
    }
}

export const JoinUserAPI = async (user: IUser) => {
    try {
        const response = await JoinUser(user)
        console.log("JoinUserAPI : "+ response)
        return response
    } catch (error) {
        console.log("JoinUserAPI EERR!!!"+ error)
        return error
    }
}