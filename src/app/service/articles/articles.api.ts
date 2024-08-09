'use server'


export const myArticleList = async () => {
    // const board = parseInt(board_id)
    try {                            
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/api/boards/list`);
        const data = await response.json();
        console.log("myArticleList : " + JSON.stringify(data))
        return data
    } catch (error: any) {
        console.log("myArticleList EERR!!!" + error)
        return error
    }
}


export const saveArticle = async (article: IArticle) => {
    // console.log("saveArticle : " + JSON.stringify(article))
    const { title, content, writerId, boardId } = article || {}
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/articles/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title :title,
                content : content,
                writerId : writerId,
                boardId: "2",
            })
        })
        console.log("saveArticle : " + JSON.stringify(article))
        const data = await response.json();
        return data
    } catch (error) {
        console.log("saveArticle EERR!!!" + error)
        return error
    }
}
