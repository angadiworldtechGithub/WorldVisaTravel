import React from 'react'
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import HomeIcon from "../../Components/icons/HomeIcon";

function index() {
  const cardsData = [
    {
      id: 1,
      name: 'Tourist Visa',
      image: '/assets/visa/visa1.png',
      paragraph: 'A Tourist Visa allows travelers to explore and experience foreign destinations for leisure and tourism purposes.',
      link:'/visas/tourist-visa'
    },
    {
      id: 2,
      name: 'Business Visa',
      image: '/assets/visa/visa2.png',
      paragraph: 'A Business Visa enables individuals to engage in commercial activities, attend meetings, and conduct business in foreign countries.',
      link:'/visas/business-visa'
    },
    {
      id: 3,
      name: 'Official/Diplomatic Visa',
      image: '/assets/visa/visa3.png',
      paragraph: 'An Official Visa is granted to government representatives for official diplomatic interactions between nations.',
      link:'/visas/official-visa'
    },
    {
      id: 4,
      name: 'E-Visa',
      image: '/assets/visa/visa4.png',
      paragraph: 'An eVisa streamlines visa applications, allowing travelers to obtain international travel authorization conveniently online.',
      link:'/visas/e-visa'
    },
  ];
  return (
    <div className="visa">
    <div className={`${styles["visa-container"]} d-flex position-relative align-items-center`}>
      <div className="container d-flex flex-column text-light">
        <h2>Visas</h2>
        <div className="d-flex gap-2 align-items-center">
          <Link to="/">
            <HomeIcon />
          </Link>
          <span className="sep"> → </span>
          <span>Visas</span>
        </div>
      </div>
    </div>
    <div className={`${styles["card-container"]}`}>
      {cardsData.map((card) => (
        <Link to={card.link} key={card.id}>
          <div className={`${styles["card"]}`}>
          <img src={card.image} alt={card.name} className={`${styles["card-image"]}`} />
            <h2 className={`${styles["card-name"]}`}>{card.name}</h2>
            <p className={`${styles["card-paragraph"]}`}>{card.paragraph}</p>
            <button className={`${styles["card-button"]}`}>More Info</button>
          </div>
        </Link>
      ))}
    </div>

    <div className={`${styles["Expedited-Services-container"]}`}>

    <div className={`${styles["Expedited-Services"]}`}>

      <div className={`${styles["Expedited-Services-left"]}`}>
        <h3 className={`${styles["Expedited-Services-heading"]}`}>Expedited Services</h3>
        <p  className={`${styles["Expedited-Services-paragraph"]}`}>We are the best at providing quickest passport and visa services. Start your process today under our guidance.</p>
      </div>
      
      <div className={`${styles["Expedited-Services-right "]}`}>
       <center> 
       <Link to="/visas"><button className={`${styles["passport-button"]}`}>Travel Visa Service</button></Link>
       <Link to="/passports"><button className={`${styles["passport-button"]}`}>Passport Service</button></Link>
       </center>
      </div>

    </div>

  </div>

    </div>
  )
}

export default index;