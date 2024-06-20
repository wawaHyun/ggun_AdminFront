'use client';

import { useRouter } from "next/navigation";
import { destroyCookie, parseCookies } from 'nookies';
import { CallIcon, ChartIcon, HomeIcon, ListIcon, MailIcon, NewsIcon } from "../../../../public/icons/icons";
import { PG } from '../enums/PG';
import { useState } from "react";


function Header() {

    const router = useRouter();
    const [showProfile, setShowProfile] = useState(false)

    interface decodeType {
        iss?: string
        exp?: string
        sub?: string
        username?: string
        name?: string
        job?: string
        id?: number
    }


    interface ISubmenu {
        id: number;
        title: string;
        icon: any;
        address: any;
    }
    const newsSub: ISubmenu[] = [
        { id: 1, title: "news", icon: <NewsIcon />, address: () => router.push(`${PG.TRAN}/news`) },
        { id: 2, title: "최신뉴스", icon: <NewsIcon />, address: () => router.push(`${PG.TRAN}/anime`) },
        { id: 3, title: "type of chart", icon: <NewsIcon />, address: () => router.push(`/pages/dashboard`) },
        { id: 4, title: "charts", icon: <NewsIcon />, address: () => router.push(`/pages/dashboard/charts`) },
    ]

    const jusikSub: ISubmenu[] = [
        { id: 1, title: "demochart", icon: <ChartIcon />, address: () => router.push(`${PG.TRAN}/demo`) },
        { id: 2, title: "chart", icon: <ChartIcon />, address: () => router.push(`${PG.TRAN}/chart`) },
        { id: 3, title: "board", icon: <ChartIcon />, address: () => router.push(`${PG.BOARD}/list`) },
        { id: 4, title: "article", icon: <ChartIcon />, address: () => router.push(`${PG.ARTICLE}/list/1`) },
    ]

    const userSub: ISubmenu[] = [
        { id: 1, title: "dashboard", icon: <ListIcon />, address: () => router.push(`/pages/dashboard`) },
        { id: 2, title: "사용자관리", icon: <ListIcon />, address: () => router.push(`${PG.USER}/list`) },
        { id: 3, title: "관리자권한", icon: <ListIcon />, address: () => router.push(`${PG.WORKER}/list`) },
        { id: 4, title: "workerlogin", icon: <ListIcon />, address: () => router.push(`${PG.WORKER}/login`) },
    ]

    const memus = [
        { id: 1, title: "HOME", icon: <HomeIcon /> },
        { id: 2, title: "News", icon: <NewsIcon /> },
        { id: 3, title: "Mail", icon: <MailIcon /> },
        { id: 4, title: "chart", icon: <ChartIcon /> },
        { id: 5, title: "List", icon: <ListIcon /> },
        { id: 6, title: "Call", icon: <CallIcon /> },
    ]

    const settings = [
        { id: 1, title: "mypage" },
        { id: 2, title: "my account" },
        { id: 3, title: "logout" },
    ]

    const logoutHandler = () => {
        // console.log('로그아웃 적용 전 : ' + parseCookies().accessToken)
        // logout()
        //   .then((res: any) => {
        //     destroyCookie(null, 'accessToken')
        //     setShowProfile(false)
        //     router.push('/')
        //   })
        //   .catch((err: any) => {
        //     console.log('logout 실행에서 에러가 발생함' + err)
        //   })
    }

    const logout = async () => {
        // try {
        //   const response = await LogoutUser(5);
        //   return response
        // }
        // catch (error) {
        //   console.log(error)
        // }
    }


    return (
        <div className="w-screen">

            <div>
                <ul key={1} role="list" className="w-screen grid grid-cols-6 justify-center gap-5">
                    <li className="group/item hover:bg-slate-100">
                        <div className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">HOME</div>
                    </li>

                    <li>
                        <div className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">News</div>
                        <a className="group/edit invisible group-hover/item:visible block ">
                            {newsSub.map((hover: ISubmenu, i: number) => (
                                <div key={i} className="h-auto">
                                    <ul className="flex group py-2 items-center justify-center">
                                        <li className="">
                                            <button className="flex hover:text-gguntheme-210 " onClick={hover.address}>{hover.icon}{hover.title}</button></li>
                                    </ul>
                                </div>
                            ))}
                        </a>
                    </li>

                    <li>
                        <div className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">User</div>
                        <a className="group/edit invisible group-hover/item:visible block ">
                            {userSub.map((hover: ISubmenu, i: number) => (
                                <div key={i} className="h-auto">
                                    <ul className="flex group py-2 items-center justify-center">
                                        <li className="">
                                            <button className="flex hover:text-gguntheme-210 " onClick={hover.address}>{hover.icon}{hover.title}</button></li>
                                    </ul>
                                </div>
                            ))}
                        </a>
                    </li>

                    <li>
                        <div className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">News</div>
                        <a className="group/edit invisible group-hover/item:visible block ">
                            {newsSub.map((hover: ISubmenu, i: number) => (
                                <div key={i} className="h-auto">
                                    <ul className="flex group py-2 items-center justify-center">
                                        <li className="">
                                            <button className="flex hover:text-gguntheme-210 " onClick={hover.address}>{hover.icon}{hover.title}</button></li>
                                    </ul>
                                </div>
                            ))}
                        </a>
                    </li>

                    {showProfile && showProfile ?
                        <li>
                            <div className="flex px-4 py-3 float-end">
                                <span className="block text-sm text-gray-900 dark:text-white">User</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400 mx-5" >마이페이지</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400" onClick={logoutHandler}><a href='#'></a> Logout </span>
                            </div>
                        </li> : <li></li>

                    }

                </ul>
            </div>

        </div>

    );
}
export default Header;