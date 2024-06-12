'use client'

export const MoveButton = ({ text, path }: IButton) => {
    return (
        <button key={1}
        onClick={path}
        type="button" 
        className="text-white bg-pebble-200 hover:bg-pebble-300 focus:outline-none focus:ring-4 font-medium rounded-full text-sm text-center w-full h-full ">
               {text}
        </button>
    )
}

export const MoveButton2 = ({ text, path }: IButton) => {
    return (
        <button key={1}
        onClick={path}
        type="button" 
        className="text-white bg-pebble-300 hover:bg-pebble-200 focus:outline-none focus:ring-4 font-medium rounded-full text-sm text-center w-full h-full ">
               {text}
        </button>
    )
}