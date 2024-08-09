

import { articleDummy } from "@/app/common/dummy/article.dummy";
import Link from "next/link";

export default async function Articles({ id }: any) {

    // const allArticles = await myArticleList(id)
    const allArticles = articleDummy

    return (
        <div className="w-full h-full">
            <table className="sticky z-[0] p-4">
                <thead>
                    <tr>w
                        <th>No.</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>내용</th>
                        <th>borad id</th>
                        <th>작성일</th>
                        <th>처리완료일</th>
                    </tr>
                </thead>
                <tbody>
                    {allArticles.map((v: IArticle, i: number) =>
                        <tr key={v.id} className="cursor-pointer">
                           <td>{v.id}</td>
                            <td><Link href={`/articles/detail/${v.id}`}>{v.title}</Link></td>
                            <td>{v.writerId}</td>
                            <td><Link href={`/articles/detail/${v.id}`}>{v.content}</Link></td>
                            <td>{v.boardId}</td>
                            <td>{v.regDate}</td>
                            <td>{v.modDate}</td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
};
