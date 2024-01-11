import React from "react";
import pdf from "../../../../legalizationpdf/WVT-Work-Order.pdf"
import Thailand_Declaration_Form_2021 from "../../../../legalizationpdf/Thailand_Declaration_Form_2021.pdf"

const tableData = [
  {
    id: 1,
    column1: "Passport Scan",
    column2: {
      content: [
    "A clear color scan of the information/photo page of your original valid signed passport. This must show the full photo page and the adjacent page, with no parts of the passport cut off or obscured. All lines of coding at the bottom of the information page must be legible and visible. Your passport must have at least one blank visa page and more than six months before expiry. Please scan this at 300 DPI or greater.",
    
],
    },
  },
  {
    id: 2,
    column1: "Thailand Declaration Form",
    column2: {
      content: [
       "Please complete the Thailand Declaration Form and submit with your visa documents. E-Signature is accepted.",
       <a download={true} target='_blank' href={Thailand_Declaration_Form_2021}>Thailand Declaration Form</a>
    ],
    },
  },

  {
    id: 3,
    column1: "Thailand - Passport Pages Review",
    column2: {
      content: ["Traveler is required to provide copies of any passport pages which contains travel records for the past 12 months since the last international trip. If no travel was taken within the past 12 months, then a scan of each visa page of the passport will be required."],
    },
  },

  {
    id: 4,
    column1: "Driver's License Copy",
    column2: {
      content: ["A photocopy of your valid state-issued driver's license or ID card (front and back)"] },
  },
  {
    id: 5,
    column1: "One Digital Passport Photograph",
    column2: {
      content: [
        "One digital image of a recent color 2*2 passport photograph.",
        "A color JPEG scan of a physical photograph OR an electronic photograph may be submitted.",
        "The photo must be very clear with no shadows, pixelization, or distortions, with a minimum resolution of 600 DPI.",
        "The photo must have a white background and must have been taken within the past six months.",
        "To ensure you have a high-quality, acceptable image, we recommend using the WVT Passport & Visa Photo Both app for iPhone or Android to take your photo.",
      ],
    },
  },
  
  {
    id: 6,
    column1: "US Business Letter",
    column2: {
      content: [
        "A business letter from your US company.",
        "This letter must explain the purpose of the trip and provide a financial guarantee, and specify the dates of travel and the visa duration that is requested.",
        "The letter should include the contact information for the organization to be visited.",
        "It must be on letterhead and have an original signature of a representative of the US company other than the applicant.",
        "Note: For multiple entry visa requests, the letters from both the US company and Thai company must request multiple entries and must show at least two entry and exit dates.",
        "Also include a copy of the national ID or passport of the representative who signed the business letter.",
    ],
    },
  },
  {
    id: 7,
    column1: "Host Company's Business Registration",
    column2: {
      content: [
        "A copy of the host company's business registration or business license.",
        "This document may or may not be required according to consular discretion. To avoid potential processing delays, we recommend you include a copy of the license or registration.",
        "Faxed or scanned copies are acceptable.",
    ],
    },
  },
  {
    id: 8,
    column1: "Flight Itinerary",
    column2: {
      content: [
        "A copy of your confirmed flight itinerary, showing your name and your entry to and departure from your destination country.",
    ],
    },
  },
  {
    id: 9,
    column1: "Photo of traveler holding passport",
    column2: {
      content: [
        "Traveler must take a photo holding the passport showing the bio data page.",
    ],
    },
  },
  {
    id: 10,
    column1: "Recent Bank Statements for Last 6 Months",
    column2: {
      content: [
        "Copy of your most recent six months of bank statements. Account numbers may be blacked out for privacy; do not obscure any other information.",
    ],
    },
  },
  {
    id: 11,
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
    id: 12,
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
  ["Single","$205.00","15 Business Days","90 Days","1 Year Valid"],
  ["Multiple","$205.00","15  Business Days","90 Days","6 months Valid "],
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

function E_NonUs_Touristvisa_Thailand() {
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

export default E_NonUs_Touristvisa_Thailand;
