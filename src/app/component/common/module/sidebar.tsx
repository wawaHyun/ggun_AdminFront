import { ChartIcon, HomeIcon, ListIcon, MailIcon, NewsIcon } from "@/app/atoms/icons/icons";

function Sidebar() {
    return (
        <div id="sidebar" className="h-screen w-16 menu bg-white text-white px-4 flex items-center nunito static fixed shadow">

        <ul className="list-reset ">
            <li className="my-2 md:my-0">
                <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <HomeIcon />
                    <span className="w-full inline-block pb-1 md:pb-0 text-sm">Home</span>
                </a>
            </li>
            <li className="my-2 md:my-0 ">
                <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                <ListIcon /><span className="w-full inline-block pb-1 md:pb-0 text-sm">Tasks</span>
                </a>
            </li>
            <li className="my-2 md:my-0">
                <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                <MailIcon /><span className="w-full inline-block pb-1 md:pb-0 text-sm">Messages</span>
                </a>
            </li>
            <li className="my-2 md:my-0">
                <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                <ChartIcon /><span className="w-full inline-block pb-1 md:pb-0 text-sm">Analytics</span>
                </a>
            </li>
            <li className="my-2 md:my-0">
                <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                <NewsIcon /><span className="w-full inline-block pb-1 md:pb-0 text-sm">Payments</span>
                </a>
            </li>
        </ul>

    </div>
    )
}

export default Sidebar;