import React from "react";
import "./Business_Sample.css"

function Business_Sample() {
  return (
    <div className="Businesssample_Container">
      <h4 className="Businesssample_heading">SAMPLE BUSINESS LETTER</h4>
       <h5><b > Sample Business Letter of Financial Responsibility </b> </h5> 
      <h5><b>(WRITTEN ON YOUR COMPANY LETTERHEAD)</b></h5>
      <address>Embassy of (Country Name) Visa Section Washington, DC</address>
      <p className="Businesssample_paragraph">
        (Your company) is pleased to introduce (Applicant's full name & title)
        who is traveling to your country on (approx. dates of travel) for the
        purpose of (business discussions, or negotiations, etc.). While visiting
        (Country Name), (applicant's name) will meet with representatives of
        (name and address of host company in (Country Name)). (Your company)
        hereby guarantees the financial expenses of the applicant while (he/she)
        is visiting your country and (his/her) return transportation to the USA.
        We appreciate the issue of the Visa without delay.
      </p>
      Sincerely, (Signatory should be a Company manager, other than the
      applicant)
      <address>Categories Slider</address>
    </div>
  );
}

export default Business_Sample;
