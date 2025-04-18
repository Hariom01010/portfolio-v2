import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
    value: string
}

const initialState: ThemeState = {
    value: 'dark'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        darkMode: (state)=>{state.value = 'dark'},
        lightMode: (state)=>{state.value = 'light'}
    }
})

export const {darkMode, lightMode} = themeSlice.actions
export default themeSlice.reducer