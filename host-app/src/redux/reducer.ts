import { createSlice } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

export interface LayoutState {
    theme: Theme;
}

const initialState: LayoutState = {
    theme: "light",
};

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.theme = action.payload as Theme;
        },
    },
});

export const { toggleTheme } = layoutSlice.actions;

export { layoutSlice };

export default layoutSlice;