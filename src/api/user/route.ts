'use server'

import client from "@/lib/db";
import { NextResponse } from "next/server";
import { IUsertype } from "./model/user-model";

export async function SingleUser(id: number) {
    const response = await client.users.findFirst({
        where: { id: id },
    })
    return response
}

export async function ExistUser(username: string) {
    console.log("ExistUserAPI : " + username);
    const response = await client.users.findFirst({
        where: { username: username },
    })
    return response
}

export async function LoginUser(user: IUsertype) {
    console.log("LoginUserAPI : "+user.id);
    const {id, username, password } = user;
    const response = await client.users.update({
        where: {
            id : id,
            username: username,
            password: password,
        },
        data: {
            token: "login token add"
        }
    });
    console.log("LoginUserAPI : "+response)
    return response
}

export async function LogoutUser(id: number) {
    const response = await client.users.update({
        where: {
            id : id,
        },
        data: {
            token: ""
        }
    });
    console.log("LoginUserAPI : "+response)
    return response
}

export async function AuthUser(user: IUsertype) {
    const { username, password, phone, name, age, email, address, asset, mbti, investment_propensity } = user;
    const response = await client.users.create({
        data: {
            username: username,
            password: password,
            name:name,
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
