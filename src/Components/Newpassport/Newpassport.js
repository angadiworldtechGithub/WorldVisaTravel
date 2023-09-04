import React from "react";
import "./Newpassport.css"; // Create a CSS file for styling
import Newpassporttable from "../Newpassporttable/Newpassporttable";

const ReqdoumentsTable = () => {
  const tableData = [

    {
      id: 1,
      column1: "",
      column2: {
        content: [
          "UPDATE: Due to the COVID-19 pandemic, the US Passport agency is limited in its services. World Visa Travel can only offer US passport renewal services at this time. Please call our office for more information.",
        ],
      },
    },
    {
        id: 2,
        column1: "Proof of U.S. Citizenship",
        column2: {
          content: [
           "A certified Birth Certificate is required.",
           "Otherwise, see Secondary Evidence of U.S. Citizenship",
          ],
        },
      },
    {
      id: 3,
      column1: "Photo",
      column2: {
        content: [
          "Two passport-type photographs. Photograph with eye glasses will no longer be accepted by the US Passport Agency.",
          "Quality Requirements for Passport Book & Passport Card Photographs",
        ],
      },
    },

    {
        id: 4,
        column1: "Proof of Identity",
        column2: {
          content: [
            "Previously issued, undamaged U.S. Passport",
            "Naturalization Certificate",
            "Valid Driver’s License",
            "Current Government ID (city, state or federal)",
            "Current Military ID (military and dependents)",
          ],
        },
      },

    {
      id: 5,
      column1: "Letter of Authorization",
      column2: {
        content: [
          "Download Authorization Letter",
          "One completed and signed Letter of Authorization.",
        ],
      },
    },

    {
      id: 6,
      column1: "Minors (under 16 years old)",
      column2: {
        content: [
          "1)Both parents or child’s legal guardian must:",
          "2)Present evidence of child’s U.S. citizenship (One of the following):",
          "3)Previously issued, undamaged US Passport.",
          "4)Certified Birth Certificate issued by the city, county or state.",
          "5)Consular Report of Birth Abroad or Certification of Birth.",
          "6)Naturalization Certificate.",
          "7)Certificate of Citizenship.",
          "and:",
          "1)Present evidence they are the child’s parents or guardian (One of the following):",
          "2)Minors certified US Birth Certificate with BOTH parents’ names.",
          "3)Minors certified Foreign Birth Certificate with BOTH parents’ names.",
          "4)Minors Report of Birth Abroad with BOTH parents’ names.",
          "5)Adoption Decree with adopting parents’ names.",
          "6)Court Order establishing custody.",
          "7)Court Order establishing guardianship.",
          "and:",
          
          "1)Show valid personal identification, and",
          "2)Sign and take oath before an authorized passport acceptance agent.",
        ],
    },
   },

   {
    id: 7,
    column1: "Proof of Departure",
    column2: {
      content: [
        "A copy of your round trip airline tickets, or itinerary, or letter for employer (for Same Day/Next Day processing).",
      ],
  },
 },

 {
    id: 8,
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
      id: 9,
      column1: "WVT Work Order",
      column2: {
        content: [
          "Please complete WVT Work Order Form. Download here",
          "Payment can be processed with a credit card or a company/cashier check or money order.",
        ],
      },
    },

    {
      id: 10,
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

const Newpassport = () => {
  return (
    <div className="reqdouments">
      <center className="reqdouments-header">
        <h3 className='costing-Header'>NEW OR FIRST TIME U.S. PASSPORT (CHILD/MINORS)</h3>
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
            </ul>
            <li>In <b>Parent & Spouse Information</b> page,</li>
            <ul>
            <li>Fill Out all necessary fields</li>
            <li>Click “Next” when done</li>
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
            <li>Print Your DS-82 Forms.</li>
            <p>
              <b>Printing Instructions: </b>Please print this form on{" "}
              <b>SINGLE-SIDED PAPER </b> – double-sided printing will not be
              accepted. 
            </p>
            <ul>
           <li> Present all the required documents listed to the clerk at the authorized Post Office or Courthouse where your signature will be witnessed</li>
<li>The clerk will seal the above materials in an official envelope marked TO BE OPENED BY PASSPORT OFFICE PERSONNEL ONLY</li>
<li>Do not write checks until directed to do so by the clerk</li>
<li>You will enclose a check of $170.00 for the Passport Office</li>
<li>You will pay the clerk $25.00 for the Execution fee</li>
<li>You must present proof of identity such as a driver’s license (which has been issued for at least 6 months)</li>
<li>All applicants 1 year or older must appear in person at the post office or the courthouse</li>
<li>Minors must be accompanied by BOTH PARENTS or legal guardian with acceptable proof of ID</li>
            </ul>
            <li>Send paperwork plus sealed envelope to WORLD VISA TRAVEL, INC. for processing</li>
            <li>Do not leave documents with the clerk</li>
            <li>The sealed envelope is considered “expired” by the Passport Agency after 5 business days</li>
            <li>Please send all Required Documents to us Same Day/Next Day after it is signed</li>
          </ul>
        </ol>
      </div>

      <div className="reqdoument_table">
        <Newpassporttable/>
      </div>
    </div>
  );
};

export default Newpassport;
