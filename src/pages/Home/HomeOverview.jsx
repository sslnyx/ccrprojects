import React from "react";
import logo from "/src/assets/img/logos/CCR_icon.svg";
import family from "/src/assets/img/home/family.jpg";
import living from "/src/assets/img/home/Living.jpg";

const HomeOverview = () => {
  return (
    <section>
      <div className="container relative z-10">
        <div className="flex gap-14 flex-col sm:flex-row">
          <div className="basis-full sm:basis-2/3">
            <h3
              className="mb-5"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="2000"
            >
              WHAT WE DO
            </h3>
            <h1
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="2000"
              className="text-4xl md:text-6xl mb-10 md:mb-12 max-w-[450px] leading-[1.1]"
            >
              CRAFTING EXEMPLARY COMMUNITIES
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="2000"
              className="sm:max-w-[480px]"
            >
              At CCR Projects, we specialize in identifying prime land and
              transforming it into vibrant communities. Our focus is on crafting
              spaces that go beyond the ordinary, fostering a sense of belonging
              and elevating the quality of life. From concept to completion, we
              ensure excellence. Our commitment extends to meticulous land
              selection, innovative design, and strategic partnerships. We don't
              just build; we create environments that inspire and thrive.
            </p>
          </div>

          <div className="basis-full sm:basis-1/3 relative">
            <div className="sm:absolute right-0 top-0">
              <div className="hidden sm:block">
                <img
                  data-aos="zoom-out"
                  data-aos-duration="2000"
                  src={logo}
                  alt="logo"
                  className="w-full"
                />
              </div>
              <div>
                <img
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="2000"
                  className="w-full z-10"
                  src={family}
                  alt="family"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 md:mb-20"></div>

      <div
        className="min-h-[400px] h-[400px] md:h-auto"
        data-aos="fade"
        data-aos-delay="500"
        data-aos-duration="2000"
      >
        <img
          className="w-full h-full object-cover object-[20%_50%]"
          src={living}
          alt="living"
        />
      </div>
    </section>
  );
};

export default HomeOverview;
