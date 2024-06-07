'use client';

import { useRouter } from "next/navigation";
import { destroyCookie, parseCookies } from 'nookies';
import { CallIcon, ChartIcon, HomeIcon, ListIcon, MailIcon, NewsIcon } from '@/app/atoms/icons/icons';
import { PG } from '../enums/PG';
import { useState } from "react";
import { LogoutUser } from "@/app/api/user/route";


function Header() {

  const router = useRouter();
  const [showProfile, setShowProfile] = useState(false)

  interface decodeType {
    iss?: string
    exp?: string
    sub?: string
    username?: string
    name?: string
    job?: string
    id?: number
  }


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
    { id: 4, title: "login", icon: <MailIcon />, address: () => router.push(`${PG.USER}/loginPrisma`) },
    { id: 5, title: "board", icon: <ListIcon />, address: () => router.push(`${PG.BOARD}/listPrisma`) },
    { id: 6, title: "QnA", icon: <CallIcon />, address: () => router.push(`${PG.BOARD}/listPrisma`) },
  ]


  const memus = [
    { id: 1, title: "HOME", icon: <HomeIcon /> },
    { id: 2, title: "News", icon: <NewsIcon /> },
    { id: 3, title: "Mail", icon: <MailIcon /> },
    { id: 4, title: "chart", icon: <ChartIcon /> },
    { id: 5, title: "List", icon: <ListIcon /> },
    { id: 6, title: "Call", icon: <CallIcon /> },
  ]

  const settings = [
    { id: 1, title: "mypage" },
    { id: 2, title: "my account" },
    { id: 3, title: "logout" },
  ]


  const logoutHandler = () => {
    console.log('로그아웃 적용 전 : ' + parseCookies().accessToken)
    logout()
      .then((res: any) => {
        destroyCookie(null, 'accessToken')
        setShowProfile(false)
        router.push('/')
      })
      .catch((err: any) => {
        console.log('logout 실행에서 에러가 발생함' + err)
      })
  }

  const logout = async () => {
    try {
      const response = await LogoutUser(5);
      return response
    }
    catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="w-screen h-[300px] justify-center">

      <div>
        <ul key={1} role="list" className="w-screen grid grid-cols-7 justify-center gap-5">
          {memus.map((i) => (
            <li key={i.id} className="group/item hover:bg-slate-100 ">
              <div className="flex items-center justify-center mb-5 font-bold mt-5">
                {i.icon}{i.title}
              </div>
              <a key={i.id} className="group/edit invisible group-hover/item:visible block ">
                {subMemus.map((hover: HoverTextProps, i: number) => (
                  <div key={i} className="h-auto">
                    <ul className="flex group py-2 items-center justify-center">
                      <li className="">
                        <button className="flex hover:text-gguntheme-210 " onClick={hover.address}>{hover.icon}{hover.title}</button></li>
                    </ul>
                  </div>
                ))}
              </a>
            </li>
          ))}
          {showProfile && showProfile ?
            <li>
              <div className="flex px-4 py-3 float-end">
                <span className="block text-sm text-gray-900 dark:text-white">User</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400 mx-5" >마이페이지</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400" onClick={logoutHandler}><a href='#'></a> Logout </span>
              </div>
            </li> : <li></li>

          }

        </ul>
      </div>

    </div>

  );
}
export default Header;