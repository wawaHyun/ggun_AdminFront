'use client'

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { } from "@/app/common/icons/icons";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { destroyCookie, parseCookies } from "nookies";
import { jwtDecode } from "jwt-decode";
import { fetchLogoutAdmin } from "../../redux/service/admin.service";
import TimeNow from "../util/timeNow";
import Link from "next/link";
import { BoardSub, JusikSub, Menus, WipSub } from "@/app/common/enums/menus";
import { TallbarIcon } from "@/app/common/icons/sideberIcon";

function Sidebar() {

    const dispatch = useDispatch();
    const [show, setShow] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

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


    const logout = (id: number) => {
        console.log('logout 적용 전' + parseCookies().accessToken);
        dispatch(fetchLogoutAdmin())
            .then((res: any) => {
                // destroyCookie(null, 'accessToken');

                // token.current = "";
                // location.replace('/');
                // console.log('logout 적용 후' + parseCookies().accessToken);
                // alert("로그아웃 되었습니다. ")
            })
            .catch((err: any) => {
                console.log('logout error' + err);
            });
    }

    const showSubMenu = (value: number) => {
        console.log(value)
        show <= 0 ? setShow(value) : setShow(0);
    }

    return (
        <nav className="scroll-auto">
            {isOpen == true ?
                <div key="1" className="fixed top-0 left-[0px] flex bg-pebble-100 text-white">
                    <div className="w-[270px] h-full ">
                        <ul className="flex flex-col items-center py-3">
                            <li className="text-center">
                                <Image src="/imgs/user.gif" width="80" height="80" className="rounded-full" alt="my profile" />
                            </li>
                            <li className="text-center m-2">
                                <button onClick={()=>alert("내 프로필 보기!")}>My name!</button>
                            </li>
                            <li className="text-center text-gray-200 text-xs hover:text-white">
                                <button onClick={() => logout(1)}>Logout</button>
                                <br/> {pathName}
                            </li>
                        </ul>

                        <hr /><hr /> <br />

                        <div className="flex flex-col justify-center">
                            <div><Link href={`/`}>login</Link></div>

                            {Menus.map((v: Imenu, i:number) => (
                                <ul key={v.id} className="h-full w-full px-[50px]">
                                    <li className="h-[40px] w-full">
                                        <Link href={v.href} className={`w-[100%] border-b-2 hover:text-amber-200 hover:border-amber-200 ${pathName == v.href ? 'text-amber-200': '' }`}>{v.title}</Link>
                                    </li>

                                    <li>
                                        <ul key={v.id} className="h-auto group">

                                            {pathName == v.href && v.title == "dashboard"? 
                                                JusikSub.map((vv:Imenu, i: any) =>
                                                    <li key={vv.id} className="p-1 ">
                                                        <Link href={vv.href} className="w-[100%] text-left hover:text-amber-200 hover:border-amber-200">ㄴ{vv.title}</Link>
                                                    </li>)
                                                : <li></li>
                                            }
                                            {pathName == v.href && v.title == "게시판"? 
                                                BoardSub.map((vv:Imenu, i: any) =>
                                                    <li key={vv.id} className="p-1 ">
                                                        <Link href={vv.href} className="w-[100%] text-left hover:text-amber-200 hover:border-amber-200">ㄴ{vv.title}</Link>
                                                    </li>)
                                                : <li></li>
                                            }
                                           {pathName == v.href && v.title == "WIP"? 
                                                WipSub.map((vv:Imenu, i: any) =>
                                                    <li key={vv.id} className="p-1 ">
                                                        <Link href={vv.href} className="w-[100%] text-left hover:text-amber-200 hover:border-amber-200">ㄴ{vv.title}</Link>
                                                    </li>)
                                                : <li></li>
                                            }
                                        </ul>
                                    </li>
                                </ul>
                            ))}
                        </div>

                        <div className="text-center mt-5 ">
                            <TimeNow />
                        </div>
                    </div>

                    <div className="h-screen">
                        <button className="h-full bg-pebble-400" onClick={() => setIsOpen(false)}>
                            <TallbarIcon color="black" />
                        </button>
                    </div>
                </div>
                :
                <div className="fixed top-0 left-[0px] w-[30px] h-screen bg-pebble-400">
                    <button className="h-full" onClick={() => setIsOpen(!isOpen)}>
                        <TallbarIcon />
                    </button>
                </div>
            }

        </nav >
    )
}

export default Sidebar;