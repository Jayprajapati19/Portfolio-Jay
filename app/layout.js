import { Inter } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });
import "react-toastify/dist/ReactToastify.css";
import Chatbot from "../components/Chatbot";
import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "Portfolio | Jay Prajapati",
  description:
    "Jay Prajapati's portfolio of full-stack, backend, and AI-powered web projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${montserrat.variable} bg-light dark:bg-dark min-h-screen w-full font-mont relative`}
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Navbar />
        {children}
        <div className="flex h-full md:flex-col mt-32 gap-8 xs:gap-5 lg:gap-5 sm:mt-10 font-mont px-24 lg:px-16 md:px-12 sm:px-8 xs:px-6 mb-20 md:items-center xs:mt-[60px]">
          <div className="flex-col w-full gap-5 xs:gap-2 md:items-center md:justify-center">
            <h1 className="lg:text-4xl text-dark dark:text-light font-bold xs:text-center capitalize text-5xl mb-5 sm:mb-5 md:text-center sm:text-lg xs:text-[22px]">
              A little music while you explore
            </h1>
            <h3 className="text-xl font-semibold text-left text-yellow-600 xs:text-center md:text-center sm:text-sm">
              A small playlist from my everyday coding flow.
            </h3>
          </div>
          <div className="w-1/2 sm:w-full">
            <iframe
              src="https://open.spotify.com/embed/playlist/6W0jlyzlqDCqSxeGzqnt1p?utm_source=generator&theme=0"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <Footer />
        <Chatbot />
        <Analytics />
      </body>
    </html>
  );
}
