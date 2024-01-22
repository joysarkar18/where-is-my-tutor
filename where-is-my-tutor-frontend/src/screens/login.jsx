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
        <div>
          <label className="sr-only">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className=" rounded-full shadow-lg shadow-baseColor-100 relative block w-full px-10 py-1 border border-gray-300 sm:text-sm"
            placeholder="Email address"
          />
        </div>

        <div className="mt-4 space-y-2">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className=" rounded-full shadow-lg shadow-baseColor-100 relative block w-full px-10 py-1 sm:text-sm border border-gray-300"
            placeholder="Password"
          />
        </div>

        <div className="mt-4 space-y-6">
          <button
            type="submit"
            className="group relative w-full flex justify-center  py-.6 px-3 border border-transparent text-sm font-semibold rounded-full text-white bg-baseColor-600 "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
