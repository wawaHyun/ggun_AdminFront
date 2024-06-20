'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CallIcon, ChartIcon, HomeIcon, ListIcon, MailIcon, NewsIcon, TallbarIcon } from "../../../../public/icons/icons";
import { PG } from '../enums/PG';
import Image from "next/image";
import TimeNow from "./timeNow";

function Sidebar() {

    const router = useRouter()
    const [show, setShow] = useState(0);

    const logout = (id: number) => {
        alert("로그아웃 되었습니다. ")
    }

    const showSubMenu = (value: number) => {
        console.log(value)
        show <= 0 ? setShow(value) : setShow(0);
    }

    const [isOpen, setIsOpen] = useState(false);

    interface ISubmenu {
        id: number;
        title: string;
        icon: any;
        address: any;
    }

    const jusikSub: ISubmenu[] = [
        { id: 1, title: "dashboard", icon: <ChartIcon />, address: () => router.push(`${PG.SUCCESS}/dashboard`) },
        { id: 2, title: "종류별 chart", icon: <ChartIcon />, address: () => router.push(`${PG.SUCCESS}/typeOfChart`) },
        { id: 2, title: "종류별 chart", icon: <ChartIcon />, address: () => router.push(`${PG.SUCCESS}/typeOfChart`) },
    ]

    const boardSub: ISubmenu[] = [
        { id: 1, title: "관리자 문의", icon: <ChartIcon />, address: () => router.push(`${PG.SUCCESSBOARD}/qnalist`) },
        { id: 2, title: "사내 공지사항", icon: <ChartIcon />, address: () => router.push(`${PG.SUCCESSBOARD}/notice`) },
    ]

    const menus: ISubmenu[] = [
        { id: 1, title: "login", icon: <ListIcon />, address: () => router.push(`/`) },
        { id: 2, title: "dashboard", icon: <ListIcon />, address: () => showSubMenu(1) },
        { id: 3, title: "news", icon: <ListIcon />, address: () => router.push(`${PG.SUCCESS}/news`) },
        { id: 4, title: "chatting", icon: <ListIcon />, address: () => router.push(`${PG.SUCCESS}/chatting/1111`) },
        { id: 5, title: "게시판", icon: <ListIcon />, address: () => showSubMenu(2) },
    ]


    return (
        <div className="">
            {isOpen == true ?
                <div key="1" className="fixed top-0 left-[0px] flex bg-pebble-100 text-white">
                    <div className="w-[270px] h-full ">
                        <ul className="flex flex-col items-center py-3">
                            <li className="text-center">
                                <Image src="/imgs/user.gif" width="80" height="80" className="rounded-full" alt="my profile" />
                            </li>
                            <li className="text-center m-2">
                                <button onClick={() => `${PG.USER}/list`}>My name!</button>
                            </li>
                            <li className="text-center text-gray-200 text-xs hover:text-white">
                                <button onClick={() => logout(1)}>Logout</button>
                            </li>
                        </ul>

                        <hr /><hr /> <br />

                        <div className="flex flex-col justify-center">
                            {menus.map((i: ISubmenu) => (
                                <ul key={i.id} className="h-full w-full px-[50px]">
                                    <li className="h-[40px] w-full group-hover/item:visible hover:visible">
                                        <button onClick={i.address} className="w-[100%] border-b-2 hover:text-amber-200 hover:border-amber-200">
                                            {i.title}
                                        </button>
                                    </li>
                                    <li>

                                        <div className="">
                                            {i.title == "dashboard" ?
                                                <ul key={i.id} className="h-auto group">
                                                    {show == 1 ?
                                                        jusikSub.map((i: any) =>
                                                            <li key={i.id} className="p-1 ">
                                                                <button onClick={i.address} className="w-[100%] text-left hover:text-amber-200 hover:border-amber-200">
                                                                    ㄴ{i.title}
                                                                </button>
                                                            </li>
                                                        )
                                                        : <li></li>
                                                    }
                                                </ul>
                                                : <div></div>}

                                            {i.title == "게시판" ?
                                                <ul key={i.id} className="h-auto group">
                                                    {show == 2 ?
                                                        boardSub.map((i: any) =>
                                                            <li key={i.id} className="p-1 ">
                                                                <button onClick={i.address} className="w-[100%] text-left hover:text-amber-200 hover:border-amber-200">
                                                                    ㄴ{i.title}
                                                                </button>
                                                            </li>
                                                        )
                                                        : <li></li>
                                                    }
                                                </ul>
                                                : <div></div>}



                                        </div>
                                    </li>
                                </ul>
                            ))}
                        </div>

                        <div className="text-center mt-5 ">
                            <TimeNow />
                        </div>
                    </div>

                    <div className="h-screen">
                        <button className="h-full bg-pebble-400"
                            onClick={() => setIsOpen(!isOpen)}>
                            <TallbarIcon color="black" />
                        </button>
                    </div>
                </div>
                :
                <div className="fixed top-0 left-[0px] w-[30px] h-screen bg-pebble-400">
                    <button className="h-full"
                        onClick={() => setIsOpen(!isOpen)}>
                        <TallbarIcon />
                    </button>
                </div>
            }

        </div >
    )
}

export default Sidebar;