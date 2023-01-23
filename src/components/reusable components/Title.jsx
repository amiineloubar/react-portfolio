import React from "react";

function Title(props) {
  return (
    <h2 className="title text-center mb-5 fw-bold" id={props.id}>
      {props.title}
    </h2>
  );
}

export default Title;
