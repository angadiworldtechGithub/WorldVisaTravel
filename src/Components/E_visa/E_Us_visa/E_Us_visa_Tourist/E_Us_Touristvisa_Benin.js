import React from "react";
import pdf from "../../../../legalizationpdf/WVT-Work-Order.pdf"
const tableData = [
  {
    id: 1,
    column1: "Passport",
    column2: {
      content: [
        "	Passport – have to be valid at least 6 months beyond intended stay and must have at least two blank visa pages.",
      ],
    },
  },
  {
    id: 2,
    column1: "Photo",
    column2: {
      content: [
        "One passport-type photograph.",
        <a href='https://travel.state.gov/content/travel/en/passports/how-apply/photos.html' target="_blank" >Quality Requirements for Passport Book & Passport Card Photographs</a>
      ],
    },
  },

  {
    id: 3,
    column1: "eVisa Instructions",
    column2: {
      content: ["Please note: all documents listed below should be emailed to support@worldvisatravel.com. Our eVisa team will complete your eVisa and return the finished visa to you by secured email."],
    },
  },

  {
    id: 4,
    column1: "Benin eVisa Questionnaire",
    column2: {
      content: ["Complete the ",
      "You may save your answers on the fillable PDF and email it directly with the rest of the documents.",
      "Please note that your Benin eVisa will be valid starting on the date of entry you state on your questionnaire.",
      "Make sure to list the earliest possible date you may enter Benin.",],
    },
  },

  {
    id: 6,
    column1: "Proof of Departure",
    column2: {
      content: [
        "A copy of your round trip airline tickets, or itinerary, or letter of confirmation from a travel agent.",
      ],
    },
  },
  {
    id: 7,
    column1: "Application Form",
    column2: {
      content: [
        <a >Download Visa Application</a>,
        "One completed Visa Application, MUST be notarized and signed.",
      ],
    },
  },

  {
    id: 8,
    column1: "WVT Work Order",
    column2: {
      content: [
        "Please complete WVT Work Order Form.",
        <a download={true} target='_blank' href={pdf}>Download here</a>,
        "Payment can be processed with a credit card or a company/cashier check or money order.",
      ],
    },
  },

  {
    id: 9,
    column1: "Mail Your Documents",
    column2: {
      content: [
        "Please mail the completed required documents to:support@worldvisatravel.com",
        "World Visa Travel, Inc.",
        "1413 K Street, N.W.",
        "9th Floor",
        "Washington, D.C. 20005",
        "Telephone: (202) 289-6251",
      ],
    },
  },
];

const datatable1 = [
  ["Single/Multiple/Multiple", "$95.75", "2 - 4 Business Days","30 Days/90 Days/30Days Stay","30 Days valid"],

];

const datatable2 = [
  ["$119.00", "10 Business Days"],
];
const datatable3 = [
  ["Less than 3 passports", "$36.00"],
  ["4 or more passports", "$39.00"],
  ["Saturday Delivery", "$41.00"],
];
const datatable4 = [
    ["DIGITAL PHOTO SERVICE", "$25.00","Email your photos to WVT to have them formatted to consulate specifications."],
    ["PASSPORT PROTECTION PLAN", "$40.00","If your passport is lost, stolen, or damaged, WVT will replace it without charging our standard service fee; valid until your passport expires."],
    ["DOCUMENT PRE-CHECK", "$79.00","Prevent delays and errors - email your documents to WVT to have them reviewed within 1 business day. (Included in Concierge Service)"],
  ];

function E_Us_Touristvisa_Benin() {
  return (
    <div>
      <div>
        <div className="req-table-container">
          <table>
            <thead>
              <tr>
                <th className="reqdocument-column1">Required Documents</th>
                <th className="reqdocument-column2">Description</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td>{row.column1}</td>
                  <td>
                    <div className="column2-content">
                      {row.column2.content.map((content, index) => (
                        <div key={index}>{content}</div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="req-table-container">
        <center>
          <h3 className="costing-Header">CONSULAR FEES</h3>
        </center>
        <table className="costing-responsive-table">
          <thead>
            <tr>
              <th>Entry</th>
              <th>Price</th>
              <th>Processing Time</th>
              <th>Maximum Stay</th>
              <th>Valid</th>
            </tr>
          </thead>
          <tbody>
            {datatable1.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, columnIndex) => (
                  <td key={columnIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="Detailsdata_descripition">
          <h6>The fees above include a $5.00 check writing fee.</h6>
          <h6>Consular fees are subject to change without notice.</h6>
          <h6>If there is any uncertainty, please give us a call to verify.</h6>
          <h6>
            Maximum Stay and Validity of Visa is dependent on the Embassy’s
            discretion.
          </h6>
        </div>

        <center>
          <h3 className="costing-Header"> WORLD VISA TRAVEL SERVICE FEES</h3>
        </center>
        <table className="costing-responsive-table">
          <thead>
            <tr>
              <th>Price</th>
              <th>Processing Time</th>
            </tr>
          </thead>
          <tbody>
            {datatable2.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, columnIndex) => (
                  <td key={columnIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <h6>*Including $5.00 Money Order Fee</h6>

        <center>
        <h3 className="costing-Header">Additional Services</h3>
      </center>
      <table className="costing-responsive-table">
        <thead>
          <tr>
             <th>Services</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {datatable4.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td key={columnIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    
        <center>
          <h3 className="costing-Header">RETURN SHIPPING FEES</h3>
        </center>
        <table className="costing-responsive-table">
          <thead>
            <tr>
              <th className="reqdocument-column1">FedEx Overnight</th>
              <th className="reqdocument-column1">Price</th>
            </tr>
          </thead>

          <tbody>
            {datatable3.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, columnIndex) => (
                  <td key={columnIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="Detailsdata_descripition">
          <h6>
            Update: FedEx charges an additional $6.50 for residential areas.
            Please call for shipping to Alaska/Hawaii.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default E_Us_Touristvisa_Benin;
