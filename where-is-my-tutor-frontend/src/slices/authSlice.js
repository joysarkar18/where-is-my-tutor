import { createSlice } from "@reduxjs/toolkit";
import { loginUrl, signupUrl } from "../constant/urls";

const initialState = {
    status: false,
    token: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        loginWithEmailPassword(state, action) {
            console.log(state.status);
            console.log(action.payload);
            const body = {

                email: action.payload.emailOrUsername,
                password: action.payload.password,
                type: action.payload.type,

            }
            console.log("fetch");
            try {
                fetch(loginUrl, {
                    method: "POST", body: JSON.stringify(body), headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((response) => {
                    console.log("fetch");
                    return response.json();
                }).then((data) => {
                    console.log("data recived");
                    console.log(data);
                    if (data.status) {

                        localStorage.setItem("token", data.token);
                        localStorage.setItem("email", data.email);
                        localStorage.setItem("userName", data.userName);
                        console.log("loged in");

                        action.payload.goHome();

                    }
                    else {
                        console.log("not loged in");
                        console.log(data.message);
                        if (data.type === "email") {
                            action.payload.setError({
                                errorType: data.type,
                                errorMessage: data.message,
                                status: true,
                            })

                        }

                        else if (data.type == "password") {
                            action.payload.setError({
                                errorType: data.type,
                                errorMessage: data.message,
                                status: true,
                            })

                        }
                        else {
                            action.payload.setError({
                                errorType: "",
                                errorMessage: data.message,
                                status: true,
                            })

                        }

                    }

                }).catch((error) => {
                    console.error(error);
                    action.payload.setError({
                        errorType: "",
                        errorMessage: "Something went wrong!",
                        status: true,

                    });


                })

            } catch (error) {
                console.error(error);
                action.payload.setError({
                    errorType: "",
                    errorMessage: "Something went wrong!",
                    status: true,

                });


            }

        },

        loginWithUserNamePassword(state, action) {
            console.log(state.status);
            console.log(action.payload);
            const body = {

                userName: action.payload.emailOrUsername,
                password: action.payload.password,
                type: action.payload.type,

            }
            console.log("fetch");
            try {
                fetch(loginUrl, {
                    method: "POST", body: JSON.stringify(body), headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((response) => {
                    console.log("fetch");
                    return response.json();
                }).then((data) => {
                    console.log("data recived");
                    console.log(data);
                    if (data.status) {
                        localStorage.setItem("token", data.token);
                        localStorage.setItem("email", data.email);
                        localStorage.setItem("userName", data.userName);
                        console.log("loged in");

                        action.payload.goHome();


                    }
                    else {
                        console.log("not loged in");
                        console.log(data.message);
                        if (data.type === "email") {
                            action.payload.setError({
                                errorType: data.type,
                                errorMessage: data.message,
                                status: true,
                            })

                        }

                        else if (data.type == "password") {
                            action.payload.setError({
                                errorType: data.type,
                                errorMessage: data.message,
                                status: true,
                            })

                        }
                        else {
                            action.payload.setError({
                                errorType: "",
                                errorMessage: data.message,
                                status: true,
                            })

                        }

                    }

                }).catch((error) => {
                    console.error(error);
                    action.payload.setError({
                        errorType: "",
                        errorMessage: "Something went wrong!",
                        status: true,

                    });


                })

            } catch (error) {
                console.error(error);
                action.payload.setError({
                    errorType: "",
                    errorMessage: "Something went wrong!",
                    status: true,

                });


            }

        },


        signup(state, action) {
            console.log(state.status);
            console.log(action.payload);
            const body = {

                userName: action.payload.userName,
                password: action.payload.password,
                type: action.payload.type,
                email: action.payload.email,


            }
            console.log("fetch");
            try {
                fetch(signupUrl, {
                    method: "POST", body: JSON.stringify(body), headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((response) => {
                    console.log("fetch");
                    return response.json();
                }).then((data) => {
                    console.log("data recived");
                    console.log(data);
                    if (data.status) {
                        localStorage.setItem("token", data.token);
                        localStorage.setItem("email", action.payload.email,);
                        localStorage.setItem("userName", action.payload.userName,);
                        console.log("loged in");

                        action.payload.goHome();


                    }
                    else {
                        console.log("not loged in");
                        console.log(data.message);
                        if (data.type === "email") {
                            action.payload.setError({
                                errorType: data.type,
                                errorMessage: data.message,
                                status: true,
                            })

                        }

                        else if (data.type == "userName") {
                            action.payload.setError({
                                errorType: "userName",
                                errorMessage: data.message,
                                status: true,
                            })

                        }
                        else {
                            action.payload.setError({
                                errorType: "",
                                errorMessage: data.message,
                                status: true,
                            })

                        }

                    }

                }).catch((error) => {
                    console.error(error);
                    action.payload.setError({
                        errorType: "",
                        errorMessage: "Something went wrong!",
                        status: true,

                    });


                })

            } catch (error) {
                console.error(error);
                action.payload.setError({
                    errorType: "",
                    errorMessage: "Something went wrong!",
                    status: true,

                });


            }

        },



        logOut(state) {
            console.log(state.token);
            console.log("Logout called");
        }

    }
})
export default authSlice.reducer;
export const { loginWithEmailPassword, loginWithUserNamePassword, logOut, signup } = authSlice.actions;
