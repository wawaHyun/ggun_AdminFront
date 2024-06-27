'use client'

import { useEffect, useState } from "react";
import { IpArticle } from "@/app/api/article/model/article.model";
import Pagination from "@/app/component/navigation/pagination";
import { allArticleList } from "@/app/api/article/route";
import Loader from "@/app/component/box/loader";
import InfiniteArticles3 from "../infinite3/page";

const PageArticles = () => {

    const [allArticles, setAllArticles] = useState<IpArticle[]>([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const offset = (page - 1) * limit;

    useEffect(() => {
        allArticleList()
            .then((res: any) =>
                setAllArticles(res)
            )
            .catch((error: any) => {
                console.log("articles err!!! : " + error);
            });
    }, [])

    const allList = async () => {
        allartiList()
            .then((res: any) => {
                setAllArticles(res);
            })
            .catch((error: any) => {
                console.log("articles err!!! : " + error);
            });
    }


    const allartiList = async () => {
        const res: any = await fetch(`http://localhost:3001/board`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'API-Key': '',
            },
            body: '',
        })
        const data = await res.json()
        console.log("allartiList : " + data)
        return Response.json(data)
    }


    return (
        <div>
            <div>ddd
                {/* {allArticles.map((v:any) =>  */}
                {allArticles.slice(offset, offset + limit).map((v: any, i: any) =>
                    <div className="flex gap-10 m-8 border" key={v.id}>
                        <div>{v.id}</div>
                        <div>{v.title}</div>
                        <div>{v.content}</div>
                        <div></div>
                    </div>
                )}
            </div>
            <div className="w-full h-20">
                {/* <Pagination total={allArticles.length} limit={10} page={page} setPage={setPage} /> */}
                <InfiniteArticles3 total={allArticles.length} limit={10} page={page} setPage={setPage} />
            </div>
        </div>
    )
}
export default PageArticles;