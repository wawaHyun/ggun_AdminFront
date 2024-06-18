import { CallIcon, QnaIcon } from "@/app/atoms/icons/icons";
import qnaicon from "@/app/atoms/img/qnaicon.png"
import Image from "next/image";

function QnaMark(){
    return(
        <span className="fixed right-0 bottom-0 hover:alert">
            <Image src={qnaicon} className="w-[10%] h-[10%]" alt="무엇이든지 물어보세요!"/>
        </span>
    )
}
export default QnaMark;