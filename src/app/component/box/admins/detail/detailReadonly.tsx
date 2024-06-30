 "use client"
import { deleteAdmin } from "@/app/api/admin/route";
import { MoveButton } from "@/app/common/button/MoveButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default async function AdminsDetailReadonly({ props }: any) {

    const router = useRouter();

    const deleteInfo = () => {
        const yseOrNo = confirm('정말 퇴사처리 할까요?')
        if(yseOrNo ==true){
        deleteAdmin(props.id)
            .then((res) =>{
                console.log("delete!")
            // router.push(`/admins/list`)
        })}
        if(yseOrNo ==false)
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
                    <Link href={`/admins/update/${props.id}`}><MoveButton text="수정모드로 변경" /></Link></div>
                <div className='h-[30px] mb-3'><MoveButton text="퇴사처리" click={deleteInfo} /></div>
            </div>
        </div>
    )
}
