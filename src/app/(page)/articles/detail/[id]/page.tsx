
import { AttachFile, FmdGood } from '@mui/icons-material';
import { MoveButton } from '@/app/common/button/MoveButton';
import { WhiteBox } from '@/app/common/box/whiteBox';
import Link from 'next/link';
import { findArticleById } from '@/app/api/article/route';

async function ArticleDetail({params}:any) {

  const article = await findArticleById(params.id);

  return (
    <div className='flex justify-center content-center items-center w-full h-full'>
    <div className=''>
      <WhiteBox color="" content={
      <form className="w-[100%]" >
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
            <FmdGood component={FmdGood}></FmdGood>
          </svg>
          <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <AttachFile component={AttachFile}></AttachFile>
          </svg>
          <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
        </div>
        <div className="buttons flex gap-5 justify-center h-[50px]">
          <Link href={`/articles/list/1`}><MoveButton text="뒤로가기"/></Link>
        </div>
      </form >
      }/>
    </div>
    </div>
  );
};

export default ArticleDetail;