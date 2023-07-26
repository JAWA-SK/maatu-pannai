import React from "react";
import "../CssFiles/HomePage2.css";

function HomePage2() {
  var body = document.querySelector("body");
  return (
    <div>
      <div className="aboutus">
        <div className="content">
          <h2>ABOUT US</h2>
          <h1>We Have Been Milk Harvesting</h1>
          <p className="firstPara">
            Our community is being called to reimagine the future. As the only
            university where a renowned design school comes together with
            premier colleges, we are making learning more relevant and
            transformational Aliquam at magna et mi interdum rhoncus quis sit
            amet lorem.{" "}
          </p>
          <p className="secondPara">
            We are proud to offer top ranige in employment services such and
            asser payroll and benefits administrato managemen and asistance with
            global business range ployment employer readings from religious
            texts or literature are also commonly inc compliance.
          </p>
        </div>
        <div>
          <img className="contentImage" src="public/milking2.jpg"></img>
        </div>
      </div>
    </div>
  );
}

export default HomePage2;
