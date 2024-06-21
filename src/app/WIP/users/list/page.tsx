'use client'

import Image from 'next/image';
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "@/app/component/users/model/user.model";
import React from "react";
import { fetchAllUsers } from "@/app/component/users/service/user.service";
import { getAllUsers } from "@/app/component/users/service/user.slice";
import { PG } from "@/app/common/enums/PG";
import { MoveButton } from "@/atoms/button/MoveButton";

const UserList: NextPage = () => {

    const router = useRouter();
    const dispatch = useDispatch()
    const allusers: IUser[] = useSelector(getAllUsers)

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])


    return (
            <div className="w-screen h-screen bg-green-300 mt-2 items-center content-center">
                <div className="w-[30%] mb-3 h-[50px] broder">
                    <MoveButton text="임직원 추가" path={() => alert("임직원을 추가하기 위해서는 인사팀에게 문의하십시오.")} />
                </div>

                <div className="">
                    <table>
                        <tr>
                            {/* {allusers && allusers.map((i:IUser) =>{
                                <th>{i.username}</th>
                            })} */}
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
    )
}

export default UserList
