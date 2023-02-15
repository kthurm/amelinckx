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
            className="text-2xl md:text-4xl font-header text-text hover:text-primary"
            onClick={() => setNavbarOpen(false)}
          >
            Andrew Amelinckx
          </Link>

          <nav
            className={
              navbarOpen
                ? "absolute lg:relative right-0 top-[3.75rem] lg:top-0 bg-[#FAF6EB] shadow-lg lg:shadow-none transition transform duration-500 opacity-100 translate-x-0"
                : "opacity-0 right-0 absolute lg:relative top-[3.75rem] lg:top-0 bg-[#FAF6EB] shadow-lg lg:shadow-none translate-x-full h-0 lg:opacity-100 lg:translate-x-0 lg:h-full duration-500"
            }
          >
            <ul className="flex flex-col lg:flex-row p-6 lg:p-0 space-y-4 lg:space-y-0 lg:space-x-7 uppercase font-body text-right text-sm font-bold">
              {links.map(({ name, path }, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      className="text-text hover:text-primary"
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
            className="block lg:hidden text-xl z-50"
            onClick={() => setNavbarOpen((prev) => !prev)}
          >
            {!navbarOpen ? <HiMenu /> : <HiX />}
          </button>
        </div>
      </div>
      <div className="space h-[4rem] lg:h-[4.3rem]"></div>
    </div>
  );
};

export default Navbar;
