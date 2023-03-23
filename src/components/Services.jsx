import React from "react";
import Title from "./reusable components/Title";
import ServicesCard from "./reusable components/ServicesCard";

function Services() {
  return (
    <div className="services-section mt-5 text-center mx-auto" id="services">
      <Title title="Services" />
      <div className="row cards gap-5">
        <ServicesCard
          src="https://lh3.googleusercontent.com/drive-viewer/AAOQEORQJxNwaBJD_SvCtxO5YwbHk2IsedU8hhsGi368yULXIyNo4An8c14oMzMtPSJwT_utzf_KiFnfu_XHtLRhKIazjAjI=w1366-h657"
          alt="mobile design"
          cardTitle="Mobile Interface Design"
          cardDescription="Design user interface for mobile application, beautiful and user
        friendly."
        />
        <ServicesCard
          src="https://lh3.googleusercontent.com/drive-viewer/AAOQEOQJBiS-6F9d219PrT8gXXQHgcdMpBcaauPtzTH6qRtPBlOFdocclQnyPzxe5AyFdkIWD4Nf0B7ElZnOumRG-6mzo1JyFA=w1366-h657"
          alt="web design"
          cardTitle="Web Design"
          cardDescription="Design websites interface, websites experience."
        />
        <ServicesCard
          src="https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOQE4a4rdrzRkg0T4nxsZLGvZLuC8uLFUn787LRy5oyaFTKtCWpI7R3BOj3ERu79Hct-rjDKHxt5rsvAEa59zWgR12mIvw=w1309-h657"
          alt="front end"
          cardTitle="Front end development"
          cardDescription="Transform the design to a real website using HTML, CSS,
            JavaScript..."
        />
      </div>
    </div>
  );
}

export default Services;
