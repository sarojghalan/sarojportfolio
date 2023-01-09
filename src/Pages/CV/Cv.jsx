import React from "react";
import TitleContent from "../../Provider/TitleContent/TitleContent";
import resume from "../../../src/Assests/sarojresume.pdf";

const Cv = () => {
  return (
    <>
      <TitleContent heading="My CV" />
      <div className="container">
        <div className="main">
          <div className="cv-main">
          <object data={resume} type="" width="80%" height="900"></object>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cv;
