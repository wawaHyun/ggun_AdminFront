'use client'

import { AttachFile, FmdGood, ThumbUpAlt } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { PG } from '@/app/component/common/enums/PG';
import {PinkButton} from '@/app/atoms/button/PinkButton';
import { IBoard } from '@/app/component/boards/model/board.model';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBoards } from '@/app/component/boards/service/board.slice';
import { fetchSaveArticle } from '@/app/component/articles/service/article.service';
import { fetchAllBoards } from '@/app/component/boards/service/board.service';
import { IArticle } from '@/app/component/articles/model/article.model';
import { getSingleArticle } from '@/app/component/articles/service/article.slice';



export default function ArticleSave() {

  const router = useRouter();
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors }, } = useForm<IArticle>({
    defaultValues: {
      board: 0,
      title: '',
      content: ''
    }
  })
  const boards: [] = useSelector(getAllBoards);
  const SaveArticle = useSelector(getSingleArticle);

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data))
    dispatch(fetchSaveArticle(data))
    .then((res:any)=>{
      alert("res : "+ JSON.stringify(res) + ", data: " + JSON.stringify(data) + ", data.board: "+ data.board)
      alert("SaveArticle: "+JSON.stringify(SaveArticle))
      router.push(`${PG.ARTICLE}/list/${data.board}`)
    })
    .catch((error:any)=>{
      console.log('article page onSubmit error : {}',error)
    })
  } 

  useEffect(() => {
    dispatch(fetchAllBoards())
  }, [dispatch])

  return (
    <form className="max-w mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <label htmlFor="countries" className=" block mb-2 text-lg text-center font-medium text-gray-900 ">게시글 작성</label>
        <select {...register('board', { required: true })}
          className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">

          {boards.map((i: IBoard) =>
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