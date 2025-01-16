import React from "react";
import trust from "/src/assets/img/home/trust.jpg";

const HomeWhoWeAre = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="flex gap-14 flex-col sm:flex-row items-end">
          <div className="basis-2/5 relative">
            <h3
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="2000"
              className="mb-20"
            >
              WHO WE ARE
            </h3>

            <div>
              <img
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="2000"
                src={trust}
                alt=""
              />
            </div>
          </div>
          <div
            className="basis-3/5"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="2000"
          >
            <h2 className="text-4xl md:text-6xl mb-12 leading-[1.1] uppercase">
              The Epitome<br/> of Trust
            </h2>
            <p>
              CCR Projects is the brainchild of three partners boasting over 30 years
              of combined expertise in real estate sales, acquisition and
              investment. Our wealth of experience is the cornerstone of our
              commitment to excellence.
            </p>
            <p>
              We've successfully brought to life various projects, including
              townhouses, detached homes and condos, predominantly in the Fraser
              Valley. Our completed ventures in Maple Ridge and Surrey showcase
              our dedication to crafting unique and sustainable living spaces.
              Moreover, we have exciting projects in the pipeline that further
              emphasize our dedication to reshaping community living and pushing
              the boundaries of innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhoWeAre;
