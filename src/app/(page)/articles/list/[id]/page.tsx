
import { Search } from "@/app/component/search/search";
import { MoveButton } from "@/app/common/button/MoveButton";
import Link from "next/link";
import Articles from "../../../../component/box/articles/Articles";
import { Suspense } from "react";

export default async function ArticlesList({params}:any ) {

    function handleTitle(btn: any) {
        console.log("handelCharts : ", btn)
        const enums: any = {
            1: "사내 공지사항",
            2: "관리자 문의게시판",
        };
        return <div>{enums[btn]}</div>;
    };

    return (
        <div className="w-full h-full">
            <div className="fixed top-0 left-0 right-0 m-auto bg-pebble-200 text-[32px] rounded-b-lg text-center w-[85%] pb-1">
            {handleTitle(params.id)}</div>
            <div className="absolute top-[50px] left-0 right-0 m-auto w-[85%] bg-white pb-3">
                <Suspense>
                    <Articles id={params.id}/>
                </Suspense>

                <div className="w-[70%] grid grid-cols-5 gap-3 m-auto   ">
                    <Search text="Search.." color="col-span-3" /> <MoveButton text="검색" />
                    <Link href={`/articles/save`}><MoveButton text="게시글 작성하기" /></Link>
                </div>
            </div>
        </div>
    )
};
