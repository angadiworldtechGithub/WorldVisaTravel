import React from 'react';
import {Link} from "react-router-dom";
import './Passport.css'; // Create a CSS file for styling

const Card = ({ img, header, passage, buttonLabel }) => {
  return (
    <div className="passport-card">
      <img src={img} alt="Card" className="card-img" />
      <h3 className="card-header">{header}</h3>
      <p className="card-passage">{passage}</p>
      <Link to="/reqdouments"><button className="card-button">{buttonLabel}</button></Link>
    </div>
  );
};

const CardContainer = ({ cards }) => {
  return (
    <div className="passport-container">
     <h3 className='passport-header'> <center>U.S. PASSPORT SERVICES</center></h3>
      <h5 className='passport-sub-header'>World Visa Travel is specialized in expediting new U.S. passports, renewals, reissue, children/minors, and more. Please choose the right service for your travel needs.</h5>
      {cards.map((card, index) => (
        <Card
          key={index}
          img={card.img}
          header={card.header}
          passage={card.passage}
          buttonLabel={card.buttonLabel}
        />
      ))}
    </div>
  );
};

const cardsData = [
  {
    image: '/assets/flex2_image.png',
    header: 'APPLY FOR A NEW OR FIRST TIME U.S. PASSPORT',
    passage:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod ligula ut...',
    buttonLabel: 'Apply Now'
  },
  {
    image: 'assets/flex2_image.png',
    header: 'RENEW YOUR U.S. PASSPORT',
    passage:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod ligula ut...',
    buttonLabel: 'Apply Now'
  },
  {
    image: 'assets/flex2_image.png',
    header: 'REPLACE A MUTILATED OR DAMAGED U.S. PASSPORT',
    passage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod ligula ut...',
    buttonLabel: 'Apply Now'
  },
  {
    image: 'assets/flex2_image.png',
    header: 'APPLY FOR A CHILD/MINOR U.S. PASSPORT',
    passage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod ligula ut...',
    buttonLabel: 'Apply Now'
  },
  {
    image: 'assets/flex2_image.png',
    header: 'APPLY FOR A SECOND VALID U.S. PASSPORT',
    passage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod ligula ut...',
    buttonLabel: 'Apply Now'
  },
  {
    image: 'assets/flex2_image.png',
    header: 'RE-ISSUE A U.S. PASSPORT',
    passage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod ligula ut...',
    buttonLabel: 'Apply Now'
  },
  {
    image: 'assets/flex2_image.png',
    header: 'REPLACE A LOST OR STOLEN U.S. PASSPORT',
    passage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod ligula ut...',
    buttonLabel: 'Apply Now'
  },
 
];

const Passport = () => {
  return (
    <div className="Passport">
      <CardContainer cards={cardsData} />
    </div>
  );
};

export default Passport;
