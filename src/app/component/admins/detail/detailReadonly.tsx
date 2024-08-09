"use client"

import { MoveButton } from "@/app/common/button/MoveButton";
import { BrownLink } from "@/app/common/link/brawnLink";
import Link from "next/link";

export default function AdminsDetailReadonly({ props }: any) {

    const deleteInfo = () => {
        const yseOrNo = confirm('정말 퇴사처리 할까요?')
        if (yseOrNo == true) {
            // deleteAdmin(props.id)
            //     .then((res) =>{
            //         console.log("delete!")
            // router.push(`/admins/list`)
            alert("퇴사 처리되었습니다.")
            // })
        }
        if (yseOrNo == false)
            alert("취소되었습니다.")


    }

    return (
        <div>
            <div className=' w-[90%] px-3 grid grid-cols-6 gap-3'>
                <div className=' '>사원명 :</div>
                <div className=' '><input type="text" placeholder={props.enpName} disabled={true} /></div>
                <div className=''>사원번호 : </div>
                <div className=' '><input type="text" placeholder={props.enpNam} disabled={true} /></div>
                <div className=''>부서 : </div>
                <div className=' '><input type="text" placeholder={props.department} disabled={true} /></div>
                <div className=''>직책 : </div>
                <div className=' '><input type="text" placeholder={props.positon} disabled={true} /></div>
                <div className=''>직무 : </div>
                <div className=' '><input type="text" placeholder={props.job} disabled={true} /></div>
                <div className=''>이메일 : </div>
                <div className=' '><input type="text" placeholder={props.email} disabled={true} /></div>
                <div className=''>핸드폰 : </div>
                <div className=' '><input type="text" placeholder={props.phone} disabled={true} /></div>
                <div className=''>비밀번호 : </div>
                <div className=' '><input type="text" placeholder={props.password} disabled={true} /></div>
                <div className=''>권한 : </div>
                <div className=' '><input type="text" placeholder={props.role} disabled={true} /></div>
            </div>

            <div className='w-[20%] p-5 content-center'>
                <div className='h-[30px] mb-3'>
                <BrownLink click={`/admins/update/${props.id}`}>수정모드로 변경</BrownLink></div>
                <div className='h-[30px] mb-3'><MoveButton click={deleteInfo}>퇴사처리</MoveButton></div>
            </div>
        </div>
    )
}
