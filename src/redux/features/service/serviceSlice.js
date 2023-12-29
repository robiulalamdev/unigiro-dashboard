import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = formSlice.actions;

export default formSlice.reducer;
