import { Outlet, useLocation } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";

import "./App.css";
import { useEffect } from "react";

import Aos from "aos";

function App() {
  const { pathname, key, hash } = useLocation();
  const menuItems = [
    {
      slug: "about",
      label: "About",
    },
    {
      slug: "projects",
      label: "Projects",
    },
    {
      slug: "contact",
      label: "Contact",
    },
  ];

  const scrollFunction = () => {
    if (!hash) return;
    // console.log(window.innerHeight);
    const offset = window.innerWidth < 768 ? 95 : 150;
    const target = document.querySelector(hash);
    const y = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useEffect(() => {}, [hash]);

  useEffect(() => {
    if (pathname === "/" && !hash && window.scrollY !== 0) {
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }
    if (hash) {
      // console.log(hash);
      scrollFunction();
    }
  }, [key]);

  useEffect(() => {
    setTimeout(() => {
      Aos.init({
        offset: 50,
        duration: 800,
        easing: "ease-out-quart",
        delay: 100,
        anchorPlacement: "bottom-bottom",
      });
    }, 400);
  }, []);

  useEffect(() => {
    // Disable right-click context menu and text selection
    const disableRightClickAndSelection = (e) => {
      e.preventDefault(); // Prevent the default context menu
    };

    const disableTextSelection = (e) => {
      // Check if the target element is an input field
      // console.log(e.target.tagName)
      if (
        !e.target.tagName ||
        !["textarea", "input", "button"].includes(
          e.target.tagName.toLowerCase()
        )
      ) {
        e.preventDefault(); // Prevent text selection for non-input elements
      }
    };

    // window.addEventListener("contextmenu", disableRightClickAndSelection);
    window.addEventListener("mousedown", disableTextSelection);

    // Cleanup function to remove the event listeners when the component unmounts
    return () => {
      window.removeEventListener("contextmenu", disableRightClickAndSelection);
      window.removeEventListener("mousedown", disableTextSelection);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on component mount

  return (
    <>
      <SiteNav menuItems={menuItems} />
      <div className="mb-28"></div>

      <Outlet />
      <SiteFooter menuItems={menuItems} />
    </>
  );
}

export default App;
