'use client'

import { DataGrid } from "@mui/x-data-grid";
import Image from 'next/image';
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "@/app/component/users/model/user.model";
import React from "react";
import { fetchAllUsers } from "@/app/component/users/service/user.service";
import { getAllUsers } from "@/app/component/users/service/user.slice";
import MoveBotton from "@/app/atoms/button/MoveButton";
import UserColumns from "@/app/component/users/modul/user.columns";
import { PG } from "@/app/component/common/enums/PG";

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
                    <MoveBotton text="임직원 추가" path={() => router.push(`${PG.USER}/join`)} />
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
