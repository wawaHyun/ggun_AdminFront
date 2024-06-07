'use client'

import { AttachFile, FmdGood, ThumbUpAlt } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PG } from '@/app/component/common/enums/PG';
import { FindSingleArticle, UpdateAricle } from '@/app/api/article/route';
import PinkButton from '@/app/atoms/button/PinkButton';
import { IBoardtype } from '@/app/api/board/model/board-model';
import { AllBoardList } from '@/app/api/board/route';
import { IArticletype } from '@/app/api/article/model/articel-model';



export default function ArticleUpdate({ params }: any) {

  const router = useRouter();
  const [boardlist, setBoardList] = useState<IBoardtype[]>([])
  const [article, setArticle] = useState<IArticletype>({ id: params.id })


  const handleArticleInfo = (e: any) => {
    const {
      target: { value, name }
    } = e;
    setArticle(dto => ({ ...dto, [name]: value }));
    // console.log(article)
  }

  const sigleArti = async () => {
    const id = parseInt(params.id)
    try {
      const response = await FindSingleArticle(id);
      return response
    }
    catch (error) {
      console.log(error)
    }
  }

  const allBoardlist = async () => {
    try {
      const response: IBoardtype[] = await AllBoardList();
      setBoardList(response)
    }
    catch (error) {
      console.log(error)
    }
  }

  const onSubmit = async () => {
    console.log("onsubmit : " + JSON.stringify(article));
    try {
      const response = await UpdateAricle(article)
      alert("board1 : ")
      router.push(`${PG.ARTICLE}/mylist/${response.board_id}`);
    }
    catch (error) {
      console.log('article page onSubmit error : {}', error)
      alert("board3 : "+article.board)
    }
    finally{

    }
  }

  useEffect(() => {
    sigleArti()
      .then((res: any) => {
        const respon = res != undefined ? res : null
        setArticle(respon)
      })
      .catch((error) => {
        console.log(error)
      })

    allBoardlist()
  }, [])



  return (
    <form className="max-w mx-auto" >
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">게시글 수정!</label>
        <select defaultValue={params.id} onChange={handleArticleInfo} name="id"
          className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

          {boardlist.map((i: IBoardtype) =>
            <option key={i.id} value={i.id}>{i.title}</option>
          )}

        </select>

        <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" placeholder={article.title + ''}
          type="text" onChange={handleArticleInfo} name="title"/>
        <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" placeholder={article.content + ''}
          onChange={handleArticleInfo} name="content"/>

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

        <div className="buttons flex">
          <div className="buttons flex gap-5 justify-center h-[50px]">
            <PinkButton text="게시글 수정" path={onSubmit} />
            {/* <PinkButton text="CANCEL" path={() => router.back()} /> */}
          </div>
        </div>
      </div>
    </form>
  )
}