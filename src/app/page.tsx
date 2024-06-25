'use client';

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { NextPage } from "next"
import React from "react";
import { useDispatch } from "react-redux";
import { PG } from "./common/enums/PG";
import { GrayButton, MoveButton } from "./component/button/MoveButton";
import SandMail from "./(page)/articles/sendMail/page";
import { XIcon } from "../../public/icons/icons";
import { IAdmin } from "./redux/model/admin.model";
import { fetchExistAdmin, fetchLoginAdmin } from "./redux/service/admin.service";
import { parseCookies, setCookie } from "nookies";
import { jwtDecode } from "jwt-decode";
import { existAdmin, loginAdmin } from "./api/admin/route";

const Login: NextPage = () => {

    const [isWrongId, setIsWrongId] = useState('');
    const [isWrongPw, setIsWrongPw] = useState('');

    const [len, setLen] = useState(false);
    const [msg, setMsg] = useState('');
    const [send, setSend] = useState(false);

    const formRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const dispatch = useDispatch();
    const [admininfo, setadmininfo] = useState({ username: '' } as IAdmin)


    const handleAdminname = (e: any) => {
        const ID_CHECK = /^[a-zA-Z][a-zA-Z0-9]{5,11}$/g;
        ID_CHECK.test(admininfo.username + "") ? setIsWrongId('false') : setIsWrongId('true');
        setadmininfo({
            ...admininfo,
            username: e.target.value
        })
        // console.log('username : ' + JSON.stringify(admininfo))
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
        console.log('login page 입력받은 내용 ' + JSON.stringify(admininfo))
        setLen(true)
        //prisma
    //    existAdmin(admininfo.username)
    //     .then((resp: any) => {
    //         console.log('login page : ' + JSON.stringify(resp))
    //         if (resp.payload == true) {
    //             setMsg("* 있는 아이디입니다.")
    //             loginAdmin(admininfo)
    //                 .then((resp: any) => {
    //                     setCookie({}, 'message', resp.payload.message, { httpOnly: false, path: '/' })
    //                     setCookie({}, 'accessToken', resp.payload.accessToken, { httpOnly: false, path: '/' })
    //                     console.log("서버에서 넘어온 message " + parseCookies().message)
    //                     console.log("서버에서 넘어온 token " + parseCookies().accessToken)
    //                     console.log("token decoding 내용 " + jwtDecode<any>(parseCookies().accessToken).username)
    //                     router.push(`${PG.REPORT}/dashboard`)
    //                     router.refresh()
    //                 })
    //                 .catch((err: any) => {
    //                     console.log("fetchLoginAdmin error : " + JSON.stringify(err))
    //                     alert("Wrong password. 시도하세요")
    //                 })
    //         } else {
    //             console.log("fetchExistAdmin page false : " + JSON.stringify(resp))
    //             setMsg('* 회원가입을 진행해주세요.')
    //         }
    //     })
    //     .catch((err: any) => {
    //         console.log("fetchExistAdmin error : " + err)
    //     })


        //spring
        dispatch(fetchExistAdmin(admininfo.username))
            .then((resp: any) => {
                console.log('login page : ' + JSON.stringify(resp))
                if (resp.payload == true) {
                    setMsg("* 있는 아이디입니다.")
                    dispatch(fetchLoginAdmin(admininfo))
                        .then((resp: any) => {
                            setCookie({}, 'message', resp.payload.message, { httpOnly: false, path: '/' })
                            setCookie({}, 'accessToken', resp.payload.accessToken, { httpOnly: false, path: '/' })
                            console.log("서버에서 넘어온 message " + parseCookies().message)
                            console.log("서버에서 넘어온 token " + parseCookies().accessToken)
                            console.log("token decoding 내용 " + jwtDecode<any>(parseCookies().accessToken).username)
                            router.push(`${PG.REPORT}/dashboard`)
                            router.refresh()
                        })
                        .catch((err: any) => {
                            console.log("fetchLoginAdmin error : " + JSON.stringify(err))
                            alert("Wrong password. 시도하세요")
                        })
                } else {
                    console.log("fetchExistAdmin page false : " + JSON.stringify(resp))
                    setMsg('* 회원가입을 진행해주세요.')
                }
            })
            .catch((err: any) => {
                console.log("fetchExistAdmin error : " + err)
            })

        if (formRef.current) {
            formRef.current.value = "";
        }
    }

    return (
        <div className="flex justify-center content-center w-screen items-center h-screen ">
            <div className=" flex rounded-lg shadow-lg border w-[70%] h-[85%] ">
                {/* <div
                    className="hidden md:block lg:w-1/2 bg-cover bg-indigo-950"
                    style={{
                        backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
                    }}></div> */}
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-xl text-gray-600 text-center">관리자 로그인</p>

                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            ID : ggunAdmin0001
                        </label>
                        <input
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:   outline-2 focus:outline-blue-700"
                            type="text" name="username" onChange={handleAdminname}
                            required />

                        {len === false ?
                            admininfo.username?.length === 0 || admininfo.username === undefined ? <pre></pre> :
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
                        <input
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="password" name="password" onChange={handlePassword} ref={formRef} />


                        {len === false ?
                            admininfo.password?.length === 0 || admininfo.password === undefined ? <pre></pre> :
                                (isWrongPw === 'true' ?
                                    admininfo.password.length > 15 ?
                                        (<pre><h6 className='text-orange-500 text-sm'>* password가 15자를 넘었습니다..</h6></pre>) :
                                        (<pre><h6 className='text-red-500 text-sm'>* Wrong password form.<br />영어 소문자, 대문자, #?!@$ %^&*- 포함<br />6자이상 </h6></pre>) :
                                    (<pre><h6 className='text-green-500 text-sm'>* good password form.</h6></pre>)
                                )
                            : <pre></pre>}

                        <div className="h-[30px] mt-5">
                            <MoveButton text="Sign In" path={() => handleSubmit()} />
                        </div>

                        <button
                            className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2" onClick={() => forgetPw()}>
                            Forget Password?
                        </button>

                        <div className="p-3 text-xs text-gray-500">
                            신규 생성은 관리자에게 문의 부탁드립니다. <br />
                            <div className="w-[50%] h-[30px] mt-2">
                                <GrayButton text="관리자 문의" path={() => setSend(!send)} />
                            </div>
                            <div className="w-[50%] h-[30px] mt-2">
                                <GrayButton text="사용자 로그인으로 돌아가기" path={() => router.push(`http://localhost:3000/`)} />
                            </div>
                            {send == true ?
                                <div className="absolute top-8 left-[25%] rounded-lg h-auto w-[50%] bg-white text-black border shadow-lg pl-8 flex justify-start">
                                    <div className="w-full my-3">
                                        <SandMail />
                                    </div>
                                    <button className="bg-white left-[50%] h-[40px] w-[30px] rounded-lg" onClick={() => setSend(false)}>
                                        <XIcon color="gray" />
                                    </button>
                                </div>
                                : <div></div>}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;