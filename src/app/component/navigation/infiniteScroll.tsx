import { useState, useEffect } from "react";
import throttleOnRendering from "../util/throttleOnRendering";

const THROTTLE_WAIT = 100; // throttle 시간 설정

const defaultOptions = {
    root: null,
    rootMargin: '1px',
    threshold: 0.1,
};

interface IUseInfiniteScroll {
    fetchCallback: () => void;
    targetElement: Element | null;
    options?: IntersectionObserverInit;
}

export default function useInfiniteScroll({ fetchCallback, targetElement, options = defaultOptions }: IUseInfiniteScroll): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
    const [isFetching, setIsFetching] = useState(false);
    
    const intersectionCallbackFuncThrottle = throttleOnRendering((entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIsFetching(true);
            }
        });
    }, THROTTLE_WAIT);

    useEffect(() => {
        let observer: any;

        if (targetElement) {
            observer = new IntersectionObserver(intersectionCallbackFuncThrottle, options);
            observer.observe(targetElement);
        }

        return () => {
            if (observer == true) {
                observer.disconnect();
            }
        };
    }, [targetElement, options]);

    useEffect(() => {
        if (isFetching) {
            fetchCallback();
        }
    }, [isFetching, fetchCallback]);

    return [isFetching, setIsFetching];
}