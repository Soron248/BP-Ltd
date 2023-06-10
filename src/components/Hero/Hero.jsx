import React from "react";
import { FiMail } from "react-icons/fi";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
const Hero = () => {
  return (
    <>
      <Nav />
      <div className="flex justify-center items-center lg:block">
        <div className="w-3/6 lg:h-96 lg:ml-52 lg:mt-16 mt-10">
          <h1 className="text-5xl font-extrabold mb-4">
            Get Smarter about your <br /> career{" "}
          </h1>
          <p className="mb-4">
            Get the <span className="font-bold"> 5-minute newsletter</span>{" "}
            keeping about smart career{" "}
          </p>
          <div className="flex items-center justify-center rounded-lg shadow-2xl h-16 lg:w-5/6 min-w-fit mb-7 lg:space-x-20 space-x-2 px-2">
            <span className="">
              <FiMail />
            </span>
            <input
              type="email"
              placeholder="Your E-mail address"
              className=" outline-none bg-transparent"
            />
            <button className="lg:w-56 h-12 min-w-fit rounded-md bg-red-600   text-white">
              Join Free
            </button>
          </div>
          <p className="leading-8 w-5/6 text-justify">
            We're committed to your privacy. DashCareer uses the information you
            provide to contact you about our relevant content and services. You
            may unsubscribe from these communications at any time. For more
            information, check out our Privacy Policy.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hero;
