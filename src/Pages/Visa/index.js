import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import HomeIcon from "../../Components/icons/HomeIcon";
import VisaCardType from "../../Components/VisaTypeCard";

function Visa() {
  const visatypes = [
    { type: "tourist", backgroundimage: "/assets/visa/visa1.png", route: "/moreinfo/Tourist" },
    { type: "business", backgroundimage: "/assets/visa/visa2.png", route: "/moreinfo/businessvisa" },
    { type: "official", backgroundimage: "/assets/visa/visa3.png", route: "/moreinfo/officialvisa" },
    { type: "E-visa", backgroundimage: "/assets/visa/visa3.png", route: "/moreinfo/e-visa" },
  ];

  return (
    <div className="visa">
      <div className={`${styles["visa-container"]} d-flex position-relative align-items-center`}>
        <div className="container d-flex flex-column text-light">
          <h2>Visas</h2>
          <div className="d-flex gap-2 align-items-center">
            <Link to="/">
              <HomeIcon />
            </Link>
            <span className="sep"> → </span>
            <span>Visas</span>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row " style={{ rowGap: "20px", color: "#072f5f" }}>
          {visatypes.map((visa, index) => {
            return (
              <div className="col-md-6 col-lg-4" key={index}>
                <Link to={visa.route}>
                  {/* You can pass other props to the VisaCardType component if needed */}
                  <VisaCardType  type={visa.type} bg={visa.backgroundimage} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Visa;