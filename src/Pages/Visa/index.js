import React from "react";
import VisaCardType from "../../Components/VisaTypeCard";

function Visa() {
  return (
    <div className="container">
      {/* <p>
        add 6 different types of visa cards and add a modal to display
        information TOURIST VISA FOR US CITIZENS
      </p>
      country selector for each
      <p>TOURIST VISA FOR US CITIZENS</p>
      <p>Tourist visa for non us citizen</p>
      <p>business visa for us citizen</p>
      <p>business visa for non us citizen</p>
      <p>official/diplomatic visa for us citizen</p>
      <p>business visa for non us citizen</p>
      <VisaCardType /> */}
      <div className="row">
        <div className="col-md-6 col-lg-4 p-2">
          <VisaCardType />
        </div>
        <div className="col-md-6 col-lg-4 p-2">
          <VisaCardType />
        </div>
        <div className="col-md-6 col-lg-4 p-2">
          <VisaCardType />
        </div>
        <div className="col-md-6 col-lg-4 p-2">
          <VisaCardType />
        </div>
        <div className="col-md-6 col-lg-4 p-2">
          <VisaCardType />
        </div>
        <div className="col-md-6 col-lg-4 p-2">
          <VisaCardType />
        </div>
      </div>
    </div>
  );
}

export default Visa;
