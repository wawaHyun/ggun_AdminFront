'use client'

import Image from 'next/image';
import { NextPage } from "next";
import React from "react";
import { MoveButton } from "@/app/common/button/MoveButton";

const AdminJoin: NextPage = () => {
    return (
        <div className='flex w-full h-[150px]'>
            <div className='w-[10%]'>
                <Image src='/imgs/user.gif' width="100" height="100" alt="adminPic" className='w-full h-auto rounded-lg' />
            </div>

            <div className=' w-[90%] px-3 grid grid-cols-6 gap-3'>
                <div className=' '>사원명 : </div>
                <div className=' '><input type="text" placeholder='사원명' /></div>
                <div className=''>사원번호 : </div>
                <div className=' '><input type="text" placeholder='사원번호' /></div>
                <div className=''>부서 : </div>
                <div className=' '><input type="text" placeholder='부서' /></div>
                <div className=''>직책 : </div>
                <div className=' '><input type="text" placeholder='직책' /></div>
                <div className=''>직무 : </div>
                <div className=' '><input type="text" placeholder='직무' /></div>
                <div className=''>이메일 : </div>
                <div className=' '><input type="text" placeholder='amdin@gmail.com' /></div>
                <div className=''>핸드폰 : </div>
                <div className=' '><input type="text" placeholder='010-0000-0000' /></div>
                <div className=''>비밀번호 : </div>
                <div className=' '><input type="text" placeholder='비밀번호' /></div>
                <div className=''>권한 : </div>
                <div className=' '><input type="text" placeholder='role' /></div>
            </div>

            <div className='w-[20%] p-5 content-center'>
                <div className='h-[30px] mb-3'><MoveButton click={() => alert("가입완료 되었습니다. ")} >직원 추가</MoveButton></div>
            </div>
        </div>
    )
};
export default AdminJoin;

