import React, { useState } from "react";
import { Link } from "react-router-dom";
import krslogo from "../components/public/images/krslogo.jpg";
import menu from "../components/public/images/menuicon.png";

function Navbar() {
  const [visible, setVisible] = useState("right-[100%]");
  console.log(visible);
  function menuClick() {
    console.log("clicked");
    if (visible) {
      setVisible("");
    } else if (visible === "") {
      setVisible("right-[100%]");
    }
  }
  return (
    <div>
      <nav className="bg-gray-100 w-full sticky top-0 z-50">
        <div className="mx-auto px-6">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <Link to="/" className="flex items-center py-5 px-2">
                  <img
                    className="w-10 rounded-full ml-4 cursor-pointer"
                    src={krslogo}
                    alt="KRS"
                  />
                </Link>
              </div>
              {/* primary nav */}
              <div className="hidden md:flex items-center space-x-1 text-lg">
                <Link
                  to="/"
                  className="py-5 px-3 text-gray-700 hover:text-black hover:underline hover:underline-offset-2"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="py-5 px-3 text-gray-700 hover:text-black hover:underline hover:underline-offset-2"
                >
                  About
                </Link>
                <Link
                  to="/events"
                  className="py-5 px-3 text-gray-700 hover:text-black hover:underline hover:underline-offset-2"
                >
                  Events
                </Link>
                <Link
                  to="/members"
                  className="py-5 px-3 text-gray-700 hover:text-black hover:underline hover:underline-offset-2"
                >
                  Members
                </Link>
                <Link
                  to="/credits"
                  className="py-5 px-3 text-gray-700 hover:text-black hover:underline hover:underline-offset-2"
                >
                  Credits
                </Link>
                <Link
                  to="/recruitment"
                  className="py-5 px-3 text-gray-700 hover:text-black hover:underline hover:underline-offset-2"
                >
                  Recruitment
                </Link>
                <Link
                  to="/achievements"
                  className="py-5 px-3 text-gray-700 hover:text-black hover:underline hover:underline-offset-2"
                >
                  Achievements
                </Link>
                <Link
                  to="/admin"
                  className="py-5 px-3 text-gray-700 hover:text-black hover:underline hover:underline-offset-2"
                >
                  Admin
                </Link>
              </div>
            </div>
            {/* secondary nav */}
            <div className="hidden md:flex text-gray-700 items-center space-x-1 text-lg">
              <Link
                to="/signup"
                className="py-2 px-3 hover:text-black border-2 border-black hover:bg-gray-200 rounded transition duration-300"
              >
                Signup
              </Link>
            </div>
            {/* mobile button goes here */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button" onClick={menuClick}>
                <img className="w-6 cursor-pointer" src={menu} alt="menu" />
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div
          className={`mobile-menu  flex flex-col ${visible} bg-red-200 w-full h-[100vh] items-center absolute   md:hidden`}
        >
          <Link
            to="/"
            className="block py-2 px-4 my-1 text-sm hover:bg-gray-200"
          >
            Home
          </Link>
          <hr className="w-[60%]" />
          <Link
            to="/About"
            className="block py-2 px-4 my-1 text-sm hover:bg-gray-200"
          >
            About
          </Link>
          <hr className="w-[60%]" />
          <Link
            to="/Events"
            className="block py-2 px-4 my-1 text-sm hover:bg-gray-200"
          >
            Events
          </Link>
          <hr className="w-[60%]" />
          <Link
            to="/Members"
            className="block py-2 px-4 my-1 text-sm hover:bg-gray-200"
          >
            Members
          </Link>
          <hr className="w-[60%]" />
          <Link
            to="/Credits"
            className="block py-2 px-4 my-1 text-sm hover:bg-gray-200"
          >
            Credits
          </Link>
          <hr className="w-[60%]" />
          <Link
            to="/Recruitment"
            className="block py-2 px-4 my-1 text-sm hover:bg-gray-200"
          >
            Recruitment
          </Link>
          <hr className="w-[60%]" />
          <Link
            to="/Blog"
            className="block py-2 px-4 my-1 text-sm hover:bg-gray-200"
          >
            Signin
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
