'use server'

import { IAdmin } from "@/app/component/admins/model/admin.model";
import client from "@/_lib/prisma/db";
import { NextResponse } from "next/server";

export async function AllAdmins() {
    const response = await client.users.findMany({})
    return response
}

export async function Colsadmin() {
    const response = await client.users.findFirst({})
    return response
}

export async function SingleAdmin(id: number) {
    const response = await client.users.findFirst({
        where: { id: id },
    })
    return response
}

export async function DeleteAdmin(id: number) {
    const response = await client.users.delete({
        where: { id: id },
    })
    return response
}

export async function ExistAdmin(username: string) {
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

export async function LoginAdmin(user: IAdmin) {
    console.log("LoginAdminAPI : " + user.id);
    const { id, username, password } = user;
    const response = await client.users.update({
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

export async function LogoutAdmin(id: number) {
    const response = await client.users.update({
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

export async function JoinAdmin(user: IAdmin) {
    const { username, password, phone, name, age, email, address, asset, mbti, investment_propensity } = user;
    const response = await client.users.create({
        data: {
            username: username,
            password: password,
            name: name,
            phone: phone,
            age: age,
            email: email,
            address: address,
            asset: asset,
            mbti: mbti,
            investment_propensity: investment_propensity,
        },
    });
    return NextResponse.json({ message: "success", data: response })
}
