import React from "react";
import pdf from "../../../legalizationpdf/WVT-Work-Order.pdf";
import Russian_Visa_White_Glove_Form from "../../../legalizationpdf/Russian_Visa_White_Glove_Form.pdf";


const tableData = [
  {
    id: 1,
    column1: "Passport",
    column2: {
      content: [
        "U.S. Official/Diplomatic Passport – have to be valid at least 6 months beyond intended stay and must have at least two blank visa pages.",
         <p> <a href="/visas">Additional Visa Pages</a> and <a href="/passports/renew">U.S. Passport Renewal</a> </p>,
      ],
    },
  },
  {
    id: 2,
    column1: "Photo",
    column2: {
      content: [
        "Two passport-type photographs.Do NOT glue or staple the photo to the application.", <a href='https://travel.state.gov/content/travel/en/passports/how-apply/photos.html' target="_blank" >Quality Requirements for Passport Book & Passport Card Photographs</a>
      ],
    },
  },

  {
    id: 3,
    column1: "Diplomatic Letter/Note",
    column2: {
      content: [
        "	A cover letter from the government agency.",
              ],
    },
  },
  {
    id: 4,
    column1: "Letter of Invitation",
    column2: {
      content: [
        "	An official letter of invitation from hosting organization registered with the Russian Ministry of the Interior.",
              ],
    },
  },


  {
    id: 4,
    column1: "Proof of Departure",
    column2: {
      content: [
        "A copy of your round trip airline tickets, or itinerary, or letter of confirmation from a travel agent.",
      ],
    },
  },

  {
    id: 5,
    column1: "Application Form",
    column2: {
      content: [
        "The Russia Visa Online Application is known to be a long and tedious process.",
        "Almost all of our customers requested our White Glove Service to process Russia Visa Application.WVT can help you complete the Russia Visa Online Application through our White Glove Service (ONLY $55.00).",
        <a download={true} target='_blank' href={Russian_Visa_White_Glove_Form}>Russia White Glove Form</a>,
        "Please call for further assistance.",
        <a href="https://visa.kdmid.ru/PetitionChoice.aspx" target="_blank">Online Application Form</a>,
        "One completed Visa application, MUST be printed and signed.",
        "Note: The application has to be printed in separate papers, not back-to-back.",
        "If you are filling out the application by yourself, please remember to take down the Application ID and Password, and include them when you mail the documents to us.",
        "At the end of the application, you will be asked for the Visa Issuing Office location. Please select “Visa Application Center ILS (Washington)”.",
      ],
    },
  },

  {
    id: 6,
    column1: "WVT Work Order",
    column2: {
      content: [
        "Please complete WVT Work Order Form. ",
        <a download={true} target='_blank' href={pdf}>Download here</a>,
        "Payment can be processed with a credit card or a company/cashier check or money order.",
      ],
    },
  },

  {
    id: 7,
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
  [
    "Regular/Rush/Emergency",
    "Multiple",
    "$203.00",
    "6-10 Business Days/3-5 Business Days/1-3 Business Days",
    "Up to 1 Year",
    "-",
  ],
];

const datatable2 = [
  ["Regular", "$90.00", "6-10 Business Days"],
  ["Rush", "$150.00", "3-5 Business Days"],
  ["Emergency", "$200.00", "1-2 Business Days"],
];
const datatable3 = [
  ["Less than 3 passports", "$36.00"],
  ["4 or more passports", "$39.00"],
  ["Saturday Delivery", "$41.00"],
];

function OfficialUsRussia() {
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
          <h6>
            The Processing Time are estimates and may be prolonged during busy
            periods.
          </h6>
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

export default OfficialUsRussia;
