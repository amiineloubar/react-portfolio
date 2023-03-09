import React from "react";

function ServicesCard(props) {
  return (
    <div className="card col-md-6 col-xl-4 p-3 mx-auto align-items-center">
      <img src={props.src} loading="lazy" alt={props.alt} className="card-image rounded-3" />
      <h4 className="card-title fs-5 mt-3">{props.cardTitle}</h4>
      <p className="card-description mt-2 opacity-75">
        {props.cardDescription}
      </p>
    </div>
  );
}

export default ServicesCard;
