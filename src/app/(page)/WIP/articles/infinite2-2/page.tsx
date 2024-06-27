// 'use client'
// import { IpArticle } from "@/app/api/article/model/article.model";
// import { allArticleList, limitArticleList } from "@/app/api/article/route";
// import Loader from "@/app/component/box/loader";
// import { forwardRef, useEffect, useRef, useState } from "react";

// interface ItemProps {
//     number: number;
// }

// const Item: React.FC<ItemProps> = ({ number }) => {
//     return <div>{number}</div>;
// };

// const InfiniteArticles2_2: React.FC = () => {
//     const targetRef = useRef(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [itemLists, setItemLists] = useState<number[]>([1]);
//     const [allArticles, setAllArticles] = useState<IpArticle[]>([]);

//     // useEffect(() => {
//     //     allArticleList()
//     //         .then((res: any) =>
//     //             setAllArticles(res)
//     //         )
//     //         .catch((error: any) => {
//     //             console.log("articles err!!! : " + error);
//     //         });
//     // }, []);

//     const Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//     const getMoreItem = async () => {
//         setIsLoaded(true);
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         console.log(morepage)
//         limitList()
//             .then((res: any) => {
//                 if (res == true)
//                     console.log("anjdi")
//                 if (res == false)
//                     console.log("anjdi333")

//                 window.scrollBy(0, -50)
//             })
//             .catch((error: any) => {
//                 console.log("limitList err!!! : " + error);
//             })
//         setIsLoaded(false);
//     };

//     let morepage: number = 0;

//     let limitList = async () => {
//         limitArticleList(morepage)
//             .then((res: any) => {
//                 setItemLists((prevItemLists) => prevItemLists.concat(Items));
//                 setAllArticles(res)
//                 console.log(res.concat(res))
//                 console.log(res)
//                 res.length != 0 ? (
//                     console.log("before : " + morepage),
//                     morepage = morepage + 20,
//                     console.log("after : " + morepage)

//                 ) : (console.log("limitList : " + res.length),
//                     morepage = 0,
//                     console.log("loading end.")

//                 )
//             })
//             .catch((error: any) => {
//                 console.log("articles err!!! : " + error);
//             })
//     }



//     const onIntersect = async ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
//         if (entry.isIntersecting && !isLoaded) {
//             observer.unobserve(entry.target);
//             await getMoreItem();
//             observer.observe(entry.target);
//         }
//     };

//     useEffect(() => {
//         let observer: IntersectionObserver;
//         if (targetRef.current) {
//             observer = new IntersectionObserver(onIntersect, { threshold: 0.4 });
//             observer.observe(targetRef.current);
//         }
//         return () => observer && observer.disconnect();
//     }, [targetRef.current]);

//     return (
//         <div className="border">
//             <div className="border text-center">

//                 <button onClick={() => limitList()}>click here! </button>
//                 {allArticles.map((v, i) => (
//                     <div key={v.id} className="gap-3 flex my-2">
//                         <div>{v.id}</div>
//                         <div>{v.title}</div>
//                         <div>{v.content}</div>
//                     </div>
//                 ))}
//             </div>
//             <div ref={targetRef} className="mt-3 border text-center items-center">
//                 {isLoaded && <Loader />}
//             </div>
//         </div>
//     );
// };

// export default InfiniteArticles2_2;




