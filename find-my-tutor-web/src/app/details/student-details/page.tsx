export default function StudentDetatilsForm() {
  return (
    <div>
      <div className="flex absolute w-screen overflow-hidden">
        <div className="relative left-[-10vw] w-2/6 h-[100vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FED6D4] from-10% to-transparent to-70% rounded-full"></div>
        <div className="absolute right-[-30vh] top-[-20vh] lg:right-[-20vh] lg:top-[-14vh] w-[80vh] h-[80vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-logIn-300 from-10% to-transparent to-70% rounded-full"></div>
      </div>
      <div className="relative h-[100vh] w-[100vw] flex-col flex items-center lg:pl-10 lg:pr-10  pr-4 pl-4">
        <p className="text-baseColor-400 mt-10 text-2xl font-semibold">
          Please fill out the following details carefully
        </p>
        <div className="flex gap-[6vw] mt-[4vh]">
          <div>
            <h6 className="font-medium mb-2">First Name</h6>
            <input
              type="text"
              autoComplete="email"
              required
              className={`rounded-md w-[30vw] h-8 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <h6 className="font-medium mb-2">Last Name</h6>
            <input
              type="text"
              autoComplete="email"
              required
              className={`rounded-md w-[30vw] h-8 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="flex gap-[6vw] mt-[3.6vh]">
          <div>
            <h6 className="font-medium mb-2">Gender</h6>
            <select
              required
              className={`rounded-md bg-white w-[30vw] h-8 text-gray-400 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
            >
              <option value="" disabled selected>
                Select your gender
              </option>
              <option className="text-baseColor-400" value="male">
                Male
              </option>
              <option className="text-baseColor-400" value="female">
                Female
              </option>
              <option className="text-baseColor-400" value="other">
                Other
              </option>
            </select>
          </div>

          <div>
            <h6 className="font-medium mb-2">Phone Number</h6>
            <input
              type="text"
              autoComplete="email"
              required
              className={`rounded-md w-[30vw] h-8 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="flex gap-[6vw] mt-[3.6vh] ">
          <div className="">
            <h6 className="font-medium mb-2">Address</h6>
            <textarea
              autoComplete="email"
              required
              className={`rounded-md w-[30vw] h-32 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
              placeholder="Enter your full address"
            ></textarea>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h6 className="font-medium mb-2">Pin Code</h6>
              <input
                type="text"
                autoComplete="email"
                required
                className={`rounded-md w-[30vw] h-8 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="flex flex-col gap-0 items-center">
              <button
                type="submit"
                className="group relative w-24 sm:w-full flex justify-center  py-1 px-8 border border-transparent text-sm font-semibold rounded-md text-white bg-baseColor-600 "
              >
                Use your current location
              </button>
              <p className="font-medium">or</p>
              <button
                type="submit"
                className="group relative w-24 sm:w-full flex justify-center  py-1 px-8 border border-transparent text-sm font-semibold rounded-md text-white bg-baseColor-600 "
              >
                Pick location from map
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
