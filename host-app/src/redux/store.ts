import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers } from "redux";
import { layoutSlice } from "./reducer";
import errorReducer from "./errorSlice";

const Store = configureStore({
    reducer: combineReducers({
        layout: layoutSlice.reducer,
        error: errorReducer,
    }),
});

export { Store };
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();