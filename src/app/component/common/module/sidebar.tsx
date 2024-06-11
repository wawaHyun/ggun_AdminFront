'use cilent'

import { useRouter } from "next/navigation";
import { CallIcon, ChartIcon, HomeIcon, ListIcon, MailIcon, NewsIcon } from '@/app/atoms/icons/icons';
import { PG } from '../enums/PG';
import { useState } from "react";
import { fetchLogoutUser } from "../../users/service/user.service";
import { useDispatch } from "react-redux";

function Sidebar() {

    const router = useRouter()
    const [show, setShow] = useState(0);
    const dispatch = useDispatch()

    const logout = (id:number) =>{
        dispatch(fetchLogoutUser(id))
    }

    interface ISubmenu {
        id: number;
        title: string;
        icon: any;
        address: any;
    }

    const newsSub: ISubmenu[] = [
        { id: 1, title: "news", icon: <NewsIcon />, address: () => router.push(`${PG.JUSIK}/news`) },
        { id: 2, title: "최신뉴스", icon: <NewsIcon />, address: () => router.push(`${PG.JUSIK}/news`) },
    ]

    const jusikSub: ISubmenu[] = [
        { id: 1, title: "종목상세", icon: <ChartIcon />, address: () => router.push(`${PG.JUSIK}/news`)},
        { id: 2, title: "chart", icon: <ChartIcon />, address: () => router.push(`${PG.JUSIK}/news`) },
        { id: 3, title: "board", icon: <ChartIcon />, address: () => router.push(`${PG.BOARD}/list`) },
        { id: 4, title: "article", icon: <ChartIcon />, address: () => router.push(`${PG.ARTICLE}/list/1`) },
    ]

    const userSub: ISubmenu[] = [
        { id: 1, title: "임직원관리", icon: <ListIcon />, address: () => router.push(`${PG.WORKER}/list`) },
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

    return (
        <nav className="h-screen  bg-white text-black border shadow-lg fixed">
            <ul className="bg-white h-[90px] w-[100px] rounded-full">
                <li>
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full text-pebble-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </li>
                <li className="text-center">
                    <button onClick={()=>`${PG.USER}/list`}>username</button>
                </li>
                <li className="text-center text-gray-500 text-xs">
                    <button onClick={()=>logout(1)}>Logout</button>
                </li>
            </ul>

            <ul className="h-full content-center w-full">
                <li className=" group/item content-center hover:bg-slate-100 h-[50px] w-[90px] text-sm ">
                    <button onClick={() => router.push(`/`)} className="flex items-center justify-center w-[90px]">
                        <HomeIcon />HOME
                    </button>
                </li>

                <li className="group/item content-center hover:bg-slate-100 h-[50px] w-[90px] text-sm ">
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

                <li className=" group/item content-center hover:bg-slate-100 h-[50px] w-[90px] text-sm ">
                    <button onClick={() => showSubMenu(2)} className="flex items-center justify-center w-[90px]">
                        <ChartIcon />board
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

                <li className=" group/item content-center hover:bg-slate-100 h-[50px] w-[90px] text-sm ">
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
    )
}

export default Sidebar;