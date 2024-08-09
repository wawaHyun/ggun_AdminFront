
export const MoveButton = ({ children, click, style, select }: IButton) => {
    return (
        <button key={1}
            onClick={click}
            type="button"
            className={`min-w-[100px] min-h-[30px] text-white bg-pebble-200 hover:bg-pebble-300 focus:outline-none font-medium rounded-full text-sm text-center ${style} ${select ? 'bg-pebble-400' : ''}`}>
            {children}
        </button>
    )
}
export const GrayButton = ({ children, click, style, select }: IButton) => {
    return (
        <button key={1}
            onClick={click}
            type="button"
            className={`text-gray-500 min-h-[30px] border bg-white shadow-lg rounded-lg hover:hover:bg-slate-200 focus:outline-none font-medium text-sm text-center w-full ${style} ${select ? 'bg-pebble-400' : ''}`}>
            {children}
        </button>
    )
}
export const BrownButton = ({ children, click, style, select }: IButton) => {
    return (
        <button key={1}
            onClick={click}
            type="button"
            className={`min-h-[30px] text-black border border-pebble-200 bg-gradient-to-r from-pebble-200 to-pebble-400 via-pebble-300 shadow-lg rounded-lg 
         before:h-full before:w-1/2 before:rounded-full before:block before:absolute relative overflow-hidden 
    before:bg-pebble-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping
        focus:outline-none font-medium text-center w-full h-full ${style} ${select ? 'bg-pebble-400' : ''}`}>
            {children}
        </button>
    )
}