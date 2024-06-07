'use client'

import ArticleColumns from "@/app/component/articles/modul/columns";
import { PG } from "@/app/component/common/enums/PG";
import { DataGrid } from "@mui/x-data-grid";
import Image from 'next/image';
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import PinkButton from "@/app/atoms/button/PinkButton";


const cards = [
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/mountain-nightview.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/autumn.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/babypinetree.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/beach.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/purpleflowers.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/starrysky.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/lake.jpg",
];


const MylistArticlesPage: NextPage = ({ params }: any) => {

    const router = useRouter();

    const [articleList, setArticleList] = useState([])

    const AllAriclelist = useCallback(async () => {
        // try {
        //     const response = await MyArticleList(params.id);
        //     setArticleList(response)
        // }
        // catch (error) {
        //     console.log(error)
        // }
    },[])


    // useEffect(() => {
    //     AllAriclelist()
    // }, [AllAriclelist])


    return (<>

        <div className="flex flex-col items-center justify-center w-full bg-300">
            <div className="flex overflow-x-scroll snap-x snap-mandatory max-w-6xl no-scrollbar">
                {cards.map((data, index) => {
                    return (
                        <section className="flex-shrink-0 w-full snap-center justify-center items-center" key={index}>
                            <Image src={data} alt="Images to scroll horizontal2" width={800} height={800} className="w-full h-[500px]" />
                        </section>
                    );
                })}
            </div>
        </div>

        <br />
        <div className="w-screen text-center mb-5 h-[50px] broder">
            <PinkButton text="글쓰러가기" path={()=>router.push(`${PG.ARTICLE}/savePrisma`)}/>
        </div>

        <div style={{ height: "100%", width: "100%", fontSize: 50 }}>
            {articleList && <DataGrid // 🔥 4
                rows={articleList}
                columns={ArticleColumns()}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                
                }}
                pageSizeOptions={[10, 20, 50]} // 4-1
                checkboxSelection
            />}
        </div>
    </>)
}

export default MylistArticlesPage
