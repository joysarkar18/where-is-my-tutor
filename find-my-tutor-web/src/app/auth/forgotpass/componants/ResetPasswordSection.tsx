import React, { useEffect, useState } from 'react'
import { forgotPasswordState, forgotPasswordStateEnum, resetPasswordThunk } from '@/app/slices/forgotPasswordSlice'
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { redirect } from 'next/navigation';

const ResetPasswordSection = () => {
    const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(true);
    const [pass, setPass] = useState("")
    const [otpStatus, setOtpStatus] = useState()

    const dispatch = useDispatch<ThunkDispatch<forgotPasswordState, any, any>>();

    const isLoading: boolean = useSelector(
        (state: RootState) => state.forgotPassword.isLoading
    );

    const email: string = useSelector(
        (state: RootState) => state.forgotPassword.email
    );

    const type: number = useSelector(
        (state: RootState) => state.forgotPassword.type
    );

    const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        const result = await dispatch(
            resetPasswordThunk({
                email: email,
                type: type,
                password: pass,
            })
        );

        setOtpStatus(result.payload.status)
    }

    const passChange = (e: React.FormEvent<HTMLInputElement>) => {
        setPass(e.currentTarget.value);
    };

    useEffect(() => {
      if(otpStatus) redirect("/auth/login")
    }, [otpStatus])
    

    return (
        <div className=" min-h-screen flex items-center justify-center lg:w-screen w-full lg:pr-12 p-6 bg-gray-100 ">
            <div className="w-96">
                <h3 className="text-black mb-6 font-semibold text-4xl">
                    Reset Password
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <div className="mb-4 w-full flex flex-col items-start">
                        <label htmlFor="email" className="text-gray-700 text-sm mb-2">
                            Almost there! To finalize the password reset process, type your new password into the box below. As a reminder, a strong password is crucial for protecting your account. Make sure it's something memorable yet difficult for others to guess.
                        </label>

                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={isPasswordShowing ? "password" : "text"}
                                value={pass}
                                autoComplete="password"
                                onChange={passChange}
                                required
                                className={`rounded-md w-64 sm:w-80 h-8 text-baseColor-600 shadow-baseColor-100 relative block pl-10 pr-4 lg:pr-10 py-1 border ${false ? "border-red-500" : "border-baseColor-300"
                                    } focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
                                placeholder="Enter your new password"
                            />
                            {/* <AiOutlineEye className="top-2 left-4 absolute text-baseColor-400"></AiOutlineEye> */}
                            {!isPasswordShowing && (
                                <AiOutlineEye
                                    className="top-2 left-4 absolute text-baseColor-400 cursor-pointer"
                                    onClick={() => {
                                        setIsPasswordShowing((v) => !v);
                                    }}
                                ></AiOutlineEye>
                            )}
                            {isPasswordShowing && (
                                <AiOutlineEyeInvisible
                                    className="top-2 left-4 absolute text-baseColor-400 cursor-pointer"
                                    onClick={() => {
                                        setIsPasswordShowing((v) => !v);
                                    }}
                                ></AiOutlineEyeInvisible>
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
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPasswordSection