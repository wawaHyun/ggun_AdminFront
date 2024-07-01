'use client'

import { useForm } from 'react-hook-form';
import { AttachFile, FmdGood } from '@mui/icons-material';
import { GrayButton, MoveButton } from '@/app/common/button/MoveButton';
import { useState } from 'react';
import Link from 'next/link';
import { XIcon } from '@/app/common/icons/icons';

export default function SendMail() {

  let [isOpen, setIsOpen] = useState(false);
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

  const onSubmit = () => {}

  return (

    <div className="p-3 text-xs text-gray-500">
      신규 생성은 관리자에게 문의 부탁드립니다. <br />
      <div className="w-[50%] h-[30px] mt-2">
        <GrayButton text="관리자 문의" click={() => setIsOpen(!isOpen)} />
      </div>
      <div className="w-[50%] h-[30px] mt-2">
        <Link href="http://localhost:3000/" ><GrayButton text="사용자 로그인으로 돌아가기" /></Link>
      </div>
      {isOpen == true ?
        <div className="absolute top-8 left-[25%] rounded-lg h-auto w-[50%] bg-white text-black border shadow-lg pl-8 flex justify-start">
          <div className="w-full my-3">
            <div className='flex justify-center w-[100%]'>
              <form className="w-[100%]" onSubmit={handleSubmit(onSubmit)}>
                <div className="text-center text-[20px] my-3">관리자 이메일 문의 <br /><br /> <hr /></div>

                <div className='flex gap-2 pb-2'>
                  <input className="" placeholder='사원번호'
                    type="text" {...register('enpId', { required: true, maxLength: 30 })} />
                  <input className="" placeholder='사원명'
                    type="text" {...register('enpName', { required: true, maxLength: 30 })} />
                </div>
                <div className='space-y-2'>
                  <input className="" placeholder='회신받을 이메일'
                    type="eamil" {...register('email', { required: true, maxLength: 100 })} />

                  <input className="" placeholder="Title"
                    type="text" {...register('title', { required: true, maxLength: 30 })} />

                  <textarea className="h-[200px]" placeholder="Describe everything about this post here"
                    {...register('content', { required: true, maxLength: 300 })} />
                </div>
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
                  <MoveButton text="메일보내기" click={onSubmit} />
                </div>
              </form >
            </div>
          </div>
          <button className="bg-white left-[50%] h-[40px] w-[30px] rounded-lg z-5" onClick={() => { setIsOpen(!isOpen), console.log("fff") }} ><XIcon color="gray" /></button>
        </div>
        : <div></div>}
    </div>
  );
}