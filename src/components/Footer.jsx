import React from "react";
import myLogo from "../assets/other/logo.png";
import khamsat from "../assets/other/khamsat.png";
import mostaql from "../assets/other/mostql.png";
import fiverr from "../assets/other/fiverr.png";
import instagram from "../assets/social_media/instagram.png";
import twitter from "../assets/social_media/twitter.png";
import linkedIn from "../assets/social_media/linkedin-in.png";
import gitHub from "../assets/social_media/github.png";
import email from "../assets/other/email.png";

function Footer() {
  return (
    <footer className="footer pb-0 mt-5" id="contact">
      <div className="site-section">
        <div className="container">
          <div className="row">
            <h3 className="text-white-50 mb-3">Feel free to contact me:</h3>
            <div className="d-flex align-items-center mb-3">
              <img src={email} alt="email" className="me-2" width={"25px"} />
              <p className="text-white fs-5 mb-0">
                amine.loubar.1999@gmail.com
              </p>
            </div>
            <div className="hire col-md mb-4 mb-md-0">
              <h3 className="text-white-50 mb-3">Hire me on:</h3>
              <ul className="freelance-websites d-flex flex-column gap-2">
                <li className="d-flex align-items-center gap-2">
                  <img src={khamsat} alt="khamsat" />
                  <a
                    href="https://khamsat.com/user/amine1805"
                    className="arabic-text text-white opacity-75"
                  >
                    خمسات
                  </a>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <img src={mostaql} alt="mostaql" />
                  <a
                    href="https://mostaql.com/u/Amin_Aymane"
                    className="arabic-text text-white opacity-75"
                  >
                    مستقل
                  </a>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <img src={fiverr} alt="fiverr" />
                  <a
                    href="https://www.fiverr.com/amine_for_uiux"
                    className="text-white opacity-75"
                  >
                    Fiverr
                  </a>
                </li>
              </ul>
              <h3 className="text-white-50 mt-4 mb-3">
                Find me on social media
              </h3>
              <ul className="social-media d-flex flex-column gap-2">
                <li className="d-flex align-items-center gap-2">
                  <img src={instagram} alt="instagram" width={"25px"} />
                  <a
                    href="https://www.instagram.com/amiineloubar"
                    className="text-white opacity-75"
                    target="blank"
                  >
                    @amiineloubar
                  </a>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <img src={twitter} alt="twitter" width={"25px"} />
                  <a
                    href="https://twitter.com/amiineloubar"
                    className="text-white opacity-75"
                    target="blank"
                  >
                    @amiineloubar
                  </a>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <img src={linkedIn} alt="linkedIn" width={"25px"} />
                  <a
                    href="https://www.linkedin.com/in/amiineloubar"
                    className="text-white opacity-75"
                    target="blank"
                  >
                    @amiineloubar
                  </a>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <img src={gitHub} alt="gitHub" width={"25px"} />
                  <a
                    href="https://github.com/amiineloubar"
                    className="text-white opacity-75"
                    target="blank"
                  >
                    @amiineloubar
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12">
              <div className="bottom py-5 d-flex flex-column flex-lg-row justify-content-between align-items-center">
                <ul className="list-unstyled d-flex flex-column flex-lg-row align-items-center gap-3">
                  <li>
                    <a className="text-white opacity-75" href="#home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="text-white opacity-75" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="text-white opacity-75" href="#services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="text-white opacity-75" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a className="text-white opacity-75" href="#contact">
                      Contacts
                    </a>
                  </li>
                </ul>
                <div className="site-logo-wrap ml-auto">
                  <a className="navbar-brand logo fs-4 text-black" href="#home">
                    <img
                      src={myLogo}
                      alt="my-logo"
                      className="my-logo mx-2 ms-3"
                    />
                    <a className="text-white" href="/">
                      Amine Loubar
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
