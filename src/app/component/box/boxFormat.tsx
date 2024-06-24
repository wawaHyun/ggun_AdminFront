
export const BaseBox =({content, color }:any)=> {
    return (
            <div className={`border shadow-lg rounded-lg overflaw-auto p-3 w-full h-full ${color}`}>
            {content}
            </div>
        )

}