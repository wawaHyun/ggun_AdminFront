
import { Link } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import { IArticle } from '../model/article.model';
import { useDispatch } from 'react-redux';
import { fetchDeleteArticle } from '../service/article.service';
import { MyTypography } from '@/app/common/style/cell';
import { PG } from '@/app/common/enums/PG';
import { PinkButton } from '@/atoms/button/PinkButton';


export default function ArticleColumns(): GridColDef[] {

    const dispatch = useDispatch()

    interface CellType {
        row: IArticle;
    }

    return [
        {
            headerAlign: 'center',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'No.',
            renderCell: ({ row }: CellType) => MyTypography(row.id, "1.5rem")
        },
        {
            headerAlign: 'center',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'title',
            headerName: 'TITLE',
            renderCell: ({ row }: CellType) =>
                MyTypography(<Link href={`${PG.ARTICLE}/update/${row.id}`}> {row.title} </Link>, "1.5rem")
        },
        {
            headerAlign: 'center',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'content',
            headerName: 'CONTENT',
            renderCell: ({ row }: CellType) => MyTypography(row.content, "1.5rem")
        },
        {
            headerAlign: 'center',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'writer',
            headerName: 'WRITER',
            renderCell: ({ row }: CellType) => MyTypography(row.writer, "1.5rem")
        },
        {
            headerAlign: 'center',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'delete',
            headerName: 'DELETE',
            renderCell: ({ row }: CellType) =>
                <PinkButton text="DLELCTE" path={
                    () => {
                        const id = row.id != undefined ? row.id : 0

                        let flag = confirm(id + "번째 article을 삭제하시겠습니까?")
                        if (flag) {
                            console.log("delete article id : {}", id)
                            dispatch(fetchDeleteArticle(id))
                            location.reload();
                        } else {
                            alert("article 삭제가 취소되었습니다.")
                        }
                    }} />
        }

    ]

}
