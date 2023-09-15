import { create } from 'zustand'

export const useUserStore = create((set) => ({
    picture: "/images/Netflix-avatar.png",
    name: "",
    language: "en",
    oauth2_id: "",
    setPicture: (picture) => set({ picture }),
    setName: (name) => set({ name }),
    setLanguage: (language) => set({ language }),
    setOauth2_id: (oauth2_id) => set({ oauth2_id }),
}))
