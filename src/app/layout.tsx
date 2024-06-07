'use client';

import { Inter } from "next/font/google";
import { parseCookies, setCookie } from "nookies";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "./component/common/module/header";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
        <div className="w-screen h-screen">
          <ReduxProvider>
        <div className="relative h-[80px] z-0 hover:z-50">
          <Header />
        </div>
        <div className="absolute z-0 w-screen h-screen">
            {children}
        </div>
            {/* <Footer /> */}
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}