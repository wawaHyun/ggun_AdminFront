"use client"

import { MoveButton } from "@/app/common/button/MoveButton"
import { useRef, useState } from "react";

export default function LoginBox () {

    const [isWrongId, setIsWrongId] = useState('');
    const [isWrongPw, setIsWrongPw] = useState('');

    const [len, setLen] = useState(false);
    const [msg, setMsg] = useState('');

    const ref = useRef<HTMLInputElement>(null)


    const [admininfo, setadmininfo] = useState({ enpName: '' } as IAdmin)


    const handleAdminname = (e: any) => {
        const ID_CHECK = /^[a-zA-Z][a-zA-Z0-9]{5,11}$/g;
        ID_CHECK.test(admininfo.enpName + "") ? setIsWrongId('false') : setIsWrongId('true');
        setadmininfo({
            ...admininfo,
            enpName: e.target.value
        })
        // console.log('enpName : ' + JSON.stringify(admininfo))
        setLen(false)
    }


    const handlePassword = (e: any) => {
        const PW_CHECK = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,15}$/g;
        PW_CHECK.test(admininfo.password + "") ? setIsWrongPw('false') : setIsWrongPw('true');
        setadmininfo({
            ...admininfo,
            password: e.target.value
        })
    }

    const forgetPw = () => {
        console.log("forgetPw")
        alert('권한 담당자에게 연락 부탁드립니다.\n' +
            '담당자 : 인사팀 김현주\n' +
            'Tel : 2046')
    }

    const handleSubmit = () => {
        
        if (ref.current) {
            ref.current.value = "";
        }
    }


    return (

        <div className="w-full h-full">
            <div className="mt-4">
                <div>
                </div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    ID : ggunAdmin0001
                </label>
                <input type="text" name="username" onChange={handleAdminname} required />

                {len === false ?
                    admininfo.enpName?.length === 0 || admininfo.enpName === undefined ? <pre></pre> :
                        (isWrongId === 'true' ?
                            (<pre><h6 className='text-red-500 text-sm'>* Wrong username form.</h6></pre>) :
                            (<pre><h6 className='text-green-500 text-sm'>* good username form.</h6></pre>)
                        )
                    : <pre><h6 className='text-red-500 text-sm'>{msg}</h6></pre>}

            </div>
            <div className="mt-4 flex flex-col justify-between">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password : pO2(eO73)%@
                    </label>
                </div>
                <input type="password" name="password" onChange={handlePassword} ref={ref} />

                {len === false ?
                    admininfo.password?.length === 0 || admininfo.password === undefined ? <pre></pre> :
                        (isWrongPw === 'true' ?
                            admininfo.password.length > 15 ?
                                (<pre><h6 className='text-orange-500 text-sm'>* password가 15자를 넘었습니다..</h6></pre>) :
                                (<pre><h6 className='text-red-500 text-sm'>* Wrong password form.<br />영어 소문자, 대문자, #?!@$ %^&*- 포함<br />6자이상 </h6></pre>) :
                            (<pre><h6 className='text-green-500 text-sm'>* good password form.</h6></pre>)
                        )
                    : <pre></pre>}
            </div>
            <div className="h-[30px] mt-5">
                <MoveButton click={() => handleSubmit()}>Sign In</MoveButton>
            </div>

            <button
                className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2" onClick={() => forgetPw()}>
                Forget Password?
            </button>
        </div >

    )
};
