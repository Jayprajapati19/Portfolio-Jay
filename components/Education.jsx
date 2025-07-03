"use client";

import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
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
          {type}&nbsp;
        </h3>
        <span className="font-medium capitalize dark:text-light/75 text-dark/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="w-full font-medium md:text-sm dark:text-gray-400">
          {info}
        </p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-10">
      <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Education
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
            type="High School Education"
            time="2012 - 2021"
            place="Shree Arvindayan High School"
            info="Completed my high school journey with a strong academic foundation and diverse learning experiences. The supportive environment and broad curriculum helped spark my interest in technology and encouraged both personal and intellectual growth."
          />

          <Details
            type="Diploma in Information Technology"
            time="2021-2024"
            place="R.C Technical Institute"
            info="Currently pursuing a Diploma in Information Technology (2021–2024), gaining both theoretical insights and hands-on experience in the ever-evolving tech landscape. This program is shaping my understanding of core IT principles while preparing me with practical skills for a dynamic and future-focused career in technology."
          />

          <Details
            type="Bachelor of Engineering in Computer Science & Engineering (B.Tech. CSE)"
            time="2024-2027"
            place="Government Engineering Collage Patan (GTU)"
            info="Currently enrolled in the B.E. program in Computer Science & Engineering at Government Engineering College Patan, where I’m building a strong technical foundation with a focus on modern technologies and innovation. The curriculum is enhancing my understanding of programming, system design, data structures, and cutting-edge areas like AI and machine learning. I’m eager to keep expanding my skills and contribute to impactful solutions in today’s evolving tech landscape."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
