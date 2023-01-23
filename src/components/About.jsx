import React from "react";
import Title from "./reusable components/Title";
import right_arrow from "../assets/other/right_arrow.png";
import { Link } from "react-router-dom";
function About(props) {
  return (
    <div className="about-section mt-5 text-center mx-auto" id="about">
      <Title title="About" />
      <div className="row d-flex flex-row justify-content-between">
        <div className="about-text d-flex flex-column justify-content-center col-lg-6 text-start px-5 mt-4">
          <h5>Front end development, UI/UX design...</h5>
          <p className="mt-3 px-lg-1 lh-lg opacity-75">
            hey, I am amine a Ui design and front end developer, at this
            business I help people to achieve a beautiful website interface
            design, with my 1.5+ years of experience I always make sure to craft
            an amazing design for my clients.
          </p>
          <Link to="/about" className="btn btn-primary mt-3 fw-normal">
            Read more{" "}
            <img
              className="ms-1"
              src={right_arrow}
              alt="right_arrow"
              width={"20px"}
            />
          </Link>
        </div>
        <div className="about-image col-lg-6 mt-4">
          <img
            className="about-illustration mt-4 mt-lg-0"
            src="https://fv9-4.failiem.lv/thumb_show.php?i=jaaj8faty&view"
            alt="UI design"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
