import Link from "next/link"

export const WhiteLink = ({ children, click, style,select }: IButton) => {
    return (
        <Link
        href={click}
        className={`flex justify-center min-h-[30px] items-center text-gray-500 border bg-white shadow-lg rounded-lg hover:hover:bg-slate-200 focus:outline-none font-medium text-center w-full ${style} ${select ? 'bg-pebble-400' : ''}`}>
               {children}
        </Link>
    )
}