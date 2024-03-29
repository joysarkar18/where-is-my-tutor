"use client";

import { FaCirclePlay } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";
import { PiChartLineUp } from "react-icons/pi";
import { TbMessages } from "react-icons/tb";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const arr = [1,2,3,4,5]
  const [scrollPos, setScrollPos] = useState(0);
  const containerRef = useRef<any>();
  const handleScroll = (scrollAmount: number) => {
    const newPos = scrollPos + scrollAmount;
    console.log(newPos)
    if (newPos < 0) {
      setScrollPos(0);
      containerRef.current.scrollLeft = 0;
      return
    }
    if(newPos > arr.length*300){
      setScrollPos(0);
      containerRef.current.scrollLeft = 0;
      return
    }
    setScrollPos(newPos);
    containerRef.current.scrollLeft = newPos;
    return
  };
  return (
    <div className="min-w-screen min-h-screen overflow-hidden">
      <div className="flex flex-col overflow-hidden max-w-[2000px] w-full m-auto">
        <div className="flex flex-row justify-between w-full  bg-transparent ">
          <div className="flex flex-col relative">
            <div className="w-[811px] h-[26.6vw] rotate-[58deg] relative z-1 top-[-58px] right-[82px] flex flex-row ">
              <div className=" bg-[#FED6D4] bg-opacity-100 h-full w-[38%]"></div>
              <div className="w-full h-full bg-gradient-to-r from-[#FED6D4] to-[#d9d9d900] "></div>
            </div>
            <div className="w-[800px] h-[21.8vw] bg-gradient-to-r from-[#FED6D4] to-[#d9d9d900] rotate-[58deg] relative right-[275px] top-[-188px] z-10 " />
          </div>
          <div className=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FED6D4] from-5% to-transparent to-70% rounded-full min-w-[35.5vw] min-h-[35.5vw] h-[35.5vw] ml-[-1036px] mt-[-343px] relative"></div>
          <div className="flex flex-col relative right-0">
            <div className="w-[805px] h-[26.6vw] rotate-[130deg] absolute z-1 top-[16px] left-[-680px] flex flex-row ">
              {/* <div className=" bg-[#75D0C1] bg-opacity-100 h-full w-[38%]"></div> */}
              <div className="w-full h-full bg-gradient-to-r from-[#75D0C1] to-[#d9d9d900] "></div>
            </div>
            <div className="w-[680px] h-[21.8vw] bg-gradient-to-r from-[#75D0C1] to-[#d9d9d900] rotate-[130deg] absolute  top-[182px] left-[-442px] z-10 " />
          </div>
        </div>

        <div className="absolute w-full max-w-[2000px] h-[1700px] flex flex-row justify-between overflow-hidden z-10">
          <div className=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FED6D4] from-10% to-transparent to-70% rounded-full min-w-[53.4vw] min-h-[53.4vw] h-[1200px] relative top-[331px] right-[203px]" />
          <div className=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#75D0C146] from-10% to-transparent to-70% rounded-full min-w-[53.4vw] min-h-[53.4vw] h-[1200px] relative top-[331px] left-[203px]" />
        </div>
        {/* main cointain din */}
        <div className="absolute top-0 z-10  w-full">
          <div className=" z-10 w-full pl-[8.4vw] pr-[4.2vw] pt-[4vh] max-w-[2000px]">
            <div className="navbar flex flex-row items-center justify-between w-full">
              <div className="text-[#FF3429] text-[32px] font-semibold leading-[40px]">
                MyTutor
              </div>
              <div className="flex flex-row items-center lg:gap-[76px] gap-[36px]">
                <div className="text-[16px] lg:text-[19px] font-semibold leading-[30px] lg:w-[40vw] max-w-[600px] w-[40vw] flex flex-row justify-between ">
                  <div className=" cursor-pointer">Home</div>
                  <div className=" cursor-pointer">Pricing</div>
                  <div className=" cursor-pointer">Courses</div>
                  <div className=" cursor-pointer">Learning Materials</div>
                </div>
                <div className="md:text-[18px] text-[1.4vw] font-semibold leading-[30px] w-auto flex flex-row gap-[32px] items-center">
                  <Link href={"/auth/login"} className=" cursor-pointer">Log In</Link>
                  <Link href={"/auth/signup"} className="text-white shadow-[0_4px_15px_#00000025] md:px-[30px] px-[20px] md:py-[10px] py-[5px] bg-[#75D0C1] hover:bg-[#66c9b8] rounded-full cursor-pointer">
                    Sign Up
                  </Link>
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Culpa, sint. Earum, atque esse? Fuga enim
                </div>
                <div className="flex flex-row gap-[66px] font-semibold mt-[8vh]">
                  <div className="bg-[#FF3429] hover:bg-[#E92016] flex items-center justify-center w-[242px] h-[68px] text-[24px] leading-[30px] text-white rounded-r-[34px] rounded-bl-[34px]">
                    Get Started
                  </div>
                  <div className=" h-[68px] flex flex-row gap-8 items-center text-[#FF3429]">
                    <div className="rounded-full bg-[#FFF] border border-[#FF3429] text-[57px] w-[68px] h-[68px] flex justify-center items-center">
                      <FaCirclePlay />
                    </div>
                    <div className=" text-[24px] leading-[30px]">
                      Play Video
                    </div>
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

          <div className="flex flex-row xl:gap-[12vw] lg:gap-[5vw] gap-10 z-10 justify-center mt-[200px]">
            <Image
              src={"/pictures/student_laptop.png"}
              width={382}
              height={470}
              alt="student"
              className="mt-[42px] max-w-[382px] max-h-[470px]"
            />
            <div className="w-[44.1vw] flex flex-col">
              <div className="lg:text-[48px] text-[36px] text-[#162764] lg:leading-[60px] leading-[48px] font-semibold ">
                Why Students Choose Us for Gain Their Knowledge
              </div>
              <div className="lg:text-[20px] text-[16px] lg:leading-[25px] leading-[20px] mt-5 ">
                accusamus sit nihil, adipisci ex quod sint doloribus architecto
                iure obcaecati minima recusandae quidem numquam nam? Ipsa
                consequatur nobis, aspernatur mollitia recusandae et, provident,
                animi sunt corrupti saepe earum.
              </div>
              <div className="flex flex-col gap-[52px] mt-[58px] ">
                <div className="flex flex-row lg:gap-[27px] gap-[18px]">
                  <div className="lg:text-[38px] text-[30px] text-[#53B751]">
                    <FaCheckSquare />
                  </div>
                  <div className="lg:text-[20px] text-[16px] lg:leading-[25px] leading-[20px]">
                    ccusamus sit nihil, adipisci ex quod{" "}
                  </div>
                </div>
                <div className="flex flex-row lg:gap-[27px] gap-[18px]">
                  <div className="lg:text-[38px] text-[30px] text-[#CB6288]">
                    <FaCheckSquare />
                  </div>
                  <div className="lg:text-[20px] text-[16px] lg:leading-[25px] leading-[20px]">
                    ccusamus sit nihil, adipisci ex quod{" "}
                  </div>
                </div>
                <div className="flex flex-row lg:gap-[27px] gap-[18px]">
                  <div className="lg:text-[38px] text-[30px] text-[#3A61EB]">
                    <FaCheckSquare />
                  </div>
                  <div className="lg:text-[20px] text-[16px] lg:leading-[25px] leading-[20px]">
                    ccusamus sit nihil, adipisci ex quod{" "}
                  </div>
                </div>
              </div>
              <div className="w-[242px] h-[68px] text-[20px] leading-[25px] font-semibold  rounded-full text-white flex items-center justify-center bg-[#FF3429] hover:bg-[#E92016] cursor-pointer mt-[72px]">
                Know more
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 mt-[123px] flex flex-col items-center">
            <div className="text-4xl font-bold text-center text-[#162764] flex flex-row gap-4">
              <div>Featured topics by</div>
              <div className="flex flex-col items-center gap-2 text-4xl font-bold">
                <div>category</div>
                <div className="w-full h-1 bg-[#FF3429] rounded-full"></div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-[25px] mt-[7.1vw]">
              <div className="flex flex-row gap-[24px] bg-[#80838212] rounded-[12px] w-[330px] h-[94px] justify-center items-center">
                <div className="text-[#FF3429] text-[44px]">
                  <PiChartLineUp />
                </div>
                <div className="text-[24px] leading-[30px] ">
                  <div className="font-semibold">Accuracy Track</div>
                  <div className="text-[16px] leading-[20px] text-[#00000050]">
                    {" "}
                    adipisci ex quod{" "}
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-[24px] bg-[#FED6D447] rounded-[12px] w-[330px] h-[94px] justify-center items-center">
                <div className="text-[#FF3429] text-[44px]">
                  <TbMessages />
                </div>
                <div className="text-[24px] leading-[30px]">
                  <div className="font-semibold">Personal Message</div>
                  <div className="text-[16px] leading-[20px] text-[#00000050]">
                    {" "}
                    adipisci ex quod{" "}
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-[24px] bg-[#80838212] rounded-[12px] w-[330px] h-[94px] justify-center items-center">
                <div className="text-[#FF3429] text-[44px]">
                  <IoMdHelpCircleOutline />
                </div>
                <div className="text-[24px] leading-[30px]">
                  <div className="font-semibold">Solve Your Dout</div>
                  <div className="text-[16px] leading-[20px] text-[#00000050]">
                    {" "}
                    adipisci ex quod{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-[10vw] lg:pt-[11vw] ">
            <div className="flex flex-col gap-5 pb-[81px] ml-[8.4vw] mr-[4.2vw]">
              <div className="text-[48px] leading-[60px] font-bold text-[#162764]">
                Meet The Team Member
              </div>
              <div className="w-auto flex flex-row justify-between">
                <div className="text-[20px] leading-[40px] w-[544px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Culpa, sint. Earum, atque esse? Fuga enim
                </div>
                <div className="w-[116px] flex flex-row justify-between text-[46px] text-[#FF3429]">
                  <IoIosArrowDropleft
                    onClick={() => {
                      console.log("right clicked");

                      handleScroll(-300);
                    }}
                  />
                  <IoIosArrowDroprightCircle
                    onClick={() => {
                      console.log("right clicked");

                      handleScroll(300);
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              ref={containerRef}
              className="flex flex-row gap-[100px] mb-[244px] py-5 x-scrollbar pl-[4.4vw] pr-[4.2vw] overflow-hidden"
            >
              {
                arr.map((data, idx) => {
                  return (
                    <div key={idx} className="min-w-[353px] h-[448px] rounded-[12px] shadow-[0_4px_17px_#00000025] mr-8 mb-6 ml-[4vh]">
                      <div className="bg-gradient-to-b from-[#7BDDCD] to-transparent rounded-t-[12px] flex justify-center items-center w-full">
                        <Image
                          alt=""
                          src={"/pictures/card_pic.png"}
                          width={353}
                          height={240}
                          className="w-[263px] h-[240px] object-cover"
                        />
                      </div>
                      <div className="h-auto flex flex-col items-center pt-5 pb-10">
                        <div className="text-[24px] leading-[30px] text-[#162764] font-semibold">
                          Joy Sarkar
                        </div>
                        <div className="text-[#FF3429] text-[20px] leading-[40px] font-semibold mb-5">
                          Co - Founder
                        </div>
                        <div className="w-[228px] h-[52px] flex justify-center items-center bg-[#FF3429] hover:bg-[#E92016] text-white font-semibold shadow-[0_4px_12px_#00000025] rounded-full">
                          Viwe Details
                        </div>
                      </div>
                    </div>
                  )
                })
              }


            </div>
          </div>

          <div className="pl-[8.4vw] ">
            <div className="w-[334px] h-[41px] flex justify-center items-center bg-[#FF342910] text-[#FF3429] rounded-md text-[24px] font-semibold">
              SOCIAL REACTION
            </div>
            <div className="w-auto pr-[4.2vw] flex flex-row justify-between pt-[45px]">
              <div className="text-[48px] leading-[60px] font-bold text-[#162764]">
                Social Quotes From Our User
              </div>
              <div className="w-[116px] flex flex-row justify-between text-[46px] text-[#FF3429]">
                <IoIosArrowDropleft />
                <IoIosArrowDroprightCircle />
              </div>
            </div>
            <div className="w-full flex flex-row gap-20 pt-[114px] overflow-x-scroll pl-[10px]">
              <div className="px-[36px] pt-[36px] pb-[84px] shadow-[0_4px_12px_#00000025] min-w-[478px] h-[444px] rounded-[12px]">
                <div className="flex flex-row text-gray-300 text-[32px] gap-[8px] mb-[12px]">
                  <IoStar className="text-yellow-500" />
                  <IoStar className="text-yellow-500" />
                  <IoStar className="text-yellow-500" />
                  <IoStar className="text-yellow-500" />
                  <IoStar />
                </div>
                <div className="h-[200px] text-[18px] mb-4">
                  accusamus sit nihil, adipisci ex quod sint doloribus
                  architecto iure obcaecati minima recusandae quidem numquam
                  nam? Ipsa consequatur nobis, aspernatur mollitia recusandae
                  et, provident, animi sunt corrupti saepe earum.
                </div>
                <div className="flex flex-row gap-4 ">
                  <Image
                    alt=""
                    src={"/pictures/card_pic.png"}
                    width={50}
                    height={50}
                    className="rounded-full w-[50px] h-[50px]"
                  />
                  <div>
                    <div className="text-[24px] leading-[30px] font-bold text-[#162764]">
                      Joy Sarkar
                    </div>
                    <div className="text-[20px] font-semibold text-[#FF3429]">
                      Co - Founder
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-[36px] pt-[36px] pb-[84px] shadow-[0_4px_12px_#00000025] min-w-[478px] h-[444px] rounded-[12px]">
                <div className="flex flex-row text-gray-300 text-[32px] gap-[8px] mb-[12px]">
                  <IoStar className="text-yellow-500" />
                  <IoStar className="text-yellow-500" />
                  <IoStar className="text-yellow-500" />
                  <IoStar className="text-yellow-500" />
                  <IoStar />
                </div>
                <div className="h-[200px] text-[18px] mb-4">
                  accusamus sit nihil, adipisci ex quod sint doloribus
                  architecto iure obcaecati minima recusandae quidem numquam
                  nam? Ipsa consequatur nobis, aspernatur mollitia recusandae
                  et, provident, animi sunt corrupti saepe earum.
                </div>
                <div className="flex flex-row gap-4 ">
                  <Image
                    alt=""
                    src={"/pictures/card_pic.png"}
                    width={50}
                    height={50}
                    className="rounded-full w-[50px] h-[50px]"
                  />
                  <div>
                    <div className="text-[24px] leading-[30px] font-bold text-[#162764]">
                      Joy Sarkar
                    </div>
                    <div className="text-[20px] font-semibold text-[#FF3429]">
                      Co - Founder
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-[36px] pt-[36px] pb-[84px] shadow-[0_4px_12px_#00000025] min-w-[478px] h-[444px] rounded-[12px]">
                <div className="flex flex-row text-gray-300 text-[32px] gap-[8px] mb-[12px]">
                  <IoStar className="text-yellow-500" />
                  <IoStar className="text-yellow-500" />
                  <IoStar className="text-yellow-500" />
                  <IoStar className="text-yellow-500" />
                  <IoStar />
                </div>
                <div className="h-[200px] text-[18px] mb-4">
                  accusamus sit nihil, adipisci ex quod sint doloribus
                  architecto iure obcaecati minima recusandae quidem numquam
                  nam? Ipsa consequatur nobis, aspernatur mollitia recusandae
                  et, provident, animi sunt corrupti saepe earum.
                </div>
                <div className="flex flex-row gap-4 ">
                  <Image
                    alt=""
                    src={"/pictures/card_pic.png"}
                    width={50}
                    height={50}
                    className="rounded-full w-[50px] h-[50px]"
                  />
                  <div>
                    <div className="text-[24px] leading-[30px] font-bold text-[#162764]">
                      Joy Sarkar
                    </div>
                    <div className="text-[20px] font-semibold text-[#FF3429]">
                      Co - Founder
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
