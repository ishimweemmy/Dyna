import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TProduct[] = [];

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<TProduct[]>) => {
      return [...action.payload];
    },
    addProduct: (state, action: PayloadAction<TProduct>) => {
      return [...state, action.payload];
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      return [...state].filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct, setProducts } = productSlice.actions;
export default productSlice.reducer;
