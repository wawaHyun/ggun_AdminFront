export const MainMenus: IMenu[] = [
    { id: 1, title: "Home",  href : `/reports` },
    // { id: 1, title: "Report",  href : `/reports` },
    { id: 2, title: "news",  href : `/news` },
    { id: 4, title: "게시판",  href : `/articles/list/1` },
    { id: 5, title: "관리자 권한관리", href : `/admins/list` },
]
export const ReportMenus: IMenu[] = [
    { id: 1, title: "Reports",  href : `/reports` },
    { id: 2, title: "demochart",  href : `/reports/demoChart` },
    { id: 3, title: "종류별 chart",  href : `/reports/typeOfChart` },
]
export const BoardMenus: IMenu[] = [
    { id: 1, title: "사내 공지사항",  href : `/articles/list/1` },
    { id: 2, title: "관리자 문의",  href : `/articles/list/2` },
]