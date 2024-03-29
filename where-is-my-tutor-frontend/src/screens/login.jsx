import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  loginWithEmailPassword,
  loginWithUserNamePassword,
  logOut,
} from "../slices/authSlice";
import { validate, res } from "react-email-validator";

function Login() {
  const [isPasswordShowing, setIsPasswordShowing] = useState(true);
  const [selectedUserType, setSelectedUserType] = useState(0);
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [error, setError] = useState({
    errorType: "",
    errorMessage: "",
    status: false,
  });
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.auth);
  let navigate = useNavigate();
  function goHome() {
    navigate("/", { replace: true });
  }

  function login() {
    validate(emailOrUsername);
    if (password.length <= 5) {
      setError({
        status: true,
        errorMessage: "Password is to small!",
        errorType: "password",
      });
    } else {
      if (res) {
        console.log(loginState);
        dispatch(
          loginWithEmailPassword({
            emailOrUsername: emailOrUsername,
            password: password,
            type: selectedUserType,
            setError: (error) => {
              setError(error);
            },
            goHome: goHome,
          })
        );
      } else {
        if (emailOrUsername.length < 1) {
          setError({
            status: true,
            errorMessage: "Email or username can't be empty!",
            errorType: "email",
          });
        } else {
          dispatch(
            loginWithUserNamePassword({
              emailOrUsername: emailOrUsername,
              password: password,
              type: selectedUserType,
              setError: (error) => {
                setError(error);
              },
              goHome: goHome,
            })
          );
        }
        console.log("username");
      }
    }
  }

  function emailController(event) {
    if (error.status) {
      setError({
        status: false,
        errorMessage: "",
        errorType: "",
      });
    }
    setEmailOrUsername(event.target.value);
  }
  function passwordController(event) {
    setPassword(event.target.value);
    console.log(password);
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-hidden relative">
      <div className="h-[900px] w-[900px] absolute left-[-24rem] top-[-24rem] bg-baseColor-100 rounded-full"></div>
      <div className="h-[700px] w-[700px] absolute left-[-20rem] top-[-20rem] bg-baseColor-200 rounded-full"></div>
      <div className="h-[500px] w-[500px] absolute left-[-15rem] top-[-15rem] bg-baseColor-300 rounded-full"></div>
      <div className="h-[900px] w-[900px] absolute right-[-25rem] bottom-[-25rem] bg-baseColor-100 rounded-full"></div>
      <div className="h-[700px] w-[700px] absolute right-[-21rem] bottom-[-21rem] bg-baseColor-200 rounded-full"></div>
      <div className="h-[500px] w-[500px] absolute right-[-16rem] bottom-[-16rem] bg-baseColor-300 rounded-full"></div>

      {/* Login Box */}
      <div className="pl-6 2xl:pl-36 flex flex-row items-center justify-center lg:justify-between overflow-hidden h-4/6 w-5/6 sm:w-4/6 bg-gray-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-md shadow-[rgba(5,_183,_186,_0.4)_0px_0px_18px] p-8">
        <div className="flex flex-col items-start justify-center">
          <div className="text-4xl sm:text-5xl font-semibold text-baseColor-600 sm:ml-2 ml-12">
            Welcome back
          </div>
          {/* <div className="text-sm font-light text-baseColor-600 ml-3">
            Enter your email/username and password to Login
          </div> */}
          <div>
            <div className="flex flex-row items-center justify-between space-x-8 sm:space-x-12 h-32 mx-10 sm:mx-6">
              <div className="flex flex-col justify-center items-center">
                <a
                  className={`${
                    selectedUserType == 0
                      ? "text-baseColor-600"
                      : "text-slate-300"
                  } ${
                    selectedUserType == 1
                      ? "hover:text-baseColor-400"
                      : "hover:text-baseColor-600"
                  } whitespace-nowrap text-xl font-bold mb-1 cursor-pointer`}
                  onClick={() => {
                    setSelectedUserType(0);
                  }}
                >
                  Student
                </a>
                <div
                  className={`h-[2px] w-24 rounded-full ${
                    selectedUserType == 0 ? "bg-baseColor-300" : "bg-slate-300"
                  }`}
                ></div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <a
                  className={`${
                    selectedUserType == 1
                      ? "text-baseColor-600"
                      : "text-slate-300"
                  } ${
                    selectedUserType == 0
                      ? "hover:text-baseColor-400"
                      : "hover:text-baseColor-600"
                  } whitespace-nowrap text-xl font-bold mb-1 cursor-pointer`}
                  onClick={() => {
                    setSelectedUserType(1);
                  }}
                >
                  Teacher
                </a>
                <div
                  className={`h-[2px] w-24 rounded-full ${
                    selectedUserType == 1 ? "bg-baseColor-300" : "bg-slate-300"
                  }`}
                ></div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="shadow-[rgba(5,_183,_186,_0.3)_0px_30px_90px] rounded-full flex justify-center w-64 sm:w-80">
                <label className="sr-only">Email address</label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={emailOrUsername}
                    onChange={emailController}
                    autoComplete="email"
                    required
                    className={`rounded-full w-64 sm:w-80 h-8 text-baseColor-600 shadow-baseColor-100 relative block px-10 py-1 border ${
                      error.status && error.errorType == "email"
                        ? "border-red-500"
                        : "border-baseColor-300"
                    } focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
                    placeholder="Email or username"
                  />
                  <CgProfile className="top-2 left-4 absolute text-baseColor-400"></CgProfile>
                </div>
              </div>

              <div className="mt-4 space-y-2 w-64 sm:w-80">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    value={password}
                    onChange={passwordController}
                    type={isPasswordShowing ? "password" : "text"}
                    autoComplete="current-password"
                    required
                    className={`rounded-full text-baseColor-600 shadow-baseColor-100 relative block w-64 sm:w-80 h-8 px-10 py-1 sm:text-sm border ${
                      error.status && error.errorType == "password"
                        ? "border-red-500"
                        : "border-baseColor-300"
                    } focus:border-baseColor-600 focus:ring-0 focus:outline-none shadow-[5,_183,_186,_0.9)]`}
                    placeholder="Password"
                  />
                  <RiLockPasswordLine className="top-2 left-4 absolute text-baseColor-400"></RiLockPasswordLine>
                  {!isPasswordShowing && (
                    <AiOutlineEye
                      className="top-2 right-4 absolute text-baseColor-400 cursor-pointer"
                      onClick={() => {
                        setIsPasswordShowing((v) => {
                          return !v;
                        });
                      }}
                    ></AiOutlineEye>
                  )}
                  {isPasswordShowing && (
                    <AiOutlineEyeInvisible
                      className="top-2 right-4 absolute text-baseColor-400 cursor-pointer"
                      onClick={() => {
                        setIsPasswordShowing((v) => {
                          return !v;
                        });
                      }}
                    ></AiOutlineEyeInvisible>
                  )}
                </div>
              </div>
            </div>
            <div className="h-18 pt-4 sm:ml-2 ml-7">
              {error.status && (
                <p className="text-red-500 text-sm">{error.errorMessage}</p>
              )}
            </div>

            <div className="flex flex-row items-center sm:justify-between justify-around space-x-1 sm:space-x-28 h-24">
              <a
                className="text-baseColor-600 whitespace-nowrap text-[12px] sm:text-sm cursor-pointer"
                onClick={() => {
                  dispatch(logOut());
                }}
              >
                Forgot Password?
              </a>

              <button
                type="submit"
                onClick={login}
                className="group relative w-24 sm:w-full flex justify-center  py-1 px-8 border border-transparent text-sm font-semibold rounded-full text-white bg-baseColor-600 "
              >
                Login
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center sm:justify-between justify-around space-x-1 sm:space-x-20 h-2">
            <div className="text-baseColor-600 whitespace-nowrap ml-7 sm:ml-0 text-[12px] sm:text-sm">
              {"Don't have any account?"}
              <a
                onClick={() => {
                  navigate("/Register");
                }}
              >
                <span className="text-blue-500 ml-4 text-sm cursor-pointer underline">
                  Signup
                </span>
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="h-[800px] w-[800px] fixed right-[-29rem] xl:right-[-19rem] top-[-4.0rem] bg-logIn-200 rounded-full">
              <div className="h-[700px] w-[700px] fixed right-[-30rem] xl:right-[-20rem] top-[-1.4rem] bg-logIn-300 rounded-full">
                <div className="h-[640px] w-[640px] fixed right-[-32rem] xl:right-[-23rem] top-[0rem] bg-logIn-500 rounded-full">
                  <div className="z-30 fixed h-[18rem] w-[18rem] xl:h-[25rem] xl:w-[25rem] right-[1.4rem] xl:right-[4.4rem] top-[6.9rem] xl:top-[6rem]">
                    <DotLottiePlayer
                      src={
                        selectedUserType == 0
                          ? "src/assets/student_animation.lottie"
                          : "src/assets/teacher_animation_.lottie"
                      }
                      autoplay
                      loop
                    ></DotLottiePlayer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
