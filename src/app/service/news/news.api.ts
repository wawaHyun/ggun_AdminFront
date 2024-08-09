'use server'

export async function fetchNews(): Promise<INews[] | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/news/list`)
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/list`)

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res: INews[] = await response.json();
        // console.log("News list api data : ", data);

        if (res.length === 0) {
            return { status: 404 };
        }

        return res;
    } catch (error) {
        console.error("News list api err : " + error);
        return { status: 500 };
    }
}