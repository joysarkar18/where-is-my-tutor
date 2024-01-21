// import { useState } from "react";
// import background from "../assets/background.jpg";
function Login() {
  // const [isTeachersActive, setIsTeachersActive] = useState(false);

  // const toggleButton = () => {
  //   setIsTeachersActive(!isTeachersActive);
  // };

  return (
    <div className="w-screen max-h-screen disable-scroll">
      <div className="h-[900px] w-[900px] absolute left-[-24rem] top-[-24rem] bg-baseColor-100 rounded-full"></div>
      <div className="h-[700px] w-[700px] absolute left-[-20rem] top-[-20rem] bg-baseColor-200 rounded-full"></div>
      <div className="h-[500px] w-[500px] absolute left-[-15rem] top-[-15rem] bg-baseColor-300 rounded-full"></div>
      <div className="h-4/6 w-4/6 bg-gray-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  shadow-[rgba(5,_183,_186,_0.4)_0px_0px_18px]"></div>
      <div className="h-[900px] w-[900px] absolute right-[-25rem] bottom-[-25rem] bg-baseColor-100 rounded-full"></div>
      <div className="h-[700px] w-[700px] absolute right-[-21rem] bottom-[-21rem] bg-baseColor-200 rounded-full"></div>
      <div className="h-[500px] w-[500px] absolute right-[-16rem] bottom-[-16rem] bg-baseColor-300 rounded-full"></div>
    </div>
  );
}

export default Login;
