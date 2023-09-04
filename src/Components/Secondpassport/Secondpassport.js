import React from "react";
import "./Secondpassport.css"; // Create a CSS file for styling
import Secondptable from "../Secondptable/Secondptable";

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

const Secondpassport = () => {
  return (
    <div className="reqdouments">
      <center className="reqdouments-header">
        <h3 className="costing-Header">SECOND VALID U.S. PASSPORT</h3>
        <h5>REQUIRED DOCUMENTS</h5>
      </center>
      {/* <SecondpassportTable /> */}
      <div className="reqdouments-passage-list">
        <center>
          <h3 className="costing-Header">APPLICATION GUIDE</h3>
          <h4 className="costing-Header-h5">
            Issue is determined by the U.S. Passport Agency based on the urgency
            of your departure.
          </h4>
          <h5
            style={{
              color: "#2C3A90",
              paddingBottom: "40px",
              fontWeight: "700",
            }}
          >
            PLEASE FOLLOW THESE INSTRUCTIONS CAREFULLY. MISSING OR INCORRECT
            INFORMATION MAY RESULT IN SIGNIFICANT DELAYS.
          </h5>
        </center>
        <ol>
          <h5>
            <b>Go to U.S. Passport Applications and Forms</b>
          </h5>
          <li>
            Check the{" "}
            <b>
              Privacy and Computer Fraud and Abuse Acts Notices and Disclaimers
            </b>{" "}
            and Click “Submit”.
          </li>
          <li>Choose “Complete Form Online” and Click “Submit”.</li>
          <li>
            In the <b>About the Applicant</b> page,
          </li>
          <ul>
            <li>
              Check the{" "}
              <b>Privacy Act and Paperwork Reduction Act statements</b> and Fill
              Out the necessary fields
            </li>
            <li>Click “Next” when done</li>
          </ul>
          <li>
            In the <b>Contact Information</b> page,
          </li>
          <ul>
            <li>Fill Out the necessary fields</li>
            <li>
              Choose “Yes” for <b>Permanent Address</b>
            </li>
            <li>
              Choose “Mail” for <b>Preferred Method of Communication</b>
            </li>
            <p>
              <b>Note : </b>We will deliver your Passport to your desired
              address. The information here is only for application purpose.
            </p>
            <li>Click “Next” when done</li>
          </ul>
          <li>
            In the<b> Travel Plans</b> page,
          </li>
          <ul>
            <li>
              If you need the Passport to be back immediately, you MUST enter
              the travel dates in <b>TWO WEEKS </b>time.
            </li>
            <li>
              For example:
              <h6>Current Date: August 7, 2015</h6>
              <h6>Enter Date Of Your Trip: August 21, 2015</h6>
              <h6>
                Enter Date Of Your Return: August 28, 2015 (you may enter any
                date of return)
              </h6>
              <p>
                Remember to provide an itinerary that matches your dates of
                travel, if you need to get the Passport immediately.
              </p>
            </li>
          </ul>

          <ol>
            <li>
              For <b>Countries To Be Visited,</b> Enter any country. (e.g.
              CANADA, MEXICO, etc.)
            </li>
            <ul>
              <li>
                If you are traveling to specific countr(ies), you can Enter them
              </li>
              <li>Click “Next” when done</li>
            </ul>
            <li>
              In <b>Who should we contact in case of an emergency?</b> page,
            </li>
            <ul>
              <li>Fill Out all fields</li>
              <li>Click “Next” when done</li>
            </ul>
            <li>
              In <b>Your Most Recent Passport</b> page,
            </li>
            <ul>
              <li>
                Choose what is applicable to you for{" "}
                <b>
                  {" "}
                  Have you been issued any of the following? and Fill Out all
                  fields{" "}
                </b>
              </li>
              <li>Click “Next” when done</li>
              <li>
                Choose what is applicable to you for{" "}
                <b>
                  Was the data printed correctly in your most recent document?
                </b>
              </li>
              <li>
                Choose what is applicable to you for{" "}
                <b>
                  Has your name changed since your most recent document was
                  issued?
                </b>
              </li>
            </ul>
            <li>
              In <b>Are you known by other names?</b> page,
            </li>
            <ul>
              <li>Fill Out if applicable</li>
              <li>Click “Next” when done</li>
            </ul>
            <li>
              In <b>Personal Application Review</b>page,
            </li>
            <ul>
              <li>Review all entered information</li>
              <li>Edit, if necessary</li>
              <li>Click “Next” when done</li>
            </ul>
            <li>
              In <b>Passport Products and Fees</b> page,
            </li>
            <ul>
              <li>Choose “Passport Book ($110)” for Passport Options</li>
              <li>Then, Check 52 Page Book (Non-Standard)</li>
              <li>
                Choose “Expedited at Agency Service ($60)” for Processing
                Methods
              </li>
            </ul>
            <p>
              {" "}
              Note: This is the government fee that you have to pay in order to
              process your Passport through a travel agency.
            </p>
          </ol>

          <ul>
            <li>Choose “Standard Delivery (FREE)” for Delivery Methods</li>
            <p>
              Note: This is only for application purpose. WVT will collect your
              Passport when it’s done and mail it back to you.
            </p>
            <li>Click “Next” when done</li>
          </ul>
          <li>
            <b>
              In <b>Next Steps </b>page,
            </b>
          </li>
          <ul>
            <li>
              Check{" "}
              <b>
                I have read and acknowledge the steps and information contained
                above.
              </b>
            </li>
            <li>Click “Create Form”</li>
          </ul>

          <li>The Forms will be downloaded to your computer.</li>
          <ul>
            <li>Print Your DS-82 Forms.</li>
            <p>
              <b>Printing Instructions: </b>Please print this form on{" "}
              <b>SINGLE-SIDED PAPER </b> – double-sided printing will not be
              accepted.
            </p>
            <li>
              Include Letter of Explanation, explaining the need for second
              valid Passport
            </li>
            <li>
              Send <b>all Required Documents</b> to WORLD VISA TRAVEL, INC. for
              processing
            </li>
          </ul>
        </ol>
      </div>

      <div className="reqdoument_table">
        <Secondptable />
      </div>
    </div>
  );
};

export default Secondpassport;
