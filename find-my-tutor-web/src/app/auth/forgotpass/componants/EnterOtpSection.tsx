import { errorState } from "@/app/slices/authSlice";
import {
  forgotPasswordState,
  verifyOtpThunk,
} from "@/app/slices/forgotPasswordSlice";
import { RootState } from "@/store/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const EnterOtpSection = () => {
  const otp: string[] = ["", "", "", "", "", ""];
  const otpInputs = useRef<HTMLInputElement[]>([]);

  const dispatch = useDispatch<ThunkDispatch<forgotPasswordState, any, any>>();
  const isLoading: boolean = useSelector(
    (state: RootState) => state.forgotPassword.isLoading
  );

  const error: errorState = useSelector(
    (state: RootState) => state.forgotPassword.error
  );

  const email: string = useSelector(
    (state: RootState) => state.forgotPassword.email
  );

  const type: number = useSelector(
    (state: RootState) => state.forgotPassword.type
  );

  const focusNextInput = (index: number) => {
    if (otpInputs.current[index + 1]) {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value: string = e.target.value;
    console.log(parseInt(value))
    // Update your state or perform other operations if needed
    if (value !== "") {
      focusNextInput(index);
      otp[index] = value;
      console.log(otp);
    }
    return

  };

  const BackSpaceHandle = (
    e: any,
    index: number
  ) => {
    if (e.key === 'Backspace') {
      if (index === 0) {
        otp[index] = "";
        otpInputs.current[index].focus()
        return
      }
      console.log(e)
      if (e.target.value === "") {
        otp[index - 1] = "";
        otpInputs.current[index - 1].focus()
        return
      }
      else {
        otp[index] = "";
        otpInputs.current[index].focus()
        return
      }
    }
  }

  const verifyOtp = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    console.log("verify clicked");

    for (let index = 0; index < otp.length; index++) {
      if (otp[index] === "") {
        return;
      }
    }

    let combinedString = otp.join("");
    let otpNumber = parseInt(combinedString);
    dispatch(
      verifyOtpThunk({
        email: email,
        type: type,
        otp: otpNumber,
      })
    );
  };

  return (
    <div className=" min-h-screen flex items-center justify-center lg:w-screen w-full lg:pr-12 p-6 bg-gray-100 ">
      <div className="w-96">
        <h3 className="text-black mb-6 font-semibold text-4xl">
          OTP Verification
        </h3>

        <form onSubmit={verifyOtp} className="flex flex-col items-center">
          <div className="mb-4 w-full flex flex-col items-start">
            <label htmlFor="email" className="text-gray-700 text-sm mb-2">
              Please check your mail box an OTP has been sent from our side.
              Enter the OTP below to change the password.
            </label>
            <div>
              <p className="text-sm font-semibold text-baseColor-400 mb-4 mt-3">
                OTP received at {"joysarkar8171@gmail.com"}
              </p>
            </div>
            <div className="relative">
              {[...Array(6)].map((_, index) => (
                <input
                  ref={(el) => (otpInputs.current[index] = el!)}
                  key={index}
                  className={`mr-3 focus:border-baseColor-600 focus:ring-0 focus:outline-none border ${
                    error.status && error.errorType === "otp"
                      ? "border-red-600"
                      : "border-baseColor-300"
                  } h-10 w-10 text-center form-control rounded`}
                  type="text"
                  id={`otp-${index}`}
                  maxLength={1}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => BackSpaceHandle(e, index)}
                />
              ))}
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
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnterOtpSection;
