import React from "react";

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
      content: ["Two passport-type photographs. Quality Requirements for Passport Book & Passport Card Photographs"],
    },
  },
  {
    id: 3,
    column1: "Proof of U.S. Status",
    column2: {
      content: ["A copy of evidence of legal status in the U.S."],
    },
  },
  {
    id: 4,
    column1: "Business Letter",
    column2: {
      content: ["	A business letter (sample) from the company is required."],
    },
  },
  {
    id: 4,
    column1: "Hotel Confirmation",
    column2: {
      content: ["A copy of your hotel confirmation(s)."],
    },
  },
  {
    id: 5,
    column1: "Religious/Media Purpose",
    column2: {
      content: ["A letter from the organization stating details of travelers and agreement to not perform any religious activities."],
    },
  },
  {
    id: 6,
    column1: "Letter of Invitation",
    column2: {
      content: ["A letter of invitation from host organization in Republic of Congo."],
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
        "Download Visa Application",
        "One completed Visa Application, MUST be typed and signed. If questions not applicable, type N/A.",
        "Download Supplemental Visa Application Form B",
        "One completed Supplemental Visa Application Form B, MUST be signed.",
        "**UPDATE as of February 2023, Visa applicants need to log on to the website “China Online Visa Application (COVA)” to fill in the online visa application, and make appointments for on-site submission at the Visa Office by the website “Appointment for Visa Application Submission (AVAS)”.",
        "Please contact us for further assistance.",
        "China Online Visa Application (COVA)",
        "Appointment for Visa Application Submission (AVAS)"
      ],
    },
  },

  {
    id: 8,
    column1: "WVT Work Order",
    column2: {
      content: [
        "Please complete WVT Work Order Form. Download here",
        "Payment can be processed with a credit card or a company/cashier check or money order.",
      ],
    },
  },

  {
    id: 9,
    column1: "Mail Your Documents",
    column2: {
      content: [
        "Please mail the completed required documents to:",
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
  ["Regular","Single/Double","$35.00/$50.00", "5-7 Business Days", "Up to 30 days", "	3 Months/6 Months"],
  ["Rush","Single/Double","$65.00/$80.00", "3-4 Business Days", "Up to 30 days", "	3 Months/6 Months"],
];

const datatable2 = [
    ["Regular","Single/Double/Multiple","$85.00", "5-7 Business Days", "Up to 30 days", "	3 Months - 10 Years"],
    
  ];
const datatable3 = [
  ["Regular","$200.00", "5-7 Business Days"],
  ["Rush","$240.00", "3-4 Business Days"],
  
  
];
const datatable4= [
  ["Less than 3 passports", "$36.00"],
  ["4 or more passports", "$39.00"],
  ["Saturday Delivery", "$41.00"],
];

function BusinessNonUsChina() {
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
          <h3 className="costing-Header">CONSULAR FEES (CANADIAN NATIONALITIES)</h3>
        </center>
        <table className="costing-responsive-table">
          <thead>
            <tr>
              <th>Type</th>
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
          <h3 className="costing-Header">CONSULAR FEES (CANADIAN NATIONALITIES)</h3>
        </center>
        <table className="costing-responsive-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Entry</th>
              <th>Price</th>
              <th>Processing Time</th>
              <th>Maximum Stay</th>
              <th>Valid</th>
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
              <th>Type</th>
              <th>Price</th>
              <th>Processing Time</th>
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
        *Depends on availability. Please contact us for more information.
        </h6>
      </div>

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
            {datatable4.map((row, rowIndex) => (
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

export default BusinessNonUsChina;
