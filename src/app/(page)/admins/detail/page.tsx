'use client'

import Image from 'next/image';
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useEffect, useState } from "react";
import { MoveButton } from "@/app/component/button/MoveButton";
import { BaseBox } from '@/app/component/box/boxFormat';

const AdminDetail = ({ params }: any) => {

    const dispatch = useDispatch()
    // const allAdmins: IAdmin[] = useSelector(getAllAdmins)
    // const [allAdmins, setAllAdmins] = useState<IAdmin[]>([]);

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const offset = (page - 1) * limit;

    const [btn, setBtn] = useState(0)

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

        params = allAdmins;
    }, [])

    const handleSubmit = () => {
        btn == 0 ?
            setBtn(1)

            : setBtn(0);

    }

    return (
        <div className='w-full h-[150px]'>
            <div className='pb-10'> <BaseBox content={btn == 0 ? "수정 모드" : "조회 모드"} color="text-center"/></div>
            <div className='w-full h-auto flex'>
                <div className='w-[10%]'>
                    <Image src='/imgs/user.gif' width="100" height="100" alt="adminPic" className='w-full h-auto rounded-lg' />
                </div>

                <div className=' w-[90%] px-3 grid grid-cols-6 gap-3'>
                    <div className=' '>사원명 : </div>
                    <div className=' '><input type="text" placeholder={params.enpName} disabled={btn == 1 ? true : false} /></div>
                    <div className=''>사원번호 : </div>
                    <div className=' '><input type="text" placeholder={params.enpNam} disabled={btn == 1 ? true : false} /></div>
                    <div className=''>부서 : </div>
                    <div className=' '><input type="text" placeholder={params.department} disabled={btn == 1 ? true : false} /></div>
                    <div className=''>직책 : </div>
                    <div className=' '><input type="text" placeholder={params.positon} disabled={btn == 1 ? true : false} /></div>
                    <div className=''>직무 : </div>
                    <div className=' '><input type="text" placeholder={params.job} disabled={btn == 1 ? true : false} /></div>
                    <div className=''>이메일 : </div>
                    <div className=' '><input type="text" placeholder={params.email} disabled={btn == 1 ? true : false} /></div>
                    <div className=''>핸드폰 : </div>
                    <div className=' '><input type="text" placeholder={params.phone} disabled={btn == 1 ? true : false} /></div>
                    <div className=''>비밀번호 : </div>
                    <div className=' '><input type="text" placeholder={params.password} disabled={btn == 1 ? true : false} /></div>
                    <div className=''>권한 : </div>
                    <div className=' '><input type="text" placeholder={params.role} disabled={btn == 1 ? true : false} /></div>
                </div>

                <div className='w-[20%] p-5 content-center'>
                    <div className='h-[30px] mb-3'><MoveButton text={btn == 0 ? "수정모드" : "수정 끝내기"} path={() => handleSubmit()} /></div>
                    <div className='h-[30px] mb-3'><MoveButton text="퇴사처리" path={() => alert("삭제하기")} /></div>
                </div>
            </div>
        </div>
    )
};
export default AdminDetail;

