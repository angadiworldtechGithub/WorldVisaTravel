import React from "react";
import VisaCardType from "../../Components/VisaTypeCard";

function Visa() {
  const visatypes = [
    { type: "tourist" },
    { type: "business" },
    { type: "official" },
  ];
  return (
    <div className="container py-5">
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
      <div className="row " style={{ rowGap: "20px" }}>
        {visatypes.map((visa) => {
          return (
            <div className="col-md-6 col-lg-4 ">
              <VisaCardType type={visa.type} citizenship={visa.citizenship} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Visa;
