'use server'

export async function chatroomList() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/articles/list`)
    const data = await response.json();
    // console.log("allArticleList : ", data)
    return data;
}

