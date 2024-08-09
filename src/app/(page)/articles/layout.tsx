'use client'
import BoardMenu from "@/app/component/navigation/boardMenu"
import { Search } from "@/app/component/util/search"
import { useEffect, useState } from "react";

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {

        const handleScroll = () => {
            window.scrollY > 10 ? setShowHeader(false) : setShowHeader(true);
        };
        window.addEventListener('scroll', handleScroll);

    }, []);
    

    return (
        <div className="w-full h-full justify-center flex">
                <div className={`fixed top-[0px] z-10 duration-500 ease-in-out transition-all ${showHeader == true ? 'h-[50px] w-[85%] rounded-b-lg' : 'h-[30px] w-full'} `}>
                        <BoardMenu />
                </div>
                <div className="w-full h-auto z-0 top-10">
                    {children}
                </div>
        </div>
    )
}