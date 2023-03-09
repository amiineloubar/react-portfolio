import React from "react";
import resume from "../assets/resume/Amine Loubar.pdf";

function MainSection() {
    return (
        <>
            <div className="main-section" id="home">
                <div className="rectangles overflow-hidden">
                    <div className="rectangle1 rectangle"></div>
                    <div className="rectangle2 rectangle"></div>
                    <div className="rectangle3 rectangle"></div>
                    <div className="main-text d-flex flex-column justify-content-between gap-2  align-items-center">
                        <h2 className="overflow-hidden fs-1 fw-bold text-center">
                            Hey, I'm <span>Amine...</span>
                        </h2>
                        <p className="text-center opacity-75 lh-base">
                            I am a ui designer and front end developer, I have been designing interfaces as a freelancer for a year.
                        </p>
                        <div className="butttons d-flex flex-column flex-md-row gap-3 gap-lg-4 mt-3">
                            <a href="#contact" className="btn btn-primary mt-3 fw-normal">
                                Contact me
                            </a>
                            <a href={resume} download className="btn btn-outline-primary mt-3 fw-normal">
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainSection;
