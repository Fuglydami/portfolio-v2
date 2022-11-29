import React from "react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "./Project.css";
import ProjectCard from "./ProjectCard";

import { Helmet } from "react-helmet-async";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

function Project({ projects }) {
  return (
    <>
      <Helmet>
        <title>Damilare Oyedeji - Software Engineer</title>
        <meta
          name="description"
          content="These are the projects i've worked on so far; https://paypoint.quickteller.com/, https://subcentralportal.azurewebsites.net/, https://yapp-admin-frontend-2.azurewebsites.net/, https://qpay-dashboard.netlify.app/"
        />
        <link rel="canonical" href="/#project" />
      </Helmet>
      <section className="project section" id="project">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Most recent work</span>

        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          className="project__container container mySwiper"
        >
          {projects.map((project) => {
            const { id, img, demoLink, title, description } = project;
            return (
              <SwiperSlide className="project__content grid" key={id}>
                <ProjectCard
                  img={img}
                  demoLink={demoLink}
                  title={title}
                  description={description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}

export default Project;
