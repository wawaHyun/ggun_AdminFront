'use client'

import Image from 'next/image';
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useEffect, useState } from "react";
import { MoveButton } from "@/app/component/button/MoveButton";
import { fetchAllAdmins } from '../../../../redux/service/admin.service';
import { IAdmin } from '@/app/redux/model/admin.model';
import { getAllAdmins } from '@/app/redux/silce/admin.slice';
import Pagination from '@/app/component/navigation/pagination';

const AdminList: NextPage = () => {

    const dispatch = useDispatch()
    // const allAdmins: IAdmin[] = useSelector(getAllAdmins)
    // const [allAdmins, setAllAdmins] = useState<IAdmin[]>([]);

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const offset = (page - 1) * limit;

    const allAdmins = [
        { id: 1, enpNum: 'enp1', enpName: '김대리', password: '1234', role: '3' },
        { id: 2, enpNum: 'enp2', enpName: '박과장', password: '67993', role: '3' },
        { id: 3, enpNum: 'enp3', enpName: '정사원', password: '3366', role: '2' },
        { id: 4, enpNum: 'enp4', enpName: '권상무', password: '1237', role: '2' },
        { id: 5, enpNum: 'enp5', enpName: '이대리', password: '9956', role: '1' },
    ]

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
            <div className="m-auto bg-pebble-200 text-[32px] rounded-b-lg text-center w-[80%] pb-1">
                임직원 정보 조회 </div>
            <div className="m-auto w-[80%] bg-white">
                <table className="sticky z-[0] p-4">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>아이디</th>
                            <th>이름</th>
                            <th>사원번호</th>
                            <th>부서</th>
                            <th>직책</th>
                            <th>직무</th>
                            <th>이메일</th>
                            <th>핸드폰</th>
                            <th>비밀번호</th>
                            <th>권한</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allAdmins.slice(offset, offset + limit).map((v: any, i: any) =>
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.enpName}</td>
                                <td>{v.enpNam}</td>
                                {/* <td>{v.department}</td>
                            <td>{v.positon}</td>
                            <td>{v.job}</td>
                            <td>{v.enpEmail}</td>
                            <td>{v.phone}</td> */}
                                <td>{v.password}</td>
                                <td>{v.role}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="w-full items-center flex justify-center h-[50px]">
                    <Pagination total={allAdmins.length} limit={10} page={page} setPage={setPage} />
                </div>
            </div>
            <div className='h-full w-full'>
                <div className='grid grid-cols-7'>
                    <div className='border'><Image src='/imgs/user.png' width="100" height="100" alt="adminPic" /></div>
                    <div className='border'>사원명 <input type="text" placeholder='사원명'/></div>
                    <div className='border'>사원번호</div>
                    <div className='border'>부서</div>
                    <div className='border'>직책</div>
                    <div className='border'>직무</div>
                    <div className='border'>이메일</div>
                    <div className='border'>핸드폰</div>
                    <div className='border'>비밀번호</div>
                    <div className='border'>권한</div>
                    <div className='border'><MoveButton text="수정" path={()=>alert("수정합니다")} /></div>
                    <div className='border'><MoveButton text="삭제" path={()=>alert("삭제합니다")} /></div>
                </div>
            </div>
        </div>
    )
};
export default AdminList;

