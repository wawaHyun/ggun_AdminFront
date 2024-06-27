'use client'

import Image from 'next/image';
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { MoveButton } from "@/app/component/button/MoveButton";
import { fetchAllAdmins } from '../../../../redux/service/admin.service';
import { IAdmin } from '@/app/redux/model/admin.model';
import { getAllAdmins } from '@/app/redux/silce/admin.slice';
import Pagination from '@/app/component/navigation/pagination';

const AdminList: NextPage = () => {

    const dispatch = useDispatch()
    const alladmins: IAdmin[] = useSelector(getAllAdmins)
    const [allArticles, setAllArticles] = useState<IAdmin[]>([]);

    useEffect(() => {
        // dispatch(fetchAllAdmins())

                //prisma
        // myArticleList(params.id)
        //     .then((res:any) => {
        //         setAllArticles(res);
        //     })
        //     .catch((error: any) => {
        //         console.log("articles err!!! : " + error);
        //     });
    }, [])

    return (
        <div className="w-full h-full">
        <div className="fixed z-[1] top-0 left-0 right-0 m-auto bg-pebble-200 text-[32px] rounded-b-lg text-center w-[80%] pb-1">
            사내 공지사항</div>
        <div className="absolute top-[43px] left-0 right-0 m-auto w-[80%] bg-white">
            <table className="sticky z-[0] p-4">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>내용</th>
                        <th>borad id</th>
                        <th>작성일</th>
                        <th>처리완료일</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {allArticles.slice(offset, offset + limit).map((v: any, i: any) => */}
                      {articlesList.map((v:any, i:any) =>
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.title}</td>
                            <td>{v.writer_id}</td>
                            <td>{v.content}</td>
                            <td>{v.board_id}</td>
                            <td>{v.regDate}</td>
                            <td>{v.modDate}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="w-full items-center flex justify-center h-[50px]">
                <Pagination total={allArticles.length} limit={10} page={page} setPage={setPage} />
            </div>
        </div>
    </div>
    )
}

export default AdminList
