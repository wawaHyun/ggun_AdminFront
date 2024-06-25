'use client'
import { IpArticle } from "@/app/api/article/model/article.model";
import { allArticleList, limitArticleList } from "@/app/api/article/route";
import { forwardRef, useEffect, useRef, useState } from "react";

const InfiniteArticles3 = () => {
    // const targetRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [allArticles, setAllArticles] = useState<IpArticle[]>([]);

    let offset = 20

    useEffect(() => {
        // let offset = 0 + moreList
        limitArticleList(0)
            .then((res: IpArticle[]) => {
                setAllArticles(res)
            console.log("30개 불러옴")})
            .catch((error: any) => console.error(error));
    }, []);

    const getMoreItem = async () => {
        setIsLoaded(true);
        console.log("111")
        await new Promise((resolve) => setTimeout(resolve, 500));
        try {
            const res:any = limitArticleList(offset);
            // setAllArticles((prevLists) => [...prevLists, ...res]);
            setAllArticles(res)
            console.log("333 : "+ allArticles);
    
            if( offset < 86) offset += 20;
        } catch (error: any) {
            console.error(error);
        } finally {
            console.log("444");
        }
        setIsLoaded(false)
    }


    window.addEventListener("scroll", function () {
        const SCROLLED_HEIGHT = window.scrollY;
        const WINDOW_HEIGHT = window.innerHeight;
        const DOC_TOTAL_HEIGHT = document.body.offsetHeight;
        const IS_BOTTOM = WINDOW_HEIGHT + SCROLLED_HEIGHT == DOC_TOTAL_HEIGHT;

        const IS_END = (WINDOW_HEIGHT + SCROLLED_HEIGHT  >= DOC_TOTAL_HEIGHT + 100) ;

        let IS_BBOTTOM =  Math.floor( SCROLLED_HEIGHT / WINDOW_HEIGHT)
        let IS_BBOTTOM2 =  ( SCROLLED_HEIGHT / WINDOW_HEIGHT)
        let page = 1;

        if (IS_BBOTTOM > page) {
            console.log("IS_BOTTOM : "+ IS_BBOTTOM2);
            console.log("WINDOW_HEIGHT"+WINDOW_HEIGHT);
            console.log("SCROLLED_HEIGHT"+SCROLLED_HEIGHT);
            console.log("DOC_TOTAL_HEIGHT"+DOC_TOTAL_HEIGHT);
            console.log("IS_BBOTTOM"+IS_BBOTTOM);
            // getMoreItem();
            page++
        }
      });

    return (
        <div className="w-full h-full">
            <div className="fixed z-[1] top-0 left-0 right-0 m-auto bg-pebble-200 text-[32px] rounded-b-lg text-center w-[80%] pb-1">
                사내 공지사항</div>
            <div className="absolute top-[43px] left-0 right-0 m-auto w-[80%] bg-white">
                <table className="sticky z-[0] p-4">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>내용</th>
                            <th>처리상태</th>
                            <th>작성일</th>
                            <th>처리완료일</th>
                        </tr>
                    </thead>
                    <tbody >
                        {allArticles.map((v,i) => (
                            <tr key={`${v.id}-${i}`} >
                                <td>{v.id}</td>
                                <td>{v.title}</td>
                                <td>{v.writer_id}</td>
                                <td>{v.content}</td>
                                <td>{v.reg_date}</td>
                                <td>{v.mod_date}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <div className="w-full h-[80px]">
                    <div className="w-full h-20">
                    </div>
                </div>
            </div>
        </div>


    );
};

export default InfiniteArticles3;