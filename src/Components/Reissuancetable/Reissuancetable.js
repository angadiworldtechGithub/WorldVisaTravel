import React from 'react';
import './Reissuancetable.css'; // Make sure to create this CSS file

const datatable1 = [
  ['Please Call Our Offices for More Info'],

];

const datatable2 = [
    ['Please Call Our Offices for More Info'],
  ];

  
const datatable3 = [
    ['Less than 3 passports','$36.00'],
    ['4 or more passports',	'$39.00'],
    ['Saturday Delivery','$41.00'],
  ];


const Reissuancetable = () => {
  return (
    <div className="req-table-container">
    <center><h3 className='costing-Header'>U.S. GOVERNMENT FEES</h3></center>
      <table className="costing-responsive-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Adult Price</th>
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
      <li>The fees above include a $5.00 check writing fee.</li>
      <li>Government fees are subject to change without notice.</li>
       <li>If there is any uncertainty,please give us a call to verify.</li>
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

export default Reissuancetable;






   
 


