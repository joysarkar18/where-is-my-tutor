import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { errorState } from "./authSlice";
import axios from "axios";
import { submitStudentDetailsUrl, submitTeacherDetailsUrl } from "../constants/urls";
import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: "/" });

export type updateDetailsState = {
  status: boolean;
  isLoading: boolean;
  error: errorState;
};

export type studentDetailsPayload = {
  firstName: string;
  lastName: string;
  gender: string;
  phNumber: number;
  latitude: number;
  longitude: number;
  pinCode: number;
  address: string;
  stream: string;
  profileImage: string;
  currentClass: number;
  subjects: string[];
};

export type teacherDetailsPayload = {
  firstName: string;
  lastName: string;
  gender: string;
  phNumber: number;
  latitude: number;
  longitude: number;
  pinCode: number;
  address: string;
  profileImage: string;
  qualification: string[];
  specification: string[];
  aaddharNo: string;
  yearOfExp: number;
  subjects: string[];
};

export const submitStudentDetails = createAsyncThunk(
  "details/student",

  async (payload: studentDetailsPayload) => {
    let body;
    body = payload;
    let token: string = cookies.get("fmt");

    const response = await axios.post(
      submitStudentDetailsUrl,
      body,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);

    return response.data;
  }
);

export const submitTeacherDetails = createAsyncThunk(
  "details/student",

  async (payload: teacherDetailsPayload) => {
    let body;
    body = payload;
    let token: string = cookies.get("fmt");

    const response = await axios.post(
      submitTeacherDetailsUrl,
      body,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);

    return response.data;
  }
);

const initialState: updateDetailsState = {
  isLoading: false,
  status: false,
  error: { errorMessage: "", errorType: "", status: false },
};

const detailsUpdateSlice = createSlice({
  initialState,
  name: "details",
  reducers: {
    setDetailsError(state, action: PayloadAction<errorState>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitStudentDetails.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(submitStudentDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action);
    });

    builder.addCase(submitStudentDetails.rejected, (state) => {
      state.isLoading = false;
      state.error = {
        errorMessage: "Something went wrong!",
        errorType: "any",
        status: true,
      };
    });
    
    //TEACHER
    builder.addCase(submitTeacherDetails.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(submitTeacherDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action);
    });

    builder.addCase(submitTeacherDetails.rejected, (state) => {
      state.isLoading = false;
      state.error = {
        errorMessage: "Something went wrong!",
        errorType: "any",
        status: true,
      };
    });
  },
});

export default detailsUpdateSlice.reducer;

export const { setDetailsError } = detailsUpdateSlice.actions;
