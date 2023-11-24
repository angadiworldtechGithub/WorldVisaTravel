import React from 'react';
import './Replacetable.css'; // Make sure to create this CSS file


const datatable1 = [
  ['Regular','$165.00','$130.00','8-10 Weeks'],
  [ 'Expedited','$225.00','$209.53','4-6 Weeks'] ,   
  ['Rush','$225.00','$209.53','2-3 Weeks'],
  ['Priority','$225.00','$209.53','7-10 Business Days'],
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


const Replacetable = () => {
  return (
    <div className="req-table-container">
    <center><h3 className='costing-Header'>U.S. GOVERNMENT FEES</h3></center>
      <table className="costing-responsive-table">
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

      <ul>
      <li>The fees above include the U.S. government passport fee, any pertinent rush fees, and the execution fees.</li>
      <li>Government fees are subject to change without notice.</li>
      <li>If there is any uncertainty, please give us a call to verify.</li>
      </ul>
      
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

    </div>
  );
};

export default Replacetable;






   
 


