import React, { Fragment, useState } from "react";
import siteLogo from "/src/assets/img/logos/CCR_ID.svg";
import { Link } from "react-router-dom";
import { MobileNav } from "./MobileNav";
import "./siteNav.css";

const SiteNav = ({ menuItems }) => {
  const [active, setActive] = useState(false);
  const [isOnSub, setIsOnSub] = useState(false);

  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const subMenuHandler = (ev) => {
    if (ev.type === "mouseover") {
      // console.log("in");
      setActive(true);
    }

    if (ev.type === "mouseout") {
      setActive(false);
    }
  };

  const mobileMenuProps = { activeMobileMenu, setActiveMobileMenu, menuItems };

  return (
    <>
      <nav className="fixed w-full bg-white/80 z-[100]">
        <div className="container py-6">
          <div className="flex flex-wrap gap-5">
            <Link to="/" className="flex">
              <div className="flex">
                <img
                  src={siteLogo}
                  alt="site-logo"
                  className="w-[180px] lg:w-[250px]"
                />
              </div>
            </Link>

            <div className="flex-1"></div>

            <div className="hidden gap-10 items-center lg:flex">
              <ul className="flex gap-5 uppercase">
                {menuItems.map(({ slug, label }) => (
                  <Fragment key={slug}>
                    {slug === "projects" ? (
                      <li className="relative">
                        <Link
                          className="py-3"
                          onMouseOver={subMenuHandler}
                          onMouseOut={subMenuHandler}
                          to={`/#${slug}`}
                        >
                          <span>{label}</span>
                        </Link>
                        {active && (
                          <div
                            className="absolute -left-3 -bottom-[65px] text-sm cursor-pointer "
                            onMouseOver={() => {
                              setActive(true);
                              console.log("sub");
                            }}
                            onMouseOut={() => setActive(false)}
                          >
                            <div
                              data-aos="fade-right"
                              className="absolute bg-gray-500/30 w-full h-full left-0 top-0 pointer-events-none sub-item"
                            ></div>

                            <a
                              target="_blank"
                              href="http://momentslangley.com/"
                              data-aos="fade-right"
                              data-aos-delay="200"
                              className="flex items-center gap-5 py-5 px-5"
                            >
                              <span className="inline-block relative  pointer-events-none">
                                moments
                              </span>

                              {/* <div className="bg-black h-[1px] w-[180px]  pointer-events-none"></div>

                              <span className="pointer-events-none">
                                momentslangley.com
                              </span> */}
                            </a>
                          </div>
                        )}
                      </li>
                    ) : (
                      <li>
                        <Link className="py-3" to={`/#${slug}`}>
                          <span>{label}</span>
                        </Link>
                      </li>
                    )}
                  </Fragment>
                ))}
              </ul>
              <div>
                <a href="mailto:hello@ccrprojects.com" className="text-green">
                  hello@ccrprojects.com
                </a>
              </div>
            </div>

            <div
              className="px-3 py-2 flex items-center -mr-3 lg:hidden relative z-[101]"
              onClick={() => setActiveMobileMenu(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="fill-blue w-[25px]"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <MobileNav {...mobileMenuProps} />
    </>
  );
};

export default SiteNav;
