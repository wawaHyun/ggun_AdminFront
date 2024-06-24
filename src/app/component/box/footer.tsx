import { FacebookIcon, InstaIcon, TwitterIcon } from  "../../../../public/icons/icons";


function Footer() {
    return (
        <div className="w-full bg-pebble-100 text-white flex gap-5 p-5">
            <div className="w-[50%]">
         <ul>
            <li>상호 : (주) 꾼 | 대표자 : 김장사</li>
            <li>사업자등록번호 : 000-00-00000 | 전자상거래신고번호 : 00-000-0000000</li>
            <li>고객센터 : 1588-8282 | 운영시간 : 09:00 ~ 06:00</li>
            <li>Fax : 02-555-5555 | E-mail : sjrkchdkdy@gmail.com</li>
            <li>주소 : 서울시 강남구 논현동 비트빌 2층 남-21</li>
            <li className="m-2"><hr /></li>
            <li className="bold">ⓒJSggun</li>
         </ul>
            </div>
            <div className="w-[10%]">
                <ul>
                    <li>shop</li>
                    <li>review</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="w-[10%]">
                <ul>
                    <li>이용약관</li>
                    <li>개인정보보호처리</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="w-[20%] flex gap-2">
                <FacebookIcon color="white"/>
                <TwitterIcon color="white"/>
                <InstaIcon color="white"/>
            </div>
        </div>
    )
}

export default Footer;