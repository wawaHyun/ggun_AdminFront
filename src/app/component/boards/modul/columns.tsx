

import { GridColDef } from '@mui/x-data-grid'
import Link from 'next/link';
import { PG } from '@/app/component/common/enums/PG';
import { MyTypography } from '../../common/style/cell';
import { IBoardtype } from '@/app/api/board/model/board-model';


export default function boardColumns(): GridColDef[] {

    interface CellType {
        row: IBoardtype;
    }


    return [
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'No.',
            renderCell: ({ row }: CellType) => MyTypography(row.id, "1.5rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'title',
            headerName: 'title',
            renderCell: ({ row }: CellType) =>
                MyTypography(
                    <Link href={`${PG.BOARD}/detail/${row.id}`}> {row.title} </Link>
                    , "1.5rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'description',
            headerName: 'description',
            renderCell: ({ row }: CellType) => MyTypography(row.description, "1.5rem")
        },

    ]
}