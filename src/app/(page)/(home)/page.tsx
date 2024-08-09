

import { NextPage } from "next";
import SendMail from "../sendMail/page";
import LoginBox from "@/app/component/main/login";

const Login: NextPage = () => {
    return (
        <main className="flex justify-center content-center w-screen items-center h-screen ">
            <div className=" flex rounded-lg shadow-lg border min-w-[500px] min-h-[400px]">
                <div className="w-full p-8">
                    <p className="text-xl text-gray-600 text-center">관리자 로그인</p>
                    <div>
                        <LoginBox />
                        <SendMail />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login;