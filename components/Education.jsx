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
            time="Jun 2021 - May 2024"
            place="R.C Technical Institute"
            info="Completed a Diploma in Information Technology with a CGPA of 7.65, gaining hands-on experience in programming, databases, web development, and core IT fundamentals."
          />

          <Details
            type="Bachelor of Engineering in Computer Science & Engineering (B.Tech. CSE)"
            time="Jun 2024 - Present"
            place="Government Engineering College Patan (GTU)"
            info="Currently pursuing Computer Science Engineering, building stronger foundations in data structures, system design, software engineering, and modern application development."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
