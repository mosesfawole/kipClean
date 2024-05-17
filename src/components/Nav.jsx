import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navLists = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <div className="flex items-center justify-between px-8 py-4">
      <div>
        <h1 className="text-[#007FFF] text-4xl font-bold">Kip-Clean</h1>
      </div>
      <div className="hidden md:flex items-center gap-5">
        <ul className="flex items-center gap-5">
          {navLists.map((navList, index) => (
            <li
              key={index}
              className="relative cursor-pointer"
              onMouseEnter={() => setActive(navList.name)}
            >
              <span
                className={
                  active === navList.name
                    ? "text-[#007FFF]"
                    : "text-[#7D7D7D] transition duration-500"
                }
              >
                {navList.name}
              </span>
              {active === navList.name && (
                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#007FFF]"></span>
              )}
            </li>
          ))}
        </ul>
        <button className="bg-[#007FFF] text-white rounded-3xl text-sm font-normal px-4 py-2">
          Get Started
        </button>
      </div>
      <div className="md:hidden">
        {menuOpen ? (
          <IoClose
            size={30}
            className="cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <MdMenu
            size={30}
            className="cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>
      {/* Hamburger menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full z-50 bg-[#007fff] shadow-lg">
          <ul className="flex flex-col px-4 gap-2 py-4">
            {navLists.map((navList, index) => (
              <>
                <li
                  key={index}
                  className="cursor-pointer text-white"
                  onClick={() => {
                    setActive(navList.name);
                    setMenuOpen(false);
                  }}
                >
                  {navList.name}
                </li>
                <span className=" bg-white w-full h-[1px]"></span>
                {/* <hr className=" bg-white text-white" /> */}
              </>
            ))}
            <li>
              <button className="bg-[#007FFF] text-white rounded-3xl text-sm font-normal px-4 py-2">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
