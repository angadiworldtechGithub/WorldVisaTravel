import React from "react";
import "./Tourist.css";
import FormVisa from "../../Components/FormVisa/FormVisa";

function Tourist() {
  return (
    <div>
      <div>
        <div className="Moreinfo-container">
          <div className="Moreinfo-left-flex">
            <h3 className="Country-header-content">Tourist Visa</h3>
            <p className="Country-passage">
              A Tourist visa allows travelers to visit a foreign country for
              leisure, sightseeing, and recreational purposes, typically for a
              limited duration.
            </p>
            <img
              className="more_image"
              src="/assets/Touristvisa.png"
              alt="Tourist Visa"
              width="90%"
            />
          </div>
          <FormVisa visaType={"Tourist Visa"} />
        </div>
        <center>
          <h3 className="Country-header-content">Visa Requirements</h3>
        </center>
        <div className="country-container-two">
          <div className="country-services">
            <h5 className="country-service-header">Passport</h5>
            <img
              style={{ paddingBottom: "23px" }}
              src="/assets/visacountry/moreinfo1.png"
              width={"98%"}
            ></img>
            <p>
              Your passport must be valid for at least six months beyond the
              duration of your stay.
            </p>
          </div>

          <div className="country-services">
            <h5 className="country-service-header">Proof of Funds</h5>
            <img src="/assets/visacountry/moreinfo2.png" width={"98%"}></img>
            <p>
              You must show that you have enough funds to cover your stay. This
              can include bank statements or a letter from your employer.
            </p>
          </div>

          <div className="country-services">
            <h5 className="country-service-header">
              Criminal Background Check
            </h5>
            <img src="/assets/visacountry/moreinfo3.png" width={"98%"}></img>
            <p>
              Some countries require a criminal background check before issuing
              a visa. Check the specific requirements for your destination.
            </p>
          </div>
        </div>

        <center>
          <h3 className="Country-header-content">Application process</h3>
        </center>
        <div className="Application-process-container">
          <div className="Application-item ">
            <h5  className="Application-item-heading">Research</h5>
            <p>
              Some countries require a criminal background check before issuing
              a visa. Check the specific requirements for your destination.
            </p>
          </div>
          <div className="Application-item">
            <h5  className="Application-item-heading">complete Forms</h5>
            <p>
              Some countries require a criminal background check before issuing
              a visa. Check the specific requirements for your destination.
            </p>
          </div>
          <div className="Application-item ">
            <h5  className="Application-item-heading">Submit Applications</h5>
            <p>
              Some countries require a criminal background check before issuing
              a visa. Check the specific requirements for your destination.
            </p>
          </div>
          <div className="Application-item ">
            <h5  className="Application-item-heading">Wait for Decision</h5>
            <p>
              Some countries require a criminal background check before issuing
              a visa. Check the specific requirements for your destination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tourist;
