'use server'

import { IAdmin } from "../../redux/model/admin.model";
import client from "../../../../_lib/prisma/db";

export async function allAdmins() {
    const response = await client.admins.findMany({})
    return response
}

export async function colsadmin() {
    const response = await client.admins.findFirst({})
    return response
}

export async function singleAdmin(id: number) {
    const response = await client.admins.findFirst({
        where: { id: id },
    })
    return response
}

export async function deleteAdmin(id: number) {
    const response = await client.admins.delete({
        where: { id: id },
    })
    return response
}

export async function existAdmin(username: string) {
    console.log("ExistAdminAPI : " + username);
    try {
        const response = await client.users.findFirst({
            where: { username: username },
        })
        .then((res:any)=>{
            const result = (res != true) ? 'SUCCESS' : 'FAIL'
            console.log("ExistAdminAPI result : " + result);
            return result
        })
    } catch (error) {
        console.log("ExistAdmin err : " + error
        )
    }
}

export async function loginAdmin(admin: IAdmin) {
    console.log("LoginAdminAPI : " + admin.id);
    const { id, username, password } = admin;
    const response = await client.admins.update({
        where: {
            id: id,
            username: username,
            password: password,
        },
        data: {
            token: "login token add"
        }
    });
    console.log("LoginAdminAPI : " + response)
    return response
}

export async function logoutAdmin(id: number) {
    const response = await client.admins.update({
        where: {
            id: id,
        },
        data: {
            token: ""
        }
    });
    console.log("LoginAdminAPI : " + response)
    return response
}

export async function joinAdmin(admin: IAdmin) {
    const { username, password, phone, name, age, email, address, asset, mbti, investment_propensity } = admin;
    // const response = await client.admins.create({
    //     data: {
    //         username: username,
    //         password: password,
    //         name: name,
    //         phone: phone,
    //         age: age,
    //         email: email,
    //         address: address,
    //         asset: asset,
    //         mbti: mbti,
    //         investment_propensity: investment_propensity,
    //     },
    // });
    // return NextResponse.json({ message: "success", data: response })
}
