import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ErrorState {
    message: string | null;
    code: number | null;
}

const initialState: ErrorState = {
    message: null,
    code: null,
};

const errorSlice = createSlice({
    name: "error",
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<ErrorState>) => {
            state.message = action.payload.message;
            state.code = action.payload.code;
        },
        clearError: (state) => {
            state.message = null;
            state.code = null;
        },
    },
});

export const { setError, clearError } = errorSlice.actions;
export default errorSlice.reducer;
