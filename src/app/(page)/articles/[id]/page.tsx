'use client'

import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "@/app/redux/silce/article.slice";
import { fetchMyArticleList } from "@/app/redux/service/article.service";
import { IArticle } from "@/app/redux/model/article.model";
import Pagination from "@/app/component/navigation/pagination";
import { IpArticle } from "@/app/api/article/model/article.model";
import { myArticleList } from "@/app/api/article/route";

const articles: NextPage = ({ params }: any) => {

    const [allArticles, setAllArticles] = useState<IpArticle[]>([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const offset = (page - 1) * limit;

    useEffect(() => {
        //hard
        // const maplist = params.id == 1 ? qnalist : articles;

        //prisma
        myArticleList(params.id)
            .then((res:any) => {
                setAllArticles(res);
            })
            .catch((error: any) => {
                console.log("articles err!!! : " + error);
            });

        //spring
        // dispatch(fetchMyArticleList(params.id))
        //     .then((res: any) =>
        //         console.log("articles : " + JSON.stringify(res))
        //     )
        //     .catch((error: any) =>
        //         console.log("articles err!!! : " + error))
    }, [])


    const qnalist = [
        { id: 1, title: "관리자 권한 설정", content: "관리자 권한 설정입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "홍길동", answer: "답변완료", modDate: "24-04-10" },
        { id: 2, title: "로그인 관련 공지", content: "로그인 관련 공지입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "김이박", answer: "답변완료", modDate: "24-04-12" },
        { id: 3, title: "비번 초기화 관련 공지사항", content: "비번 초기화 관련 공지사항입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "박하나", answer: "답변완료", modDate: "24-04-14" },
        { id: 4, title: "사내 동아리 양식 공지", content: "사내 동아리 양식 공지입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "김현식", answer: "답변완료", modDate: "24-04-16" },
        { id: 5, title: "금일자 사내 보안관련 공지", content: "금일자 사내 보안관련 공지 업데이트입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "권상무", answer: "답변완료", modDate: "24-04-25" },
        { id: 6, title: "데이터 백업관련 공지", content: "빠른 처리 부탁드립니다.입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "한이솝", answer: "답변완료", modDate: "24-05-06" },
        { id: 7, title: "신입사원 제출서류 공지사항", content: "공지사항입니다.입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "한두리", answer: "답변완료", modDate: "24-05-10" },
        { id: 8, title: "퇴사자 작성 및 제출서류 공지사항", content: "퇴사자 작성 및 제출서류 공지사항입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "양대리", answer: "답변완료", modDate: "24-05-17" },
        { id: 9, title: "24년 5월 발령 공지", content: "4년 5월 발령 공지입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "회계팀", answer: "처리중", modDate: "24-05-19" },
        { id: 10, title: "관리자 페이지 리뉴얼 공지", content: "관리자 페이지 리뉴얼 공지입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "이민수", answer: "처리중", modDate: "24-06-02" },
        { id: 11, title: "본사 6층 화장실 공사 안내", content: "본사 6층 화장실 공사 안내입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "엄나라", answer: "처리중", modDate: "24-06-05" },
        { id: 12, title: "24년 6월 발령 공지", content: "24년 6월 발령 공지입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "한영희", answer: "처리중", modDate: "24-06-10" },
    ]

    const articles = [
        { id: 1, title: "관리자 권한 문의", content: "관리자 권한 설정에 관한 문의...", writer: "홍길동", answer: "답변완료", modDate: "24-04-10" },
        { id: 2, title: "로그인이 안돼요", content: "어제는 됐는데 오늘하려고 하니까...", writer: "김이박", answer: "답변완료", modDate: "24-04-12" },
        { id: 3, title: "비번 초기화", content: "비밀번호 초기화 문의 드립니...", writer: "박하나", answer: "답변완료", modDate: "24-04-14" },
        { id: 4, title: "사내 동아리 양식 문의", content: "사내 동아리 개설 관련한 문서 양식은 어디서 다운받아야 하나요?", writer: "김현식", answer: "답변완료", modDate: "24-04-16" },
        { id: 5, title: "사내 공지사항에 오타", content: "사내 공지사항 [내부 보안 설정에 관한 공지]에 오타를 발견하여...", writer: "권상무", answer: "답변완료", modDate: "24-04-25" },
        { id: 6, title: "비밀번호 초기화 부탁드립니다", content: "빠른 처리 부탁드립니다.", writer: "한이솝", answer: "답변완료", modDate: "24-05-06" },
        { id: 7, title: "비밀번호 초기화", content: "ㅠㅠ 초기화 부탁드립니다..", writer: "한두리", answer: "답변완료", modDate: "24-05-10" },
        { id: 8, title: "데이터 초기화 여부", content: "어제 오후 5시 23분경 지웠던 내용 백업 있을까요ㅠ", writer: "양대리", answer: "답변완료", modDate: "24-05-17" },
        { id: 9, title: "금일 발령자 공지사항 수정", content: "아래 공문 참고하여 공지사항 수정 하려는데...", writer: "회계팀", answer: "처리중", modDate: "24-05-19" },
        { id: 10, title: "관리자 페이지 오류", content: "대쉬보드에서 다른 페이지로 넘어가려는데...", writer: "이민수", answer: "처리중", modDate: "24-06-02" },
        { id: 11, title: "비번 바꿔주세요", content: "비번 너무 많이 틀려서 로그인이 안됩니다..", writer: "엄나라", answer: "처리중", modDate: "24-06-05" },
        { id: 12, title: "자택 근무자 접속 안돼요", content: "방화벽 낮춰도 접속 막혀져 있는데 어떻게 해야 하나요?", writer: "한영희", answer: "처리중", modDate: "24-06-10" },
    ]

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
                            <th>borad id</th>
                            <th>작성일</th>
                            <th>처리완료일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allArticles.slice(offset, offset + limit).map((v:any,i:any)=>
                        // {articles.map((v, i) =>
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.title}</td>
                                <td>{v.writer_id}</td>
                                <td>{v.content}</td>
                                <td>{v.board_id}</td>
                                <td>{v.reg_date}</td>
                                <td>{v.mod_date}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="w-full items-center flex justify-center h-[50px]">
                    <Pagination total={allArticles.length} limit={10} page={page} setPage={setPage} />
                </div>
            </div>
        </div>
    )
};

export default articles;
