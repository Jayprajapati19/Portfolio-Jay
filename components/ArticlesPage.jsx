"use client";

import React from "react";
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import Image from "next/image";
import closure from "../public/closu.png";

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full col-span-1 p-5 border border-solid bg-light border-dark rounded-2xl dark:bg-dark dark:border-light dark:text-light">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="relative block w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full duration-300 rounded-lg hover:scale-105"
        />
      </Link>

      <Link href={link} target="_blank" className="flex flex-col gap-2">
        <h2 className="my-2 text-2xl font-bold capitalize hover:underline underline-offset-2 xs:text-lg">
          {title}
        </h2>

        <p className="mb-2 text-sm leading-6 text-dark/75 dark:text-light/75">
          {summary}
        </p>
        <span className="font-semibold text-primary dark:text-secondary">
          {time}
        </span>
      </Link>
    </li>
  );
};

const ArticlesPage = () => {
  return (
    <main className="flex flex-col w-full overflow-hidden dark:text-white">
      <Layout className="pt-16">
        <AnimatedText
          text="Notes from what I learn"
          className="mb-16 lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl"
        />
        <ul className="grid grid-cols-2 gap-16 mb-16 md:grid-cols-1 lg:gap-8 lg:mb-8 md:gap-y-16">
          <FeaturedArticle
            title="Understanding JavaScript Closures"
            time="5 min read"
            img={closure}
            link="https://medium.com/@jayp37679/closures-in-javascript-4bd0ac45037a"
            summary="A practical explanation of JavaScript closures, why inner functions remember outer variables, and how that behavior appears in real-world code."
          />
        </ul>
      </Layout>
    </main>
  );
};

export default ArticlesPage;
