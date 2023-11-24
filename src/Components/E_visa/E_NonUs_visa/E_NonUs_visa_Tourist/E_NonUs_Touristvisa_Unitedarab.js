import React from "react";
import pdf from "../../../../legalizationpdf/WVT-Work-Order.pdf"
const tableData = [
  {
    id: 1,
    column1: "Scanned copy of your passport",
    column2: {
      content: [
    "A clear scan of the information pages of your valid, signed passport with at least 6 months remaining validity and bear at least 2 blank pages."
    ],
    },
  },
  {
    id: 2,
    column1: "Proof of Vaccination or Negative PCR Test",
    column2: {
      content: [
     "Please provide a scan copy of your Covid-19 Vaccination Card. Card must show complete list of vaccines. Or a negative PCR test."
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
    column1: "UAE eVisa Questionnaire",
    column2: {
      content: ["One completed,To Download UAE Questionnaire Please reach out to support@worldvisatravel.com or call  (202) 289-6251 for more details.You may save your answers on this file and email. All questions must be answered in full in order for us to complete your application accurately."]
    },
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
    column1: "Flight Itinerary and Hotel Reservation",
    column2: {
      content: [
        "A copy of your confirmed flight itinerary, showing your name and your entry to and departure from your destination country, and a copy of the hotel reservations for the duration of the stay.",
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
  ["Single","$200.30","3 - 5 Business Days","14 Days","14 Days Valid"],
  ["Single","$200.30","3 - 5 Business Days","30 Days","EveryOne/EveryWhere"],
  
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

function E_NonUs_Touristvisa_Unitedarab() {
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

export default E_NonUs_Touristvisa_Unitedarab;
