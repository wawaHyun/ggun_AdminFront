'use client';

import { Inter } from "next/font/google";
import { parseCookies, setCookie } from "nookies";
import "./globals.css";
import dynamic from "next/dynamic";
import Sidebar from "@/app/common/module/sidebar";
import { useState } from "react";
import Alarm from "@/app/common/module/alarm";
import ChatRoom from "./common/module/chatroom";

const ReduxProvider = dynamic(() => import("@/_redux/redux-provider"), {
  ssr: false
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/imgs/qnaicon.png" type="image/<generated>" sizes="<generated" />
        <title>최고의 주식거래소:: GGUN</title>
      </head>
      <body className={inter.className}>
        <div className="w-screen h-screen bg-white">
          <ReduxProvider>
            <div className="h-screen hover:w-[300px] top-0 left-0 fixed z-10">
              <Sidebar /> 
            </div>
            <div className="h-screen hover:w-[500px] top-0 right-0 fixed z-10">
              <Alarm /> <ChatRoom />
            </div>
            <div className="justify-center flex">
              {children}
            </div>
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}