import React from 'react';
import './Passport.css';

const cardsData = [
  {
        id: 1,
        image: 'assets/flex2_image.png',
        header: 'APPLY FOR A NEW OR FIRST TIME U.S. PASSPORT',
        passage:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod ligula ut...',
  },
  {
    id: 2,
    image: 'assets/flex2_image.png',
    header: 'RENEW YOUR U.S. PASSPORT',
    passage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod ligula ut...',
  },
  {
    id: 3,
    image: 'assets/flex2_image.png',
    header: 'REPLACE A MUTILATED OR DAMAGED U.S. PASSPORT',
    passage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod ligula ut...',
  },
  {
    id: 4,
    image: 'assets/flex2_image.png',
    header: 'APPLY FOR A CHILD/MINOR U.S. PASSPORT',
    passage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod ligula ut...',
  },
  {
    id: 5,
    image: 'assets/flex2_image.png',
    header: 'APPLY FOR A SECOND VALID U.S. PASSPORT',
    passage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod ligula ut...',
  },
  {
    id: 6,
    image: 'assets/flex2_image.png',
    header: 'RE-ISSUE A U.S. PASSPORT',
    passage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod ligula ut...',
  },
  {
    id: 7,
    image: 'assets/flex2_image.png',
    header: 'REPLACE A LOST OR STOLEN U.S. PASSPORT',
    passage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod ligula ut...',
  },
 
];

const Passport = () => {
  return (
  
     <div className='passport'>
     <h3 className='passport-header'> <center>U.S. PASSPORT SERVICES</center></h3>
      <h5 className='passport-sub-header'>World Visa Travel is specialized in expediting new U.S. passports, renewals, reissue, children/minors, and more. Please choose the right service for your travel needs.</h5>
      <div className="passport-cards">
      {cardsData.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt={`Card ${card.id}`} />
          <h2>{card.header}</h2>
          <p>{card.passage}</p>
          <button>Apply Now</button>
        </div>
   
      ))}
    </div>
    </div>
  );
};

export default Passport;
