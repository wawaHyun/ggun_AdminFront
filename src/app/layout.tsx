'use client';

import { Inter } from "next/font/google";
import { parseCookies, setCookie } from "nookies";
import "./globals.css";
import dynamic from "next/dynamic";
import Sidebar from "./component/navigation/sidebar";
import Alarm from "./component/util/alarm";
import { Metadata } from "next";
import ChatRoom from "./(page)/chatting/chatroom/page";

const ReduxProvider = dynamic(() => import("./redux/redux-provider"), {
  ssr: false
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/imgs/chart.png" type="image/<generated>" sizes="<generated" border-radius="50%"  />
        <title>최고의 주식거래소:: GGUN</title>
      </head>
      <body className={inter.className}>
        <div className="w-screen h-screen bg-white">
          <ReduxProvider>
            {parseCookies().accessToken != undefined ?
              <div>
                <div className="h-screen hover:w-[300px] top-0 left-0 fixed z-10">
                  <Sidebar />
                </div>
                <div className="h-screen hover:w-[500px] top-0 right-0 fixed z-10">
                  <Alarm /> <ChatRoom />
                </div>
              </div>
               : <div></div>} 
            <div className="justify-center flex">
              {children}
            </div>
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}