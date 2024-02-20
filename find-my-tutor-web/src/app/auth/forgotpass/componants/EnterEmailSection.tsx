import { errorState } from "@/app/slices/authSlice";
import {
  forgotPasswordState,
  forgotPasswordStateEnum,
  requestOtpThunk,
  setEmailAndType,
} from "@/app/slices/forgotPasswordSlice";
import { RootState } from "@/store/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const EnterEmailSection = () => {
  const [email, setEmail] = useState("");
  const [type, setType] = useState(0);
  const dispatch = useDispatch<ThunkDispatch<forgotPasswordState, any, any>>();
  const isLoading: boolean = useSelector(
    (state: RootState) => state.forgotPassword.isLoading
  );

  const error: errorState = useSelector(
    (state: RootState) => state.forgotPassword.error
  );
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(setEmailAndType({ email: email, type: type }));
    dispatch(
      requestOtpThunk({
        email: email,
        type: type,
      })
    );
    // setMessage("Password reset email sent successfully!");
  };

  const emailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  return (
    <div className=" min-h-screen flex items-center justify-center lg:w-screen w-full lg:pr-12 p-6 bg-gray-100 ">
      <div className="w-96">
        <h3 className="text-black mb-6 font-semibold text-4xl">
          Forgot Password?
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mb-4 w-full flex flex-col items-start">
            <label htmlFor="email" className="text-gray-700 text-sm mb-2">
              Enter the email address you used when you joined and we will send
              you OTP to reset your password.
            </label>
            <label
              htmlFor="email"
              className="text-gray-700 text-sm mb-6 mt-4 space-y-2"
            >
              For security reasons, we do not store your password. So rest
              assured that we will never send your password via Email.
            </label>

            <div className="flex mb-3 z-30">
              <div className="text-md mr-3 font-semibold text-baseColor-400">
                <h4>I am a </h4>
              </div>
              <div className="flex items-center mr-4">
                <input
                  id="inline-checkbox"
                  type="checkbox"
                  onChange={(e) => {}}
                  onClick={() => {
                    console.log("radio clicked");

                    setType(0);
                  }}
                  checked={type === 0}
                  className="h-[14px] w-[14px] accent-baseColor-400"
                />
                <label className="ms-2 text-sm font-medium text-baseColor-400">
                  Student
                </label>
              </div>

              <div className="flex items-center mr-4">
                <input
                  id="inline-checkbox"
                  type="checkbox"
                  checked={type == 1}
                  onChange={(e) => {}}
                  onClick={() => {
                    console.log("radio clicked");
                    setType(1);
                  }}
                  className="h-[14px] w-[14px] accent-baseColor-400"
                />
                <label className="ms-2 text-sm font-medium text-baseColor-400">
                  Teacher
                </label>
              </div>
            </div>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                autoComplete="email"
                onChange={emailChange}
                required
                className={`rounded-md w-64 sm:w-80 h-8 text-baseColor-600 shadow-baseColor-100 relative block pl-10 pr-4 lg:pr-10 py-1 border ${
                  error.status && error.errorType == "email"
                    ? "border-red-500"
                    : "border-baseColor-300"
                } focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
                placeholder="Enter your E-mail"
              />
              <MdOutlineEmail className="top-2 left-4 absolute text-baseColor-400"></MdOutlineEmail>
            </div>
            <div className="h-18 pt-4">
              {error.status && (
                <p className="text-red-500 text-sm">{error.errorMessage}</p>
              )}
            </div>
            <button
              type="submit"
              className="z-20 flex text-sm font-semibold mt-4 space-y-3 bg-baseColor-600 text-white px-5 cursor-pointer py-1 rounded-md mb-2 hover:bg-baseColor-700 focus:outline-none focus:bg-baseColor-400 transition duration-300"
            >
              {isLoading && (
                <svg
                  className="w-5 h-5 mr-[9px] ml-[9px] text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth={4}
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              Request OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnterEmailSection;
