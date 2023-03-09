import React from "react";
import Title from "./reusable components/Title";
import ServicesCard from "./reusable components/ServicesCard";

function Services() {
  return (
    <div className="services-section mt-5 text-center mx-auto" id="services">
      <Title title="Services" />
      <div className="row cards gap-5">
        <ServicesCard
          src="https://fv9-5.failiem.lv/thumb_show.php?i=yfakatx8e&view"
          alt="mobile design"
          cardTitle="Mobile Interface Design"
          cardDescription="Design user interface for mobile application, beautiful and user
        friendly."
        />
        <ServicesCard
          src="https://fv9-5.failiem.lv/thumb_show.php?i=j4wp2veeu&view"
          alt="web design"
          cardTitle="Web Design"
          cardDescription="Design websites interface, websites experience."
        />
        <ServicesCard
          src="https://fv9-3.failiem.lv/thumb_show.php?i=yvbuvu9ww&view"
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
