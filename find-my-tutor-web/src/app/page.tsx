"use client"

import { FaCirclePlay } from "react-icons/fa6";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";



export default function Home() {
  return (
    <main className="min-w-screen min-h-screen overflow-hidden">
      <div className="flex flex-col overflow-hidden max-w-[2000px] w-full m-auto">

        <div className="flex flex-row justify-between w-full  bg-transparent ">
          <div className="flex flex-col relative">
            <div className="w-[811px] h-[26.6vw] rotate-[58deg] relative z-1 top-[-58px] right-[82px] flex flex-row ">
              <div className=" bg-[#FED6D4] bg-opacity-100 h-full w-[38%]"></div>
              <div className="w-full h-full bg-gradient-to-r from-[#FED6D4] to-[#d9d9d900] "></div>
            </div>
            <div className="w-[800px] h-[21.8vw] bg-gradient-to-r from-[#FED6D4] to-[#d9d9d900] rotate-[58deg] relative right-[275px] top-[-188px] z-10 " />
          </div>
          <div className=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FED6D4] from-5% to-transparent to-70% rounded-full min-w-[35.5vw] min-h-[35.5vw] h-[35.5vw] ml-[-1036px] mt-[-343px] relative">
          </div>
          <div className="flex flex-col relative right-0">
            <div className="w-[805px] h-[26.6vw] rotate-[130deg] absolute z-1 top-[16px] left-[-680px] flex flex-row ">
              {/* <div className=" bg-[#75D0C1] bg-opacity-100 h-full w-[38%]"></div> */}
              <div className="w-full h-full bg-gradient-to-r from-[#75D0C1] to-[#d9d9d900] "></div>
            </div>
            <div className="w-[680px] h-[21.8vw] bg-gradient-to-r from-[#75D0C1] to-[#d9d9d900] rotate-[130deg] absolute  top-[182px] left-[-442px] z-10 " />
          </div>

        </div>

        <div className="absolute w-full max-w-[2000px] flex flex-row justify-between overflow-hidden z-10">
          <div className=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FED6D4] from-10% to-transparent to-70% rounded-full min-w-[53.4vw] min-h-[53.4vw] h-[1200px] relative top-[331px] right-[203px]" />
          <div className=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#75D0C146] from-10% to-transparent to-70% rounded-full min-w-[53.4vw] min-h-[53.4vw] h-[1200px] relative top-[331px] left-[203px]" />
        </div>
         {/* main cointain din */}
        <div className="absolute  top-0 z-10 w-full pl-[8.4vw] pr-[4.2vw] pt-[4vh] max-w-[2000px]">
          <div className="navbar flex flex-row items-center justify-between w-full">
            <div className="text-[#FF3429] text-[32px] font-semibold leading-[40px]">MyTutor</div>
            <div className="flex flex-row items-center lg:gap-[76px] gap-[36px]">
              <div className="text-[16px] lg:text-[19px] font-semibold leading-[30px] lg:w-[40vw] max-w-[600px] w-[40vw] flex flex-row justify-between ">
                <div className=" cursor-pointer">Home</div>
                <div className=" cursor-pointer">Pricing</div>
                <div className=" cursor-pointer">Courses</div>
                <div className=" cursor-pointer">Learning Materials</div>
              </div>
              <div className="md:text-[18px] text-[1.4vw] font-semibold leading-[30px] w-auto flex flex-row gap-[32px] items-center">
                <div className=" cursor-pointer">Log In</div>
                <div className="text-white md:px-[30px] px-[20px] md:py-[10px] py-[5px] bg-[#75D0C1] hover:bg-[#66c9b8] rounded-full cursor-pointer">Sign Up</div>
              </div>
            </div>
          </div>

          {/* HERO  */}
        <div className="flex flex-row items-center justify-between">

        <div className="mt-[20vh]">
            <div className="text-[62px] leading-[80px] font-semibold">
              Take Your <span className="text-[#FF3429]">Learning</span>
              <br />
              To The Next Level.
            </div>
            <div className="w-[494px] text-[20px] leading-[25px] mt-[7vh]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, sint. Earum, atque esse? Fuga enim
            </div>
            <div className="flex flex-row gap-[66px] font-semibold mt-[8vh]">
              <div className="bg-[#FF3429] hover:bg-[#E92016] flex items-center justify-center w-[242px] h-[68px] text-[24px] leading-[30px] text-white rounded-r-[34px] rounded-bl-[34px]">Get Started</div>
              <div className=" h-[68px] flex flex-row gap-8 items-center text-[#FF3429]">
                <div className="rounded-full bg-[#FFF] border border-[#FF3429] text-[57px] w-[68px] h-[68px] flex justify-center items-center"><FaCirclePlay /></div>
                <div className=" text-[24px] leading-[30px]">Play Video</div>
              </div>
            </div>

          </div>

          <div className="h-[30vw] w-[30vw] mt-[90px] mr-[1vw]">
          <DotLottiePlayer
                      src={"/animations/student_animation.lottie"}
                      autoplay
                      loop
                    />

          </div>
        </div>




        </div>



      </div>

    </main>
  );
}
