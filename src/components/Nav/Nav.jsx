import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="h-40 w-screen shadow-md flex flex-col md:flex-row justify-center items-center lg:space-x-44">
      <div className="h-20 w-52">
        <Link to="/">
          <img
            src="https://deshcareer.com/logo/short-logo.png"
            className="h-20 w-52"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <ul className="flex lg:font-bold font-thin md:text-base text-sm">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Privacy Policy</li>
          <li>Terms Condition</li>
          <li>About Us</li>
          <Link to="contact">
            <li>Contact Us</li>
          </Link>
          <li>Advertise</li>
          <li>
            <button className="w-24  h-10 rounded-md bg-red-600 text-white font-normal">
              Join Now
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
