'use client'

import { myArticleList } from "@/app/api/article/route";
import { useState } from "react";
import { IpArticle } from "@/app/api/article/model/article.model";
import Pagination from "@/app/component/navigation/pagination";

const PageArticles = () => {

    const [allArticles, setAllArticles] = useState<IpArticle[]>([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const offset = (page-1) * limit;

    const allList = async () =>{
        myArticleList("1")
        .then((res: any) => {
            setAllArticles(res);
        })
        .catch((error: any) => {
            console.log("articles err!!! : " + error);
        });
    }

    
    return (
        <div>
            <button onClick={()=>allList()}>클릿쓰</button>
            <div>
                {/* {allArticles.map((v, i)=> */}
                {allArticles.slice(offset, offset + limit).map((v:any,i:any)=>
                <div className="flex gap-3" key={v.id}>
                    <div>{v.id}</div>
                    <div>{v.title}</div>
                    <div>{v.content}</div>
                </div>
                )}
            </div>
            <div className="w-full h-20">
                <Pagination total={allArticles.length} limit={10} page={page} setPage={setPage} />
            </div>
        </div>
    )
}
export default PageArticles;