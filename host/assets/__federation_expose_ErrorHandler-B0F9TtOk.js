import { importShared } from './__federation_fn_import-BefOOxv9.js';

const {createSlice} = await importShared('@reduxjs/toolkit');

const initialState = {
  message: null,
  code: null
};
const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.message = action.payload.message;
      state.code = action.payload.code;
    },
    clearError: (state) => {
      state.message = null;
      state.code = null;
    }
  }
});
const { setError, clearError } = errorSlice.actions;
const errorReducer = errorSlice.reducer;

export { clearError, errorReducer as default, setError };
