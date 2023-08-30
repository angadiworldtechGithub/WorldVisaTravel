import React from 'react';
import './Reqdouments.css'; // Create a CSS file for styling

const ReqdoumentsTable = () => {
  const tableData = [
    {
      id: 1,
      column1: 'Proof of U.S. Citizenship',
      column2: {
        text: [
          'A certified Birth Certificate is required.',
          'Otherwise, see Secondary Evidence of U.S. Citizenship.',
        ],
        lists: [ ],

      },
    },
    {
        id: 1,
        column1: 'Photo',
        column2: {
          text: [
            'Two passport-type photographs. Photograph with eye glasses will no longer be accepted by the US Passport Agency.',
            'Quality Requirements for Passport Book & Passport Card Photographs',
          ],
          lists: [],
        },
      },
      {
        id: 1,
        column1: 'Row 1',
        column2: {
          text: [
            'A certified Birth Certificate is required.',
            'Otherwise, see Secondary Evidence of U.S. Citizenship.',
          ],
          lists: [
            Array(5)
              .fill('List 1 Item')
              .map((item, index) => `${item} ${index + 1}`),
            Array(5)
              .fill('List 2 Item')
              .map((item, index) => `${item} ${index + 1}`),
            Array(5)
              .fill('List 3 Item')
              .map((item, index) => `${item} ${index + 1}`),
          ],
        },
      },
  ];

  return (
    <div className="table-container">
      <table>
    <thead>
          <tr>
            <th className='reqdocument-column1'>column1</th>
            <th className='reqdocument-column2'>column2</th>
          </tr>
  </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.column1}</td>
              <td>
                <div className="column1">
                  {row.column2.text.map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
                <div className="column2">
                  {row.column2.lists.map((list, listIndex) => (
                    <ul key={listIndex}>
                      {list.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
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

const Reqdouments = () => {
  return (
    <div className="reqdouments">
    <center className='reqdouments-header'>
    <h3>NEW OR FIRST TIME U.S. PASSPORT</h3>
    <h5>REQUIRED DOCUMENTS</h5>
    </center>
      <ReqdoumentsTable/>
    </div>
  );
};

export default Reqdouments;
