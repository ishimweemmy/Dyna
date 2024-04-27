import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TManufacturer[] = [];

export const manufacturerSlice = createSlice({
  name: "manufacturers",
  initialState,
  reducers: {
    setManufacturers: (state, action: PayloadAction<TManufacturer[]>) => {
      return [...action.payload];
    },
    addManufacturer: (state, action: PayloadAction<TManufacturer>) => {
      return [...state, action.payload];
    },
    removeManufacturer: (state, action: PayloadAction<string>) => {
      return [...state].filter(
        (manufacturer) => manufacturer.id !== action.payload,
      );
    },
  },
});

export const { addManufacturer, removeManufacturer, setManufacturers } =
  manufacturerSlice.actions;
export default manufacturerSlice.reducer;
