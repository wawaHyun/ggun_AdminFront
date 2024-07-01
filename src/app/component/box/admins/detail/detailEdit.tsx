"use client"

import { updateAdmin } from '@/app/api/admin/route';
import { MoveButton } from '@/app/common/button/MoveButton';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminsDetailEdit({ props }: any) {


    const router = useRouter();

    const modifyInfo = () => {
        updateAdmin(props)
            .then((res) => {
                console.log("modifyInfo : ", res)
                // router.push(`/admins/list`)
            })
    }

    return (
        <div>
            <div className=' w-[90%] px-3 grid grid-cols-6 gap-3'>
                <div className=' '>사원명 :</div>
                <div className=' '><input type="text" placeholder={props.enpName} disabled={false} /></div>
                <div className=''>사원번호 : </div>
                <div className=' '><input type="text" placeholder={props.enpNam} disabled={false} /></div>
                <div className=''>부서 : </div>
                <div className=' '><input type="text" placeholder={props.department} disabled={false} /></div>
                <div className=''>직책 : </div>
                <div className=' '><input type="text" placeholder={props.positon} disabled={false} /></div>
                <div className=''>직무 : </div>
                <div className=' '><input type="text" placeholder={props.job} disabled={false} /></div>
                <div className=''>이메일 : </div>
                <div className=' '><input type="text" placeholder={props.email} disabled={false} /></div>
                <div className=''>핸드폰 : </div>
                <div className=' '><input type="text" placeholder={props.phone} disabled={false} /></div>
                <div className=''>비밀번호 : </div>
                <div className=' '><input type="text" placeholder={props.password} disabled={false} /></div>
                <div className=''>권한 : </div>
                <div className=' '><input type="text" placeholder={props.role} disabled={false} /></div>
            </div>
            <div className='w-[20%] p-5 content-center'>
                <div className='h-[30px] mb-3'>
                    <Link href={`/admins/detail/${props.id}`}><MoveButton text="조회모드로 변경" /></Link></div>
                <div className='h-[30px] mb-3'><MoveButton text="정보 변경" click={modifyInfo} /></div>
            </div>
        </div>
    )
}
