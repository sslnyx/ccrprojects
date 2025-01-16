import React from "react";
import moments from "/src/assets/img/logos/Moments.svg";
import living from "/src/assets/img/home/Living2.jpg";

const HomeProjects = () => {
  return (
    <section id="projects">
      <div className="container pb-20 relative">
        <h3
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="2000"
          className="mb-10"
        >
          CURRENT PROJECT
        </h3>
        <div className="flex gap-10 flex-col md:flex-row mb-10">
          <div className="basis-1/2">
            <div className="w-full flex justify-center mb-10 md:h-[250px] items-center">
              <img
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="2000"
                className="w-[250px] md:w-[300px]"
                src={moments}
                alt="moment-logo"
              />
            </div>
            {/* <h2
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="2000"
              className="text-4xl md:text-[2.6rem] mb-10 leading-[1.1]"
            >
              LIVING IN THE MOMENTS
            </h2> */}
            <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000">
              A thoughtfully curated collection of 10 five-bedroom duplexes in
              the heart of Latimer, designed to celebrate the modern family.
            </p>
          </div>

          <div className="basis-1/2">
            <div className="mb-10 h-[250px]">
              <img
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="2000"
                src={living}
                className="object-cover w-full h-full"
                alt="living"
              />
            </div>
            <div>
              <p className="relative">
                <span
                  data-aos="fade-up"
                  data-aos-delay="900"
                  data-aos-duration="2000"
                  className="absolute -left-5 top-0 h-full bg-blue w-[2px] hidden md:block"
                ></span>
                <span
                  data-aos="fade-up"
                  data-aos-delay="1100"
                  data-aos-duration="2000"
                  className="inline-block"
                >
                  These contemporary duplex homes are just minutes from quality
                  schools, urban amenities, acres of greenspaces and seamless
                  connectivity. Register now for exclusive access to this
                  family-focused community.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <a
            className="text-blue flex items-center gap-3"
            href="https://momentslangley.com/"
            target="_blank"
          >
            <span>LEARN MORE</span>
            <span>{"> >"}</span>
          </a>
        </div>

        <div className="h-[1px] w-[calc(100%-44px)] bg-blue absolute -bottom-0 left-[22px]"></div>
      </div>
    </section>
  );
};

export default HomeProjects;
