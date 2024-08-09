import { Metadata } from "next";
import { WhiteBox } from "./common/box/whiteBox";

export default function NotFound() {

    const metadata:Metadata = {
        title: "Not found page"
      }
    

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[50%] h-[320px] text-center">
            <WhiteBox>
                <div className="flex-col">
                    <h1 className="bold text-[60px]">!!!Not Found!!!</h1>
                    <h1 className="bold text-[50px]">없는 페이지입니다!</h1>
                    <br />
                    <h4 className="bold text-[30px]">;ㅇ; 아직 개발되지 않았거나</h4>
                    <h4 className="bold text-[30px]">경로가 잘못되었습니다.</h4>
                </div>
                </WhiteBox> 
            </div>
        </div>
    )
}