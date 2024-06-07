'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PG } from "@/app/component/common/enums/PG";
import { NextPage } from "next"
import { ExistUser, LoginUser } from "@/app/api/user/route";
import { IUsertype } from "@/app/api/user/model/user-model";
import React from "react";
import MoveBotton from "@/app/atoms/button/MoveButton";

const Login: NextPage = () => {
    const [userinfo, setUserinfo] = useState<IUsertype>({ username: '', password: '', id: 0 })

    const [isWrongId, setIsWrongId] = useState('');
    const [isWrongPw, setIsWrongPw] = useState('');

    const [len, setLen] = useState(false);
    const [msg, setMsg] = useState('');

    const formRef = useRef<HTMLInputElement>(null)
    const router = useRouter()


    const handleUsername = (e: any) => {
        // 정규표현식 : 영어 대소문자로 시작하는 6~20자의 영어소문자 또는 숫자
        // 한글 : ㄱ-힣,  /g 전역
        // const ID_CHECK = /^[a-zA-Z0-9]+[a-zA-Z0-9]{5,19}$/g
        const ID_CHECK = /^[a-zA-Z][a-zA-Z0-9]{5,11}$/g;
        ID_CHECK.test(userinfo.username + "") ? setIsWrongId('false') : setIsWrongId('true');
        setUserinfo({
            ...userinfo,
            username: e.target.value
        })
        setLen(false)
    }


    const handlePassword = (e: any) => {
        const PW_CHECK = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,15}$/g;
        PW_CHECK.test(userinfo.password + "") ? setIsWrongPw('false') : setIsWrongPw('true');
        setUserinfo({
            ...userinfo,
            password: e.target.value
        })
        setLen(false)
    }

    const userExistt = async () => {
        try {
            const response = await ExistUser(userinfo.username + '')
            // console.log("userExistt : " + JSON.stringify(response))
            return response
        } catch (error) {
            console.log("userExistt error : " + error)
        }
    }


    const userLoginn = async () => {
        console.log("userLoginn : " + JSON.stringify(userinfo))
        try {
            const response = await LoginUser(userinfo)
            console.log("userLoginn : " + JSON.stringify(response))
            return response
        } catch (error) {
            console.log("userLoginn error : " + error)
        }
    }

    const handleSubmit = () => {
        console.log('login page 입력받은 내용 ' + JSON.stringify(userinfo))
        setLen(true)
        userExistt()
            .then((res: any) => {
                setUserinfo(res)
                console.log('내용 업뎃 완 ' + JSON.stringify(userinfo))
                if (res.id != undefined) {
                    setMsg("* 있는 아이디입니다.")
                    console.log('여기까지 옴 ')
                    userLoginn()
                        .then((resp: any) => {
                            alert("로그인성공")
                            router.push(`${PG.BOARD}/listPrisma`)
                        })
                } else {
                    setMsg('* 회원가입을 진행해주세요.')
                }
            })
            .catch((err) => {
                console.log("handleSubmit error: " + err)
            })


        if (formRef.current) {
            formRef.current.value = "";
        }
    }

    useEffect(() => {
        if (userinfo !== null) {
            console.log("onsubmit article : " + JSON.stringify(userinfo));
        }
    }, [userinfo])


    return (
        <div className="flex justify-center content-center w-screen items-center h-screen ">
            <div className=" flex rounded-lg shadow-lg border w-[70%] h-[70%] ">
                <div
                    className="hidden md:block lg:w-1/2 bg-cover bg-indigo-950"
                    style={{
                        backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
                    }}
                ></div>
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            ID
                            <br />
                        </label>
                        <input
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:   outline-2 focus:outline-blue-700"
                            type="text" name="username" onChange={handleUsername}
                            required />


                        {len === false ?
                            userinfo.username == '' || userinfo.username === undefined ? <pre></pre> :
                                (isWrongId === 'true' ?
                                    (<pre><h6 className='text-red-500'>* Wrong username form.</h6></pre>) :
                                    (<pre><h6 className='text-green-500'>* good username form.</h6></pre>)
                                )
                            : <pre><h6 className='text-red-500'>{msg}</h6></pre>}

                    </div>
                    <div className="mt-4 flex flex-col justify-between">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                                <br />
                            </label>
                        </div>
                        <input
                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="password" name="password" onChange={handlePassword} ref={formRef}
                        />
                        {len === false ?
                            userinfo.password == '' || userinfo.password === undefined ? <pre></pre> :
                                (isWrongPw === 'true' ?
                                    // password.length > 15 ?
                                    // (<pre><h6 className='text-orange-500'>* password가 15자를 넘었습니다..</h6></pre>) :
                                    (<pre><h6 className='text-red-500'>* Wrong password form.<br />영어 소문자, 대문자, #?!@$ %^&*- 포함<br />6자이상 </h6></pre>) :
                                    (<pre><h6 className='text-green-500'>* good password form.</h6></pre>)
                                )
                            : <pre><h6 className='text-red-500'>{msg}</h6></pre>}

                        <a
                            href="#"
                            className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
                        >
                            Forget Password?
                        </a>
                    </div>


                    <div className="flex flex-col mt-5">
                        <div className="w-full h-[40px] ">
                        <MoveBotton text="Login" path={() => handleSubmit()} />
                        </div>
                        <a href="#"
                            className=" flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                            <div className="flex px-5 justify-center w-full py-3">
                                <div className="min-w-[30px]">
                                    <svg className="h-6 w-6" viewBox="0 0 40 40">

                                        <path
                                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                            fill="#FFC107"
                                        />
                                        <path
                                            d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                            fill="#FF3D00"
                                        />
                                        <path
                                            d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                            fill="#4CAF50"
                                        />
                                        <path
                                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                            fill="#1976D2"
                                        />
                                    </svg>
                                </div>
                                <div className="w-full flex justify-center">
                                    <h1 className="whitespace-nowrap text-gray-600 font-bold">
                                        Sign in with Google
                                    </h1>
                                </div>

                            </div>
                        </a>
                    </div>


                    <a href="#">
                    </a>


                    <div className="mt-4 flex items-center w-full text-center">
                        <Link
                            href={`${PG.USER}/joinPrisma`}
                            className="text-xs text-gray-500 capitalize text-center w-full">
                            Dont have any account yet?
                            <span className="text-blue-700 text-sm"> Sign Up</span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;