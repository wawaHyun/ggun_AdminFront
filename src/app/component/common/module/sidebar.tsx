'use cilent'

import { useRouter } from "next/navigation";
import { CallIcon, ChartIcon, HomeIcon, ListIcon, MailIcon, NewsIcon } from '@/app/atoms/icons/icons';
import { PG } from '../enums/PG';
import { useState } from "react";

function Sidebar() {

    const router = useRouter()

    interface HoverTextProps {
        id: number;
        title: string;
        icon: any;
        address: any;
    }

    const subMemus: HoverTextProps[] = [
        { id: 1, title: "home", icon: <HomeIcon />, address: () => router.push(`/`) },
        { id: 2, title: "news", icon: <NewsIcon />, address: () => router.push(`${PG.JUSIK}/news`) },
        { id: 3, title: "chart", icon: <ChartIcon />, address: () => router.push(`${PG.JUSIK}/chart`) },
        { id: 4, title: "login", icon: <MailIcon />, address: () => router.push(`${PG.USER}/login`) },
        { id: 5, title: "board", icon: <ListIcon />, address: () => router.push(`${PG.BOARD}/list`) },
        { id: 6, title: "Article", icon: <CallIcon />, address: () => router.push(`${PG.ARTICLE}/list/1`) },
    ]


    const memus = [
        { id: 1, title: "HOME", icon: <HomeIcon /> },
        { id: 2, title: "News", icon: <NewsIcon /> },
        { id: 3, title: "Mail", icon: <MailIcon /> },
        { id: 4, title: "chart", icon: <ChartIcon /> },
        { id: 5, title: "List", icon: <ListIcon /> },
        { id: 6, title: "Call", icon: <CallIcon /> },
    ]

    return (
        <div className="h-screen w-[90px] bg-white text-black flex items-center">
            <ul>
                {memus.map((i) => (
                    <li className="flex group/item hover:bg-slate-100 h-[50px]">
                        <div className="flex items-center justify-center w-[90px]">
                            {i.icon}{i.title}
                        </div>
                        <a key={i.id} className="group/edit invisible group-hover/item:visible block ">
                            {subMemus.map((hover: HoverTextProps, i: number) => (
                                <div key={i} className="h-auto bg-slate-200 hover:bg-slate-300">
                                    <ul className="flex group py-2 items-center justify-center">
                                        <li className="">
                                            <button className="flex hover:text-gguntheme-210 " onClick={hover.address}>{hover.icon}{hover.title}</button></li>
                                    </ul>
                                </div>
                            ))}
                        </a>
                    </li>
                ))}

            </ul>

        </div>
    )
}

export default Sidebar;