import AnimatedText from "../../components/AnimatedText";
import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import pfp from "../../public/pfpj.jpg";
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
            text="Passion fuels Purpose !"
            className="mb-16 text-6xl md:text-5xl xs:text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="flex flex-col items-start justify-start col-span-3 mt-5 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase dark:text-light/75 text-dark/75">
                Biography
              </h2>
              <p>
                I'm Jay Prajapati, a web developer who loves turning ideas into
                clean, creative websites. I enjoy building digital experiences
                that are both functional and visually appealing.
              </p>
              <p className="my-4">
                I’ve worked on a variety of projects each one taught me
                something new. From responsive layouts to performance tweaks, I
                focus on creating smooth, user friendly solutions.
              </p>
              <p>
                I’m always learning, exploring new tools, and staying updated
                with the latest trends. I believe great things are built through
                collaboration. Thanks for visiting let’s create something
                awesome together.
              </p>
            </div>

            <div className="col-span-3 h-max rounded-2xl border border-solid border-dark bg-light p-8 relative border-r-[6px] border-b-[6px] dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
              <Image
                src={pfp}
                alt="pfp"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="flex flex-col items-end col-span-2 justify-evenly xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
              {/* <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-3xl'>
                  <AnimatedNumbers value={50} />
                </span>
                <h2 className='text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>Satisfied Clients</h2>
              </div> */}
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-3xl">
                  <AnimatedNumbers value={15} />
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm ">
                  projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-3xl">
                  <AnimatedNumbers value={1} decimal={0} />
                </span>
                <h2 className="text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm ">
                  Years of Expierence
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
