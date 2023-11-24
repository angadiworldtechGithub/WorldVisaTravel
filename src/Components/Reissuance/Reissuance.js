import React from "react";
import "./Reissuance.css"; // Create a CSS file for styling
import Reissuancetable from "../Reissuancetable/Reissuancetable"
import PassportAuthorizedLetter1 from "../../legalizationpdf/PassportAuthorizedLetter1.pdf";
import pdf from "../../legalizationpdf/WVT-Work-Order.pdf"




const ReqdoumentsTable = () => {
  const tableData = [
    {
      id: 1,
      column1: "",
      column2: {
        content: [
          "	UPDATE: Please call our office for more information regarding Re-Issuance.",
        ],
      },
    },
    {
      id: 2,
      column1: "Proof of U.S. Citizenship",
      column2: {
        content: [
            "If your passport was issued while you were outside of the United States and limited in validity to one year or less, ",
            "please submit one of the following:",
            "1)Certified Birth Certificate issued by the city, county or state",
            "2)Consular Report of Birth Abroad or Certification of Birth",
            "3)Naturalization Certificate",
            "4)Certificate of Citizenship",
            "If you were issued a temporary passport due to a loss of a valid passport while outside the United States,",
            "please include the letter and receipt given to you by the US Embassy that issued the temporary passport.",
        ],
      },
    },

    {
      id: 3,
      column1: "Passport",
      column2: {
        content: [
          "Valid limited passport is required."
        ],
      },
    },

    {
      id: 4,
      column1: "Photo",
      column2: {
        content: [
            "Two passport-type photographs. Photograph with eye glasses will no longer be accepted by the US Passport Agency.",
            <a href='https://travel.state.gov/content/travel/en/passports/how-apply/photos.html' target="_blank" >Quality Requirements for Passport Book & Passport Card Photographs.</a>,

        ],
    },
   },

   {
    id: 5,
    column1: "Letter of Authorization",
    column2: {
      content: [
        <a download={true} target='_blank' href={PassportAuthorizedLetter1}>Download Authorization Letter</a>,
        "One completed and signed Letter of Authorization.",
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
    column1: "DS-5504 Application Form",
    column2: {
      content: [
            "DS-5504: Online Application for New Passport",
            "Print ONE completed DS-5504 form."
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

const Reissuance = () => {
  return (
    <div className="reqdouments">
      <center className="reqdouments-header">
        <h3 className='costing-Header'>RE-ISSUANCE OF U.S. PASSPORT
        </h3>
        <h5>REQUIRED DOCUMENTS</h5>
      </center>
      <ReqdoumentsTable />
      <div className="reqdouments-passage-list">
        <center>
          <h3 className='costing-Header'>APPLICATION GUIDE</h3>
          <h4 className='costing-Header-h5'>
            Issue is determined by the U.S. Passport Agency based on the urgency
            of your departure.
          </h4>
          <h5 style={{color:"#2C3A90",paddingBottom:"40px",fontWeight:"700"}}>
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
            <li>Choose what is applicable to you for <b> Have you been issued any of the following? and Fill Out all fields </b></li>
            <li>Click “Next” when done</li>
            <li>Choose what is applicable to you for <b>Was the data printed correctly in your most recent document?</b></li>
            <li>Choose what is applicable to you for <b>Has your name changed since your most recent document was issued?</b></li>
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
              <li>Choose “Expedited at Agency Service ($60)” for Processing Methods</li>
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
               Note: This is only for application purpose. WVT will collect your Passport when it’s done and mail it back to you.
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
            <li>Print Your DS-5504 Forms.</li>
            <p>
              <b>Printing Instructions: </b>Please print this form on{" "}
              <b>SINGLE-SIDED PAPER </b> – double-sided printing will not be
              accepted. 
            </p>
            <li>Send <b>all Required Documents</b> to WORLD VISA TRAVEL, INC. for processing</li>
          </ul>
        </ol>
      </div>

      <div className="reqdoument_table">
        <Reissuancetable/>
      </div>
    </div>
  );
};

export default Reissuance;
