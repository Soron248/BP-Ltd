import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen md:h-96 bg-indigo-950">
      <div className="flex space-x-2 box-border md:mb-10 mb-5 mt-10 md:mt-0">
        <BsFacebook className="text-xl text-gray-300 border-solid border-2 rounded-md w-8 h-6 hover:text-gray-400 cursor-pointer" />
        <AiFillYoutube className="text-xl text-gray-300 border-solid border-2 rounded-md w-8 h-6 hover:text-gray-400 cursor-pointer" />
        <FaLinkedinIn className="text-xl text-gray-300 border-solid border-2 rounded-md w-8 h-6 hover:text-gray-400 cursor-pointer" />
      </div>

      <div className="flex justify-center items-center flex-col md:flex-row text-gray-200 lg:space-x-52 space-y-10 border-b-2 border-gray-400 pb-10">
        <div>
          <img
            src="https://deshcareer.com/logo/short-logo.png"
            className="h-20 w-52"
            alt="logo"
          />
          <p className="text-gray-400">
            Desh Career is Career based newsletter in <br /> Bengali language.
            This newsletter has published <br /> weekly. This is published in
            every Saturday at <br /> 12.00 PM.{" "}
          </p>
        </div>

        <div>
          <h1 className="text-2xl mb-10">Privacy And Terms</h1>
          <section className="flex flex-col items-center text-gray-400 space-y-2">
            <span>Privacy Policy</span>
            <span>Terms Condition</span>
            <span>FAQ</span>
          </section>
        </div>

        <div className=" lg:text-right text-center">
          <h1 className="text-2xl mb-12">Support</h1>
          <section className="flex flex-col  text-gray-400 ">
            <span>Affiliate Link</span>
            <span>Contact us</span>
            <span>Advertise with us</span>
          </section>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center text-white md:space-x-96 text-sm font-thin mt-2">
        <p>© 2023 Newsletter E-mail Service: All Copy right reserved </p>
        <p className="space-x-3 cursor-pointer">
          <span>Terms</span> <span>Cookie Policy</span> <span>Privacy</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
