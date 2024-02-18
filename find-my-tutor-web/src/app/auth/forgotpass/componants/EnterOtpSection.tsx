import { MdOutlineEmail } from "react-icons/md";

const EnterOtpSection = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center lg:w-screen w-full lg:pr-12 p-6 bg-gray-100 ">
      <div className="w-96">
        <h3 className="text-black mb-6 font-semibold text-4xl">
          OTP Verification
        </h3>

        {/* {message && (
              <div className="bg-green-100 text-green-800 p-3 mb-6 rounded-md text-center">
                {message}
              </div>
            )} */}

        <form className="flex flex-col items-center">
          <div className="mb-4 w-full flex flex-col items-start">
            <label htmlFor="email" className="text-gray-700 text-sm mb-2">
              Please check your mail box an OTP has been sent from our side.
              Enter the OTP below to change the password.
            </label>
            <div>
              <p className="text-sm font-semibold text-baseColor-400 mb-4 mt-3">
                OTP recived at{" joysarkar8171@gmail.com"}
              </p>
            </div>
            <div className="relative">
              <input
                className="mr-3 focus:border-baseColor-600 focus:ring-0 focus:outline-none border border-baseColor-300 h-10 w-10 text-center form-control rounded"
                type="text"
                id="first"
                maxLength={1}
              />
              <input
                className="mr-3 focus:border-baseColor-600 focus:ring-0 focus:outline-none border border-baseColor-300 h-10 w-10 text-center form-control rounded"
                type="text"
                id="second"
                maxLength={1}
              />
              <input
                className="mr-3 focus:border-baseColor-600 focus:ring-0 focus:outline-none border border-baseColor-300 h-10 w-10 text-center form-control rounded"
                type="text"
                id="third"
                maxLength={1}
              />
              <input
                className="mr-3 focus:border-baseColor-600 focus:ring-0 focus:outline-none border border-baseColor-300 h-10 w-10 text-center form-control rounded"
                type="text"
                id="fourth"
                maxLength={1}
              />
              <input
                className="mr-3 focus:border-baseColor-600 focus:ring-0 focus:outline-none border border-baseColor-300 h-10 w-10 text-center form-control rounded"
                type="text"
                id="fifth"
                maxLength={1}
              />
              <input
                className="mr-3 focus:border-baseColor-600 focus:ring-0 focus:outline-none border border-baseColor-300 h-10 w-10 text-center form-control rounded"
                type="text"
                id="sixth"
                maxLength={1}
              />
            </div>
            <button
              type="submit"
              className="z-20 flex text-sm font-semibold mt-4 space-y-3 bg-baseColor-600 text-white px-5 cursor-pointer py-1 rounded-md mb-2 hover:bg-baseColor-700 focus:outline-none focus:bg-baseColor-400 transition duration-300"
            >
              {false && (
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
