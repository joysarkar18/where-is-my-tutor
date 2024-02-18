"use client";

import React, { useState } from "react";
import Head from "next/head";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("Password reset email sent successfully!");
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="absolute w-full max-w-[2000px] h-[1700px] flex flex-row justify-between overflow-hidden z-10">
        <div className=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FED6D4] from-10% to-transparent to-70% rounded-full min-w-[53.4vw] min-h-[53.4vw] h-[1200px] relative top-[331px] right-[203px]" />
        <div className=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#75D0C146] from-10% to-transparent to-70% rounded-full min-w-[53.4vw] min-h-[53.4vw] h-[1200px] relative top-[331px] left-[203px]" />
      </div>

      <div className="fixed top-0 left-0 p-4">
        <button
          onClick={handleGoBack}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <IoChevronBackCircleOutline className="text-2xl" />
        </button>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Head>
          <title>Forgot Password</title>
          <meta name="description" content="Forgot Password Page" />
        </Head>

        <div className="w-96">
          <h3 className="text-black mb-2 text-3xl">Forgot Password?</h3>

          {message && (
            <div className="bg-green-100 text-green-800 p-3 mb-6 rounded-md text-center">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="mb-4 w-full flex flex-col items-start">
              <label htmlFor="email" className="text-gray-700 text-sm mb-2">
                Enter the email address you used when you joined and we will
                send you instructions to reset your password.
              </label>
              <label
                htmlFor="email"
                className="text-gray-700 text-sm mb-2 mt-4 space-y-2"
              >
                For security reasons, we do NOT store your password. So rest
                assured that we will never send your password via email.
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="mt-4 space-y-3 rounded-full text-baseColor-600 shadow-sky-100 relative block w-full h-8 px-10 py-1 sm:text-sm border border-baseColor-300 focus:border-baseColor-400 focus:ring-0 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="mt-4 space-y-3 bg-baseColor-600 text-white px-3 py-1 rounded-full mb-2 hover:bg-baseColor-700 focus:outline-none focus:bg-baseColor-400 transition duration-300"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
