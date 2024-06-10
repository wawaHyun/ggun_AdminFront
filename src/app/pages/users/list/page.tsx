'use client'

import { DataGrid } from "@mui/x-data-grid";
import Image from 'next/image';
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect  } from "react";
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


    return (<>

        <div className="w-screen text-center mb-5 h-[50px] broder">
            <MoveBotton text="임직원 추가" path={()=>router.push(`${PG.USER}/join`)}/>
        </div>

        <div style={{ height: "100%", width: "90%", fontSize: 50 }} className="overflow:scroll">
            {allusers && <DataGrid
                rows={allusers}
                columns={UserColumns()}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                
                }}
                pageSizeOptions={[10, 20, 50]}
                checkboxSelection
            />}
        </div>
    </>)
}

export default UserList
