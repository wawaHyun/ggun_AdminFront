'use server'

export async function SendMailApi(mail:IMail): Promise<IMail | { status: number }> {
    const url = `${process.env.KIS_DEV_API_BASE_URL}${process.env.KIS_DEV_API_AUTH2}`
    // console.log("KIS auth!!!" + url);
    try {
        const response = await fetch(url
            , {
                method: 'POST',
                headers: {},
                body: JSON.stringify({
                    grant_type: 'client_credentials',
                    email : mail.email,
                    subject : mail.subject,
                    message : mail.message,
                })
            }
        );

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        const res: IMail = await response.json();
        console.log("SendMailApi api : ", res);

        if (!res) { return { status: 404 }; }

        return res;

    } catch (error) {
        console.log("SendMailApi err : " + error);
        return { status: 500 };
    }
}