
import { BrownLink } from '@/app/common/link/brawnLink';
import { WhiteLink } from '@/app/common/link/whiteLink';
import { useRouter } from 'next/navigation';

export default function AdminsDetail({ props }: any) {

    const router = useRouter();

    return (
        <div>
            <div className='w-[90%] px-3 grid grid-cols-6 gap-3'>
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
            <div className=' h-[100px] p-5 content-center justify-center space-y-3'>
                <BrownLink click={`/admins/detail/${props.id}`}>정보수정</BrownLink>
                <WhiteLink click={`/admins/detail/${props.id}`}>돌아가기</WhiteLink>
            </div>
        </div>
    )
}
