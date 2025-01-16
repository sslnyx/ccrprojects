import React from "react";
import footerLogo from "/src/assets/img/logos/CCR_ID_White.svg";
import logoHavan from "/src/assets/img/logos/Havan.svg";
import logo2510 from "/src/assets/img/logos/2-5-10.svg";
import { Link } from "react-router-dom";

const SiteFooter = ({ menuItems }) => {
  return (
    <>
      <footer className="py-20 bg-blue text-white">
        <div className="container flex flex-col md:flex-row gap-10">
          <div className="basis-full md:basis-1/3 md:flex relative">
            <div className="flex flex-col items-center">
              <Link to={"/#"}>
                <div className="mb-5">
                  <img
                    className="w-[250px]"
                    src={footerLogo}
                    alt="footer-logo"
                  />
                </div>
              </Link>

              <div>
                <a href="mailto:hello@ccrprojects.com">hello@ccrprojects.com</a>
              </div>
            </div>
            <div className="hidden md:block border-r absolute h-full -right-5 top-0"></div>
          </div>

          <div className="basis-1/3 relative">
            <div className="flex gap-10 justify-center md:h-[115px] items-end">
              <div>
                <img className="h-[80px]" src={logoHavan} alt="logoHavan" />
              </div>
              <div>
                <img className="h-[80px]" src={logo2510} alt="logo2510" />
              </div>
            </div>
            <div className="hidden md:block border-r absolute h-full -right-5 top-0"></div>
          </div>
          <div className="basis-1/3 flex justify-center">
            <div className="text-center md:text-left">
              <p className="text-white text-2xl">QUICK LINKS</p>
              <ul>
                <li className="py-1">
                  <Link to="/#">
                    <span>Home</span>
                  </Link>
                </li>
                {menuItems.map(({ label, slug }) => (
                  <li key={slug}>
                    <Link to={`/#${slug}`} className="py-1 inline-block">
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="flex justify-center py-10 md:py-5 text-sm">
        <div className="flex gap-5 md:gap-10 flex-wrap text-center md:text-left justify-center container">
          <span>
            &copy; CCR Projects Ltd. All material on this site is copyrighted by
            CCR Projects Ltd
          </span>

          <div>
            {/* <Link to={"/terms-and-conditions"} className="mr-3">
              Terms & Conditions{" "}
            </Link> */}
            <Link to={"/privacy-policy"}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteFooter;
