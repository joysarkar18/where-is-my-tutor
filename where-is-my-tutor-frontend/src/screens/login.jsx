//import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-hidden relative">
      <div className="h-[900px] w-[900px] absolute left-[-24rem] top-[-24rem] bg-baseColor-100 rounded-full"></div>
      <div className="h-[700px] w-[700px] absolute left-[-20rem] top-[-20rem] bg-baseColor-200 rounded-full"></div>
      <div className="h-[500px] w-[500px] absolute left-[-15rem] top-[-15rem] bg-baseColor-300 rounded-full"></div>
      <div className="h-[900px] w-[900px] absolute right-[-25rem] bottom-[-25rem] bg-baseColor-100 rounded-full"></div>
      <div className="h-[700px] w-[700px] absolute right-[-21rem] bottom-[-21rem] bg-baseColor-200 rounded-full"></div>
      <div className="h-[500px] w-[500px] absolute right-[-16rem] bottom-[-16rem] bg-baseColor-300 rounded-full"></div>

      {/* Login Box */}
      <div className="flex flex-col items-center justify-center h-4/6 w-4/6 bg-gray-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-[rgba(5,_183,_186,_0.4)_0px_0px_18px] rounded-lg p-8">
        <input
          className="border p-2 mb-4 rounded-full px-12 py-1 absolute left-10 shadow-md shadow-baseColor-100 "
          type="text"
          placeholder="Username"
        />
        <input
          className="border p-1 mb-4 rounded-full px-12 py-1  absulate left-9 shadow-md shadow-baseColor-100"
          type="password"
          placeholder="Password"
        />
        {/* Add your login button or other components here */}
      </div>
    </div>
  );
}

export default Login;
