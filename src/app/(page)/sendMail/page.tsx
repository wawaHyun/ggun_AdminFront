'use client'

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { getSingleArticle } from '@/app/redux/silce/article.slice';
import { AttachFile, FmdGood, ThumbUpAlt } from '@mui/icons-material';
import { MoveButton } from '@/app/component/button/MoveButton';
import { useState } from 'react';
import client from "../../../../_lib/prisma/db";
import { findArticleById } from '@/app/api/article/route';

export default function SandMail() {

  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, } = useForm<any>({
    // defaultValues: {
    //   enpId: '',
    //   enpName: '',
    //   email: '',
    //   title: '',
    //   content: ''
    // }
  });

  const [email, setEmail] = useState({
    enpId: 0,
    enpName: '',
    email: '',
    title: '',
    content: ''
  });

  // const onSubmit = (data: any) => {
  //   console.log(JSON.stringify(data))
  //   alert(JSON.stringify(data) + " Save! ")
  //   //prisma
  //   saveArticle(data)
  //      .then((res: any) => {
  //       console.log("res : " + JSON.stringify(res) + ", data: " + JSON.stringify(data) + ", data.board: " + data.board)
  //       alert("SaveArticle: " + JSON.stringify(SaveArticle))
  //     })
  //     .catch((error: any) => {
  //       console.log('article page onSubmit error : {}', error)
  //     })
  //   }

  const onSubmit = (data: any) => {
    console.log("input Info : " + JSON.stringify(data))
    setEmail(data)
    seveOne()
    .then((res)=>
      console.log("save Info : " + JSON.stringify(res))
    )

  }

    const seveOne = async() => {
      try {
        // const response = await instance().post(`/email/send`,{data})
        const response = await findArticleById(1)
        console.log("findArticleById response : " + JSON.stringify(response))
      } catch (error) {
        console.log("findArticleById error : " + error)
      }
    }

  return (

    <div className='flex justify-center w-[100%]'>
      <form className="w-[100%]" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center text-[20px] my-3">관리자 이메일 문의 <br /><br /> <hr /></div>

        <div className='flex gap-3'>
          <input className="mb-1 mt-1 p-2 rounded bg-gray-100 border w-[50%] border-gray-300 h-[40px] outline-none " placeholder='사원번호'
            type="text" {...register('enpId', { required: true, maxLength: 30 })} />

          <input className="mb-1 mt-1 p-2 rounded bg-gray-100 border w-[50%] border-gray-300 h-[40px] outline-none " placeholder='사원명'
            type="text" {...register('enpName', { required: true, maxLength: 30 })} />

        </div>
        <input className="mb-1 mt-1 p-2 rounded bg-gray-100 border w-[100%] border-gray-300 h-[40px] outline-none " placeholder='회신받을 이메일'
          type="eamil" {...register('email', { required: true, maxLength: 100 })} />

        <input className="mb-3 mt-1 p-2 rounded bg-gray-100 border w-[100%] border-gray-300 h-[40px] outline-none " placeholder="Title"
          type="text" {...register('title', { required: true, maxLength: 30 })} />

        <textarea className="bg-gray-100 p-2 rounded border w-[100%] border-gray-300 h-60 outline-none " placeholder="Describe everything about this post here"
          {...register('content', { required: true, maxLength: 300 })} />

        <div className="icons flex text-gray-500 m-2">
          <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <FmdGood component={FmdGood}></FmdGood>
          </svg>
          <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <AttachFile component={AttachFile}></AttachFile>
          </svg>
          <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
        </div>
        <div className="buttons flex gap-5 justify-center h-[50px]">
          <button onSubmit={onSubmit}>post!</button>
          {/* <MoveButton text="POST" path='' />
          <input type="submit" value="SUBMIT" /> */}
        </div>
      </form >
    </div>
  );
}