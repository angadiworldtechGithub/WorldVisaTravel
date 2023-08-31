import React from 'react';
import './Costing.css'; // Make sure to create this CSS file


const datatable1 = [
  ['Regular',	'$165.00',	'$135.00',	'8-10 Weeks'],
  [ 'Expedited','$225.00',	'$195.00',	'4-6 Weeks'] ,   
  ['Rush','$225.00','$195.00','2-3 Weeks'],
  ['Priority','$225.00','$195.00',	'7-10 Business Days'],
];

const datatable2 = [
    ['Regular','$95.00','8-10 Weeks'],
    ['Expedited','$200.00','4-6 Weeks'],
    ['Rush','$300.00','2-3 Weeks'],
    ['Priority','$450.00','7-10 Business Days'],
  ];

  
const datatable3 = [
    ['Less than 3 passports','$36.00'],
    ['4 or more passports',	'$39.00'],
    ['Saturday Delivery','$41.00'],
  ];


const ResponsiveTable = () => {
  return (
    <div className="table-container">
    <center><h3>U.S. GOVERNMENT FEES</h3></center>
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Adult Price</th>
            <th>Minors Price</th>
            <th>Processing Time</th>
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
     <center><h3> WORLD VISA TRAVEL SERVICE FEES</h3></center>
      <table className="responsive-table">
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
      <center><h3>RETURN SHIPPING FEES</h3></center>
      <table className="responsive-table">
      <thead>
        <tr>
          <th>FedEx Overnight</th>
          <th>Price</th>
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

    </div>
  );
};

export default ResponsiveTable;






   
 


