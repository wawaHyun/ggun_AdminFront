'use client';

import { Inter } from "next/font/google";
import { parseCookies, setCookie } from "nookies";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "./component/common/module/header";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-screen h-screen">
          <ReduxProvider>
            <div className="w-[110px] h-screen">
              {/* <Header /> */}
              <Sidebar />
            </div>
            <div className="w-[90%] h-screen">
              {children}
            </div>
            {/* <Footer /> */}
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}