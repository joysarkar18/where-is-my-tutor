import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../app/slices/authSlice";
import forgotPasswordSlice from "@/app/slices/forgotPasswordSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    forgotPassword: forgotPasswordSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
