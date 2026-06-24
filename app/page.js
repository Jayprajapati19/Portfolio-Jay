import Layout from "../components/Layout";
import Image from "next/image";
import profilePic from "../public/pfp2.png";
import HeroText from "../components/HeroText";
import Link from "next/link";
import { LinkArrow } from "../components/Icons";
import TransitionEffect from "../components/TransitionEffect";
import Expertise from "../components/Expertise";

import img1 from "../public/half-circle.png";
import img3 from "../public/triangle-icon.png";
import Form from "../components/Form";
import MobileTechnologies from "../components/Mobile_Technologies";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
export default function Home() {
  return (
    <>
      <TransitionEffect />

      <main className="relative flex w-full min-h-screen overflow-hidden text-dark font-mont dark:text-light">
        <div className="portfolio-home-bg pointer-events-none absolute inset-0 -z-10" />
        <Layout className="pt-0 md:pt-16 ">
          <div className="flex md:flex-col lg:flex-col sm:flex-col items-center justify-between w-full min-h-[80vh] relative gap-8">
            <div className="relative justify-center w-3/4 h-full md:w-full lg:flex ">
              <Image
                alt="Yeah, it's me here"
                src={profilePic}
                priority
                className="w-full h-auto lg:h-[50vh] lg:w-auto lg:mb-5 md:inline-block  md:h-[40vh] md:w-auto md:mb-1 drop-shadow-2xl"
              />
              <Image
                alt="Design"
                src={img3}
                className="absolute h-[35px] sm:h-[30px] bottom-0 left-10 lg:left-5  w-auto sm:bottom-0 sm:left-3 animate-moverfast"
              />
            </div>
            <div className="w-full min-h-[60vh] lg:min-h-max mx-5 flex flex-col justify-center gap-8 md:mt-5">
              <div className="text-6xl xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl font-bold flex lg:w-full flex-col gap-3">
                <span className="text-xl font-semibold uppercase text-orange-500 sm:text-sm">
                  Full-stack developer
                </span>
                <span>Hello...</span>
                <span>
                  I'm{" "}
                  <span className="text-orange-500 duration-200 ">
                    {" "}
                    Jay Prajapati
                  </span>
                  .
                </span>

                <span className="min-h-[32px] text-xl font-semibold text-dark/75 dark:text-light/75 sm:text-base">
                  <HeroText />
                </span>
              </div>

              <div className="flex flex-col items-start justify-start w-full text-base font-medium font-mont lg:text-center">
                <p className="w-full max-w-3xl text-[20px] leading-8 text-dark/80 md:text-base md:leading-7 sm:text-sm sm:leading-6 dark:text-light/80 lg:mx-auto">
                  I build useful web products from backend APIs to polished
                  interfaces. My work focuses on MERN, Next.js, TypeScript, and
                  AI-powered workflows, with a simple goal: make every product
                  reliable, fast, and easy for real people to use.
                </p>
                <div className="mt-6 grid w-full max-w-2xl grid-cols-3 gap-3 text-sm text-dark/75 dark:text-light/75 lg:mx-auto sm:grid-cols-1">
                  <div className="rounded-lg border border-dark/10 bg-white/70 px-4 py-3 shadow-sm dark:border-light/10 dark:bg-light/5">
                    <span className="block text-lg font-bold text-dark dark:text-light">
                      15+
                    </span>
                    shipped projects
                  </div>
                  <div className="rounded-lg border border-dark/10 bg-white/70 px-4 py-3 shadow-sm dark:border-light/10 dark:bg-light/5">
                    <span className="block text-lg font-bold text-dark dark:text-light">
                      MERN
                    </span>
                    production stack
                  </div>
                  <div className="rounded-lg border border-dark/10 bg-white/70 px-4 py-3 shadow-sm dark:border-light/10 dark:bg-light/5">
                    <span className="block text-lg font-bold text-dark dark:text-light">
                      AI
                    </span>
                    product workflows
                  </div>
                </div>
                <div className="flex gap-5 mt-8 lg:self-center sm:gap-4 sm:mt-6 sm:flex-col sm:w-full">
                  <Link
                    href="/Jay-Resume.pdf"
                    target="_blank"
                    className="flex items-center justify-center bg-dark text-light p-2.5 px-6 text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-dark hover:border-dark duration-200 dark:hover:bg-dark dark:border-light dark:bg-light dark:text-dark dark:hover:text-light md:p-2 md:px-4 md:text-base sm:text-sm rounded-lg"
                  >
                    Resume <LinkArrow className="w-6 ml-2" />
                  </Link>
                  <Link
                    href="mailto:jayprajapati3117@gmail.com"
                    className="flex items-center justify-center bg-light text-dark p-2.5 px-6 text-lg font-semibold hover:bg-dark hover:text-light border border-solid border-dark hover:border-dark duration-200 dark:hover:bg-light dark:border-light dark:bg-dark dark:text-light dark:hover:text-dark md:p-2 md:px-4 md:text-base sm:text-sm rounded-lg"
                  >
                    Start a conversation
                  </Link>
                </div>
              </div>
            </div>

            <Image
              alt="Design"
              src={img1}
              className="absolute h-[60px] w-auto top-10 right-10 sm:right-5 sm:h-[40px] sm:top-5 animate-mover"
            />
          </div>

          <Expertise />
          <MobileTechnologies className="hidden sm:block " />
          <div>
            <Image alt="Design" src={img1} className=" animate-mover" />

            <Form className="px-0 mb-0 pb-10 xs:pb-0 !hidden sm:!block sm:!min-h-max" />
          </div>
        </Layout>
        <SpeedInsights />
        <Analytics />
      </main>
    </>
  );
}
