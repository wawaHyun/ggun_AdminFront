'use client'
import { WhiteBox } from "@/app/common/box/whiteBox";
import { MoveButton } from "@/app/common/button/MoveButton";
import { DriveFileMove } from "@mui/icons-material";
import { useState } from "react";

export default function AdminsEditButtons() {

    const [mode, setMode] = useState(true)
    const handleSubmit = () => {
        mode == true ? setMode(false) : setMode(true);
    }

return(
    <div className='w-[20%] p-5 content-center'>
    <div className='h-[30px] mb-3'>
        <Link href={`/admins/update/${props.id}`}><MoveButton text="조회모드"/></Link></div>
    <div className='h-[30px] mb-3'><MoveButton text="퇴사처리" click={} /></div>
</div>
)};
