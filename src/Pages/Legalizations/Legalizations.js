// App.js
import React from "react";
import "./Legalizations.css"; // Import your CSS file for styling

const Legalizations = () => {
  const data = [
    { name: "Notary Public", description: "	$200.00" },
    { name: "DC Notary", description: "" },
    { name: "U.S. Department of State", description: "" },
    { name: "Embassy/Consular", description: "" },
    
  ];

  const data1 = [
    { name: "U.S. Department of State", description: "$140.00" },
    { name: "Embassy/Consular", description: "" },
 
  ];
  const data2 = [
    { name: "Continental USA Only", description: "Price" },
    { name: " Next Business Day - up to 3 passports", description: "	$36.00" },
    { name: "Next Business Day - 4 or more passports", description: "$39.00" },
    { name: "Saturday Delivery", description: "$41.00" },
    { name: "Alaska, Puerto Rico, Hawaii, USVI", description: "Price" },
    { name: "Next Day Letter (No Saturday Delivery)", description: "$39.00" },
    { name: "International", description: "Price" },
    { name: "Call for a quote", description: "" },
  ];
  const data3 = [
    { name: "WVT Service", description: " $80.00" },
    { name: "Notary Public", description: "$5.00" },
    { name: "DC Notary", description: "$15.00" },
    { name: "U.S Department of State", description: " $20.00" },
    { name: "Embassy/Consular", description: " Varies, Call for Quote" },
    { name: "Photocopy", description: "$1.00" },
  ];
  return (
    <div className="legal-container">
    <div className="legal-banner">
       <img src="assets/banners/legalization.png" alt="Banner" />
    </div>
  
    
    <div className="legal">

      <div className="legal-main-content1">
        <div className="legal-flex-section-img">
          <img src="assets/legal/3.png" alt="Banner"></img>
        </div>
        <div className="legal-flex-section">
          <h3 className="legal-header">DOCUMENT LEGALIZATION AND AUTHENTICATION</h3>
          <p>World Visa Travel helps you to take care all of the entire process of
          the document legalization and authentication services to be ready for
          use in the designated country. Please note: several Embassies will
          require a copy of photo ID for verification purposes.</p>
          <h5>China: (Download the Legalization Form for China here.)</h5> 
        </div>
      </div>

      <div className="legal-main-content2">
      <h3  className="legal-header">WVT FULL SERVICE FEE</h3>
      <h5 className="legal-header-h4">Fees charged by World Visa Travel in processing your documents.</h5>
      </div>
      <section className="table-section">
        <table className="table">
          <thead>
            <tr>
              <th>Services</th>
              <th>Fees (Per Document)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div>
      <h6>Fees are subject to change without notice.</h6>
      <h6>WVT Fees only cover our processing fees.</h6>
      <h6>Different legalization services fees are not included.</h6>
      <h6>If there is any uncertainty, please give us a call to verify.</h6>
      </div>

      <div  className="legal-main-content3">
        <h3  className="legal-header">WVT SHORT STEP FEE</h3>
        <h5 className="legal-header-h4">Fees charged by World Visa Travel in processing your documents.</h5>
      </div>

      <section className="table-section">
        <table className="table">
          <thead>
            <tr>
              <th>Services</th>
              <th>Fees (Per Document)</th>
            </tr>
          </thead>
          <tbody>
            {data1.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <h6>Fees are subject to change without notice.</h6>
      <h6>WVT Fees only cover our processing fees.</h6>
      <h6>Different legalization services fees are not included.</h6>
      <h6>If there is any uncertainty, please give us a call to verify.</h6>


      <div className="legal-main-content4">
        <div className="legal-flex-section">
          <h3  className="legal-header">WVT LEGALIZATION WORK ORDER</h3>
          <p>
            <h5>You must fill in the WVT Work Legalization Order Form. Download here</h5>
            The order form gives WVT your name, address, shipping information
            and payment method. You only need to complete one WVT legalization
            work order form per request. Please print two copies of the
            confirmation page. Include one copy with the documents you ship to
            WVT and keep one copy for your records.
          </p>
          <h6>
            You may pay our fees with a credit card or enclose a company/cashier
            check or money order.
          </h6>
        </div>
        <div className="legal-flex-section-img">
          <img src="assets/legal/4.png" alt="Banner"></img>
        </div>
      </div>

      <div className="legal-main-content5">
        <div className="legal-flex-section-img">
          <img src="assets/legal/5.png" alt="Banner"></img>
        </div>
        <div className="legal-flex-section">
          <h3  className="legal-header">MAIL YOUR DOCUMENTS</h3>
          <h5>Please mail the completed requirements to:</h5>

          <address>
            {" "}
            <span><b>World Visa Travel, Inc.</b></span><br></br>
            1413 K Street, N.W. <br></br>
            9th Floor<br></br>
            Washington,D.C. 20005 <br></br>
            Telephone: (202) 289-6251M<br></br>
          </address>

          <h5>
            Urgent applications should be shipped to WVT using only the FedEx
            Company.
          </h5>

          <p>
            Please use FedEx Priority Overnight. If you are going to use FedEx
            First Overnight, please let us know. Otherwise, this delivery method
            will delay the process.
          </p>
        </div>
      </div>

      <div  className="legal-main-content6">
        <h3  className="legal-header">RETURN SHIPPING FEES</h3>
        <h5 className="legal-header-h4">
          Once your order is complete, your documents will be returned to you
          via FedEx Overnight.
        </h5>
      </div>
      <section className="table-section">
        <table className="table">
          <thead>
            <tr>
              <th>FedEx Return Shipping</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data2.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      

      <div  className="legal-main-content7">
        <h3 className="legal-header">STANDARD LEGALIZATION FEES</h3>
         <h5 className="legal-header-h4">Fees charged by different legalization services.</h5>
      </div>
      <section className="table-section">
        <table className="table">
          <thead>
            <tr>
              <th>Services</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody>
            {data3.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      


      <div>
        <h6>Fees are subject to change without notice.</h6>
        <h6>If there is any uncertainty, please give us a call to verify.</h6>

        <h5>
           <b>Note: </b>To meet Embassy requirements, please include a full copy
          (including originals) of all documents to be authenticated.<br></br>
           If no copies are included, WVT will make copies on your behalf and add a
          $1.00 per document copying fee to your invoice.
        </h5>
      </div>
    </div>
    </div>
  );
};

export default Legalizations;
