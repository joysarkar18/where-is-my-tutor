import { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { LuMail } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { validate, res } from "react-email-validator";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../slices/authSlice";
function Register() {
  const [isPasswordShowing, setIsPasswordShowing] = useState(true);
  const [isPasswordShowing2, setIsPasswordShowing2] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const [error, setError] = useState({
    errorType: "",
    errorMessage: "",
    status: false,
  });

  const loginState = useSelector((state) => state.auth);

  let navigate = useNavigate();
  function goHome() {
    navigate("/");
  }

  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (value) => {
    setPassword(value);
    // if (confirmPassword !== "") {
    //   setPasswordsMatch(value === confirmPassword);
    // }
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    // setPasswordsMatch(value === password);
  };

  function signupHandeler() {
    console.log(loginState);
    if (passwordsMatch) {
      validate(email);

      if (res) {
        if (userName.length < 4) {
          setError({
            status: true,
            errorMessage: "Username is very short!",
            errorType: "userName",
          });
        } else {
          dispatch(
            signup({
              email: email,
              password: confirmPassword,
              userName: userName,
              type: 0,
              setError: (error) => {
                setError(error);
              },
              goHome: goHome,
            })
          );
        }
      } else {
        setError({
          status: true,
          errorMessage: "Please enter a valid email!",
          errorType: "email",
        });
      }
    } else {
      setPasswordsMatch(false);
    }
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-hidden relative">
      <div className="h-[900px] w-[900px] absolute left-[-24rem] top-[-24rem] bg-sky-100 rounded-full"></div>
      <div className="h-[700px] w-[700px] absolute left-[-20rem] top-[-20rem] bg-sky-200 rounded-full"></div>
      <div className="h-[500px] w-[500px] absolute left-[-15rem] top-[-15rem] bg-sky-300 rounded-full"></div>
      <div className="h-[900px] w-[900px] absolute right-[-25rem] bottom-[-25rem] bg-sky-100 rounded-full"></div>
      <div className="h-[700px] w-[700px] absolute right-[-21rem] bottom-[-21rem] bg-sky-200 rounded-full"></div>
      <div className="h-[500px] w-[500px] absolute right-[-16rem] bottom-[-16rem] bg-sky-300 rounded-full"></div>
      <div className="pl-6 2xl:pl-36 flex flex-row items-center justify-center lg:justify-between overflow-hidden h-4/6 w-5/6 sm:4/6 sm:w-4/6 bg-gray-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-md shadow-[rgba(125,_211,_252,_0.7)_0px_0px_18px] p-8">
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-row items-start justify-start space-x-8 sm:space-x-12 h-32 mx-10 sm:mx-6 mb-32">
            <div className="flex flex-col items-start justify-start ">
              <div className="flex flex-col items-start justify-center -translate-y-12">
                <div className="ml-10 sm:ml-9 flex flex-row items-center justify-center -translate-y-10">
                  <h2 className="text-xl sm:text-3xl font-semibold text-sky-600">
                    Create an account
                  </h2>
                </div>
                <div className="shadow-[rgba(5,_183,_186,_0.3)_0px_30px_90px] rounded-full flex justify-center w-64 sm:w-80">
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleEmailChange}
                      value={email}
                      className="rounded-full w-64 sm:w-80 h-8 text-sky-600 shadow-sky-100 relative block px-10 py-1 border border-sky-300 focus:border-sky-600 focus:ring-0 focus:outline-none sm:text-sm"
                      placeholder="Enter your email address"
                    />
                    <LuMail className="top-2 left-4 absolute text-sky-400">
                      {" "}
                    </LuMail>
                  </div>
                </div>
                <div className="shadow-[rgba(5,_183,_186,_0.3)_0px_30px_90px] rounded-full flex justify-center w-64 sm:w-80 mt-4 space-y-2">
                  <div className="relative">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={userName}
                      onChange={handleUserNameChange}
                      className=" rounded-full w-64 sm:w-80 h-8 text-sky-600 shadow-sky-100 relative block px-10 py-1 border border-sky-300 focus:border-sky-600 focus:ring-0 focus:outline-none sm:text-sm"
                      placeholder="Enter username"
                    />
                    <CgProfile className="top-2 left-4 absolute text-sky-400"></CgProfile>
                  </div>
                </div>

                <div className="mt-4 space-y-2 w-64 sm:w-80">
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={isPasswordShowing ? "password" : "text"}
                      value={password}
                      onChange={(e) => handlePasswordChange(e.target.value)}
                      className="rounded-full text-sky-600 shadow-sky-100 relative block w-64 sm:w-80 h-8 px-10 py-1 sm:text-sm border border-sky-300 focus:border-sky-600 focus:ring-0 focus:outline-none shadow-[5,_183,_186,_0.9)]"
                      placeholder="Enter Password"
                    />
                    <RiLockPasswordLine className="top-2 left-4 absolute text-sky-400"></RiLockPasswordLine>
                    {!isPasswordShowing && (
                      <AiOutlineEye
                        className="top-2 right-4 absolute text-sky-400 cursor-pointer"
                        onClick={() => {
                          setIsPasswordShowing((v) => !v);
                        }}
                      ></AiOutlineEye>
                    )}
                    {isPasswordShowing && (
                      <AiOutlineEyeInvisible
                        className="top-2 right-4 absolute text-sky-400 cursor-pointer"
                        onClick={() => {
                          setIsPasswordShowing((v) => !v);
                        }}
                      ></AiOutlineEyeInvisible>
                    )}
                  </div>
                </div>
                <div className="mt-4 space-y-2 w-64 sm:w-80 mb-4">
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={isPasswordShowing2 ? "password" : "text"}
                      value={confirmPassword}
                      onChange={(e) =>
                        handleConfirmPasswordChange(e.target.value)
                      }
                      className={`rounded-full text-sky-600 shadow-sky-100 relative block w-64 sm:w-80 h-8 px-10 py-1 sm:text-sm border ${
                        passwordsMatch ? "border-sky-300" : "border-red-500"
                      } focus:border-sky-600 focus:ring-0 focus:outline-none shadow-[5,_183,_186,_0.9)]`}
                      placeholder="Confirm password"
                    />
                    <RiLockPasswordLine className="top-2 left-4 absolute text-sky-400"></RiLockPasswordLine>
                    {!isPasswordShowing2 && (
                      <AiOutlineEye
                        className="top-2 right-4 absolute text-sky-400 cursor-pointer"
                        onClick={() => {
                          setIsPasswordShowing2((v) => !v);
                        }}
                      ></AiOutlineEye>
                    )}
                    {isPasswordShowing2 && (
                      <AiOutlineEyeInvisible
                        className="top-2 right-4 absolute text-sky-400 cursor-pointer"
                        onClick={() => {
                          setIsPasswordShowing2((v) => !v);
                        }}
                      ></AiOutlineEyeInvisible>
                    )}
                  </div>
                  {!passwordsMatch && (
                    <p className="text-red-500 text-sm mt-1">
                      Passwords do not match
                    </p>
                  )}

                  <div className="h-18 pt-4 ml-2">
                    {error.status && (
                      <p className="text-red-500 text-sm">
                        {error.errorMessage}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={signupHandeler}
                  className="group relative w-64 sm:w-80 flex justify-center py-1  border border-transparent text-sm font-semibold rounded-full text-white bg-sky-600 mt-4 space-y-7 hover:bg-sky-500  shadow-sky-100"
                >
                  Register as a Tearcher
                </button>
                <button
                  type="submit"
                  onClick={signupHandeler}
                  className="group relative w-64 sm:w-80 flex justify-center py-1  border border-transparent text-sm font-semibold rounded-full text-white bg-sky-600 mt-4 space-y-7 hover:bg-sky-500 shadow-sky-100 "
                >
                  Register as a Student
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="h-[800px] w-[800px] fixed right-[-30rem] xl:right-[-19rem] top-[-4.0rem] bg-sky-100 rounded-full">
            <div className="h-[700px] w-[700px] fixed right-[-31rem] xl:right-[-20rem] top-[-1.4rem] bg-sky-200 rounded-full">
              <div className="h-[640px] w-[640px] fixed right-[-32rem] xl:right-[-23rem] top-[0rem] bg-sky-300 rounded-full">
                <div className="z-30 fixed h-[18rem] w-[18rem] xl:h-[25rem] xl:w-[25rem] right-[1.4rem] xl:right-[4.4rem] top-[6.9rem] xl:top-[6rem] ">
                  <DotLottiePlayer
                    src="/src/assets/signuppage.lottie"
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
  );
}
export default Register;
