'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CallIcon, ChartIcon, HomeIcon, ListIcon, MailIcon, NewsIcon, TallbarIcon } from "../../../../public/icons/icons";
import { PG } from '../enums/PG';
import { useDispatch } from "react-redux";
// import profile from "/imgs/앗사깨꾹.gif"
import Image from "next/image";
import { fetchLogoutUser } from "@/app/component/users/service/user.service";

function SidebarSub() {

    const router = useRouter()
    const [show, setShow] = useState(0);
    const dispatch = useDispatch()
    const [send, setSend] = useState(false);

    const logout = (id: number) => {
        dispatch(fetchLogoutUser(id))
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
        { id: 2, title: "type of chart", icon: <NewsIcon />, address: () => router.push(`/dashboard`) },
        { id: 2, title: "charts", icon: <NewsIcon />, address: () => router.push(`/dashboard/charts`) },
    ]

    const jusikSub: ISubmenu[] = [
        { id: 1, title: "demochart", icon: <ChartIcon />, address: () => router.push(`${PG.TRAN}/demo`) },
        { id: 2, title: "chart", icon: <ChartIcon />, address: () => router.push(`${PG.TRAN}/chart`) },
        { id: 3, title: "board", icon: <ChartIcon />, address: () => router.push(`${PG.BOARD}/list`) },
        { id: 4, title: "article", icon: <ChartIcon />, address: () => router.push(`${PG.ARTICLE}/list/1`) },
    ]

    const userSub: ISubmenu[] = [
        { id: 1, title: "dashboard", icon: <ListIcon />, address: () => router.push(`${PG.SUCCESS}/dashboard`) },
        { id: 2, title: "사용자관리", icon: <ListIcon />, address: () => "#" },
        { id: 3, title: "관리자권한", icon: <ListIcon />, address: () => "#" },
        { id: 4, title: "workerlogin", icon: <ListIcon />, address: () => "#" },
    ]

    const memus = [
        { id: 1, title: "HOME", icon: <HomeIcon /> },
        { id: 2, title: "News", icon: <NewsIcon /> },
        { id: 3, title: "Mail", icon: <MailIcon /> },
        { id: 4, title: "chart", icon: <ChartIcon /> },
        { id: 5, title: "List", icon: <ListIcon /> },
        { id: 6, title: "Call", icon: <CallIcon /> },
    ]

    const showSubMenu = (value: number) => {
        console.log(value)
        show <= 0 ? setShow(value) : setShow(0);
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            {isOpen == true ?
                <div key="1" className="fixed top-0 left-[0px] flex bg-pebble-100 text-white">
                    <div className="w-[270px] h-full ">
                        <ul className="flex flex-col items-center pt-5">
                            <li className="text-center">
                                <Image src="/imgs/앗사깨꾹.gif" width="100" height="100" className="rounded-full" alt="my profile" />
                            </li>
                            <li className="text-center m-2">
                                <button onClick={() => `${PG.USER}/list`}>My name!</button>
                            </li>
                            <li className="text-center text-gray-200 text-xs">
                                <button onClick={() => logout(1)}>Logout</button>
                            </li>
                        </ul>


                        <br /> <hr /><hr /> <br />

                        <div className="flex justify-center">
                            <ul className="h-full w-full px-[50px]">
                                <li className="h-[50px] w-full">
                                    <button onClick={() => router.push(`/`)} className="w-[100%] border-b-2 hover:text-amber-200 hover:border-amber-200">
                                        Dash Board
                                    </button>
                                </li>

                                <li className="h-[50px] w-full">
                                    <button onClick={() => showSubMenu(1)} className="w-[100%] border-b-2 hover:text-amber-200 hover:border-amber-200">
                                        News
                                        {/* <hr /> */}
                                    </button>
                                </li>
                                {show == 1 ?
                                    <div className="">
                                        <ul className="">
                                            {newsSub.map((i: ISubmenu) => (
                                                <li key={i.id} className="">
                                                    <button className="w-[100px] text-left hover:text-amber-200 hover:border-amber-200" onClick={i.address}>{i.title}</button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    : <div></div>}

                                <li className="h-[50px] w-full">
                                    <button onClick={() => setShow(2)} className="w-[100%] border-b-2 hover:text-amber-200 hover:border-amber-200">
                                        Jsik
                                        {/* <hr /> */}
                                    </button>
                                </li>
                                {show == 2 ?
                                    <div className="">
                                        <ul className="">
                                            {jusikSub.map((i: ISubmenu) => (
                                                <li key={i.id} className="">
                                                    <button className="w-[100%] text-left hover:text-amber-200 hover:border-amber-200" onClick={i.address}>{i.title}</button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    : <div></div>}


                                <li className="h-[50px] w-full">
                                    <button onClick={() => setShow(3)} className="w-[100%] border-b-2 hover:text-amber-200 hover:border-amber-200">
                                        Success
                                        {/* <hr /> */}
                                    </button>
                                </li>
                                {show == 3 ?
                                    <div className="">
                                        <ul className="">
                                            {userSub.map((i: ISubmenu) => (
                                                <li key={i.id} className="">
                                                    <button className="w-[100px] text-left hover:text-amber-200 hover:border-amber-200" onClick={i.address}>{i.title}</button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    : <div></div>}

                            </ul>
                        </div>

                    </div>

                    <div className="h-screen">
                        <button className="h-full bg-pebble-300"
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

export default SidebarSub;