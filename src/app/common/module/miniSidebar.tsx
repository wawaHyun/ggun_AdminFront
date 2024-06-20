'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CallIcon, ChartIcon, HomeIcon, ListIcon, MailIcon, NewsIcon, XIcon } from  "../../../../public/icons/icons";
import { PG } from '../enums/PG';
import { useDispatch } from "react-redux";
import Image from "next/image";
import Chartting from "@/app/boards/chatting/[id]/page";
import { GrayButton } from "@/atoms/button/MoveButton";
import { fetchLogoutUser } from "@/app/component/users/service/user.service";

function MiniSidebar() {

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
        { id: 2, title: "type of chart", icon: <NewsIcon />, address: () => router.push(`/pages/dashboard`) },
        { id: 2, title: "charts", icon: <NewsIcon />, address: () => router.push(`/pages/dashboard/charts`) },
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

    const showSubMenu = (value: number) => {
        show == 0 ? setShow(value) : setShow(0);
    }

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        isOpen == false ? setIsOpen(true) : setIsOpen(false)
    };


    return (
        <div className=" h-[100px] w-[100px]">
        <div className="absolute bg-white top-3 left-0 group p-1.5 border shadow-lg rounded-lg content-center w-full h-[100px]">
            <button
                className="flex flex-col justify-center items-center group relative w-full h-auto"
                onClick={() => setIsOpen(!isOpen)}>
                <span className={`h-0.5 w-[100%] my-[15%] rounded-full bg-black transition ease transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5  group-hover:opacity-100" : " group-hover:opacity-100"}`} />
                <div className={`h-0.5 w-[100%] my-[15%] rounded-full bg-black transition ease transform duration-300} ${isOpen ? "opacity-0" : "group-hover:opacity-100"}`} />
                <div className={`h-0.5 w-[100%] my-[15%] rounded-full bg-black transition ease transform duration-300 ${isOpen ? "-rotate-45 -translate-y-3.5  group-hover:opacity-100" : "group-hover:opacity-100"}`}/>
            </button>
        </div>

        {isOpen == true ?
            <nav className="relative top-2 rounded-lg left-0 h-auto w-auto mt-10 text-black border shadow-lg p-3">
                <ul className="bg-white mb-4">
                    <li className="">
                            <Image src="/imgs/앗사깨꾹.gif" className="rounded-full w-full h-auto border border-ggun-100" alt="my profile" />
                        </li>
                        <li className="text-center ">
                            <button onClick={() => `${PG.USER}/list`}>My name!</button>
                        </li>
                        <li className="text-center ">

                            <div className="w-[50%] h-[30px] mt-2">
                                <GrayButton text="DM" path={() => setSend(!send)} />
                            </div>
                            {send == true ?
                                <div className="absolute top-0 left-0 rounded-lg h-auto w-[50%] bg-white text-black border shadow-lg pl-8 flex justify-start">
                                    <div className="w-full my-3">
                                        <Chartting />
                                    </div>
                                    <button className="bg-white left-[50%] h-[40px]" onClick={() => setSend(false)}>
                                        <XIcon color="gray" />
                                    </button>
                                </div>
                                : <div></div>}

                        </li>
                        <li className="text-center text-gray-500 text-xs mt-1">
                            <button onClick={() => logout(1)}>Logout</button>
                        </li>
                    </ul>
                    <hr />

                    <ul className="h-full content-center w-full">
                        <li className=" group/item content-center hover:bg-slate-100 h-[50px] text-sm ">
                            <button onClick={() => router.push(`/`)} className="flex items-center justify-center w-[90px]">
                                <HomeIcon />HOME
                            </button>
                        </li>

                        <li className="group/item content-center hover:bg-slate-100 h-[50px] text-sm ">
                            <button onClick={() => showSubMenu(1)} className="flex items-center justify-center w-[90px]">
                                <NewsIcon />News
                            </button>
                        </li>
                        {show == 1 ?
                            newsSub.map((i: ISubmenu) => (
                                <div key={i.id} className="relative text-xs items-center ">
                                    <ul className="bg-slate-100 hover:bg-slate-200 content-center w-full items-center text-center">
                                        <li className="flex hover:text-pebble-600">
                                            <button className="flex items-center" onClick={i.address}>{i.icon}{i.title}</button>
                                        </li>
                                    </ul>
                                </div>
                            ))
                            : <div></div>}

                        <li className=" group/item content-center hover:bg-slate-100 h-[50px] text-sm ">
                            <button onClick={() => showSubMenu(2)} className="flex items-center justify-center w-[90px]">
                                <ChartIcon />jusik
                            </button>
                        </li>
                        {show == 2 ?
                            jusikSub.map((i: ISubmenu) => (
                                <div key={i.id} className="relative text-xs items-center ">
                                    <ul className="bg-slate-100 hover:bg-slate-200 content-center w-full items-center text-center">
                                        <li className="flex hover:text-pebble-600">
                                            <button className="flex items-center" onClick={i.address}>{i.icon}{i.title}</button>
                                        </li>
                                    </ul>
                                </div>
                            ))
                            : <div></div>}

                        <li className=" group/item content-center hover:bg-slate-100 h-[50px] text-sm ">
                            <button onClick={() => showSubMenu(3)} className="flex items-center justify-center w-[90px]">
                                <ListIcon />user
                            </button>
                        </li>
                        {show == 3 ?
                            userSub.map((i: ISubmenu) => (
                                <div key={i.id} className="relative text-xs items-center ">
                                    <ul className="bg-slate-100 hover:bg-slate-200 content-center w-full items-center text-center">
                                        <li className="flex hover:text-pebble-600">
                                            <button className="flex text-xs items-center" onClick={i.address}>{i.icon}{i.title}</button>
                                        </li>
                                    </ul>
                                </div>
                            ))
                            : <div></div>}

                    </ul>
                </nav>
                : <nav></nav>
            }
        </div >
    )
}

export default MiniSidebar;