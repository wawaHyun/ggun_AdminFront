export function TabButton ( {text, path, color }: IButton){
    return(
        <button className={`border rounded-t-lg border-b-0 forcus:text-pebble-500 ${color}`} onClick={path}>{text}</button>
    )
}