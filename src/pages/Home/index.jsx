import React from "react";
import HomeOverview from "./HomeOverview";
import HomeWhoWeAre from "./HomeWhoWeAre";
import render from "/src/assets/img/home/rendering.jpg";
import HomeProjects from "./HomeProjects";
import HomeContactForm from "./HomeContactForm";

import "./home.css"

const Home = () => {
  return (
    <div>
      <HomeOverview />
      <HomeWhoWeAre />
      <section>
        <div className="h-[400px] w-full md:h-auto render-img">
          <img
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="2000"
            className="w-full h-full object-cover"
            src={render}
            alt="site-view"
          />
        </div>
      </section>
      <HomeProjects />
      <HomeContactForm />
    </div>
  );
};

export default Home;
