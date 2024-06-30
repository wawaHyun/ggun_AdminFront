

export default function TableDemo() {
    return (
        <table className="border border-black soild w-full h-full">
            <thead>
            <tr className="border border-black">
                <th className="border border-black">no</th>
                <th className="border border-black">제목</th>
                <th className="border border-black">작성자</th>
                <th className="border border-black">작성일</th>
            </tr>
            </thead>
            <tbody>
            <tr className="border border-black">
                <td className="border border-black">1111</td>
                <td className="border border-black">2222</td>
                <td className="border border-black">3333</td>
                <td className="border border-black">4444</td>
            </tr>
            <tr className="border border-black">
                <td className="border border-black">1111</td>
                <td className="border border-black">2222</td>
                <td className="border border-black">3333</td>
                <td className="border border-black">4444</td>
            </tr>
            <tr className="border border-black">
                <td className="border border-black">1111</td>
                <td className="border border-black">2222</td>
                <td className="border border-black">3333</td>
                <td className="border border-black">4444</td>
            </tr>
            </tbody>
        </table>
    )
}