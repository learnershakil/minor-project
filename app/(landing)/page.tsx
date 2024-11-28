"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import useLocomotiveScroll from "../../hooks/useLocomotiveScroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import UserData from "@/app/(landing)/_components/userData";
export default function Home() {
  const [navMenu, setNavMenu] = useState(false);

  const toggleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  useLocomotiveScroll();

  return (
    <main
      data-scroll-container
      className="min-h-screen bg-zinc-900 p-[2vw] font-['Satoshi-Medium'] text-zinc-100"
    >
      <div className="flex justify-between w-full pb-[5vw] gap-[2vw]">
        <div className="w-full flex flex-col gap-[29.5vw]">
          <nav className="flex w-full justify-between items-center h-fit">
            <div className={`flex gap-[1vw] items-start h-fit relative z-40`}>
              <button
                className={`hover:text-zinc-300 h-fit ${
                  navMenu ? "text-zinc-900" : ""
                }`}
                onClick={toggleNavMenu}
              >
                {navMenu ? (
                  <XMarkIcon className="w-[2vw] text-zinc-900" />
                ) : (
                  <Bars3Icon className="w-[2vw] text-zinc-100" />
                )}
              </button>
              {navMenu && (
                <div className="flex flex-col gap-[0.5vw] absolute left-[5vw]">
                  <Link href="/">
                    <h1 className="text-zinc-900 hover:text-zinc-600 text-[1.5vw] hover:scale-105 relative left-0 rotate-[18deg]">
                      Home
                    </h1>
                  </Link>
                  <Link href="/about">
                    <h1 className="text-zinc-900 hover:text-zinc-600 text-[1.5vw] hover:scale-105 relative right-[1.4vw] rotate-[35deg]">
                      About
                    </h1>
                  </Link>
                  <Link href="/contact">
                    <h1 className="text-zinc-900 hover:text-zinc-600 text-[1.5vw] hover:scale-105 relative right-[3.5vw] bottom-[0.5vw] rotate-[52deg]">
                      Contact
                    </h1>
                  </Link>
                  <Link href="/dashboard">
                    <h1 className="text-zinc-900 hover:text-zinc-600 text-[1.5vw] hover:scale-105 relative right-[6vw] bottom-[1.8vw] rotate-[69deg]">
                      Explore
                    </h1>
                  </Link>
                </div>
              )}
            </div>

            <motion.div
              animate={{ scale: navMenu ? 1 : 0 }}
              className="absolute top-[-7vw] left-[-7vw] bg-zinc-100 w-[20vw] h-[20vw] rounded-full"
            ></motion.div>

            <UserData />
          </nav>

          <div>
            <div className="text-[4vw] leading-[5vw]">
              <h1>Revolutionizing</h1>
              <h1>
                Education <span className="italic">with</span>
              </h1>
              <h1>Innovation</h1>
            </div>

            <p className="text-[1.1vw]">
              Bringing Tomorrow&apos;s Learning to Today&apos;s Classrooms
            </p>
          </div>
        </div>

        <div
          data-scroll
          data-scroll-speed="-1vw"
          className="w-[45vw] h-[50vw] flex flex-col gap-[1vw] shrink-0"
        >
          <div className="flex gap-[1vw] h-[45%] items-stretch justify-stretch content-stretch">
            <Link
              href="/about"
              className="min-w-[35%] h-full bg-[#7663FF] rounded-[2vw] overflow-hidden relative "
            >
              <div
                className="min-w-[35%] h-full bg-[#7663FF] rounded-[2vw] overflow-hidden relative"
                style={{
                  backgroundImage:
                    "url(https://img.freepik.com/premium-photo/young-telemarketer-woman-isolated-white-wall-pointing-with-index-finger-great-idea_1368-67113.jpg?w=1060)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div className=" absolute flex flex-col justify-between top-0 left-0 h-full w-full p-[1vw] hover:p-[1.5vw] transition-all duration-500">
                <div className="flex justify-between items-center w-full ">
                  <span className="text-slate-700 font-bold">Connect Us</span>
                </div>
              </div>
            </Link>

            <div
              className="h-full relative min-w-[40%] w-full bg-[#7663FF] rounded-[2vw] overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/virtual-classroom-study-space_23-2149178644.jpg?t=st=1732622360~exp=1732625960~hmac=09196704bfdbda9cd9ba1c06b339676c6cb57cd59ac3d0e20d555b08145dae79&w=1060)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div
            className="w-full h-[50%] bg-[#7663FF] rounded-[2vw] overflow-hidden relative"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/close-up-woman-class_23-2148888812.jpg?t=st=1732621581~exp=1732625181~hmac=61ac48eb032e2be02055b0379ccb679b8f34ee8da7fdec9a10ed63f085609a76&w=1060)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className=" absolute flex flex-col justify-between top-0 left-0 h-full w-full p-[1vw] hover:p-[1.5vw] transition-all duration-500">
              <div></div>

              <div className="flex justify-between items-center w-full">
                <h1 className="text-[2vw] text-slate-700">Explore Virtual Classroom</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen w-full px-[2vw] flex flex-col gap-[2.5vw]">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-[1vw] items-center">
            <Link href="/dashboard">
              <h1 className="text-zinc-100 hover:text-zinc-300 text-[1vw] px-[0.5vw] py-[0.2vw] rounded-full border w-[5vw] text-center hover:border-zinc-300">
                Mentors
              </h1>
            </Link>

            <Link href="/dashboard">
              <h1 className="text-zinc-100 hover:text-zinc-300 text-[1vw] px-[0.5vw] py-[0.2vw] rounded-full border w-[5vw] text-center hover:border-zinc-300">
                Courses
              </h1>
            </Link>

            <Link href="/dashboard">
              <h1 className="text-zinc-900 hover:text-zinc-950 hover:bg-zinc-300 text-[1vw] bg-zinc-100 px-[0.5vw] py-[0.2vw] rounded-full border w-[5vw] text-center">
                Explore
              </h1>
            </Link>
          </div>
          <h1 className="text-[2.5vw]">What we offer</h1>
        </div>

        <div className="w-full h-[45vw] flex flex-col gap-[1vw]">
          <div className="h-full w-full flex gap-[1vw]">
            <div
              className="w-[40%] shrink-0 bg-[#7663FF] rounded-[2vw] overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010136.jpg?t=st=1732622546~exp=1732626146~hmac=84d40406e1f1e918f034543fb14159d85e609d17b3fcc50e11b0c35df3bae8b2&w=1060)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="w-full bg-[#7663FF] rounded-[2vw] overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/side-view-man-living-as-digital-nomad_23-2151205384.jpg?t=st=1732623125~exp=1732626725~hmac=80f220b85962e23cdcd324438ee99791c43f34c5e37860a8632efc651f98c89c&w=1060)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="h-full w-full flex gap-[1vw]">
            <div
              className="w-full bg-[#7663FF] rounded-[2vw] overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/interior-designer-working-decoration-project_23-2150334531.jpg?t=st=1732623216~exp=1732626816~hmac=7984cf5978b99d5dd8ce1c6768bb8374ed68aad8add8b742e9119f872b8c8aec&w=1060)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="w-full bg-[#7663FF] rounded-[2vw] overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/portrait-young-asian-woman-working-laptop-making-notes-writing-down-while-attending-online_1258-190950.jpg?t=st=1732623165~exp=1732626765~hmac=9179fe4a8240c2ec568fceefe9bf726a3921f7500ff1fb1ce06d0de81a484a5b&w=1380)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex xl:justify-between justify-center md:items-center xl:flex-row flex-col xl:w-full w-fit md:py-[121px] xl:gap-0 gap-[40px] md:gap-[80px]">
          <div className="relative left-10 self-start xl:right-auto">
            <motion.div
              initial={{ rotate: 0, x: 10, y: 0 }}
              whileInView={{ rotate: -7, x: 0, y: 10 }}
              transition={{ duration: 0.8 }}
              className="md:w-[24vw] w-[140px] md:h-[30vw] h-[180px] rounded-[15px] top-0 bg-slate-100"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/interior-designer-working-decoration-project_23-2150334531.jpg?t=st=1732623216~exp=1732626816~hmac=7984cf5978b99d5dd8ce1c6768bb8374ed68aad8add8b742e9119f872b8c8aec&w=1060)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></motion.div>
            <motion.div
              initial={{ rotate: 0, x: -50 }}
              whileInView={{ rotate: 2, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-[24vw] w-[140px] md:h-[30vw] h-[180px] rounded-[15px] absolute top-0 md:left-[108px] left-[40px] bg-slate-200"
              style={{
                backgroundImage:
                  "url(https://images.stockcake.com/public/d/2/2/d221c32f-b1eb-4d5a-bb77-03c96b875396_medium/coworkers-using-computer-stockcake.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></motion.div>
            <motion.div
              initial={{ rotate: 0, x: -100 }}
              whileInView={{ rotate: 9, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-[24vw] w-[140px] md:h-[30vw] h-[180px] rounded-[15px] absolute top-0 md:left-[205px] left-[80px] bg-slate-400"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/female-governmental-hacker-examines-data-computer-agency-center_482257-94604.jpg?t=st=1732623472~exp=1732627072~hmac=b8d3469b778a7ac3fbb4ebc998d947308c1efd1a60b76d9fc75875816357b474&w=1060)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></motion.div>
            <motion.div
              initial={{ rotate: 0, x: -150 }}
              whileInView={{ rotate: 14, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-[24vw] w-[140px] md:h-[30vw] h-[180px] rounded-[15px] absolute top-0 md:left-[273px] left-[108px] bg-slate-300"
              style={{
                backgroundImage:
                  "url(https://www.datasciencecentral.com/wp-content/uploads/2022/06/AdobeStock_336689972.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></motion.div>
          </div>

          <div className="flex flex-col md:gap-[30px] gap-[10px] items-start relative">
            <h1 className="md:text-[30px] text-[20px]">Learner&apos;s Lab</h1>
            <h4 className="md:w-[435px] w-[260px] text-[12px] md:text-[20px] md:leading-[30px]">
              Experience personalized learning like never before. Powered by AI
              and machine learning, Learners Lab adapts to your pace and goals,
              delivering content that evolves with you. Unlock your potential
              with a smarter way to learn!
            </h4>
            <Link href="/dashboard">
              <div className="flex justify-center items-center gap-[15.5px] md:px-[18px] px-[14px] py-[8px] bg-filledBg md:py-[10px] rounded-full border-primary border-[1px] w-fit text-[12px] md:text-[16px] border-white">
                <h3 className="text-textColor">Join Now</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
