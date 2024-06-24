'use client'

import Image from 'next/image';
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { MoveButton } from "../../@/app/component/button/MoveButton";
import { fetchAllAdmins } from '../../../../../redux/service/admin.service';
import { IAdmin } from '../../../../../redux/model/admin.model';
import { getAllAdmins } from '../../@/app/component/admins/service/admin.slice';

const AdminList: NextPage = () => {

    const router = useRouter();
    const dispatch = useDispatch()
    const alladmins: IAdmin[] = useSelector(getAllAdmins)

    useEffect(() => {
        dispatch(fetchAllAdmins())
    }, [])


    return (
        <div className="w-full h-full">
        <div className="fixed z-[1] top-0 left-0 right-0 m-auto bg-pebble-200 text-[32px] rounded-b-lg text-center w-[80%] pb-1">
            임직원 권한 관리</div>
        <div className="absolute top-[43px] left-0 right-0 m-auto w-[80%] bg-white">
            <table className="sticky z-[0] p-4">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>내용</th>
                        <th>처리상태</th>
                        <th>작성일</th>
                        <th>처리완료일</th>
                    </tr>
                </thead>
                <tbody>
                    {alladmins.map((i: any) =>
                        <tr key={i.id}>
                            <td>{i.id}</td>
                            <td>{i.title}</td>
                            <td>{i.content}</td>
                            <td>{i.writer}</td>
                            <td>{i.answer}</td>
                            <td>{i.regDate}</td>
                            <td>{i.modDate}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="w-full h-[80px] border">
                pagenation..
            </div>
        </div>
    </div>
    )
}

export default AdminList
