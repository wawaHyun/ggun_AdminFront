'use server'

import { AllNps } from "@/api/jusik/route"


export const AllNpsAPI = async () => {
        const response = await AllNps ()
        return response
}
