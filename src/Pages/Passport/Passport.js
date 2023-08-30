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
    <center><h3 className='passport-header'>U.S. PASSPORT SERVICES</h3>
      <h5 className='passport-sub-header'>World Visa Travel is specialized in expediting new U.S. passports, renewals, reissue, children/minors, and more. Please choose the right service for your travel needs.</h5></center>
      {cards.map((card, index) => (
        <Card
          key={index}
          img={card.image}
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
    image: 'assets/passport/passport1.png',
    header: 'APPLY FOR A NEW OR FIRST TIME U.S. PASSPORT',
    passage:
      ' Ready to explore the world? Begin your travel story by applying for your new or first-time U.S. passport today, and let your international experiences unfold.',
    buttonLabel: 'Apply Now'
  },
  {
    image: 'assets/passport/passport2.png',
    header: 'RENEW YOUR U.S. PASSPORT',
    passage:
       ' Ensure your travel plans stay on track – renew your U.S. passport hassle-free and explore the world with confidence.',
    buttonLabel: 'Apply Now'
  },
  {
    image: 'assets/passport/passport6.png',
    header: 'REPLACE A MUTILATED OR DAMAGED U.S. PASSPORT',
    passage:
      'To replace a mutilated or damaged U.S. passport, individuals can apply for a new passport by following the official procedure, ensuring smooth travel and identification.',
    buttonLabel: 'Apply Now'
  },
  {
    image: 'assets/passport/passport4.png',
    header: 'APPLY FOR A CHILD/MINOR U.S. PASSPORT',
    passage:
      'To apply for a child/minor U.S. passport, gather required documents and visit a passport acceptance facility with your child, completing the application process in person.',
    buttonLabel: 'Apply Now'
  },
  {
    image: 'assets/passport/passport5.png',
    header: 'APPLY FOR A SECOND VALID U.S. PASSPORT',
    passage:
      'Explore Dual Travel Convenience: Secure Your Second Valid U.S. Passport Today!',
    buttonLabel: 'Apply Now'
  },
  {
    image: 'assets/passport/passport7.png',
    header: 'RE-ISSUE A U.S. PASSPORT',
    passage:
      'Requesting a re-issue of a U.S. passport involves renewing an existing passport with updated information, ensuring continued hassle-free international travel.',
    buttonLabel: 'Apply Now'
  },
  {
    image: 'assets/passport/passport6.png',
    header: 'REPLACE A LOST OR STOLEN U.S. PASSPORT',
    passage:
      'If your U.S. passport is lost or stolen, promptly report it to the authorities and apply for a replacement to ensure seamless travel and identification.',
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
