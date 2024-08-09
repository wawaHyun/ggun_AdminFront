import Link from "next/link"

export const BrownLink = ({ children, click, style,select }: IButton) => {
    return (
        <Link
        href={click}
        className={`flex justify-center min-h-[30px] items-center bg-gradient-to-r from-pebble-200 to-pebble-400 via-pebble-300 shadow-lg rounded-lg hover:hover:bg-slate-200 focus:outline-none font-medium text-sm text-center w-full ${style} ${ select ? 'bg-pebble-400' : ''}`}>
               {children}
        </Link>
    )
}