import React from 'react'
import pdf from "../../../legalizationpdf/WVT-Work-Order.pdf"


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
        column1: "Proof of Departure",
        column2: {
          content: [
          "A copy of your round trip airline tickets, or itinerary, or letter of confirmation from a travel agent."
      
        ],
        },
      },
   
    {
        id: 4,
        column1: "Application Form",
        column2: {
          content: [
            <a href="https://visa.mofa.gov.vn/_layouts/registration/ApplicationForm.aspx">Online Application Form</a>,
            "One completed Visa Application, MUST be printed and signed.",
            "Change Language to English at top right hand corner of the page.",
        ],
        },
      },
    {
      id: 5,
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
      id: 6,
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
 ['Regular','Single','$75.00/$105.00','2-3 Business Days','Up to 30 Days','1 Month/3 Months'],
 ['Regular','Multiple','$130.00/155.00/170.00','2-3 Business Days','Up to 30/90/180/180 Days','1 Month/3 Months/6 Months/1 Year'],
 ['Same Day','Single','$125.00/$155.00','Same Day','Up to 30/90 days','1 Month/3 Month'],
 ['Same Day','Multiple','$180.00/$205.00/$220.00/$230.00','Same Day','Up to 30/90/180/180 days','1 Month/3 Months/6 Months/1 Year'],

];

const datatable2 = [
     ['Regular','$90.00','2-3 Business Days'],
     ['Rush','$140.00','24 Hours']
    
];

const datatable3 = [
  ['Less than 3 passports','$36.00'],
  ['4 or more passports','$39.00'],
  ['Saturday Delivery','$41.00'],
];

function Tourist_Us_Vietanam() {
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

export default Tourist_Us_Vietanam;