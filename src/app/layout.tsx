'use client';

import { Inter } from "next/font/google";
import { parseCookies, setCookie } from "nookies";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "./component/common/module/header";
import Sidebar from "./component/common/module/sidebar";

const ReduxProvider = dynamic(() => import("@/redux/redux-provider"), {
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
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated" />
        <title>최고의 주식거래소:: GGUN</title>
      </head>
      <body className={inter.className}>
        <div className="w-screen h-screen">
          <ReduxProvider>
            <div className="h-[50px] w-[auto] z-50 fixed top-0 ">
              <Sidebar />
            </div>
            {/* <div className="h-auto z-0 hover:z-50">
              <Header />
            </div> */}
            <div className="h-[90%] z-0 justify-center flex">
              {children}
            </div>
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}