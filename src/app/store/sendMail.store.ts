import { create } from 'zustand'

interface MailState {
    data: IMail,
    update: (data: IMail) => void,
}

const useMailStore = create<MailState>()((set) => ({
    data: {email:'',subject:'',message:''},
    update: (data: IMail) => set({ data }),
}))

export const useMailAction = () => useMailStore((store) => store.update)
export const useMailStack = () => useMailStore((store) => store.data)
export const useMailState = () => useMailStore.getState();
