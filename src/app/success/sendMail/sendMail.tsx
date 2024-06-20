'use client'

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { fetchSaveArticle } from '@/app/component/articles/service/article.service';
import { getSingleArticle } from '@/app/component/articles/service/article.slice';
import { AttachFile, FmdGood, ThumbUpAlt } from '@mui/icons-material';
import { MoveButton } from '@/atoms/button/MoveButton';


export default function SandMail() {

  const router = useRouter();
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors }, } = useForm<any>({
    defaultValues: {
      worker_id: '',
      worker : '',
      title: '',
      content: ''
    }
  })
  const SaveArticle = useSelector(getSingleArticle);

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data))
    alert(JSON.stringify(data) + " Save! ")
    // dispatch(fetchSaveArticle(data))
    //   .then((res: any) => {
    //     alert("res : " + JSON.stringify(res) + ", data: " + JSON.stringify(data) + ", data.board: " + data.board)
    //     alert("SaveArticle: " + JSON.stringify(SaveArticle))
    //     router.push(`${PG.ARTICLE}/list/${data.board}`)
    //   })
    //   .catch((error: any) => {
    //     console.log('article page onSubmit error : {}', error)
    //   })
    }

    return (

      <div className='flex justify-center w-[100%]'>
         <form className="w-[100%]" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center text-[20px] my-3">관리자 문의 <br /><br /> <hr /></div>

          <input className="mb-1 mt-1 rounded bg-gray-100 border w-[100%] border-gray-300 h-[40px] outline-none " value="3"
            type="text" {...register('board', { required: true, maxLength: 30 })} hidden />

          <div className='flex gap-3'>
            <input className="mb-1 mt-1 p-2 rounded bg-gray-100 border w-[50%] border-gray-300 h-[40px] outline-none " placeholder='사원번호'
              type="text" {...register('worker_id', { required: true, maxLength: 30 })} />

            <input className="mb-1 mt-1 p-2 rounded bg-gray-100 border w-[50%] border-gray-300 h-[40px] outline-none " placeholder='사원명'
              type="text" {...register('worker', { required: true, maxLength: 30 })} />
          </div>

          <input className="mb-3 mt-1 p-2 rounded bg-gray-100 border w-[100%] border-gray-300 h-[40px] outline-none " placeholder="Title"
            type="text" {...register('title', { required: true, maxLength: 30 })} />
          <textarea className="bg-gray-100 p-2 rounded border w-[100%] border-gray-300 h-60 outline-none " placeholder="Describe everything about this post here"
            {...register('content', { required: true, maxLength: 30 })} />

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
            <MoveButton text="submit" path={onSubmit} />
          </div>
        </form >
      </div>
    );
  }