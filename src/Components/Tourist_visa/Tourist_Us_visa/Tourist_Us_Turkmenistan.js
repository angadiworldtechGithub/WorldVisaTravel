import React from 'react'
import pdf from "../../../legalizationpdf/WVT-Work-Order.pdf"
import TurkmenistanVisa from "../../../legalizationpdf/TurkmenistanVisa.pdf"

  const tableData = [
    {
      id: 1,
      column1: "Passport",
      column2: {
        content: [
            "U.S. Passport – have to be valid at least 6 months beyond intended stay and must have at least two blank visa pages."
        ],
      },
    },
    {
        id: 2,
        column1: "Photo",
        column2: {
          content: [
              "One passport-type photograph. Do NOT glue or staple the photo to the application.",
               <a href='https://travel.state.gov/content/travel/en/passports/how-apply/photos.html' target="_blank" >Quality Requirements for Passport Book & Passport Card Photographs</a>
            ]
       },
      },
    {
        id: 3,
        column1: "Letter of Invitation",
        column2: {
          content: [
            "If the applicant is traveling as a tourist and will not be meeting anyone in Turkmenistan,",
            "they must contact any travel agency in Turkmenistan and the Ministry of Tourism which will assist in",
            "planning the visit and will provide the letter, certified by the Ministry of Foreign Affairs.",
            "If the applicant is visiting a relative or friend, they must submit a letter of invitation",
            "certified by the State Foreign Citizens Registration Service of Turkmenistan.",
            "The invitation is valid only for 3 months from the date it was confirmed."
        ],
        },
      },
      {
        id: 4,
        column1: "Proof of Departure",
        column2: {
          content: [
          "A copy of your round trip airline tickets, or itinerary, or letter of confirmation from a travel agent."
        ],
        },
      },
   
    {
        id: 5,
        column1: "Application Form",
        column2: {
          content: [
            "WVT can help you complete the Turkey Visa Online Application through our White Glove Service.",
            <a download={true} target='_blank' href={TurkmenistanVisa}>Turkey White Glove Application Form</a>,
            "One completed and signed White Glove Form.",
        ],
        },
      },
    {
      id: 6,
      column1: "WVT Work Order",
      column2: {
        content: [
        	"Please complete WVT Work Order Form.",
          <a download={true} target='_blank' href={pdf}>Download here</a>,
          "Payment can be processed with a credit card or a company/cashier check or money order."
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
['Regular','Single','$40.00/$50.00/$60.00/$90.00/$120.00/$150.00/$180.00/$210.00/$240.00/$270.00/$300.00/$330.00/$360.00/$390.00','7-10 Business Days','Up to 10/20/30/60/90/120/150/180/210/240/270/300/330/365 Days'],
['Rush','Single','$60.00/$80.00/$100.00/$160.00/$220.00/$280.00/$340.00/$400.00/$460.00/$520.00/$580.00/$640.00/$700.00/$760.00','2-3 Business Days','Up to 10/20/30/60/90/120/150/180/210/240/270/300/330/365 Days']
];

const datatable2 = [
     ['Regular','$90.00','7-10 Business Days'],
     ['Rush','$140.00','2-3 Business Days'],
    
];

const datatable3 = [
  ['Less than 3 passports','$36.00'],
  ['4 or more passports','$39.00'],
  ['Saturday Delivery','$41.00'],
];

function Tourist_Us_Turkmenistan() {
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

export default Tourist_Us_Turkmenistan;