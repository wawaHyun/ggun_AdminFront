'use client';

import Sidebar from "@/app/component/navigation/sidebar";
import ChatRoom from "@/app/(page)/chatting/chatroom/page";
import Alarm from "@/app/component/util/alarm";
import { useState } from "react";
import { parseCookies } from "nookies";
import { TallbarIcon } from "../icons/sideberIcon";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-screen h-screen ">
            {/* {parseCookies().accessToken != undefined ? */}
            <div className={`h-full flex`}>
                {/* <div className={`flex h-full z-10 ${isMenuOpen ? 'fixed top-0 left-0' : 'fixed top-0 left-[-270px]'}`}> */}
                <div className={`flex h-full z-10 fixed top-0 left-0`}>
                    <Sidebar />
                    {/* <button className="w-[30px] h-screen bg-pebble-400" onClick={() => { setIsMenuOpen(!isMenuOpen), console.log("Menu toggled", isMenuOpen) }}>
                        <TallbarIcon color="black" />
                    </button> */}
                </div>

                <div className="h-screen w-auto top-0 right-0 fixed z-10">
                    <Alarm /> <ChatRoom />
                </div>
                {/* )} */}
                <div className="w-full h-full justify-center flex z-0">
                    {children}
                </div>
            </div>

        </div>

    );
}