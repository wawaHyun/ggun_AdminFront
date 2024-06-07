'use client'

interface IMoveButton {
    text: string,
    path: any
}


export default function MoveBotton({ text, path }: IMoveButton) {

    return (
        <button key={1}
        onClick={path}
        type="button" className="text-white bg-indigo-950 hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-full text-sm text-center w-full h-full ">
               {text}
        </button>
    )
}