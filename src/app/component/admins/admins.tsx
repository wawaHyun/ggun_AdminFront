
import { adminDummy } from "@/app/common/dummy/admin.dummy"

export default async function Admins() {

    // const allAdmin = await allAdmins()
    const allAdmin = adminDummy;

    return (
        <div className="w-full h-full">
            <table className="sticky z-[0] p-4">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>사원번호</th>
                        <th>이름</th>
                        <th>사원번호</th>
                        <th>부서</th>
                        <th>직책</th>
                        <th>직무</th>
                        <th>이메일</th>
                        <th>핸드폰</th>
                        <th>비밀번호</th>
                        <th>권한</th>
                    </tr>
                </thead>
                <tbody>
                    {allAdmin.map((v: IAdmin, i: number) =>
                        <tr key={v.id} className="cursor-pointer">
                            <td>{v.id}</td>
                            <td>{v.enpNum}</td>
                            <td>{v.enpName}</td>
                            <td>{v.department}</td>
                            <td>{v.position}</td>
                            <td>{v.job}</td>
                            <td>{v.enpEmail}</td>
                            <td>{v.phone}</td>
                            <td>{v.password}</td>
                            <td>{v.role}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
};
