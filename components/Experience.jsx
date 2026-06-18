"use client";

import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  address,
  companyLink = "",
  time,
  work,
}) => {
  const ref = useRef(null);

  return (
    <li
      className="my-8  first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
      ref={ref}
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex flex-col gap-2"
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            className="capitalize text-primary dark:text-secondary"
            target="_blank"
            rel="noopener noreferrer"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="inline-block w-fit max-w-full whitespace-normal rounded-md border border-orange-500/25 bg-orange-50 px-3 py-1.5 text-sm font-semibold leading-5 text-dark shadow-sm dark:border-secondary/30 dark:bg-secondary/10 dark:text-light xs:text-xs">
          {time} | {address}
        </span>
        <p className="w-full font-medium leading-7 text-dark/80 dark:text-light/80 md:text-sm">
          {work}
        </p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32">
      <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-[100%]"
        ref={ref}
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-secondary md:w-[2px] md:left-[30px] xs:left-[20px]"
          ref={ref}
        ></motion.div>

        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-6 ">
          <Details
            position="Backend Developer Intern"
            company="Arupa AI"
            time="March 2026 - May 2026"
            companyLink="#"
            address="Remote"
            work="Built scalable backend services using NestJS and developed RESTful APIs for AI-powered applications. Integrated real-time AI APIs and asynchronous workflows to improve response speed and system reliability."
          />
          
          <Details
            position="MERN Stack Developer Intern"
            company="SkyAim Digitech"
            time="Dec 2025 - Feb 2026"
            companyLink="#"
            address="Remote"
            work="Developed and deployed an end-to-end student community and resource management platform using the MERN stack. Built RESTful APIs, authentication systems, CRUD operations, and real-time features to support seamless user engagement."
          />

          <Details
            position="Web Developer Intern"
            company="Elsner Technology"
            time="2024"
            companyLink="http://www.elsner.com/"
            address="Shivranjani, Ahmedabad, IND"
            work="Worked with a team responsible for creating a web-app transforming form applications. Added auto-fill features and integrated frontend while developing the project on React JS."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
