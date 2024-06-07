'use client'

import { AttachFile, FmdGood, ThumbUpAlt } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PG } from '@/app/component/common/enums/PG';
import { AllBoardList } from '@/app/api/board/route';
import { IBoardtype } from '@/app/api/board/model/board-model';
import PinkButton from '@/app/atoms/button/PinkButton';
import { SaveArticle } from '@/app/api/article/route';



export default function ArticleSavePrisma() {

  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, } = useForm();
  const [boardlist, setBoardList] = useState<IBoardtype[]>([])

  const allBoardlist = async () => {
    try {
      const response: IBoardtype[] = await AllBoardList();
      setBoardList(response)
    }
    catch (error) {
      console.log(error)
    }
  }


  const onSubmit = async (data: any) => {
    console.log(JSON.stringify(data))
    try {
      await SaveArticle(data);
    }
    catch (error) {
      console.log('article page onSubmit error : {}', error)
    }
    finally{
      router.push(`${PG.BOARD}/list/${data.board}`)
    }

  }


  useEffect(() => {
    allBoardlist()
  }, [])


  return (
    <form className="max-w mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <label htmlFor="countries" className=" block mb-2 text-lg text-center font-medium text-gray-900 dark:text-white">게시글 작성</label>
        <select defaultValue={""} {...register('board', { required: true })}
          className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

          {boardlist.map((i: IBoardtype) =>
            <option key={i.id} value={i.id}>{i.title}</option>
          )}

        </select>

        <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" placeholder="Title"
          type="text" {...register('title', { required: true, maxLength: 30 })} />
        <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" placeholder="Describe everything about this post here"
          {...register('content', { required: true, maxLength: 30 })} />

        <div className="icons flex text-gray-500 m-2">
          <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <ThumbUpAlt component={ThumbUpAlt}></ThumbUpAlt>
          </svg>
          <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <FmdGood component={FmdGood}></FmdGood>
          </svg>
          <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <AttachFile component={AttachFile}></AttachFile>
          </svg>
          <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
        </div>
        <div className="buttons flex gap-5 justify-center h-[50px]">
          <PinkButton text="게시글 저장" path={onSubmit} />
          <PinkButton text="CANCEL" path={() => router.back()} />
        </div>
      </div>
    </form>
  )
}