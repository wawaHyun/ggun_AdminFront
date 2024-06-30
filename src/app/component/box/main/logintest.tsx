import { existAdmin, loginAdmin } from "@/app/api/admin/route"

export default async function LoginBox2 () {

    const prams = {username : "ggunAdmin0001", password: "pO2(eO73)%@"}
    const exist = await existAdmin(prams.username)
    const login = await loginAdmin(prams)

    return(
       <div className="border w-full h-[100px]">
        <div>뭘마 : {prams.username}</div>
        <div>뭘마 : {prams.password}</div>
        <div>뭐지 : {exist.data}</div>
       </div>

    )
}