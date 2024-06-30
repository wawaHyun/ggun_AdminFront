"use client"

import { ArrowLeftIcon, ArrowRightIcon } from "@/app/common/icons/pageIcon";
import { usePathname, useSearchParams } from "next/navigation";
import { allArticleList } from "@/app/api/article/route";

async function Pagination2  ({ totalPage}: { totalPage:number}) {

const pathname = usePathname();
const searchParmas = useSearchParams();
const currentPage = Number(searchParmas.get('page'))||1;
const createPageURL = (pageNumber : number|string) =>{
    const params = new URLSearchParams(searchParmas);
    params.set('page',pageNumber.toString());
    return `${pathname}?${params.toString()}`
}

// const allPages = generatePagination(currentPage,totalPage)
const allPages = await allArticleList();

    // const [btnActive, setBtnActive] = useState('');
    // const numPages = Math.ceil(total / limit);

    // const handelPageBtn = (e: any, i: any) => {
    //     setPage(i + 1);
    //     setBtnActive(e.target.value);
    // }

    return (
        <>
            <div className="flex bg-pebble-200 text-white rounded-full">
                {/* <button onClick={() => createPageURL(currentPage-1)} disabled={currentPage<= 1} className="w-[40px] px-2 hover:backdrop-brightness-125 rounded-l-full">
                    <ArrowLeftIcon />
                </button> */}
                {allPages.map((page:number|string,i:number)=>{
                    let position : 'first' | 'last' | 'single' | 'middle' | undefined;

                    if(i == 0) position ='first';
                    if(i == allPages.length-1) position ='last';
                    if(allPages.length == 1 ) position ='single';
                    if(page == 'dddd') position ='middle';

                    return(
                        // <PaginationNumber key={page} href/>
                        <div className="bg-pink-200 border">{position}</div>
                    )
                })}
                {/* {Array.from({ length: numPages }, (v: any, i: any) =>
                    <div key={i + 1} className="flex content-center items-center">
                        {btnActive == i ?  
                            <button value={i} 
                            className={`backdrop-brightness-125 w-[30px] h-[30px] hover:block`} onClick={(e: any) => handelPageBtn(e, i)}
                            aria-current={page === i + 1 ? "page" : undefined}>{i + 1}</button>
                            :
                            <button value={i}
                            className={`hover:backdrop-brightness-125 w-[30px] h-[30px] hover:block`} onClick={(e: any) => handelPageBtn(e, i)}
                            aria-current={page === i + 1 ? "page" : undefined}>{i + 1}</button>}
                    </div>
                )} */}
                {/* <button onClick={() => {setPage(page + 1), setBtnActive(page+1)} } disabled={page === numPages} className="w-[40px] px-2 hover:backdrop-brightness-125 rounded-r-full">
                    <ArrowRightIcon /></button> */}
            </div >
        </>
    );
};

export default Pagination2