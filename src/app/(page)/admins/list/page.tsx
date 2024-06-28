'use client'

import Image from 'next/image';
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useEffect, useState } from "react";
import { MoveButton } from "@/app/component/button/MoveButton";
import { fetchAllAdmins } from '../../../redux/service/admin.service';
import { IAdmin } from '@/app/redux/model/admin.model';
import { getAllAdmins } from '@/app/redux/silce/admin.slice';
import Pagination from '@/app/component/navigation/pagination';
import { BaseBox } from '@/app/component/box/boxFormat';
import { Search } from '@/app/component/search/search';
import AdminJoin from '../join/page';
import AdminDetail from '../detail/page';

const AdminList: NextPage = () => {

    const dispatch = useDispatch()
    // const allAdmins: IAdmin[] = useSelector(getAllAdmins)
    // const [allAdmins, setAllAdmins] = useState<IAdmin[]>([]);

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const offset = (page - 1) * limit;

    const [btn, setBtn] = useState(0)
    const [admin, setAdmin] = useState(0)

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

    function handleButton(btn: any) {
        const enums: any = {
            0: <div></div>,
            1: <AdminJoin />,
            2: <AdminDetail params={allAdmins[admin]} />,
            3: "fdfdf",
        };
        return <div>{enums[btn]}</div>;
    }

    function handleAdmin(id: number) {
        setAdmin(id)
        console.log("Admin : ", admin);
    }

    return (
        <div className="w-full h-full flex justify-center ">
            <div className='w-[80%]'>
                <div className="bg-pebble-200 text-[32px] rounded-b-lg text-center pb-1">
                    임직원 정보 조회 </div>
                <div className="">
                    <div className="py-2 flex gap-3">
                        <div className=''>
                            <Search text="사원명 검색" path="" />
                        </div>

                        <div className='w-[125px]'>
                            <MoveButton text="임직원 추가" path={() => btn == 0 ? setBtn(1) : setBtn(0)} />
                        </div>
                    </div>
                    <table className="p-4">
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
                                <tr key={v.id} onClick={() => { handleAdmin(v.id), setBtn(2) }}>
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

                <div className='w-full P-5 h-[300px]'>
                    <BaseBox color="" content={
                        <div className='w-full h-full'>{handleButton(btn)}</div>
                    } />
                </div>
            </div>
        </div>
    )
};
export default AdminList;

