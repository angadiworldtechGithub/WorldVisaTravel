import React from "react";
import Detailsdata from "../Detailsdata/Detailsdata";

const ReqdoumentsTable = () => {
  const tableData = [
    {
      id: 1,
      column1: "Passport",
      column2: {
        content: ["Your most recently issued valid 10 year passport."],
      },
    },
    {
      id: 2,
      column1: "Photo",
      column2: {
        content: [
          "Two passport-type photographs. Photograph with eye glasses will no longer be accepted by the US Passport Agency.",
          "Quality Requirements for Passport Book & Passport Card Photographs",
        ],
      },
    },

    {
      id: 3,
      column1: "Letter of Authorization",
      column2: {
        content: [
          "Download Authorization Letter",
          "One completed and signed Letter of Authorization.",
        ],
      },
    },

    {
      id: 4,
      column1: "Letter of Explanation",
      column2: {
        content: [
          "Download Explanation Letter",
          "One completed and signed Letter of Explanation",
        ],
      },
    },

    {
      id: 5,
      column1: "Name Change",
      column2: {
        content: [
          "A name change documentation by marriage or court order is required (if applicable).",
        ],
      },
    },

    {
      id: 6,
      column1: "Proof of Departure",
      column2: {
        content: [
          "A copy of your round trip airline tickets, or itinerary, or letter for employer (for Same Day/Next Day processing).",
        ],
      },
    },

    {
      id: 7,
      column1: "DS-82 Application Form",
      column2: {
        content: [
          "DS-82: Online Application for New Passport",
          "Please complete application online and print ONE",
          "completed DS-82 form.*We advise to use the most",
          "updated version of the form provided by the link.",
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

  return (
    <div className="req-table-container">
     <center><h3 className="reqdocument-citizens"><b>Indian Citizens</b></h3></center>
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
  );
};

const Details = () => {
  return (
    <div className="reqdouments">
      <center className="reqdouments-header">{Headers}</center>
      <ReqdoumentsTable />
      <div className="reqdoument_table"><Detailsdata/></div>
    </div>
  );
};

export default Details;
