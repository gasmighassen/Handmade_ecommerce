import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addComment = createAsyncThunk(
  "comment/addcomment",
  async (comment) => {
    try {
      let response = await axios.post(
        "http://localhost:5000/product/addcomment",
        comment
      );
      return await response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getallComment = createAsyncThunk(
    "comment/getcomment",
    async () => {
      try {
        let response = await axios.get(
          "http://localhost:5000/product/getcomment",
          
        );
        return await response;
      } catch (error) {
        console.log(error);
      }
    }
  );


const initialState = {
  comment: [],
  status: "",
  isLoading: false,
};
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [addComment.pending]: (state) => {
      state.status = "pending";
      state.isLoading = true;
    },
    [addComment.fulfilled]: (state, action) => {
      state.status = "success";
      state.isLoading = false;
      state.comment = action.payload?.data?.result;
    },
    [addComment.rejected]: (state) => {
      state.status = "fail";
      state.isLoading = false;
    },
    [getallComment.pending]: (state) => {
        state.status = "pending";
        state.isLoading = true;
      },
      [getallComment.fulfilled]: (state, action) => {
        state.status = "success";
        state.isLoading = false;
        state.comment = action.payload?.data?.comment;
      },
      [getallComment.rejected]: (state) => {
        state.status = "fail";
        state.isLoading = false;
      },
   

  },
});

export default commentSlice.reducer;
