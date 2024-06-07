'use client'
import { useRouter } from "next/navigation";
import { NextPage } from "next";
import './globals.css'
import { PG } from "./component/common/enums/PG";
import { Component } from "react";


const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="w-screen h-screen justify-center content-center bg-black">
        <div className="text-center content-center bg-center bg-bg_img bg-cover h-[100%] saturate-100">
          <div className="backdrop-blur h-[30%] content-center">

            <span className="text-6xl text-pink-700 font-bold font-['Inter']">G G U N<br/></span>
            <span className="text-3xl font-['Inter'] text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-pink-600 via-gguntheme-230 to-gguntheme-240">수익률을 보장하는 주식장사꾼, GGUN</span><br />
          </div>

          <div className="mt-[15%]">
            <button className="w-44 h-16 bg-pink-700 rounded-lg hover:bg-gray-950" onClick={() => router.push(PG.USER + "/loginPrisma")}>
              <div className="text-white font-bold">start </div>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;