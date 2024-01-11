import React from 'react'
import pdf from "../../../legalizationpdf/WVT-Work-Order.pdf"
import BrazilWhiteGlove from "../../../legalizationpdf/BrazilWhiteGlove.pdf"

  const tableData = [
    {
        id: 1,
        column1: "Required Documents",
        column2: {
          content: ["*UPDATE: At this time, Tourist Visa is not required for US passport."],
        },
    },
    {
      id: 2,
      column1: "Passport",
      column2: {
        content: ["U.S. Official/Diplomatic Passport – have to be valid at least 6 months beyond intended stay and must have at least two blank visa pages.",
                <p> <a href="/visas">Additional Visa Pages</a> and <a href="/passports/renew">U.S. Passport Renewal</a> </p>],
      },
    },
    {
      id: 3,
      column1: "Photo",
      column2: {
        content: [
           "One passport-type photograph.",
           <a href='https://travel.state.gov/content/travel/en/passports/how-apply/photos.html' target="_blank" >Quality Requirements for Passport Book & Passport Card Photographs</a>
         
        ],
      },
    },

    {
      id: 4,
      column1: "Proof of Residence",
      column2: {
        content: [
         "A clear copy of applicant driver’s license or state issued photo ID.",
        ],
      },
    },
		
	
    {
      id: 5,
      column1: "Letter of Invitation",
      column2: {
        content: [
         "A letter of invitation from host in Brazil is required.",
        ],
      },
    },

  
    {
        id: 6,
        column1: "Bank Statement",
        column2: {
          content: [
        "A copy of your recent bank statement or evidence of adequate finance, such as a letter from a bank.",
          ],
        },
      },
      {
        id: 7,
        column1: "Proof of Departure",
        column2: {
          content: [
        "Download Travel Authorization Form for Minors",
        "A person under 18 years of age not traveling with both parents or legal guardian(s) must provide",
        "a NOTARIZED letter of consent signed by the non-accompanying parent(s) or guardian.",
        "A copy of the minor’s birth certificate or, as applicable, the guardianship document, is also required",
        ],
        },
      },
     
      {
        id: 7,
        column1: "Proof of Departure",
        column2: {
          content: [
        "A copy of your round trip airline tickets, or itinerary, or letter of confirmation from a travel agent.",
         ],
        },
      },
     	
        {
        id: 8,
        column1: "Application Form",
        column2: {
          content: [
            <a href="https://formulario-mre.serpro.gov.br/sci/pages/web/ui/#/cidadao-nacionalidade">Online Application Form</a>,
            "One completed confirmation page, MUST be signed.",
            "WVT can help you complete the Brazilian Visa Online Application through our White Glove Service (ONLY $50.00).",
            <a href={BrazilWhiteGlove}>Brazil White Glove Application Form</a>
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
      id:10,
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
  ['Regular/Multiple','$165.00','3-10 Business Days','Up to 90 day','Up to 10 Years'],
];

const datatable2 = [
  ['Regular','$90.00','7-10 Business Days'],
  ['Rush','$140.00','3-5 Business Days'],
];

  const datatable4 = [
  ['Regular','$110.00','7-10 Business Days'],
  ['Rush','$200.00','3-5 Business Days'],
];


const datatable3 = [
  ['Less than 3 passports','$36.00'],
  ['4 or more passports',	'$39.00'],
  ['Saturday Delivery','$41.00'],
];

function Tourist_Us_Brazil() {
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
      
     <center><h3 className='costing-Header'> WORLD VISA TRAVEL SERVICE FEES(WASHINGTON DC JURISDICTION)</h3></center>
     <h5><b>Jurisdiction: </b>District of Columbia (DC), North Carolina (NC), Delaware (DE), Kentucky (KY), Maryland (MD), Ohio (OH), Virginia (VA), West Virginia (WV) and all Military Bases, except Guam.</h5>
    
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


      <center><h3 className='costing-Header'> WORLD VISA TRAVEL SERVICE FEES(OTHER JURISDICTION)</h3></center>
      <table className="costing-responsive-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Price</th>
          <th>Processing Time</th>
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
    <h6 style={{padding:"20px"}}>Update: FedEx charges an additional $6.50 for residential areas. Please call for shipping to Alaska/Hawaii.</h6>
   
    </div>
    
    
   </div>
  )
}

export default Tourist_Us_Brazil;