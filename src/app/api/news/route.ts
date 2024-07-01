'use server'

export const allNews = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/news/list`)
        const data = await response.json();
        // console.log("allNews : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.log("allNews err : " + error
        )
    }
}