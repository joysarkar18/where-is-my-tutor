import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { requestOtpUrl } from "../constants/urls";
import { errorState } from "./authSlice";
export enum forgotPasswordStateEnum {
  OtpNotSent = 1,
  OtpSent,
  ResetPassword,
}

export type forgotPasswordPayload = {
  email: string;
  password: string;
  otp: number;
  type: number;
};

export type forgotPasswordState = {
  email: string;
  otpState: forgotPasswordStateEnum;
  error: errorState;
  isLoading: boolean;
  type: number;
};

const initialState: forgotPasswordState = {
  email: "",
  otpState: forgotPasswordStateEnum.OtpNotSent,
  isLoading: false,
  type: 0,
  error: { errorMessage: "", errorType: "", status: false },
};

export const requestOtpThunk = createAsyncThunk(
  "auth/requestOtp",
  async (payload: any) => {
    let body;
    body = {
      email: payload.email,
      type: payload.type,
    };

    const response = await axios.post(
      requestOtpUrl,
      body,

      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response);

    return response.data;
  }
);
const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    setForgotPasswordError(state, action: PayloadAction<errorState>) {
      state.error = action.payload;
    },
    setEmailAndType(
      state,
      action: PayloadAction<{ email: string; type: number }>
    ) {
      state.email = action.payload.email;
      state.type = action.payload.type;
    },
  },
  extraReducers: (builder) => {
    // OTP Request
    builder.addCase(requestOtpThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(requestOtpThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.status) {
        state.otpState = forgotPasswordStateEnum.OtpSent;
      }
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

export default forgotPasswordSlice.reducer;
export const { setForgotPasswordError, setEmailAndType } =
  forgotPasswordSlice.actions;
