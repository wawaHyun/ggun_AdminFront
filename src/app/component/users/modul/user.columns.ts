
import { Link } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import { MyTypography } from '../../common/style/cell';
import { PG } from '../../common/enums/PG';
import PinkButton from '@/app/atoms/button/PinkButton';
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
            renderCell: ({ row }: CellType) => MyTypography(row.id, "1.5rem")
        },
        {
            headerAlign: 'center',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'username',
            headerName: 'USERNAME',
            renderCell: ({ row }: CellType) => MyTypography(row.username, "1.5rem")
        },
        {
            headerAlign: 'center',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'name',
            headerName: 'NAME',
            renderCell: ({ row }: CellType) => MyTypography(row.name, "1.5rem")
        },
        {
            headerAlign: 'center',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'phone',
            headerName: 'PHONE',
            renderCell: ({ row }: CellType) => MyTypography(row.phone, "1.5rem")
        },
        //pw 초기화
        {
            headerAlign: 'center',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'delete',
            headerName: 'DELETE',
            renderCell: ({ row }: CellType) =>
                <PinkButton text="DELETE" path={
                    () => {
                        const id = row.id != undefined ? row.id : 0

                        let flag = confirm(id + "번째 article을 삭제하시겠습니까?")
                        if (flag) {
                            console.log("delete article id : {}", id)
                            dispatch(fetchDeleteUser(id))
                            location.reload();
                        } else {
                            alert("article 삭제가 취소되었습니다.")
                        }
                    }} />
        }

    ]

}
