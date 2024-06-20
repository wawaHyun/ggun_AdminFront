'use client';

import { useRouter } from "next/navigation";
import { destroyCookie, parseCookies } from 'nookies';
import { CallIcon, ChartIcon, DownIcon, HomeIcon, ListIcon, MailIcon, NewsIcon, UpIcon } from  "../../../../public/icons/icons";
import { PG } from '../enums/PG';
import { useState } from "react";
import Link from "next/link";


function MiniHeader() {

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

  const menus: HoverTextProps[] = [
    { id: 1, title: "home", icon: <HomeIcon />, address: () => router.push(`/`) },
    { id: 2, title: "news", icon: <NewsIcon />, address: () => router.push(`${PG.TRAN}/news`) },
    { id: 3, title: "chart", icon: <ChartIcon />, address: () => router.push(`${PG.TRAN}/chart`) },
    { id: 4, title: "login", icon: <MailIcon />, address: () => router.push(`${PG.USER}/login`) },
    { id: 5, title: "board", icon: <ListIcon />, address: () => router.push(`${PG.BOARD}/list`) },
    { id: 6, title: "Article", icon: <CallIcon />, address: () => router.push(`${PG.ARTICLE}/list/1`) },
  ]

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: any) => {
    console.log("dz!")
    isOpen == false ? setIsOpen(true) : setIsOpen(false)
  };


  return (
    <div className="flex justify-center fixed top-5 w-full ">
      {isOpen == true ?
      <div className="border p-2 rounded bg-white">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {menus.map((i) => (
              <li className="me-2">
                <a href={i.address} className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">{i.icon}{i.title}</a>
              </li>
            ))}
          </ul>
          <button className="" onClick={() => setIsOpen(!isOpen)}>
            <UpIcon color="gray" />
          </button>
        </div></div>
        :
      
            <button className="bg-white border left-[50%] rounded-lg shadow-lg" onClick={() => setIsOpen(!isOpen)}>
              <DownIcon color="gray"/>
            </button>
}
    </div>
  );
}
export default MiniHeader;