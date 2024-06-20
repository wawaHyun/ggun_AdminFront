'use server'

import { IUser } from "@/app/component/users/model/user.model";
import client from "@/_lib/prisma/db";
import { NextResponse } from "next/server";

export async function AllUsers() {
    const response = await client.users.findMany({})
    return response
}

export async function Colsuser() {
    const response = await client.users.findFirst({})
    return response
}

export async function SingleUser(id: number) {
    const response = await client.users.findFirst({
        where: { id: id },
    })
    return response
}

export async function DeleteUser(id: number) {
    const response = await client.users.delete({
        where: { id: id },
    })
    return response
}

export async function ExistUser(username: string) {
    console.log("ExistUserAPI : " + username);
    try {
        const response = await client.users.findFirst({
            where: { username: username },
        })
        .then((res:any)=>{
            const result = (res != true) ? 'SUCCESS' : 'FAIL'
            console.log("ExistUserAPI result : " + result);
            return result
        })
    } catch (error) {
        console.log("ExistUser err : " + error
        )
    }
}

export async function LoginUser(user: IUser) {
    console.log("LoginUserAPI : " + user.id);
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
    console.log("LoginUserAPI : " + response)
    return response
}

export async function LogoutUser(id: number) {
    const response = await client.users.update({
        where: {
            id: id,
        },
        data: {
            token: ""
        }
    });
    console.log("LoginUserAPI : " + response)
    return response
}

export async function JoinUser(user: IUser) {
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
