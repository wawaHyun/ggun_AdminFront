'use client'

import { usePathname } from "next/navigation";
import { } from "@/app/common/icons/icons";
import Image from "next/image";
import TimeNow from "../util/timeNow";
import Link from "next/link";
import { BoardSub, JusikSub, Menus } from "@/app/common/enums/menus";
import LogoutBox from "../box/sidebar/logout";
import { TallbarIcon } from "@/app/common/icons/sideberIcon";
import { useState } from "react";

function Sidebar() {

    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const ref = useRef<HTMLDivElement>(null);
    // const buttonRef = useRef<HTMLButtonElement>(null); // 버튼의 ref 추가

    // useEffect(() => {
    //     const cookies = parseCookies();
    //     if (cookies.accessToken) {
    //         token.current = cookies.accessToken;
    //         dispatch(fetchFindAdminById(jwtDecode<any>(token.current).adminId));
    //     } else {
    //         console.log('쿠키가 없어서 로그인 페이지로 이동');
    //         router.push('/');
    //     }
    // }, [dispatch, router]);

    // const handleClickOutside = (event: MouseEvent) => {
    //     if (
    //         ref.current && 
    //         !ref.current.contains(event.target as Node) 
    //         && buttonRef.current 
    //         && !buttonRef.current.contains(event.target as Node) // 버튼이 클릭된 경우가 아닌지 확인
    //     ) {
    //         console.log("다힘!");
    //         setIsOpen(false);
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener("click", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("click", handleClickOutside);
    //     };
    // }, []);

    return (
        <nav className="h-full flex bg-pebble-100 text-white">
            {isMenuOpen ?
                <div className="w-[270px] h-full ">
                    <ul className="flex flex-col items-center py-3">
                        <li className="text-center">
                            <Image src="/imgs/user.gif" width="80" height="80" className="rounded-full" alt="my profile" unoptimized />
                            {pathName}
                        </li>
                        <li className="text-center m-2">
                            <button onClick={() => alert("내 프로필 보기!")}>My name!</button>
                        </li>
                        <li className="text-center text-gray-200 text-xs hover:text-white">
                            <LogoutBox />
                        </li>
                    </ul>

                    <hr /><hr /> <br />

                    <div className="flex flex-col justify-center">
                        <div><Link href={`/login`}>login</Link></div>

                        {Menus.map((v: Imenu, i: number) => (
                            <ul key={v.id} className="h-full w-full px-[50px]">
                                <li className="h-[40px] w-full">
                                    <Link href={v.href} className={`w-[100%] border-b-2 hover:text-amber-200 hover:border-amber-200 ${pathName == v.href ? 'text-amber-200' : ''}`}>{v.title}</Link>
                                </li>

                                <li>
                                    <ul key={v.id} className="h-auto group">

                                        {pathName == v.href && v.title == "Home" ?
                                            <li>{JusikSub.map((vv: Imenu, i: any) =>
                                                <div key={vv.id} className="p-1 ">
                                                    <Link href={vv.href} className="w-[100%] text-left hover:text-amber-200 hover:border-amber-200">ㄴ{vv.title}</Link>
                                                </div>)}
                                            </li>
                                            : <li></li>
                                        }

                                        {pathName == v.href && v.title == "게시판" ?
                                            <li>{BoardSub.map((vv: Imenu, i: any) =>
                                                <div key={vv.id} className="p-1 ">
                                                    <Link href={vv.href} className="w-[100%] text-left hover:text-amber-200 hover:border-amber-200">ㄴ{vv.title}</Link>
                                                </div>)}
                                            </li>
                                            : <li></li>
                                        }
                                    </ul>
                                </li>
                            </ul>
                        ))}
                    </div>

                    <div className="text-center pt-5 ">
                        <TimeNow />
                    </div>
                </div>
                : <div></div>}
            <button className="w-[30px] h-screen bg-pebble-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <TallbarIcon color="black" />
            </button>
        </nav >
    )
}

export default Sidebar;