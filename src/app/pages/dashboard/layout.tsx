import MiniHeader from "@/app/component/common/module/miniheader"
import Header from "@/app/component/common/module/miniheader"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <div className="w-full h-full">
                {/* <div className="h-[50px] z-0 fixed top-0">
                    <MiniHeader />
                </div> */}
                <div className="z-0 top-10">
                    {children}
                </div>
            </div>
        </section>
    )
}