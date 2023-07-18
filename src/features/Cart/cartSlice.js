import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addItem, deleteItem, fetchItems, updateItem } from "./cartApi";

const initialState = {
  items: [],
  status: "idle",
};

export const fetchAsync = createAsyncThunk("items/fetchItems", async () => {
  const response = await fetchItems();
  return response.data;
});

export const addAsync = createAsyncThunk("items/addItems", async (item) => {
  const { id, title, brand, thumbnail, price } = item;
  const response = await addItem({
    id,
    title,
    brand,
    thumbnail,
    price,
    quantity: 1,
  });
  return response.data;
});

export const updateAsync = createAsyncThunk(
  "items/updateItems",
  async ({ id, change }) => {
    console.log(id, change);
    const response = await updateItem(id, change);
    console.log(response.data);
    return response.data;
  }
);

export const deleteAsync = createAsyncThunk("items/deleteItems", async (id) => {
  await deleteItem(id);
  return id;
});

const cartSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsync.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "idle";
    });

    builder.addCase(fetchAsync.pending, (state, action) => {
      state.pending = "loading";
    });

    builder.addCase(addAsync.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.status = "idle";
    });
    builder.addCase(deleteAsync.fulfilled, (state, action) => {
      state.status = "idle";
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    });

    builder.addCase(updateAsync.fulfilled, (state, action) => {
      console.log(action.payload, action.payload.id);
      state.status = "idle";
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    });
  },
});

export default cartSlice.reducer;
