
import { MoveButton } from '@/app/common/button/MoveButton';
import { WhiteBox } from '@/app/common/box/whiteBox';
import Link from 'next/link';
import { articleDummy } from '@/app/common/dummy/article.dummy';
import { ClipIcon, MapIcon } from '@/app/common/icons/icons';
import { BrownLink } from '@/app/common/link/brawnLink';

async function ArticleDetail({params} : any) {

  const article = articleDummy[0];

  return (
    <div className=' w-full h-full'>
      <WhiteBox style="flex justify-center items-center ">
      <form className="w-[40%]" >
        <div className="text-center text-[20px] my-3">{params.id}번 게시글 조회 <br /><br /> <hr /></div>

        <div className='flex gap-2 pb-2'>
          <input className="" placeholder={`작성자 ID : ${article.writerId}`}
            type="text" readOnly/>
          <input className="" placeholder={article.regDate}
            type="text" readOnly/>
        </div>
        <div className='space-y-2'>
          <input className="" placeholder={article.title}
            type="text" readOnly />

          <textarea className="h-[200px]" placeholder={article.content}
            readOnly />
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
          <BrownLink click={`/articles/list/1`}>뒤로가기</BrownLink>
        </div>
      </form >
      </WhiteBox>
    </div>
  );
};

export default ArticleDetail;