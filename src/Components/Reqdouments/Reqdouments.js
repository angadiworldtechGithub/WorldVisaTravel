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
        id: 2,
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
        id: 3,
        column1: 'Proof of Identity',
        column2: {
          text: [
            'Previously issued, undamaged U.S. Passport',
            'Naturalization Certificate',
            'Valid Driver’s License',
            'Current Government ID (city, state or federal)',
            'Current Military ID (military and dependents)'
        ],
          lists: [
            Array(5)
              .fill('Previously issued, undamaged U.S. Passport',
              'Naturalization Certificate',
              'Valid Driver’s License',
              'Current Government ID (city, state or federal)',
              'Current Military ID (military and dependents)')
              .map((item, index) => `${item} ${index + 1}`),
          ],
        },
      },

      {
        id: 4,
        column1: 'Letter of Authorization',
        column2: {
          text: [
            'Download Authorization Letter',
            'Two completed and signed Letter of Authorization.',
          ],
          lists: [],
        },
      },

      {
        id: 5,
        column1: 'Minors (under 16 years old)',
        column2: {
          text: [
            'Both parents or child’s legal guardian must:',
            'Present evidence of child’s U.S. citizenship (One of the following):',
            '',
          '1)Previously issued, undamaged US Passport.',
          '2)Certified Birth Certificate issued by the city, county or state.',
          '3)Consular Report of Birth Abroad or Certification of Birth.',
          '4)Naturalization Certificate.',
          '5)Certificate of Citizenship.',
          'and:',
          'Present evidence they are the child’s parents or guardian (One of the following):',
          'Minors certified US Birth Certificate with BOTH parents’ names.',
          'Minors certified Foreign Birth Certificate with BOTH parents’ names.',
          'Minors Report of Birth Abroad with BOTH parents’ names.',
          'Adoption Decree with adopting parents’ names.',
          'Court Order establishing custody.',
          'Court Order establishing guardianship.',
          'and:',
          'Show valid personal identification, and',
          'Sign and take oath before an authorized passport acceptance agent.'
          ],
          lists: [],
        },
      },
      
      {
        id: 6,
        column1: 'Proof of Departure',
        column2: {
          text: [
            'A copy of your round trip airline tickets, or itinerary, or letter for employer (for Rush processing within 14 days).',
          ],
          lists: [],
        },
      },

      {
        id: 6,
        column1: 'Proof of Departure',
        column2: {
          text: [
            'A copy of your round trip airline tickets, or itinerary, or letter for employer (for Rush processing within 14 days).',
          ],
          lists: [],
        },
      },
      {
        id: 7,
        column1: 'DS-11 Application Form',
        column2: {
          text: [
            'A copy of yosin',
          ],
          lists: [],
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
