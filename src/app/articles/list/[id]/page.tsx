'use client'

import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyArticleList } from "@/app/component/articles/service/article.service";
import { IArticle } from "@/app/component/articles/model/article.model";
import { getAllArticles } from "@/app/component/articles/service/article.slice";

const cards = [
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/mountain-nightview.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/autumn.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/babypinetree.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/beach.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/purpleflowers.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/starrysky.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/lake.jpg",
];


const ArticlesList: NextPage = ({ params }: any) => {

    const router = useRouter();
    const dispatch = useDispatch()
    const allArticles: IArticle[] = useSelector(getAllArticles)

    useEffect(() => {
        const id = parseInt(params.id);
        dispatch(fetchMyArticleList(id))
    }, [])


    return (<>

        <div className="flex flex-col items-center justify-center w-full bg-300">
            <div>관리자 문의</div>
            <div>
                <table>
                    <th>
                        <td>No.</td>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>처리상태</td>
                        <td>작성일</td>
                    </th>
                        {allArticles.map((i:any)=>
                    <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.title}</td>
                        <td>{i.content}</td>
                        <td>{i.answer}</td>
                        <td>{i.modDate}</td>
                    </tr>
                        )}
                    
                </table>
            </div>
        </div>
    </>)
}

export default ArticlesList
