import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loginUrl } from "../constants/urls";
import { errorState } from "./authSlice";
import { error, log } from "console";
enum forgotPasswordStateEnum {
  OtpNotSent = 1,
  OtpSent,
  ResetPassword,
}
export const requestOtpThunk = createAsyncThunk(
  "auth/requestOtp",
  async (payload: string) => {
    let body;
    const response = await axios.post(
      loginUrl,
      body,

      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response);

    return response.data;
  }
);

type forgotPasswordState = {
  email: string;
  otpState: forgotPasswordStateEnum;
  error: errorState;
  isLoading: boolean;
};

const initialState: forgotPasswordState = {
  email: "",
  otpState: forgotPasswordStateEnum.OtpNotSent,
  isLoading: false,
  error: { errorMessage: "", errorType: "", status: false },
};
export const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    setForgotPasswordError(state, action: PayloadAction<errorState>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    // OTP Request
    builder.addCase(requestOtpThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(requestOtpThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    });

    builder.addCase(requestOtpThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = {
        errorMessage: "Something went wrong!",
        errorType: "any",
        status: true,
      };
    });

    //Verify OTP
  },
});
