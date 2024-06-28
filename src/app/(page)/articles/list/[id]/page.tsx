'use client'

import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "@/app/redux/silce/article.slice";
import { fetchMyArticleList } from "@/app/redux/service/article.service";
import { IArticle } from "@/app/redux/model/article.model";
import Pagination from "@/app/component/navigation/pagination";
import { IpArticle } from "@/app/api/article/model/article.model";
import { useRouter } from "next/navigation";
import { Search } from "@/app/component/search/search";
import { MoveButton } from "@/app/component/button/MoveButton";
import { qnaDummy } from "@/app/common/dummy/article.dummy";

const Articles: NextPage = ({ params }: any) => {

    const dispatch = useDispatch();
    const router = useRouter();
    const allArticles: IArticle[] = useSelector(getAllArticles);

    // const [allArticles, setAllArticles] = useState<IArticle[]>([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const offset = (page - 1) * limit;

    useEffect(() => {
        //hard
        // const maplist = params.id == 1 ? qnalist : articles;

        //prisma
        // myArticleList(params.id)
        //     .then((res:any) => {
        //         setAllArticles(res);
        //     })
        //     .catch((error: any) => {
        //         console.log("articles err!!! : " + error);
        //     });

        //spring
        dispatch(fetchMyArticleList(params.id))
            .then((res: any) =>
                console.log(res)
            )
            .catch((error: any) =>
                console.log("articles err!!! : " + error))

        console.log("articles: ", params.id);
    }, [params.id, dispatch]);


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
                {params.id}</div>
            <div className="absolute top-[50px] left-0 right-0 m-auto w-[85%] bg-white pb-3">
                <table className="sticky z-[0] p-4">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>내용</th>
                            <th>borad id</th>
                            <th>작성일</th>
                            <th>처리완료일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allArticles.slice(offset, offset + limit).map((v: any, i: any) =>
                            <tr key={v.id} onClick={() => router.push(`/articles/detail/${v.id}`)} className="cursor-pointer">
                                <td>{v.id}</td>
                                <td>{v.title}</td>
                                <td>{v.writer_id}</td>
                                <td>{v.content}</td>
                                <td>{v.board_id}</td>
                                <td>{v.regDate}</td>
                                <td>{v.modDate}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="w-full items-center flex justify-center h-[50px]">
                    <Pagination total={allArticles.length} limit={10} page={page} setPage={setPage} />
                </div>

                <div className="w-[70%] grid grid-cols-5 gap-3 m-auto   ">
                    <Search text="Search.." path="" color="col-span-3" /> <MoveButton text="검색" path="" color="" />
                    <MoveButton text="게시글 작성하기" path={()=>router.push(`/articles/save`)} />
                </div>
            </div>
        </div>
    )
};

export default Articles;
