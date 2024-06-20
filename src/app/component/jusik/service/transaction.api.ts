'use server'

import { AllNps, Top10Nps } from "@/app/api/nps/route"
import { INps } from "../model/nps.model"

export const AllNpsAPI = async () => {
        try {
                const response: INps[] = await AllNps()
                // console.log("AllNpsAPI : " + response)
                return response
        } catch (error) {
                console.log("AllNpsAPI EERR!!!" + error)
                return error
        }
}

export const Top10NpsAPI = async () => {
        try {
                const response: INps[] = await Top10Nps()
                // console.log("Top10NpsAPI : " + response)
                return response
        } catch (error) {
                console.log("Top10NpsAPI EERR!!!" + error)
                return error
        }
}