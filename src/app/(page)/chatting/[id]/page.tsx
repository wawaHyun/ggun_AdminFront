
import { chatDummy } from "@/app/common/dummy/chat.dummy";
import { AdminIcon } from "@/app/common/icons/adminIcon";

function Chartting({ params }: any) {

    const myid = 1111;

    return (
        <div className="w-full h-full flex flex-col justify-center ">
            <div className="absolute top-[55px] inset-x-0  m-auto w-[75%]">
                <div className=" m-auto overflow-y-auto p-2">
                    {chatDummy.map((i: any) =>
                        i.roomid == myid ?
                            <div key={i.id} className="w-full flex justify-end ">
                                <div className="mx-2 content-end text-gray-300">{i.time}</div>
                                <div className="border shadow-md rounded-lg text-pretty flex items-center my-3 max-w-[45%] p-2 bg-white ">
                                    {i.text}
                                </div>
                            </div>
                            :
                            <div key={i.id} className="flex w-full">
                                <div className="w-[50px] h-[40px]"> <AdminIcon color="#433E49" /></div>
                                <div className="border shadow-md rounded-lg text-pretty flex items-center my-3 max-w-[45%] p-2 bg-pebble-400">
                                    {i.text}
                                </div>
                                <div className="mx-2 content-end text-gray-300">{i.time}</div>
                            </div>
                    )}
                </div>
                <div className=" inset-x-0 top-0 w-[80%] m-auto bold bg-pebble-200 text-center h-[50px] text-white content-center text-[27px] rounded-b-lg">{params.id}님과의 대화</div>
                <div className="relative h-[50px] bottom-0 inset-x-0 m-auto w-full">
                    <input type="text" placeholder="enter the text" className="w-[75%] h-[50px]" />
                </div>
            </div>
        </div>
    );
}

export default Chartting;