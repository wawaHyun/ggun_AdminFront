
export const WhiteBox = ({ children, style }: { children: React.ReactNode, style?: string }) => {
    return (
        <div className={`border shadow-lg rounded-lg overflaw-auto p-3 ${style}`}>
            {children}
        </div>
    )
}