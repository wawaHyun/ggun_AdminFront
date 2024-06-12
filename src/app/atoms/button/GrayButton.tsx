'use client'


export default function GrayButton({ text, path }: IButton) {
    
    return (
    <button key={1} className="hover:shadow-lg"
            onClick={path}>
            <span className="relative">{text}</span>
        </button>
    )

}