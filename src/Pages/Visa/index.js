import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import HomeIcon from "../../Components/icons/HomeIcon";
import VisaCardType from "../../Components/VisaTypeCard";

function Visa() {
  const visatypes = [
    { type: "tourist", backgroundimage:"/assets/visa/visa1.png" },
    { type: "business", backgroundimage:"/assets/visa/visa2.png" },
    { type: "official", backgroundimage:"/assets/visa/visa3.png" },
    { type: "E-", backgroundimage:"/assets/visa/visa3.png" },
  ];
  return (
    <div className="visa">
    <div
    className={`${styles["visa-container"]} d-flex position-relative align-items-center`}
    >
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
      <div className="row " style={{ rowGap: "20px",color:"#072f5f" }}>
        {visatypes.map((visa) => {
          return (
            <div className="col-md-6 col-lg-4 ">
              <VisaCardType type={visa.type}  bg={visa.backgroundimage} citizenship={visa.citizenship} />
            
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default Visa;
