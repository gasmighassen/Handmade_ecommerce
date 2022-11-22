import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addProduct = createAsyncThunk(
  "product/addproduct",
  async (product) => {
    try {
      let response = await axios.post(
        "http://localhost:5000/product/addproduct",
        product
      );
      return await response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addType = createAsyncThunk("types/addType", async (Type) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/types/addType",
      Type
    );
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const getType = createAsyncThunk("types/types", async () => {
  try {
    let response = await axios.get("http://localhost:5000/types/types");
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const allProducts = createAsyncThunk(
  "product/allProducts",
  async (Type) => {
    console.log(Type);
    try {
      let response = await axios.get(
        "http://localhost:5000/product/allProducts",
        Type
      );
      return await response;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  product: [],
  types: [],
  status: "",
  isLoading: false,
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [addProduct.pending]: (state) => {
      state.status = "pending";
      state.isLoading = true;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.status = "success";
      state.isLoading = false;
      state.product = action.payload?.data?.result;
    },
    [addProduct.rejected]: (state) => {
      state.status = "fail";
      state.isLoading = false;
    },
    [addType.pending]: (state) => {
      state.status = "pending";
      state.isLoading = true;
    },
    [addType.fulfilled]: (state) => {
      state.status = "success";
      state.isLoading = false;
    },
    [addType.rejected]: (state) => {
      state.status = "fail";
      state.isLoading = false;
    },
    [allProducts.pending]: (state) => {
      state.status = "pending";
      state.isLoading = true;
    },
    [allProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.isLoading = false;
      state.product = action.payload?.data?.products;
    },
    [allProducts.rejected]: (state) => {
      state.status = "fail";
      state.isLoading = false;
    },
    [getType.pending]: (state) => {
      state.status = "pending";
      state.isLoading = true;
    },
    [getType.fulfilled]: (state, action) => {
      state.status = "success";
      state.isLoading = false;
      state.types = action.payload?.data?.types;
    },
    [getType.rejected]: (state) => {
      state.status = "fail";
      state.isLoading = false;
    },
  },
});

export default productSlice.reducer;
