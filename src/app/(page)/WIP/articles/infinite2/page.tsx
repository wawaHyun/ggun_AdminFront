'use client'
import { IpArticle } from "@/app/api/prisma/article/model/article.model";
import { allArticleList, limitArticleList } from "@/app/api/prisma/article/route";
import Loader from "@/app/common/box/loader";
import { forwardRef, useEffect, useRef, useState } from "react";

const InfiniteArticles2_3 = () => {
    const targetRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [allArticles, setAllArticles] = useState<IpArticle[]>([]);
    const [page1, setPage1] = useState<IpArticle[]>([]);
    const [page2, setPage2] = useState<IpArticle[]>([]);
    const [page3, setPage3] = useState<IpArticle[]>([]);
    let more = 1;

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


    //---------------------------------------------------------------------------------------------------------------------------
    // window.addEventListener("scroll", function () {
    //     const SCROLLED_HEIGHT = window.scrollY;
    //     const WINDOW_HEIGHT = window.innerHeight;
    //     const DOC_TOTAL_HEIGHT = document.body.offsetHeight;
    //     // const IS_BOTTOM = WINDOW_HEIGHT + SCROLLED_HEIGHT == DOC_TOTAL_HEIGHT;
        
    //     const IS_END = (WINDOW_HEIGHT + SCROLLED_HEIGHT >= DOC_TOTAL_HEIGHT + 100);
        
    //     const IS_BBOTTOM = Math.floor(SCROLLED_HEIGHT / WINDOW_HEIGHT)
    //     // let IS_BBOTTOM2 = (SCROLLED_HEIGHT / WINDOW_HEIGHT)
        
        
    //     if (IS_BBOTTOM) {
    //         // console.log("IS_BOTTOM : " + IS_BBOTTOM2);
    //         console.log("IS_BBOTTOM" + IS_BBOTTOM);
    //         console.log("WINDOW_HEIGHT" + WINDOW_HEIGHT);
    //         console.log("SCROLLED_HEIGHT" + SCROLLED_HEIGHT);
    //         console.log("DOC_TOTAL_HEIGHT" + DOC_TOTAL_HEIGHT);
    //         // getMoreItem();
    //         // setPage(page + 1), setBtnActive(page + 1)
    //     }
    // });
    
    // const [btnActive, setBtnActive] = useState('');
    // const numPages = Math.ceil(total / limit);

    // const handelPageBtn = (e: any, i: any) => {
    //     setPage(i + 1);
    //     setBtnActive(e.target.value);
    // }


    //---------------------------------------------------------------------------------------------------------------------------

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