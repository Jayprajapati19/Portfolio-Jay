import AnimatedText from "../../components/AnimatedText";
import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import pfp from "../../public/jay_pfp.png";
import { Montserrat } from "next/font/google";
import AnimatedNumbers from "./AnimatedNumbers";
import Experience from "../../components/Experience";
import Education from "../../components/Education";
import TransitionEffect from "../../components/TransitionEffect";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "Jay Prajapati | About",
  description: "Contains Biography, Experience and Education of Jay Prajapati",
};
const page = () => {
  return (
    <>
      <TransitionEffect />
      <Head>
        <title>Jay | About Page</title>
        <meta name="description" content="Jay Prajapati- Web Developer" />
      </Head>
      <main
        className={`dark:text-light w-full flex-col items-center justify-center ${montserrat.className}`}
      >
        <Layout className="min-h-screen pt-16">
          <AnimatedText
            text="Building useful software with care"
            className="mb-16 text-6xl md:text-5xl xs:text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="flex flex-col items-start justify-start col-span-3 mt-5 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase dark:text-light/75 text-dark/75">
                Biography
              </h2>
              <p className="text-lg font-medium leading-8 text-dark/85 dark:text-light/85 md:text-base">
                I'm Jay Prajapati, a full-stack developer who likes building
                useful products from the API layer to the final interface. My
                work sits around MERN, Next.js, TypeScript, and AI-powered
                systems where reliability and user experience both matter.
              </p>
              <p className="my-4 text-lg font-medium leading-8 text-dark/85 dark:text-light/85 md:text-base">
                Recently, I have worked as a Backend Developer Intern at Arupa
                AI and as a MERN Stack Developer Intern at SkyAim Digitech,
                building REST APIs, authentication flows, real-time features,
                scheduling integrations, and deployable production systems.
              </p>
              <p className="text-lg font-medium leading-8 text-dark/85 dark:text-light/85 md:text-base">
                I learn best by shipping. Projects like ImageShell, an online
                interview platform, AI chat tools, and AutoClaw have helped me
                sharpen the practical parts of engineering: choosing the right
                stack, keeping systems fast, and turning rough ideas into
                working software people can actually use.
              </p>
            </div>

            <div className="col-span-3 h-max rounded-2xl border border-solid border-dark bg-light p-8 relative border-r-[6px] border-b-[6px] shadow-2xl shadow-dark/10 dark:bg-dark dark:border-light dark:shadow-light/10 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-gradient-to-br from-dark via-orange-500 to-dark rounded-br-3xl dark:from-light dark:via-secondary dark:to-light" />
              <Image
                src={pfp}
                alt="pfp"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            <div className="flex flex-col items-end col-span-2 justify-evenly xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
              {/* <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-3xl'>
                  <AnimatedNumbers value={50} />
                </span>
                <h2 className='text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>Satisfied Clients</h2>
              </div> */}
              <div className="flex flex-col items-end justify-center rounded-2xl border border-dark/10 bg-white/70 p-5 shadow-lg dark:border-light/10 dark:bg-light/5 xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-3xl">
                  <AnimatedNumbers value={15} />
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm ">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center rounded-2xl border border-dark/10 bg-white/70 p-5 shadow-lg dark:border-light/10 dark:bg-light/5 xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-3xl">
                  <AnimatedNumbers value={1} decimal={0} />
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm ">
                  Year of Experience
                </h2>
              </div>
            </div>
          </div>

          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default page;
