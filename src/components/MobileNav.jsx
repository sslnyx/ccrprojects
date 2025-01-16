import React from "react";
import { Link } from "react-router-dom";

export const MobileNav = ({
  activeMobileMenu,
  setActiveMobileMenu,
  menuItems,
}) => {
  return (
    <div
      className={`fixed top-0 duration-700 w-full h-full z-[100] pointer-events-none`}
    >
      <div
        className={`w-full h-full transition-all duration-700 absolute top-0 left-0 ${
          activeMobileMenu
            ? "pointer-events-auto backdrop-blur-sm"
            : "pointer-events-none backdrop-blur-none"
        }  `}
        onClick={() => setActiveMobileMenu(false)}
      ></div>

      <div
        className={`absolute transition-all duration-500 top-0 ease-out bg-blue w-[300px] h-full pointer-events-auto ${
          activeMobileMenu ? "right-0" : "-right-[300px]"
        }`}
        onClick={() => setActiveMobileMenu(false)}
      >
        <div className="absolute right-5 top-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="fill-white w-[25px]"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>

        <div className="pt-16 flex justify-center text-white  text-center">
          <ul>
            {menuItems.map(({ slug, label }) => (
              <li
                className="py-3 uppercase"
                key={slug}
                onClick={() => setActiveMobileMenu(false)}
              >
                <Link to={`/#${slug}`}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center py-5">
            <div className="w-[100px] h-[2px] bg-white"></div>
        </div>
        <div className="flex justify-center py-3 text-white">
          <a href="mailto:hello@ccrprojects.com">hello@ccrprojects.com</a>
        </div>
      </div>
    </div>
  );
};
