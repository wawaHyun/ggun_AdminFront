import { WhiteBox } from "@/app/common/box/whiteBox";

export default function AdminsDetailTile(mode: any) {
return(
<WhiteBox content={mode == false ? "수정 모드" : "조회 모드"} color="text-center" />
)};
