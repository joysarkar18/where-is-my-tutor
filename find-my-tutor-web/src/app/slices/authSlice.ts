import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loginUrl } from "../constants/urls";

export type authState = {
  status: boolean;
  token: string;
  isLoading: boolean;
  error: errorState;
};

 type errorState = {
  errorType: string;
  errorMessage: string;
  status: boolean;
};

export type loginPayload = {
  email: string;
  userName: string;
  password: string;
  userType: number;
};

const initialState: authState = {
  status: false,
  token: "",
  isLoading: false,
  error: { errorType: "", errorMessage: "", status: false },
};

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (payload: loginPayload) => {
    console.log("jdlkasjdlkasj");
    
    const response = await axios.post(
      loginUrl,
      {
        email: payload.email,
        password: payload.password,
        type: payload.userType,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response);
    
    return response.data;
  }
);

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setLoginError(state, action: PayloadAction<errorState>) {
      state.error = action.payload;
    },
  },

  extraReducers:(builder)=>{
    builder.addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        // Update state with response data if needed
        if(action.payload.status){

            console.log(action.payload);
            

        }
        else{
          console.log(action.payload);
            state.error = {errorMessage: action.payload.message , errorType: action.payload.type , status: true }

        }
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
        state.isLoading = false;
        // Handle error if necessary
    });
  }
});

export default authSlice.reducer;

export const { setLoginError } = authSlice.actions;
