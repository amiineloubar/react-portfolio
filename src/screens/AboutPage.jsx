import React from "react";
import Title from "../components/reusable components/Title";
import FooterAbout from "../components/FooterAbout";
import { text } from "../App"

function AboutPage() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  console.log(text)
  return (
    <div className="about-page mt-5">
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
              <span className='text-secondary'>Name: </span>
              <p className="m-0">Amine Loubar</p>
            </div>
            <div className="birth d-flex flex-row">
              <span className='text-secondary'>Birth: </span>
              <p className="m-0">May, 9th 1999</p>
            </div>

            <div className="email d-flex flex-row">
              <span className='text-secondary'>Email: </span>
              <p className="m-0">amine.loubar.1999@gmail.com</p>
            </div>
            <div className="nationality d-flex flex-row">
              <span className='text-secondary'>Nationality: </span>
              <p className="m-0">Algerian</p>
            </div>
          </div>
        </div>
        <div className="image_section text-center">
          <img src="https://lh3.googleusercontent.com/drive-viewer/AAOQEOSC_8MPp_SSavFyB80_sfZyr5h5XQvs7-xIx2y7az3VXBWnZaduBqzU5PD1qAzD3Ji3rEKDL36iKLuMb3iSmoKdd6Dx=w1366-h657" alt="Logo" />
        </div>
      </div>
      <div className="question_serction d-flex flex-column flex-md-row  align-items-center justify-content-between">
        <div className="image_question">
          <img src="https://lh3.googleusercontent.com/drive-viewer/AAOQEOSP9dt3E-95-SSsjfvRCowKVDuKibQ64B9TJhRa2UcoBbXcL6oUdBH9Ogt1f79gXCMkFhC7NEv3ARjalSg9UWxhDUkHIQ=w1366-h657" alt={"wondering"} />
        </div>
        <div className="question_text">
          <div className="question_title">
            <h3>Can I help you?</h3>
          </div>
          <div className="question_description text-secondary">
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
