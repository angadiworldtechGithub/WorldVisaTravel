import React from "react";
import styles from "./Passport.module.css";
import { Link } from "react-router-dom";
import HomeIcon from "../../Components/icons/HomeIcon";

const Card = ({ img, header, passage, buttonLabel, link }) => {
  return (
    <div className={`${styles["passport-card"]}`}>
      <img src={img} alt="Card" className="card-img" />
      <h3 className={`${styles["card-header"]}`}>{header}</h3>
      <p className={`${styles["card-passage"]}`}>{passage}</p>
      <Link to={"/passports" + link}>
        <button className={`${styles["card-button"]}`}>{buttonLabel}</button>
      </Link>
    </div>
  );
};

const CardContainer = ({ cards }) => {
  return (
    <div className="passport">
      <div
        className={`${styles["passport-container"]} d-flex position-relative align-items-center`}
      >
        <div className="container d-flex flex-column text-light">
          <h2>Passport</h2>
          <div className="d-flex gap-2 align-items-center">
            <Link to="/">
              <HomeIcon />
            </Link>
            <span className="sep"> → </span>
            <span>Passport</span>
          </div>
        </div>
      </div>

      <center>
        <h3 className={`${styles["passport-header"]}`}>
          U.S. PASSPORT SERVICES
        </h3>
        <h5 className={`${styles["passport-sub-header"]}`}>
          World Visa Travel is specialized in expediting new U.S. passports,
          renewals, reissue, children/minors, and more. Please choose the right
          service for your travel needs.
        </h5>
      </center>
      <div className={`${styles["cards-div-passport"]}`}>
        {cards.map((card, index) => (
          <Card
            className={`${styles["cards-passport"]}`}
            key={index}
            img={card.image}
            header={card.header}
            passage={card.passage}
            buttonLabel={card.buttonLabel}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

const cardsData = [
  {
    image: "assets/passport/passport1.png",
    header: "APPLY FOR A NEW OR FIRST TIME U.S. PASSPORT",
    passage:
      " Ready to explore the world? Begin your travel story by applying for your new or first-time U.S. passport today, and let your international experiences unfold.",
    buttonLabel: "Apply Now",
    link: "/new-us-passport",
  },
  {
    image: "assets/passport/passport2.png",
    header: "RENEW YOUR U.S. PASSPORT",
    passage:
      " Ensure your travel plans stay on track – renew your U.S. passport hassle-free and explore the world with confidence.",
    buttonLabel: "Apply Now",
    link: "/renew-us-passport",
  },
  {
    image: "assets/passport/passport6.png",
    header: "REPLACE A MUTILATED OR DAMAGED U.S. PASSPORT",
    passage:
      "To replace a mutilated or damaged U.S. passport, individuals can apply for a new passport by following the official procedure, ensuring smooth travel and identification.",
    buttonLabel: "Apply Now",
    link: "/replace-mutilated-damaged-us-passport",
  },
  {
    image: "assets/passport/passport4.png",
    header: "APPLY FOR A CHILD/MINOR U.S. PASSPORT",
    passage:
      "To apply for a child/minor U.S. passport, gather required documents and visit a passport acceptance facility with your child, completing the application process in person.",
    buttonLabel: "Apply Now",
    link: "/new-us-passport-child",
  },
  {
    image: "assets/passport/passport5.png",
    header: "APPLY FOR A SECOND VALID U.S. PASSPORT",
    passage:
      "Explore Dual Travel Convenience: Secure Your Second Valid U.S. Passport Today!",
    buttonLabel: "Apply Now",
    link: "/second-valid-us-passport",
  },
  {
    image: "assets/passport/passport7.png",
    header: "RE-ISSUE A U.S. PASSPORT",
    passage:
      "Requesting a re-issue of a U.S. passport involves renewing an existing passport with updated information, ensuring continued hassle-free international travel.",
    buttonLabel: "Apply Now",
    link: "/re-issuance-us-passport",
  },
  {
    image: "assets/passport/passport6.png",
    header: "REPLACE A LOST OR STOLEN U.S. PASSPORT",
    passage:
      "If your U.S. passport is lost or stolen, promptly report it to the authorities and apply for a replacement to ensure seamless travel and identification.",
    buttonLabel: "Apply Now",
    link: "/replace-lost-stolen-us-passport",
  },
];

const Passport = () => {
  return (
    <div className="Passport">
      <CardContainer cards={cardsData} />

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
  );
};

export default Passport;
