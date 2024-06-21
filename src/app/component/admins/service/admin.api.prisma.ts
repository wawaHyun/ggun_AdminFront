// 'use server'

// import { AllAdmins, DeleteAdmin, ExistAdmin, JoinAdmin, LoginAdmin, LogoutAdmin, SingleAdmin } from "@/app/api/admin/route"
// import { IAdmin } from "../model/admin.model"

// export const AllAdminsAPI = async () => {
//         const response = await AllAdmins ()
//         return response
// }

// export const SingleAdminAPI = async (id:number) => {
//     try {
//         const response = await SingleAdmin (id)
//         console.log("SingleAdminAPI : "+ response)
//         return response
//     } catch (error) {
//         console.log("SingleAdminAPI EERR!!!"+ error)
//         return error
//     }
// }

// export const DeleteAdminAPI = async (id:number) => {
//     try {
//         const response = await DeleteAdmin (id)
//         console.log("DeleteAdminAPI : "+ response)
//         return response
//     } catch (error) {
//         console.log("DeleteAdminAPI EERR!!!"+ error)
//         return error
//     }
// }

// export const ExistAdminAPI = async (username: string) => {
//     try {
//         const response = await ExistAdmin(username)
//         console.log("ExistAdminAPI : "+ response)
//         return response
//     } catch (error) {
//         console.log("ExistAdminAPI EERR!!!"+ error)
//         return error
//     }
// }

// export const LoginAdminAPI = async (admin: IAdmin) => {
//     try {
//         const response = await LoginAdmin(admin)
//         console.log("LoginAdminAPI : "+ response)
//         return response
//     } catch (error) {
//         console.log("LoginAdminAPI EERR!!!"+ error)
//         return error
//     }
// }

// export const LogoutAdminAPI = async (id:number) => {
//     try {
//         const response:any = await LogoutAdmin(id)
//         console.log("LogoutAdminAPI : "+ response)
//         return response
//     } catch (error) {
//         console.log("LogoutAdminAPI EERR!!!"+ error)
//         return error
//     }
// }

// export const JoinAdminAPI = async (admin: IAdmin) => {
//     try {
//         const response = await JoinAdmin(admin)
//         console.log("JoinAdminAPI : "+ response)
//         return response
//     } catch (error) {
//         console.log("JoinAdminAPI EERR!!!"+ error)
//         return error
//     }
// }