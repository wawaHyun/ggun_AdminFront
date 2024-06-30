'use client'
import { IpArticle } from "@/app/api/prisma/article/model/article.model";
import { allArticleList } from "@/app/api/prisma/article/route";
import Loader from "@/app/common/box/loader";
import { forwardRef, useEffect, useRef, useState } from "react";

interface ItemProps {
    number: number;
}

const Item: React.FC<ItemProps> = ({ number }) => {
    return <div>{number}</div>;
};

const InfiniteArticles2: React.FC = () => {
    const targetRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [itemLists, setItemLists] = useState<number[]>([1]);

    useEffect(() => {

    }, [itemLists]);

    const Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const getMoreItem = async () => {
        setIsLoaded(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setItemLists((prevItemLists) => prevItemLists.concat(Items));
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
        <div className="border">
            <div className="border text-center">
            {itemLists.map((v, i) => (
            <Item number={i + 1} key={i} />
          ))}
            </div>
            <div ref={targetRef} className="mt-3 border text-center items-center">
                {isLoaded && <Loader />}
            </div>
        </div>
    );
};

export default InfiniteArticles2;