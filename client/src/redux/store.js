import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import commentSlice from "./slices/commentSlice"
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    comment:commentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
