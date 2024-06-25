'use client'

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CallIcon, ChartIcon, HomeIcon, ListIcon, MailIcon, NewsIcon, TallbarIcon } from  "../../../../public/icons/icons";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { destroyCookie, parseCookies } from "nookies";
import { jwtDecode } from "jwt-decode";
import { fetchFindAdminById, fetchLogoutAdmin } from "../../redux/service/admin.service";
import TimeNow from "../util/timeNow";
import { PG } from "../../common/enums/PG";

function Sidebar() {

    const dispatch = useDispatch();
    const router = useRouter()
    const [show, setShow] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const token = useRef("");

    useEffect(() => {
        const cookies = parseCookies();
        if (cookies.accessToken) {
            token.current = cookies.accessToken;
            dispatch(fetchFindAdminById(jwtDecode<any>(token.current).adminId));
        } else {
            console.log('쿠키가 없어서 로그인 페이지로 이동');
            router.push('/');
        }
    }, [dispatch, router]);


    const logout = (id: number) => {
        console.log('logout 적용 전' + parseCookies().accessToken);
        dispatch(fetchLogoutAdmin())
            .then((res: any) => {
                destroyCookie(null, 'accessToken');

                token.current = "";
                location.replace('/');
                console.log('logout 적용 후' + parseCookies().accessToken);
                alert("로그아웃 되었습니다. ")
            })
            .catch((err: any) => {
                console.log('logout error' + err);
            });
    }

    const showSubMenu = (value: number) => {
        console.log(value)
        show <= 0 ? setShow(value) : setShow(0);
    }


    interface ISubmenu {
        id: number;
        title: string;
        icon: any;
        address: any;
    }

    const menus: ISubmenu[] = [
        { id: 1, title: "login", icon: <ListIcon />, address: () => router.push(`/`) },
        { id: 2, title: "dashboard", icon: <ListIcon />, address: () => showSubMenu(1) },
        { id: 3, title: "news", icon: <ListIcon />, address: () => router.push(`/news`) },
        { id: 4, title: "chatting", icon: <ListIcon />, address: () => router.push(`/chatting/1111`) },
        { id: 5, title: "게시판", icon: <ListIcon />, address: () => showSubMenu(2) },
        { id: 6, title: "Working In Process", icon: <ListIcon />, address: () => showSubMenu(3) },
    ]
    const jusikSub: ISubmenu[] = [
        { id: 1, title: "Reports", icon: <ChartIcon />, address: () => router.push(`${PG.REPORT}/dashboard`) },
    ]
    const boardSub: ISubmenu[] = [
        { id: 1, title: "사내 공지사항", icon: <ChartIcon />, address: () => router.push(`/articles/1`) },
        { id: 2, title: "관리자 문의", icon: <ChartIcon />, address: () => router.push(`/articles/2`) },
    ]
    const wipSub: ISubmenu[] = [
        { id: 1, title: "demochart", icon: <ChartIcon />, address: () => router.push(`${PG.WIP}/demochart`) },
        { id: 2, title: "web news", icon: <ChartIcon />, address: () => router.push(`${PG.WIP}/frontNews`) },
        { id: 3, title: "관리자 권한관리", icon: <ChartIcon />, address: () => router.push(`${PG.WIP}/users/list`) },
        { id: 2, title: "종류별 chart", icon: <ChartIcon />, address: () => router.push(`${PG.WIP}/typeOfChart`) },
        { id: 2, title: "infinite", icon: <ChartIcon />, address: () => router.push(`${PG.WIP}/articles/infinite`) },
        { id: 2, title: "paging", icon: <ChartIcon />, address: () => router.push(`${PG.WIP}/articles/base`) },
    ]

    return (
        <div className="scroll-auto">
            {isOpen == true ?
                <div key="1" className="fixed top-0 left-[0px] flex bg-pebble-100 text-white">
                    <div className="w-[270px] h-full ">
                        <ul className="flex flex-col items-center py-3">
                            <li className="text-center">
                                <Image src="/imgs/user.gif" width="80" height="80" className="rounded-full" alt="my profile" />
                            </li>
                            <li className="text-center m-2">
                                <button onClick={() => alert("내 프로필 보기!")}>My name!</button>
                            </li>
                            <li className="text-center text-gray-200 text-xs hover:text-white">
                                <button onClick={() => logout(1)}>Logout</button>
                            </li>
                        </ul>

                        <hr /><hr /> <br />

                        <div className="flex flex-col justify-center">
                            {menus.map((i: ISubmenu) => (
                                <ul key={i.id} className="h-full w-full px-[50px]">
                                    <li className="h-[40px] w-full">
                                        <button onClick={i.address} className="w-[100%] border-b-2 hover:text-amber-200 hover:border-amber-200">{i.title}</button>
                                    </li>

                                    <li>
                                        <ul key={i.id} className="h-auto group">

                                            {i.title == "Reports" && show == 1 ?
                                                jusikSub.map((i: any) =>
                                                    <li key={i.id} className="p-1 ">
                                                        <button onClick={i.address} className="w-[100%] text-left hover:text-amber-200 hover:border-amber-200">ㄴ{i.title}</button>
                                                    </li>)
                                                : <li></li>
                                            }
                                            {i.title == "게시판" && show == 2 ?
                                                boardSub.map((i: any) =>
                                                    <li key={i.id} className="p-1 ">
                                                        <button onClick={i.address} className="w-[100%] text-left hover:text-amber-200 hover:border-amber-200">ㄴ{i.title}</button>
                                                    </li>)
                                                : <li></li>
                                            }
                                            {i.title == "Working In Process" && show == 3 ?
                                                wipSub.map((i: any) =>
                                                    <li key={i.id} className="p-1 ">
                                                        <button onClick={i.address} className="w-[100%] text-left hover:text-amber-200 hover:border-amber-200">ㄴ{i.title}</button>
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

        </div >
    )
}

export default Sidebar;