import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { LiaAddressBook } from "react-icons/lia";
import { TbMapPinCode } from "react-icons/tb";
import { RiUser6Line } from "react-icons/ri";

function Register() {
  const [isPasswordShowing, setIsPasswordShowing] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (confirmPassword !== "") {
      setPasswordsMatch(value === confirmPassword);
    }
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    setPasswordsMatch(value === password);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-hidden relative">
      <div className="h-[900px] w-[900px] absolute left-[-24rem] top-[-24rem] bg-baseColor-100 rounded-full"></div>
      <div className="h-[700px] w-[700px] absolute left-[-20rem] top-[-20rem] bg-baseColor-200 rounded-full"></div>
      <div className="h-[500px] w-[500px] absolute left-[-15rem] top-[-15rem] bg-baseColor-300 rounded-full"></div>
      <div className="h-[900px] w-[900px] absolute right-[-25rem] bottom-[-25rem] bg-baseColor-100 rounded-full"></div>
      <div className="h-[700px] w-[700px] absolute right-[-21rem] bottom-[-21rem] bg-baseColor-200 rounded-full"></div>
      <div className="h-[500px] w-[500px] absolute right-[-16rem] bottom-[-16rem] bg-baseColor-300 rounded-full"></div>
      <div className="pl-6 2xl:pl-36 flex flex-row items-center justify-center lg:justify-between overflow-hidden h-4/6 w-5/6 sm:w-4/6 bg-gray-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-md shadow-[rgba(5,_183,_186,_0.4)_0px_0px_18px] p-8">
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-row items-start justify-start space-x-8 sm:space-x-12 h-32 mx-10 sm:mx-6">
            <div className="flex flex-col items-start justify-start ">
              <div className="flex flex-col items-start justify-center">
                <div className="shadow-[rgba(5,_183,_186,_0.3)_0px_30px_90px] rounded-full flex justify-center w-64 sm:w-80">
                  <div className="relative">
                    <input
                      id="Full Name"
                      name="Full name"
                      type="Full Name"
                      className="rounded-full w-64 sm:w-80 h-8 text-baseColor-600 shadow-baseColor-100 relative block px-10 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm"
                      placeholder="Enter your Full Name"
                    />
                    <MdOutlineDriveFileRenameOutline className="top-2 left-4 absolute text-baseColor-400" />
                  </div>
                </div>
                <div className="shadow-[rgba(5,_183,_186,_0.3)_0px_30px_90px] rounded-full flex justify-center w-64 sm:w-80 mt-4 space-y-2">
                  <div className="relative">
                    <input
                      id="Phone number"
                      name="Phone number "
                      type="Phone number"
                      className=" rounded-full w-64 sm:w-80 h-8 text-baseColor-600 shadow-baseColor-100 relative block px-10 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm"
                      placeholder="Enter your phone number"
                    />
                    <CgProfile className="top-2 left-4 absolute text-baseColor-400"></CgProfile>
                  </div>
                </div>

                <div className="mt-4 space-y-2 w-64 sm:w-80">
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={isPasswordShowing ? "password" : "text"}
                      value={password}
                      onChange={(e) => handlePasswordChange(e.target.value)}
                      className="rounded-full text-baseColor-600 shadow-baseColor-100 relative block w-64 sm:w-80 h-8 px-10 py-1 sm:text-sm border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none shadow-[5,_183,_186,_0.9)]"
                      placeholder="Enter Password"
                    />
                    <RiLockPasswordLine className="top-2 left-4 absolute text-baseColor-400"></RiLockPasswordLine>
                    {!isPasswordShowing && (
                      <AiOutlineEye
                        className="top-2 right-4 absolute text-baseColor-400 cursor-pointer"
                        onClick={() => {
                          setIsPasswordShowing((v) => !v);
                        }}
                      ></AiOutlineEye>
                    )}
                    {isPasswordShowing && (
                      <AiOutlineEyeInvisible
                        className="top-2 right-4 absolute text-baseColor-400 cursor-pointer"
                        onClick={() => {
                          setIsPasswordShowing((v) => !v);
                        }}
                      ></AiOutlineEyeInvisible>
                    )}
                  </div>
                </div>
                <div className="mt-4 space-y-2 w-64 sm:w-80">
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={isPasswordShowing ? "password" : "text"}
                      value={confirmPassword}
                      onChange={(e) =>
                        handleConfirmPasswordChange(e.target.value)
                      }
                      className={`rounded-full text-baseColor-600 shadow-baseColor-100 relative block w-64 sm:w-80 h-8 px-10 py-1 sm:text-sm border ${
                        passwordsMatch
                          ? "border-baseColor-300"
                          : "border-red-500"
                      } focus:border-baseColor-600 focus:ring-0 focus:outline-none shadow-[5,_183,_186,_0.9)]`}
                      placeholder="Confirm password"
                    />
                    <RiLockPasswordLine className="top-2 left-4 absolute text-baseColor-400"></RiLockPasswordLine>
                    {!isPasswordShowing && (
                      <AiOutlineEye
                        className="top-2 right-4 absolute text-baseColor-400 cursor-pointer"
                        onClick={() => {
                          setIsPasswordShowing((v) => !v);
                        }}
                      ></AiOutlineEye>
                    )}
                    {isPasswordShowing && (
                      <AiOutlineEyeInvisible
                        className="top-2 right-4 absolute text-baseColor-400 cursor-pointer"
                        onClick={() => {
                          setIsPasswordShowing((v) => !v);
                        }}
                      ></AiOutlineEyeInvisible>
                    )}
                  </div>
                  {!passwordsMatch && (
                    <p className="text-red-500 text-sm mt-1">
                      Passwords do not match
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative hidden lg:block">
            <div className="h-[800px] w-[800px] fixed right-[-29rem] xl:right-[-19rem] top-[-4.0rem] bg-logIn-200 rounded-full">
              <div className="h-[700px] w-[700px] fixed right-[-30rem] xl:right-[-20rem] top-[-1.4rem] bg-logIn-300 rounded-full">
                <div className="h-[640px] w-[640px] fixed right-[-32rem] xl:right-[-23rem] top-[0rem] bg-logIn-500 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="flex flex-row items-start justify-start space-x-8 sm:space-x-12 h-32 mx-10 sm:mx-6">
              <div className="flex flex-col items-start justify-start ">
                <div className="flex flex-col items-start justify-center">
                  <div className="shadow-[rgba(5,_183,_186,_0.3)_0px_30px_90px] rounded-full flex justify-center w-64 sm:w-80 mt-4 space-y-2">
                    <div className="relative">
                      <input
                        id="Current Class"
                        name="Current Class "
                        type="Current Class"
                        className=" rounded-full w-64 sm:w-80 h-8 text-baseColor-600 shadow-baseColor-100 relative block px-10 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm"
                        placeholder="Enter Your Class"
                      />
                      <SiGoogleclassroom className="top-2 left-4 absolute text-baseColor-400" />
                    </div>
                  </div>
                  <div className="shadow-[rgba(5,_183,_186,_0.3)_0px_30px_90px] rounded-full flex justify-center w-64 sm:w-80 mt-4 space-y-2">
                    <div className="relative">
                      <input
                        id="Address"
                        name="Address "
                        type="Address"
                        className=" rounded-full w-64 sm:w-80 h-8 text-baseColor-600 shadow-baseColor-100 relative block px-10 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm"
                        placeholder="Enter Your Address"
                      />
                      <LiaAddressBook className="top-2 left-4 absolute text-baseColor-400" />
                    </div>
                  </div>
                  <div className="shadow-[rgba(5,_183,_186,_0.3)_0px_30px_90px] rounded-full flex justify-center w-64 sm:w-80 mt-4 space-y-2">
                    <div className="relative">
                      <input
                        id="Pincode"
                        name="Pincode"
                        type="Pincode"
                        className=" rounded-full w-64 sm:w-80 h-8 text-baseColor-600 shadow-baseColor-100 relative block px-10 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm"
                        placeholder="Enter Your Pincode"
                      />
                      <TbMapPinCode className="top-2 left-4 absolute text-baseColor-400" />
                    </div>
                  </div>
                  <div className="shadow-[rgba(5,_183,_186,_0.3)_0px_30px_90px] rounded-full flex justify-center w-64 sm:w-80 mt-4 space-y-2">
                    <div className="relative">
                      <input
                        id="Username"
                        name="Username"
                        type="Username"
                        className=" rounded-full w-64 sm:w-80 h-8 text-baseColor-600 shadow-baseColor-100 relative block px-10 py-1 border border-baseColor-300 focus:border-baseColor-600 focus:ring-0 focus:outline-none sm:text-sm"
                        placeholder="Enter Your Username"
                      />
                      <RiUser6Line className="top-2 left-4 absolute text-baseColor-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
