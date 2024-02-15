import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loginUrl } from "../constants/urls";
import { error } from "console";


type authState = {
    status: boolean,
    token: string

}

type loginPayload = {
    email: string,
    userName: string,
    password: string,
    userType: number,
    setError : Function,
}


const initialState = {
    status: false,
    token: "",
} as authState;

const authSlice = createSlice({initialState , name:"auth" , reducers:{

    login(state , action : PayloadAction<loginPayload>){
        console.log(state);
        console.log(action);
        const body = {

            userName: action.payload.email,
            password: action.payload.password,
            type: action.payload.userType,

        }
        axios.post(loginUrl , body ,{ headers:{
            'Content-Type': 'application/json',

        }}).then((response)=>{
            console.log(response);
            if(response.data.status){

            }else{
                action.payload.setError({
                    status: true,
                    errorMessage:response.data.message,
                    errorType: response.data.type,
                })
            }
            
        }).catch(error=>{
            console.log(error);
            
        })


        
        

    }
}})

export default authSlice.reducer;

export const {login} = authSlice.actions;