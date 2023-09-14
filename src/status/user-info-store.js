import { create } from 'zustand'

export const useUserStore = create((set) => ({
    picture: "/images/Netflix-avatar.png",
    name: "",
    language: "en",
    setPicture: (picture) => set({ picture }),
    setName: (name) => set({ name }),
    setLanguage: (language) => set({ language }),
}))
