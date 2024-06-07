'use client'

interface IPinkButton {
    text: string,
    path: any
}


export default function PinkButton({ text, path }: IPinkButton) {
    
    return (
    <button key={1} className="overflow-hidden relative w-64 bg-blue-500 text-white rounded-xl font-bold -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full 
    before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping"
            onClick={path}>
            <span className="relative">{text}</span>
        </button>
    )

}