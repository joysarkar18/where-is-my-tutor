"use client";

import React, { useState } from "react";
import Image from "next/image";

import { MdOutlineEmail } from "react-icons/md";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setMessage("Password reset email sent successfully!");
  };

  const emailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

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

        <div className=" min-h-screen flex items-center justify-center lg:w-screen w-full lg:pr-12 p-6 bg-gray-100 ">
          <div className="w-96">
            <h3 className="text-black mb-6 font-semibold text-4xl">
              Forgot Password?
            </h3>

            {message && (
              <div className="bg-green-100 text-green-800 p-3 mb-6 rounded-md text-center">
                {message}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              <div className="mb-4 w-full flex flex-col items-start">
                <label htmlFor="email" className="text-gray-700 text-sm mb-2">
                  Enter the email address you used when you joined and we will
                  send you OTP to reset your password.
                </label>
                <label
                  htmlFor="email"
                  className="text-gray-700 text-sm mb-6 mt-4 space-y-2"
                >
                  For security reasons, we do not store your password. So rest
                  assured that we will never send your password via Email.
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    autoComplete="email"
                    onChange={emailChange}
                    required
                    className={`rounded-md w-64 sm:w-80 h-8 text-baseColor-600 shadow-baseColor-100 relative block px-10 py-1 border ${
                      false ? "border-red-500" : "border-baseColor-300"
                    } focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
                    placeholder="Enter your E-mail"
                  />
                  <MdOutlineEmail className="top-2 left-4 absolute text-baseColor-400"></MdOutlineEmail>
                </div>
                <button
                  type="submit"
                  className="z-20 text-sm font-semibold mt-4 space-y-3 bg-baseColor-600 text-white px-5 cursor-pointer py-1 rounded-md mb-2 hover:bg-baseColor-700 focus:outline-none focus:bg-baseColor-400 transition duration-300"
                >
                  Request OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
