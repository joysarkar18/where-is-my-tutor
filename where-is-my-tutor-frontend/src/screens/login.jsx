import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

function Login() {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState(0);

  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-hidden relative">
      <div className="h-[900px] w-[900px] absolute left-[-24rem] top-[-24rem] bg-baseColor-100 rounded-full"></div>
      <div className="h-[700px] w-[700px] absolute left-[-20rem] top-[-20rem] bg-baseColor-200 rounded-full"></div>
      <div className="h-[500px] w-[500px] absolute left-[-15rem] top-[-15rem] bg-baseColor-300 rounded-full"></div>
      <div className="h-[900px] w-[900px] absolute right-[-25rem] bottom-[-25rem] bg-baseColor-100 rounded-full"></div>
      <div className="h-[700px] w-[700px] absolute right-[-21rem] bottom-[-21rem] bg-baseColor-200 rounded-full"></div>
      <div className="h-[500px] w-[500px] absolute right-[-16rem] bottom-[-16rem] bg-baseColor-300 rounded-full"></div>

      {/* Login Box */}
      <div className="pl-32 flex flex-row items- justify-between overflow-hidden h-4/6 w-4/6 bg-gray-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-md shadow-[rgba(5,_183,_186,_0.4)_0px_0px_18px] p-8">
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-row items-center justify-between space-x-12 h-32 ml-10">
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

          <div className="shadow-[rgba(5,_183,_186,_0.3)_0px_30px_90px] rounded-full">
            <label className="sr-only">Email address</label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className=" rounded-full w-80 h-8 text-baseColor-600 shadow-baseColor-100 relative block px-10 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm"
                placeholder="Email or username"
              />
              <CgProfile className="top-2 left-4 absolute text-baseColor-400"></CgProfile>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={isPasswordShowing ? "password" : "text"}
                autoComplete="current-password"
                required
                className=" rounded-full text-baseColor-600 shadow-baseColor-100 relative block w-80 h-8 px-10 py-1 sm:text-sm border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none shadow-[5,_183,_186,_0.9)]"
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

          <div className="flex flex-row items-center justify-between space-x-28 h-32">
            <a className="text-baseColor-600 whitespace-nowrap text-sm cursor-pointer">
              Forgot Password?
            </a>

            <button
              type="submit"
              className="group relative w-full flex justify-center  py-1 px-8 border border-transparent text-sm font-semibold rounded-full text-white bg-baseColor-600 "
            >
              Login
            </button>
          </div>
        </div>
        <div className="relative ">
          <div className="h-[800px] w-[800px] fixed right-[-19rem] top-[-4.0rem] bg-logIn-200 rounded-full">
            <div className="h-[700px] w-[700px] fixed right-[-20rem] top-[-1.4rem] bg-logIn-300 rounded-full">
              <div className="h-[640px] w-[640px] fixed right-[-23rem] top-[0rem] bg-logIn-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
