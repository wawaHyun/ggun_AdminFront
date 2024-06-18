import Header from "@/common/module/header"
import MiniHeader from "@/common/module/miniheader"
import Sidebar from "@/common/module/sidebar"


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <div className="w-full h-full">
                <div className="h-[50px] z-0 fixed top-0">
                    <Sidebar />
                </div>
                <div className="z-0 top-10">
                    {children}
                </div>
            </div>
        </section>
    )
}