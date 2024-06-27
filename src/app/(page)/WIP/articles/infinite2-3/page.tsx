'use client'
import { IpArticle } from "@/app/api/article/model/article.model";
import { allArticleList, limitArticleList } from "@/app/api/article/route";
import Loader from "@/app/component/box/loader";
import { forwardRef, useEffect, useRef, useState } from "react";

const InfiniteArticles2_3 = () => {
    const targetRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [allArticles, setAllArticles] = useState<IpArticle[]>([]);
    const [page1, setPage1] = useState<IpArticle[]>([]);
    const [page2, setPage2] = useState<IpArticle[]>([]);
    const [page3, setPage3] = useState<IpArticle[]>([]);
    let more = 1;

    useEffect(() => {
        // limitArticleList()
        //     .then((res: any) => {
        //         setPage1(res.slice(0, 10));
        //         setPage2(res.slice(11, 20));
        //         setPage3(res.slice(21, 30));
        //         console.log("articles  : " + page1)
        //     })
        //     .catch((error: any) => {
        //         console.log("articles err!!! : " + error)
        //     })
    }, []);
    // }, [page1, page2, page3]);


    function setThepage(value: any) {
        const enums: any = {
            1: page1,
            2: page2,
            3: page3,
        };
        const newArticles = enums[value];
        console.log("newArticles : ", newArticles);
        if (newArticles.length > 0) {
            setAllArticles((prevArticles) => [...prevArticles, ...newArticles]);
        } else {
            console.log("No new articles to add.");
        }
    }


    const getMoreItem = async () => {
        setIsLoaded(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setThepage(more);
        if (more < 3) more++
        console.log("more" + more)
        window.scrollBy(0, -100);
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
        limitArticleList()
            .then((res: any) => {
                setPage1(res.slice(0, 10));
                setPage2(res.slice(11, 20));
                setPage3(res.slice(21, 30));
                console.log("articles  : " + page1)
            })
            .catch((error: any) => {
                console.log("articles err!!! : " + error)
            })

        let observer: IntersectionObserver;
        if (targetRef.current) {
            observer = new IntersectionObserver(onIntersect, { threshold: 0.4 });
            observer.observe(targetRef.current);
        }
        return () => observer && observer.disconnect();

    }, [targetRef.current]);



    return (
        <div className="border">
            <div className="border text-center">

                {/* <button onClick={() => setList()}>click here! </button> */}
                <div className="h-[800px] bg-pink-200 border">fff</div>
                {allArticles.map((v, i) => (
                    <div key={v.id} ref={targetRef} className="gap-3 flex my-2 bg-pink-200">
                        <div>{v.id}</div>
                        <div>{v.title}</div>
                        <div>{v.content}</div>
                    </div>
                ))}

            </div>
            <div ref={targetRef} className="Target-Element">
                {isLoaded && allArticles.length > 0 ?
                    <Loader/> : <div></div>}
            </div>
        </div>
    );
};

export default InfiniteArticles2_3;