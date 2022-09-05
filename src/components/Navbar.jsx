import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <div className="bg-[#FAF6EB] fixed w-full shadow-xl py-2 z-50">
        <div className="max-w-screen-xl mx-auto relative flex justify-between lg:items-center py-1.5 px-5 sm:px-10">
          <Link
            to="/"
            className="text-4xl font-header"
            onClick={() => setNavbarOpen(false)}
          >
            Andrew Amelinckx
          </Link>

          <nav
            className={
              navbarOpen
                ? "absolute lg:relative bg-[#FAF6EB] shadow-xl lg:shadow-none right-5 top-8 lg:right-0 lg:top-0 transition duration-1000"
                : "hidden lg:block"
            }
          >
            <ul className="flex flex-col lg:flex-row p-7 lg:p-0 space-y-4 lg:space-y-0 lg:space-x-7 uppercase font-body text-right text-sm font-bold">
              {links.map(({ name, path }, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      className="hover:text-[#F47857]"
                      to={path}
                      onClick={() => setNavbarOpen((prev) => !prev)}
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button
            className="block lg:hidden text-xl"
            onClick={() => setNavbarOpen((prev) => !prev)}
          >
            {!navbarOpen ? <HiMenu /> : <HiX />}
          </button>
        </div>
      </div>
      <div className="space h-[4.3rem]"></div>
    </div>
  );
};

export default Navbar;
