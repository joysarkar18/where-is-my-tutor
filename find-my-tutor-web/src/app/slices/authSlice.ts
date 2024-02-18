import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loginUrl, signupUrl } from "../constants/urls";
import Cookies from 'universal-cookie';
const cookies = new Cookies(null, { path: '/' });

export type authState = {
  status: boolean;
  token: string;
  isLoading: boolean;
  error: errorState;
};

export type errorState = {
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
    let body ; 
    if(payload.userName===""){
      body = {
        email: payload.email,
        password: payload.password,
        type: payload.userType,
      };

    }else{

      body = {
        userName: payload.userName,
        password: payload.password,
        type: payload.userType,
      };

    }
    
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


export const singupAsync = createAsyncThunk(
  "auth/signupAsync",
  async (payload: loginPayload) => {
    let body = {
      email:payload.email,
      userName :payload.userName,
      type:payload.userType,
      password : payload.password,

    } ; 
  
    
    const response = await axios.post(
      signupUrl,
      body,
      
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
    //For login 
    builder.addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        // Update state with response data if needed
        if(action.payload.status){

            console.log(action.payload);
            cookies.set('fmt', action.payload.token);
            
            

        }
        else{
          console.log(action.payload);
            state.error = {errorMessage: action.payload.message , errorType: action.payload.type , status: true }

        }
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = {errorMessage: "Something went wrong!" , errorType: "any" , status: true }
        // Handle error if necessary
    });


    //For signup


    builder.addCase(singupAsync.pending, (state) => {
      state.isLoading = true;
  });
  builder.addCase(singupAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      // Update state with response data if needed
      if(action.payload.status){

          console.log(action.payload);
          state.status = true;
          cookies.set('fmt', action.payload.token);
       
          

      }
      else{
        console.log(action.payload);
          state.error = {errorMessage: action.payload.message , errorType: action.payload.type , status: true }

      }
  });
  builder.addCase(singupAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = {errorMessage: "Something went wrong!" , errorType: "any" , status: true }
      // Handle error if necessary
  });






  }
});

export default authSlice.reducer;

export const { setLoginError } = authSlice.actions;
