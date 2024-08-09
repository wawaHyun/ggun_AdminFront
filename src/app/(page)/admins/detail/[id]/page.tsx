'use client'
import Image from 'next/image';
import React, { Suspense } from "react";
import { WhiteBox } from '@/app/common/box/whiteBox';
import { adminDummy } from '@/app/common/dummy/admin.dummy';
import AdminsDetail from '@/app/component/admins/detail/dateil';
import { useQuery } from '@tanstack/react-query';
import { findAdminById } from '@/app/service/admin/admin.api';

export default function AdminDetail({ params }: { params: { id: number } }) {

    const data = adminDummy[0]


    // const fetchData = async (): Promise<IAdmin[]> => {
    //     const response = await findAdminById(params.id)
    //     if ('status' in response) {
    //         throw new Error(`Error: ${response.status}`);
    //     }
    //     return response;
    // }

    // const { data } = useQuery<IAdmin[]>(
    //     {
    //         queryKey: ["admin"],
    //         queryFn: fetchData,
    //         initialData: adminDummy[0],
    //     }
    // );

    return (
        <div className='w-full h-full flex justify-center content-center items-center'>
            <WhiteBox style='w-[50%] h-[500px] space-y-4'>
                <div className='text-center text-3xl'>사원 정보</div>
                <div className='w-full h-auto flex justify-center'>
                    <div className='w-[200px]'>
                        <Image src='/imgs/user.gif' width="100" height="100" alt="adminPic" className='w-full h-auto rounded-lg' />
                    </div>
                </div>

                <Suspense>
                    <div className='w-full flex justify-center'>
                        <AdminsDetail props={data} />
                    </div>
                </Suspense>
            </WhiteBox>

        </div >
    )
};


