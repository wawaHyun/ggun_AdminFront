'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PG } from "@/app/component/common/enums/PG";
import { IUsertype } from "@/app/api/user/model/user-model";
import { AuthUser,  } from "@/app/api/user/route";

export default function Join() {


  const router = useRouter();
  const [user, setUser] = useState<IUsertype>({
  username: '',
  password: '',
  name: '',
  age: '',
  email: '',
  address: '',
  phone: '',
  asset: '',
  mbti: '',
  investment_propensity: ''})


  const handleUserInfo = (e: any) => {
    const {
      target: { value, name }
    } = e;
    setUser(dto => ({ ...dto, [name]: value }));
  }

  const authUser = async () => {
    console.log("insert Info : " + JSON.stringify(user))
    try {
      const response = await AuthUser(user)
      console.log("Auth Info : " + JSON.stringify(response))
    } catch (error) {
      console.log("Auth Prisma fail : " + error)
    }
    finally{
      router.push(`${PG.USER}/joinrisma`)
    }
  }

  return (
    <div className="h-screen items-center flex justify-center px-5 lg:px-0 ">
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-indigo-950 text-center hidden md:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-indigo-950">
                Student Sign up
              </h1>
              <p className="text-[12px] text-gray-500">
                Hey enter your details to create your account
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your ID" name="username" onChange={handleUserInfo}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="Password"
                  placeholder="Enter your password" name="password" onChange={handleUserInfo}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your name" name="name" onChange={handleUserInfo}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="tel"
                  placeholder="Enter your phone" name="phone" onChange={handleUserInfo}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your age" name="age" onChange={handleUserInfo}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email" name="email" onChange={handleUserInfo}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your address" name="address" onChange={handleUserInfo}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your asset" name="asset" onChange={handleUserInfo}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your mbti" name="mbti" onChange={handleUserInfo}
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your investment_propensity" name="investment_propensity" onChange={handleUserInfo}
                />

                <button className="mt-5 tracking-wide font-semibold bg-indigo-950 text-gray-100 w-full py-4 rounded-lg hover:bg-pink-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={() => authUser()}>
                  <span className="ml-3">Sign Up</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account?{" "}
                  <Link href={`/`}>
                    <span className="text-blue-900 font-semibold">Sign in</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}