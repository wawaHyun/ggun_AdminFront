

import { BoardMenus } from "@/app/common/enums/menus";
import Link from "next/link";

function BoardMenu() {

    return (
        <nav className="w-full h-full ">
            <ul className="items-center w-full h-full grid grid-cols-5 border-b-2 border-pebble-200 bg-pebble-100 rounded-b-lg text-center">
                <li className="text-white h-full "></li>
                <li className="text-white h-full content-center"><Link href={BoardMenus[0].href}>{BoardMenus[0].title}</Link></li>
                <li className="bg-pebble-300 h-full content-center"><Link href={'/reports'}>Home</Link></li>
                <li className="text-white h-full content-center"><Link href={BoardMenus[1].href}>{BoardMenus[0].title}</Link></li>
                <li className="text-white h-full"></li>
            </ul>

            {/* </div> */}
        </nav>
    )
}
export default BoardMenu;