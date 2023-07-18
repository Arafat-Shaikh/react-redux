import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productApi";

const initialState = {
  products: [],
  status: "idle",
};

export const fetchAsync = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetchProducts();
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsync.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = "idle";
    });

    builder.addCase(fetchAsync.pending, (state, action) => {
      state.pending = "loading";
    });
  },
});

export default productSlice.reducer;
