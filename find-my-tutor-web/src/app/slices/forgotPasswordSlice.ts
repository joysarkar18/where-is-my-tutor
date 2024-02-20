import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  requestOtpUrl,
  verifyOtpUrl,
  resetPasswordUrl,
} from "../constants/urls";
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

export const verifyOtpThunk = createAsyncThunk(
  "auth/verifyOtp",
  async (payload: any) => {
    let body;
    body = {
      email: payload.email,
      type: payload.type,
      otp: payload.otp,
    };

    const response = await axios.post(
      verifyOtpUrl,
      body,

      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response);

    return response.data;
  }
);

export const resetPasswordThunk = createAsyncThunk(
  "auth/resetPassword",
  async (payload: any) => {
    let body;
    body = {
      email: payload.email,
      type: payload.type,
      password: payload.password,
    };
    console.log(body);
    const response = await axios.post(
      resetPasswordUrl,
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
      console.log(action.payload);
      if (action.payload.status) {
        state.otpState = forgotPasswordStateEnum.OtpSent;
      } else {
        if (action.payload.errorType === "email") {
          state.error = {
            errorMessage: action.payload.message,
            errorType: "email",
            status: true,
          };
        } else {
          state.error = {
            errorMessage: "Something went wrong!",
            errorType: "something",
            status: true,
          };
        }
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

    builder.addCase(verifyOtpThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(verifyOtpThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.status) {
        state.otpState = forgotPasswordStateEnum.ResetPassword;
      } else {
        if (action.payload.errorType === "otp") {
          state.error = {
            errorMessage: "Wrong OTP!",
            errorType: "otp",
            status: true,
          };
        } else {
          state.error = {
            errorMessage: "Something went wrong!",
            errorType: "any",
            status: true,
          };
        }
      }
      console.log(action.payload);
    });

    builder.addCase(verifyOtpThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = {
        errorMessage: "Something went wrong!",
        errorType: "any",
        status: true,
      };
    });

    //Reset Password

    builder.addCase(resetPasswordThunk.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(resetPasswordThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.status) {
        state.otpState = forgotPasswordStateEnum.ResetPassword;
      }
      console.log(action.payload);
    });

    builder.addCase(resetPasswordThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = {
        errorMessage: "Something went wrong!",
        errorType: "any",
        status: true,
      };
    });
  },
});

export default forgotPasswordSlice.reducer;
export const { setForgotPasswordError, setEmailAndType } =
  forgotPasswordSlice.actions;
