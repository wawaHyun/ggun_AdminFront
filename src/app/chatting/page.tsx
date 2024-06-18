'use client'

function Chartting() {

    const textDemo = [
        { id: 1, roomid:2222, text: "무엇이 궁금하신가요?" },
        { id: 2, roomid:1111, text: "이 사이트의 정체가 궁금해" },
        { id: 3, roomid:2222, text: "우리는 AI주식 거래사이트 꾼입니다!" },
        { id: 4, roomid:1111, text: "너희 수익률은 어때?" },
        { id: 5, roomid:2222, text: "아직 마이너스인듯?" },
        { id: 6, roomid:1111, text: "곧 나아지겠지 뭐.." }
    ]
    
    const myid = 1111;

    return (
        <div>
            <div>happy happy cat~!~!</div>
            {textDemo.map((i) => {
                return (i.roomid === myid) ? 
                <div key={i.id} className="bg-pebble-100 h-auto text-pretty" >{i.text}</div>
                    :      <div key={i.id} className="bg-pebble-400 h-auto text-pretty" >{i.text}</div>
            })}
        </div>
    );
}

export default Chartting;