export function TabButton ( {children, click, style }: IButton){
    return(
        <button className={`border rounded-t-lg border-b-0 forcus:text-pebble-500 ${style}`} onClick={click}>{children}</button>
    )
}