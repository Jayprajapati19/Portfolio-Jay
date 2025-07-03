import AnimatedText from "../../components/AnimatedText";
import { GithubIcon } from "../../components/Icons";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/pro1.jpeg";
import pro2 from "../../public/pro2.jpeg";
import pro3 from "../../public/pro3.jpeg";
import yt from "../../public/yt.jpeg";
import uber from "../../public/uber.jpeg";

import linksta from "../../public/linksta.png";
import expenseTrack from "../../public/expense-track.png";
import ArticlesPage from "../../components/ArticlesPage";
import TransitionEffect from "../../components/TransitionEffect";
export const metadata = {
  title: "Jay Prajapati | Projects",
  description: "This page contains all the projects created by Jay Prajapati.",
};

const FeaturedProjects = ({ type, link, title, summary, img, github }) => {
  return (
    <article className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-br-2xl rounded-3xl border-dark bg-light dark:bg-dark dark:border-light dark:text-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto duration-300 hover:scale-105"
        />
      </Link>

      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-secondary xs:text-base">
          {type}
        </span>
        <Link href={link} target="_blank">
          <h2 className="w-full my-2 text-3xl font-bold text-left duration-300 hover:underline underline-offset-2 sm:text-base ">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {summary}
        </p>
        <div className="flex items-center gap-6 mt-2">
          <Link
            href={github}
            target="_blank"
            className="flex items-center justify-center w-10 h-10 border-solid rounded-full hover:border border-dark/75 dark:border-light/75 "
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-dark hover:border-dark duration-200 dark:hover:bg-dark dark:border-light dark:bg-light dark:text-dark dark:hover:text-light sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="relative flex flex-col items-center justify-center w-full gap-4 p-4 border border-solid shadow-2xl rounded-3xl rounded-br-2xl border-dark bg-light dark:bg-dark dark:border-light dark:text-light xs:p-4">
      <div className="absolute top-1 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%]  md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full overflow-hidden rounded-lg cursor-pointer"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto duration-300 hover:scale-105"
        />
      </Link>

      <div className="flex flex-col items-start justify-between w-full ">
        <span className="text-xl font-medium text-primary dark:text-secondary lg:text-lg md:text-base">
          {type}
        </span>
        <Link href={link} target="_blank">
          <h2 className="w-full my-2 text-3xl font-bold text-left duration-300 hover:underline underline-offset-2 lg:text-2xl sm:text-xl">
            {title}
          </h2>
        </Link>

        <div className="flex items-center justify-between w-full gap-4 mt-2">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold rounded-lg text-dark/75 hover:underline underline-offset-4 hover:text-dark dark:text-light/75 md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon className="w-10 h-10 md:w-6" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const page = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full">
        <Layout className="pt-16 md:pt-8 sm:pd-4 xs:pt-2">
          <AnimatedText
            className="py-8 lg:text-7xl sm:text-6xl xs:text-4xl"
            text="Imagination trumphs Knowledge !"
          />

          <div className="grid grid-cols-12 gap-24 mb-10 xl:gap-x-16 lg:gap-x-8 sm:gap-x-0 md:gap-y-16">
            <div className="col-span-12">
              <FeaturedProjects
                title="IMAGESHELL"
                summary="secure and scalable image hosting platform with seamless uploads."
                link="https://image-shell.vercel.app/"
                type="Featured Project"
                img={project1}
                github="https://github.com/Jayprajapati19/image-kit"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProjects
                title="ONLINE INTERVIEW VIDEO CALLING"
                summary="Built a video conferencing app with screen sharing, recording, and real-time messaging."
                link="https://video-calling-interview.vercel.app/"
                type="Featured Project"
                img={pro2}
                github="https://github.com/Jayprajapati19/video-calling-interview"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="AI CHAT APPLICATION"
                link="https://github.com/Jayprajapati19/chatapp"
                type="Featured Project"
                img={pro3}
                github="https://github.com/Jayprajapati19/chatapp"
              />
            </div>

            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="Uber clone"
                link="https://github.com/Jayprajapati19/Uber-clone"
                type="Featured Project"
                img={uber}
                github="https://github.com/Jayprajapati19/Uber-clone"
              />
            </div> */}

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Newtube"
                link="https://github.com/Jayprajapati19/newtube"
                type="Featured Project"
                img={yt}
                github="https://github.com/Jayprajapati19/newtube"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Social Media"
                link="https://linksta.vercel.app/"
                type="Featured Project"
                img={linksta}
                github="https://github.com/Jayprajapati19/social-media"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProjects
                title="Expense Tracker"
                summary="Daily Expense Tracker"
                link="https://expense-tracker-tau-topaz-48.vercel.app/"
                type="Featured Project"
                e
                img={expenseTrack}
                github="https://github.com/Jayprajapati19/expense-tracker"
              />
            </div>
          </div>
        </Layout>
      </main>

      <ArticlesPage />
    </>
  );
};

export default page;
