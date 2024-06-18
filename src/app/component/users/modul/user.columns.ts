
import { Link } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import { PG } from '../../common/enums/PG';
import { useDispatch } from 'react-redux';
import { IUser } from '../model/user.model';
import { fetchDeleteUser } from '../service/user.service';


export default function UserColumns(): GridColDef[] {

    const dispatch = useDispatch()

    interface CellType {
        row: IUser;
    }

    return [
        {
            headerAlign: 'center',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'No.',
            renderCell: ({ row }: CellType) => row.id
        },
        {
            headerAlign: 'center',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'username',
            headerName: 'USERNAME',
            renderCell: ({ row }: CellType) => row.username
        },
        {
            headerAlign: 'center',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'name',
            headerName: 'NAME',
            renderCell: ({ row }: CellType) =>row.name
        },
        {
            headerAlign: 'center',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'phone',
            headerName: 'PHONE',
            renderCell: ({ row }: CellType) =>row.phone
        },
        //pw 초기화
        {
            headerAlign: 'center',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'delete',
            headerName: 'DELETE',
            renderCell: ({ row }: CellType) => row.phone
        }

    ]

}
