'use client'

import { IpArticle } from "@/app/api/article/model/article.model";
import { allArticleList } from "@/app/api/article/route";
import Loader from "@/app/component/box/loader";
import { useEffect, useState } from "react";

const InfiniteArticles3 = ({ total, limit, page, setPage }: any) => {
    
    const [btnActive, setBtnActive] = useState('');
    const numPages = Math.ceil(total / limit);

    const handelPageBtn = (e: any, i: any) => {
        setPage(i + 1);
        setBtnActive(e.target.value);
    }


    window.addEventListener("scroll", function () {
        const SCROLLED_HEIGHT = window.scrollY;
        const WINDOW_HEIGHT = window.innerHeight;
        const DOC_TOTAL_HEIGHT = document.body.offsetHeight;
        // const IS_BOTTOM = WINDOW_HEIGHT + SCROLLED_HEIGHT == DOC_TOTAL_HEIGHT;

        const IS_END = (WINDOW_HEIGHT + SCROLLED_HEIGHT >= DOC_TOTAL_HEIGHT + 100);

        const IS_BBOTTOM = Math.floor(SCROLLED_HEIGHT / WINDOW_HEIGHT)
        // let IS_BBOTTOM2 = (SCROLLED_HEIGHT / WINDOW_HEIGHT)


        if (IS_BBOTTOM) {
            // console.log("IS_BOTTOM : " + IS_BBOTTOM2);
            console.log("IS_BBOTTOM" + IS_BBOTTOM);
            console.log("WINDOW_HEIGHT" + WINDOW_HEIGHT);
            console.log("SCROLLED_HEIGHT" + SCROLLED_HEIGHT);
            console.log("DOC_TOTAL_HEIGHT" + DOC_TOTAL_HEIGHT);
            // getMoreItem();
            // setPage(page + 1), setBtnActive(page + 1)
        }
    });

    return (
        <>
            <div className="bg-pebble-200 text-white">
                <Loader />
            </div >
        </>
    );
};

export default InfiniteArticles3;