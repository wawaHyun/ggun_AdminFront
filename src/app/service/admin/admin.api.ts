'use server'

export const allAdmins = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/list`)
        const data = await response.json();
        // console.log("allAdmins!!!"+ JSON.stringify(data))
        return data
    } catch (error) {
        console.log("allAdmins err : " + error
        )
    }
}

export const existAdmin = async (username: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/exists-username?username=${username}`)
        const data = await response.json();
        console.log("existAdmin!!!" + JSON.stringify(data))
        return data
    } catch (error: any) {
        console.log("existAdmin EERR!!!", error)
        return error
    }
}

export const loginAdmin = async (admin: IAdmin) => {
    try {
        const response = await await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login?username=ggunAdmin0001&password=pO2(eO73)%@`)
        const data = await response.json();
        console.log("loginAdmin : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.log("loginAdmin EERR!!! " + error)
        return error
    }
}

export const logoutAdmin = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
        const data = await response.json();
        console.log("logoutAdmin : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.log(error, "logoutAdmin EERR!!!")
        return error
    }
}


export const findAdminById = async (id: number) => {
    // const idd = parseInt(id)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/detail?id=${id}`)
        const data = await response.json();
        console.log("findAdminById : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.log("findAdminById EERR!!!" + error)
        return error
    }
}

export const deleteAdmin = async (id: string) => {
    const idd = parseInt(id)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/delete?id=${idd}`)
        const data = await response.json();
        console.log("deleteAdmin : " + JSON.stringify(data))
    } catch (error) {
        console.log("deleteAdmin EERR!!!" + error)
        return error
    }
}


export const updateAdmin = async (admin: IAdmin) => {
    // console.log("saveArticle : " + JSON.stringify(article))
    const { id, password, enpName, enpNum, department, position, job, enpEmail, phone } = admin || {}
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/modify`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                password: password,
                enpName: enpName,
                enpNum:enpNum,
                department:department,
                position: position,
                job: job,
                enpEmail: enpEmail,
                phone: phone
            })
        })
        const data = await response.json();
        console.log("saveArticle : " + JSON.stringify(data))
        return data
    } catch (error) {
        console.log("deleteAdmin EERR!!!" + error)
        return error
    }
}


// export const joinAdminAPI = async (admin: IAdmin) => {
//     try {
//         const response = await instance().post('/admins/save', admin)
//         console.log("JoinAdminAPI : " + response)
//         return response
//     } catch (error) {
//         console.log("JoinAdminAPI EERR!!!" + error)
//         return error
//     }
// }