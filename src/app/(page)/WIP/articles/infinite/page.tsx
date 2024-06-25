'use client'
import { IpArticle } from "@/app/api/article/model/article.model";
import { allArticleList, limitArticleList } from "@/app/api/article/route";
import { forwardRef, useEffect, useRef, useState } from "react";

interface ItemProps {
    number: number;
}

const Item: React.FC<ItemProps> = ({ number }) => {
    return <div>{number}</div>;
};

const InfiniteArticles: React.FC = () => {
    const targetRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [allArticles, setAllArticles] = useState<IpArticle[]>([]);

    useEffect(() => {
        // let offset = 0 + moreList
        allArticleList()
            .then((res: IpArticle[]) => {
                setAllArticles(res)
            console.log("30개 불러옴")})
            .catch((error: any) => console.error(error));
    }, [allArticleList]);

    const Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const moreList = 0;
    let offset = 0

    const getMoreItem = async () => {
        setIsLoaded(true);
        console.log("111")
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log("222")
        // setAllArticles((prevLists) => setAllArticles(prevLists));
        try {
            const res: IpArticle[] = await limitArticleList(offset);
            console.log("333");
            
            setAllArticles((prevLists) => [...prevLists, ...res]);
            console.log("333 : "+ allArticles);
    
            offset += 30;
        } catch (error: any) {
            console.error(error);
        } finally {
            console.log("444");
        }

        setIsLoaded(false);
    };

    const onIntersect = async ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        if (entry.isIntersecting && !isLoaded) {
            observer.unobserve(entry.target);
            await getMoreItem();
            observer.observe(entry.target);
        }
    };

    useEffect(() => {
        let observer: IntersectionObserver;
        if (targetRef.current) {
            observer = new IntersectionObserver(onIntersect, { threshold: 0.4 });
            observer.observe(targetRef.current);
        }
        return () => observer && observer.disconnect();
    }, [targetRef.current]);

    return (
        // <div>
    //      {itemLists.map((v, i) => (
    //         <Item number={i + 1} key={i} />
    //       ))} 
    //   <div ref={targetRef} className="Target-Element">
    //         {isLoaded && allArticles.length > 0 ? 
    //           allArticles.map((i) => <div key={i.id}>{i.title}</div>)
    //          : <div></div>}
    //       </div>
    //     </div> 

        <div className="w-full h-full">
            <div className="fixed z-[1] top-0 left-0 right-0 m-auto bg-pebble-200 text-[32px] rounded-b-lg text-center w-[80%] pb-1">
                사내 공지사항</div>
            <div ref={targetRef} className="absolute top-[43px] left-0 right-0 m-auto w-[80%] bg-white">
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

export default InfiniteArticles;