import { allAdmins } from "@/app/api/admin/route"

export default async function Admins() {

    const allAdmin = await allAdmins()

    return (
        <div className="w-full h-full">
            <table className="sticky z-[0] p-4">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>아이디</th>
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
                    {allAdmin.map((v: any, i: any) =>
                        <tr key={v.id} className="cursor-pointer">
                            <td>{v.id}</td>
                            <td>{v.enpName}</td>
                            <td>{v.enpNam}</td>
                            <td>{v.department}</td>
                            <td>{v.positon}</td>
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
