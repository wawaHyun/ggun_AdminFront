'use client'

import { MoveButton } from '@/app/common/button/MoveButton';
import { WhiteBox } from '@/app/common/box/whiteBox';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ClipIcon, MapIcon } from '@/app/common/icons/icons';


export default function ArticleSave({ params }: {params:{id:number}}) {

  const [artiInfo, setArtiInfo] = useState({
      id: params.id,
      title: "빈 제목",
      content: "내용없음",
      writerId: "3",
      boardId: "2"
  });
  const router = useRouter();


async function save (artiInfo:IArticle){
//   const save = await saveArticle(artiInfo);
// return save;
alert('저장되었습니다!')
}

  const input = (info:string,name: string) => {
    setArtiInfo({
      ...artiInfo,
      [name]: info
    });
    // console.log('username : ' + JSON.stringify(artiInfo))
  }

  const onSubmit =() => {
    console.log("input Info : " + JSON.stringify(artiInfo))
    save(artiInfo)
    .then((res)=>
      router.push(`/articles/list/2`)
    )
  }

  return (
    <div className='flex justify-center content-center items-center w-full h-full'>
      <div className=''>
        <WhiteBox>
          <form className="w-[100%]" >
            <div className="text-center text-[20px] my-3">게시글 작성하기 {params.id}<br /><br /> <hr /></div>
            <div className='space-y-2'>
              <input className="" placeholder='사원번호: writerId'
                type="number"
                onInput={(e: any) => {
                  if (e.target.value >= 0) {
                      if (e.target.value > 10) {
                        alert("최대 10까지 입력가능합니다.");
                      }
                      e.target.value = e.target.value.slice(0, 5);
                  } else {
                    e.target.value = 0;
                    alert("음수값을 입력할 수 없습니다.");
                  }
                }}
                onChange={(e)=>input(e.target.value,'writerId')}/>

              <input className="" placeholder="Title" type="text"  onChange={(e)=>input(e.target.value,'title')}/>

              <textarea className="h-[200px]" placeholder="Describe everything about this post here"
                onChange={(e)=>input(e.target.value,'content')}/>
            </div>
            <div className="icons flex text-gray-500 m-2">
              <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <MapIcon />
              </svg>
              <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <ClipIcon />
              </svg>
              <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
            </div>
            <div className="buttons flex gap-5 justify-center h-[50px]">
              <MoveButton click={onSubmit}>작성완료</MoveButton>
            </div>
          </form >
          </WhiteBox>
      </div>
    </div>
  );
};
