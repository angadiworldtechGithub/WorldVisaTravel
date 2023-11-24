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
      <div className="country-container">
       <div className="country-container-service">
       <h5 className="country-service-header">Passport</h5>
       <img
         style={{ paddingBottom: "23px" }}
         src="/assets/visacountry/moreinfo1.png"
         width={"98%"}
       ></img>
       <p>
       Your passport's validity should extend for a minimum of six months beyond the intended duration of your stay. Ensuring this requirement is met is crucial 
       for hassle-free international travel and entry into many countries.
       </p>
       </div>
       <div className="country-container-service">
       <h5 className="country-service-header">Other Required Documents</h5>
       <img  style={{ paddingBottom: "23px" }} src="/assets/visacountry/moreinfo2.png" width={"98%"}></img>
       <p>
       Other Required Documents for visas and passports may include proof of travel insurance, photographs, visa application forms,
        and supporting documents to facilitate the application and approval process.
       </p>
       </div>
      </div>
   
        <center>
        <h3 className="Country-header-content">Application process</h3>
      </center>

      <div className="Application-process-container">
        <div className="Application-item ">
          <h5 className="Application-item-heading">Research</h5>
          <p>
          Application process research involves gathering and analyzing data to understand
          and improve the steps and requirements for applying to a specific program, job, or institution. It helps streamline the application journey and enhance the applicant's experience.
          </p>
        </div>
        <div className="Application-item">
          <h5  className="Application-item-heading">complete Forms</h5>
          <p>
          Completing application forms is a fundamental step in the application process, where applicants provide essential information,
          qualifications, and personal details required for admission or consideration.
          </p>
        </div>
        <div className="Application-item ">
          <h5  className="Application-item-heading">Submit Applications</h5>
          <p>
          Submitting applications marks the final step in the application process, where applicants send their completed forms, documents, and required materials 
          for review and evaluation by the relevant authorities or organizations.
          </p>
        </div>
        <div className="Application-item ">
          <h5  className="Application-item-heading">Wait for Decision</h5>
          <p>
          Following submission, applicants enter the waiting phase, during which they await a decision on their applications. This period involves evaluation and assessment by
           the decision-making entity, which ultimately determines the outcome.
          </p>
        </div>
      </div>
      </div>
  );
}

export default Businessvisa;
