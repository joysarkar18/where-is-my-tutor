"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { errorState } from "@/app/slices/authSlice";
import {
  forgotPasswordPayload,
  forgotPasswordState,
  forgotPasswordStateEnum,
  requestOtpThunk,
} from "@/app/slices/forgotPasswordSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import EnterEmailSection from "./componants/EnterEmailSection";
import EnterOtpSection from "./componants/EnterOtpSection";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [type, setType] = useState(-1);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch<ThunkDispatch<forgotPasswordState, any, any>>();
  const emailState = useSelector(
    (state: RootState) => state.forgotPassword.email
  );
  const error: errorState = useSelector(
    (state: RootState) => state.forgotPassword.error
  );
  const currentStep: forgotPasswordStateEnum = useSelector(
    (state: RootState) => state.forgotPassword.otpState
  );
  const isLoading: boolean = useSelector(
    (state: RootState) => state.forgotPassword.isLoading
  );

  return (
    <div className="overflow-hidden">
      <div className="absolute w-full h-screen flex flex-row justif y-between overflow-hidden">
        <div className="overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FED6D4] from-10% to-transparent to-70% rounded-full min-w-[53.4vw] min-h-[53.4vw] h-[1200px] absolute top-[331px] right-[203px]" />
        <div className="overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#75D0C146] from-10% to-transparent to-70% rounded-full min-w-[53.4vw] min-h-[53.4vw] h-[1200px] absolute top-[331px] left-[203px]" />
      </div>
      <div className="flex">
        <div className=" h-screen w-[60vw] bg-baseColor-300 justify-center items-center hidden lg:flex">
          <Image
            width={600}
            height={600}
            alt=""
            src="/pictures/pngegg.png"
            className="px-8"
          ></Image>
        </div>
        {currentStep === forgotPasswordStateEnum.OtpNotSent && (
          <EnterEmailSection></EnterEmailSection>
        )}
        {currentStep === forgotPasswordStateEnum.OtpSent && (
          <EnterOtpSection></EnterOtpSection>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
