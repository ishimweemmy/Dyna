import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TCategory[] = [];

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<TCategory[]>) => {
      return [...action.payload];
    },
    addCategory: (state, action: PayloadAction<TCategory>) => {
      return [...state, action.payload];
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      return [...state].filter((category) => category.id !== action.payload);
    },
  },
});

export const { addCategory, removeCategory, setCategories } =
  categorySlice.actions;
export default categorySlice.reducer;
