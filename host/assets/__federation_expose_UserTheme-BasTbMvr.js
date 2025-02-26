import { importShared } from './__federation_fn_import-BefOOxv9.js';

const {createSlice} = await importShared('@reduxjs/toolkit');

const initialState = {
  theme: "light"
};
const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.theme = action.payload;
    }
  }
});
const { toggleTheme } = layoutSlice.actions;

export { layoutSlice as default, layoutSlice, toggleTheme };
