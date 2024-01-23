import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: true,
    token: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        loginWithEmailPassword(state, action) {
            let a = state;
            let b = action.payload;
            console.log(a.status);
            console.log(b);

        },

        logOut(state) {
            console.log(state.token);
            console.log("Logout called");
        }

    }
})
export default authSlice.reducer;
export const { loginWithEmailPassword, logOut } = authSlice.actions;
