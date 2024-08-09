'use client'

import { BrownButton, GrayButton, MoveButton } from '@/app/common/button/MoveButton';
import { useState } from 'react';
import { ClipIcon, MapIcon, XIcon } from '@/app/common/icons/icons';
import { WhiteLink } from '@/app/common/link/whiteLink';
import { SendMailApi } from '@/app/service/mail/mail.api';
import { useMailAction, useMailStack } from '@/app/store/sendMail.store';

export default function SendMail() {


  let [isOpen, setIsOpen] = useState(false);

  const inputMail = useMailAction();
  const Mail = useMailStack();
  
  const handleMail = (e: any) => {
      inputMail({ ...Mail, [e.target.name]: e.target.value });
      console.log('Mail : ' + JSON.stringify(Mail))
  }

  const submitMail = async () => {
      const response = await SendMailApi(Mail)
      if (typeof response === 'object' && 'status' in response) {
          throw new Error(`Error: ${response.status}`);
        }
      console.log(response);
      alert('성공적으로 메일을 보냈습니다. 빠른 시일 내에 답변 드리도록하겠습니다.')
  }

  return (

    <div className="p-3 text-xs text-gray-500">
      신규 생성은 관리자에게 문의 부탁드립니다. <br />
      <div className="w-[50%] h-[30px] mt-2">
        <BrownButton  click={() => setIsOpen(!isOpen)}>관리자 문의 </BrownButton>
      </div>
      <div className="w-[50%] h-[30px] mt-2 ">
        <WhiteLink style='h-full text' click="http://localhost:3000/" >사용자 로그인으로 돌아가기</WhiteLink>
      </div>
      {isOpen == true ?
                <div className="fixed z-10 top-[100px] left-[25%] rounded-lg h-auto w-[50%] bg-white text-black border shadow-lg pl-8 flex justify-start">
                    <div className="w-full my-3">
                        <div className='flex justify-center w-[100%]'>
                            <form className="w-[100%]">
                                <div className="text-center text-[20px] my-3">관리자 이메일 문의 <br /><br /> <hr /></div>

                                <div className='space-y-2'>
                                    <input className="" placeholder='회신받을 이메일' name='email' type="eamil" onChange={handleMail}/>
                                    <input className="" placeholder="Title" type="text" name='subject' onChange={handleMail}/>
                                    <textarea className="h-[200px] w-full border-2 rounded-lg" placeholder="Describe everything about this post here" name='message' onChange={handleMail}/>
                                </div>
                                <div className="icons flex text-gray-500 m-2">
                                    <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <MapIcon />
                                    </svg>
                                    <label htmlFor="input-file" id="input-file" >
                                        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <ClipIcon />
                                        </svg>
                                    </label>
                                    <input type="file" id="input-file" name="input-file" accept='.zip' className='invisable'/>
                                    <div className="count ml-auto text-gray-400 text-xs font-semibold">{Mail.message.length}/300</div>
                                </div>
                                <div className="buttons flex gap-5 justify-center h-[50px]">
                                    <MoveButton click={submitMail} >메일보내기</MoveButton>
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