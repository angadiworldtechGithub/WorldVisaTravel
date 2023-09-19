import React from "react";
import "./Businessvisa.css";
import FormVisa from "../../Components/FormVisa/FormVisa";

function Businessvisa() {
  return (
    <div>
      <div className="Moreinfo-container">
        <div className="Moreinfo-left-flex">
          <h3 className="Country-header-content">Business Visa</h3>
          <p className="Country-passage">
            Experience hassle-free global mobility with our comprehensive
            business visa services. Our expertise spans across a spectrum of
            visa categories, from investor visas to work permits, enabling your
            ventures to thrive without borders. Let us be your gateway to
            international opportunities.
          </p>
          <img
            className="more_image"
            src="/assets/visaservices/businessvisa.png"
            alt="Tourist Visa"
            width="90%"
          />
        </div>

        <FormVisa visaType={"Business Visa"} />
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
          <h5 className="country-service-header">Criminal Background Check</h5>
          <img src="/assets/visacountry/moreinfo3.png" width={"98%"}></img>
          <p>
            Some countries require a criminal background check before issuing a
            visa. Check the specific requirements for your destination.
          </p>
        </div>
      </div>

      <center>
        <h3 className="Country-header-content">Application process</h3>
      </center>
      <div className="Application-process-container">
        <div className="Application-item ">
          <h5>Research</h5>
          <p>
            Some countries require a criminal background check before issuing a
            visa. Check the specific requirements for your destination.
          </p>
        </div>
        <div className="Application-item">
          <h5>complete Forms</h5>
          <p>
            Some countries require a criminal background check before issuing a
            visa. Check the specific requirements for your destination.
          </p>
        </div>
        <div className="Application-item ">
          <h5>Submit Applications</h5>
          <p>
            Some countries require a criminal background check before issuing a
            visa. Check the specific requirements for your destination.
          </p>
        </div>
        <div className="Application-item ">
          <h5>Wait for Decision</h5>
          <p>
            Some countries require a criminal background check before issuing a
            visa. Check the specific requirements for your destination.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Businessvisa;
