"use client";

import { useEffect, useState } from "react";

export default function StudentDetatilsForm() {
  const [classCondition, setClassCondition] = useState<boolean>(true);
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [selectedStream, setSelectedStream] = useState<string>("");

  const handleClass = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(event.target.value);
  };

  const handleStream = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStream(event.target.value);
  };

  useEffect(() => {
    if (
      selectedClass === "1" ||
      selectedClass === "2" ||
      selectedClass === "3" ||
      selectedClass === "4" ||
      selectedClass === "5" ||
      selectedClass === ""
    ) {
      setSelectedStream("");
      setClassCondition(false);
    } else {
      setClassCondition(true);
    }
  }, [selectedClass]);

  return (
    <div>
      <div className="flex absolute w-screen overflow-hidden">
        <div className="relative left-[-10vw] w-2/6 h-[100vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FED6D4] from-10% to-transparent to-70% rounded-full"></div>
        <div className="absolute right-[-30vh] top-[-20vh] lg:right-[-20vh] lg:top-[-14vh] w-[80vh] h-[80vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-logIn-300 from-10% to-transparent to-70% rounded-full"></div>
      </div>
      <div className="relative h-[100vh] w-[100vw] flex-col flex items-center lg:pl-10 lg:pr-10  pr-4 pl-4">
        <div className="flex flex-col items-center">
          <p className="text-baseColor-400 mt-10 text-[5.2vw] lg:text-4xl font-semibold">
            Hi! student welcome to Mytutor 👋🏻
          </p>
          <p className="mr-3 text-[3vw] lg:text-sm font-medium">
            Let’s help you to find your dream tutor
          </p>
        </div>
        <div className="flex justify-start w-[90vw] lg:w-[66vw] mt-10">
          <p className="text-[3.5vw] sm:text-lg font-semibold">
            <span className="text-[#FF3429]">*</span>Please fill out the
            following details carefully
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[6vw] mt-[2vh]">
          <div>
            <h6 className="font-medium mb-2">First Name </h6>
            <input
              type="text"
              autoComplete="email"
              required
              className={`rounded-md w-[90vw] lg:w-[30vw] h-8 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <h6 className="font-medium mb-2">Last Name</h6>
            <input
              type="text"
              autoComplete="email"
              required
              className={`rounded-md w-[90vw] lg:w-[30vw]  h-8 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[6vw] mt-[3.6vh]">
          <div>
            <h6 className="font-medium mb-2">Gender</h6>
            <select
              required
              className={`rounded-md bg-white w-[90vw] lg:w-[30vw] h-8 text-gray-400 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
            >
              <option value="" disabled>
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
              className={`rounded-md w-[90vw] lg:w-[30vw]  h-8 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[6vw] mt-[3.6vh] ">
          <div className="">
            <h6 className="font-medium mb-2">Address</h6>
            <textarea
              autoComplete="email"
              required
              className={`rounded-md w-[90vw] lg:w-[30vw]  h-32 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
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
                className={`rounded-md w-[90vw] lg:w-[30vw]  h-8 text-baseColor-600 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="flex mt-6 lg:mt-3 flex-col gap-0 items-center">
              <button
                type="submit"
                className="group relative w-[90vw] sm:w-full flex justify-center  py-1 px-8 border border-transparent text-sm font-semibold rounded-md text-white bg-baseColor-600 "
              >
                Use your current location
              </button>
              <p className="font-medium">or</p>
              <button
                type="submit"
                className="group relative w-[90vw] sm:w-full flex justify-center  py-1 px-8 border border-transparent text-sm font-semibold rounded-md text-white bg-baseColor-600 "
              >
                Pick location from map
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[6vw] mt-[3.6vh]">
          <div>
            <h6 className="font-medium mb-2">Current class</h6>
            <select
              required
              value={selectedClass}
              onChange={handleClass}
              className={`rounded-md bg-white w-[90vw] lg:w-[30vw] h-8 text-gray-400 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm `}
            >
              <option value="" disabled>
                Select your current class
              </option>
              <option className="text-baseColor-400" value="1">
                1
              </option>
              <option className="text-baseColor-400" value="2">
                2
              </option>
              <option className="text-baseColor-400" value="3">
                3
              </option>
              <option className="text-baseColor-400" value="4">
                4
              </option>
              <option className="text-baseColor-400" value="5">
                5
              </option>
              <option className="text-baseColor-400" value="6">
                6
              </option>
              <option className="text-baseColor-400" value="7">
                7
              </option>
              <option className="text-baseColor-400" value="8">
                8
              </option>
              <option className="text-baseColor-400" value="9">
                9
              </option>
              <option className="text-baseColor-400" value="10">
                10
              </option>
              <option className="text-baseColor-400" value="11">
                11
              </option>
              <option className="text-baseColor-400" value="12">
                12
              </option>
              <option className="text-baseColor-400" value="college">
                College
              </option>
            </select>
          </div>

          <div>
            <h6 className="font-medium mb-2">Stream</h6>
            <select
              disabled={!classCondition}
              value={selectedStream}
              onChange={handleStream}
              className={`rounded-md bg-white w-[90vw] lg:w-[30vw]  h-8 text-gray-400 shadow-baseColor-100 relative block px-4 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm`}
            >
              <option value="" disabled>
                Select your current stream
              </option>
              <option className="text-baseColor-400" value="sceince">
                Sceince
              </option>
              <option className="text-baseColor-400" value="arts">
                Arts
              </option>
              <option className="text-baseColor-400" value="commerce">
                Commerce
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}