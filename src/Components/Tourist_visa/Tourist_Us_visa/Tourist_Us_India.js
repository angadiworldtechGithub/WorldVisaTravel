import React from 'react'
import pdf from "../../../legalizationpdf/WVT-Work-Order.pdf"
import IndiaParticulars1 from "../../../legalizationpdf/IndiaParticulars1.pdf"

  const tableData = [
    {
      id: 1,
      column1: "Passport",
      column2: {
        content: ["	U.S. Passport – have to be valid at least 6 months beyond intended stay and must have at least two blank visa pages.For Additional Visa Pages and U.S. Passport Renewal."],
      },
    },
    {
      id: 2,
      column1: "Photo",
      column2: {
        content: [
           "Two passport-type photographs. ",
           <a href='https://travel.state.gov/content/travel/en/passports/how-apply/photos.html' target="_blank" >Quality Requirements for Passport Book & Passport Card Photographs</a>
        
        ],
      },
    },
    {
        id: 3,
        column1: "Proof of Residence",
        column2: {
          content: [
             "A copy of your Driver’s License, Major Utility Bill (Water, Gas, Electric, etc.), or a copy of valid lease agreement."
          ],
        },
      },
  

    
      {
        id: 4,
        column1: "Minors",
        column2: {
          content: [
         "	Parental Authorization Form for minors travelers: Download Parental Authorization Form",
         "One completed Form, MUST be notarized and signed. Photocopy of a Birth Certificate is required.",
          ],
        },
      },
     	
        {
        id: 5,
        column1: "Applicants of Indian Origin and Dependent Family Members",
        column2: {
          content: [
           "Persons of Indian origin are required to surrender Indian citizenship.",
           "A copy of a renunciation certificate AND naturalization certificate.",
           "Persons of Indian origin who have NOT renounced Indian citizenship or",
           "CANNOT SHOW PROOF of renunciation must first apply for renunciation directly through CKGS:",
           "http://www.in.ckgs.us"
          ],
        },
      },
     	
     
    {
      id: 6,
      column1: "Additional Forms",
      column2: {
        content: [
            "Religious Undertaking Letter for religious travelers: Download Religious Undertaking Letter",
            "One completed Form, MUST be signed.",
            "Journalist Undertaking Letter for journalist travelers: Download Journalist Undertaking Letter",
            "One completed Form, MUST be signed."
        ],
      },
    },

    {
      id: 7,
      column1: "Proof of Departure",
      column2: {
        content: [
        "	A copy of your round trip airline tickets, or itinerary, or letter of confirmation from a travel agent",
        ],
      },
    },
    {
       id: 8,
        column1: "Application Form",
        column2: {
          content: [
            "WVT can help you complete the India Visa Online Application through our White Glove Service (ONLY $50.00).",
            <a download={true} target='_blank' href={IndiaParticulars1}>India White Glove Form</a>,
            "Please call for further assistance.",
            <a href='https://indianvisaonline.gov.in/visa/'>Online Application Form</a>,
            "One completed Visa Application, MUST be signed and printed in separate papers.",
            "Note: The Embassy will not accept double-sided applications.",
            "Additional Particulars Form for ALL travelers: Download Additional Particulars Form",
            "One completed Form, MUST be signed."
          ],
        },
      },
      {
        id: 9,
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

const datatable1 = [
['Regular','Single/Multiple','$202.90','10-14 Business Days','up to 180 days','Up to 10 Years'],
['Rush','Single/Multiple','$202.90','7-10 Business Days','up to 180 days','Up to 10 Years'],
 
];

const datatable2 = [
     ['Regular','$120.00','10-14 Business Days'],
     ['Rush','$170.00','7-10 Business Days'],
];

const datatable3 = [
  ['Less than 3 passports','$36.00'],
  ['4 or more passports','$39.00'],
  ['Saturday Delivery','$41.00'],
];

function Tourist_Us_India() {
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
    <center><h3 className='costing-Header'>CONSULAR FEES</h3></center>
      <table className="costing-responsive-table">
        <thead>
          <tr>
          <th>Type</th>
            <th>Entry</th>
            <th>Price</th>
            <th>Processing Time</th>
            <th>PMaximum Stay</th>
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

      <div className='Detailsdata_descripition'>
       <h6>The fees above include a $5.00 check writing fee.</h6>
      <h6>Consular fees are subject to change without notice.</h6>
      <h6>If there is any uncertainty, please give us a call to verify.</h6>
      <h6>Maximum Stay and Validity of Visa is dependent on the Embassy’s discretion.</h6>
    
      </div>
      
     <center><h3 className='costing-Header'> WORLD VISA TRAVEL SERVICE FEES</h3></center>
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

      <center><h3 className='costing-Header'>RETURN SHIPPING FEES</h3></center>
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
    <h6>Update: FedEx charges an additional $6.50 for residential areas. Please call for shipping to Alaska/Hawaii.</h6>
   
    </div>
    
    
   </div>
  )
}

export default Tourist_Us_India;