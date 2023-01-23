import React from "react";
import Title from "../components/reusable components/Title";
import logo from "../assets/other/logo.png";
import wondering from "../assets/other/wondering.jpg";
import FooterAbout from "../components/FooterAbout";
import { Link } from "react-router-dom";

function AboutPage() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <div className="about-page">
      <header className="m-3">
        <button className="back_button btn btn-primary"><Link to="/" className="text-white">Back</Link></button>
      </header>
      <Title title="About" id="about_me" />
      <div className="info_about_me d-flex justify-content-between  flex-column-reverse flex-md-row">
        <div className="text_section p-5 d-flex flex-column">
          <div className="text_section_title">
            <h3>Hi! I'm Amine.</h3>
          </div>
          <div className="text_section_description mb-4">
            <p>
              I'm here to help you show Your website design idea to the world,
              make your audience’s journey in the website enjoyable and
              relaxing.
            </p>
          </div>
          <div className="text_section_info d-flex flex-column justify-content-between">
            <div className="name d-flex flex-row">
              <span>Name: </span>
              <p className="m-0">Amine Loubar</p>
            </div>
            <div className="birth d-flex flex-row">
              <span>Birth: </span>
              <p className="m-0">May, 9th 1999</p>
            </div>

            <div className="email d-flex flex-row">
              <span>Email: </span>
              <p className="m-0">amine.loubar.1999@gmail.com</p>
            </div>
            <div className="nationality d-flex flex-row">
              <span>Nationality: </span>
              <p className="m-0">Algerian</p>
            </div>
          </div>
        </div>
        <div className="image_section text-center">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="question_serction d-flex flex-column flex-md-row  align-items-center justify-content-between">
        <div className="image_question">
          <img src={wondering} alt={"wondering"} />
        </div>
        <div className="question_text">
          <div className="question_title">
            <h3>Can I help you?</h3>
          </div>
          <div className="question_description">
            <p>
              Everything has a presence on the Internet from people to stores
              and even companies. Do you want to enter this world and be present
              in it? You have a vision for your website and want to turn it into
              reality? I will make your vision becomes true by designing a
              beautiful and user friendly design for your website. making the
              experience of using it fun and relaxing, and that will reflect a
              good image of the owner of the site.
            </p>
          </div>
        </div>
      </div>
      <FooterAbout />
    </div>
  );
}

export default AboutPage;
