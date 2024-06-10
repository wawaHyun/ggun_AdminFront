'use client'

interface IMoveButton {
    text: string,
    path: any
}


export default function MoveBotton({ text, path }: IMoveButton) {

    return (
        <button key={1}
        onClick={path}
        type="button" 
        className="text-white bg-pebble-200 hover:bg-pebble-300 focus:outline-none focus:ring-4 font-medium rounded-full text-sm text-center w-full h-full ">
               {text}
        </button>
    )
}