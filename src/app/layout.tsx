'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "./component/common/module/header";


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

        <div className="relative h-[80px] z-0 hover:z-50">
          <Header />
        </div>
        <div className="absolute z-0 w-screen h-screen">
            {children}
        </div>

        </div>


      </body>
    </html>
  );
}