import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";
import HomeIcon from "../../Components/icons/HomeIcon";
import { RxArrowRight } from "react-icons/rx";
import { PiStudentFill } from "react-icons/pi";
import { MdBusiness } from "react-icons/md";
import { LiaUniversitySolid } from "react-icons/lia";
import {
  BsFillJournalBookmarkFill,
  BsFillAirplaneEnginesFill,
} from "react-icons/bs";

const About = () => {
  return (
    <div className="About">
      <div
        className={`${styles["About-container"]} d-flex position-relative align-items-center`}
      >
        <div className="container d-flex flex-column text-light">
          <h2>About Us</h2>
          <div className="d-flex gap-2 align-items-center">
            <Link to="/">
              <HomeIcon />
            </Link>
            <span className="sep"> → </span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      <div className={`${styles["About-container1"]}`}>
        <div className={`${styles["About-item"]}`}>
          <img
            src="assets/about1.png"
            alt="About_png"
            className={`${styles["Aboutus_flex_img"]}`}
            style={{ width: "100%" }}
          ></img>
        </div>

        <div
          className={`${styles["About-item"]}`}
          style={{ paddingTop: "30px" }}
        >
          <h6 className={`${styles["about-paragraph-heading"]}`}>
            ABOUT WORLD VISA TRAVEL
          </h6>
          <h2 className={`${styles["about-paragraph-heading"]}`}>
            <strong>25 years of expertise</strong> in Visa and Travel Services.
          </h2>
          <h5 className={`${styles["about-paragraph-content"]}`}>
            World Visa Travel, abbreviated as WVT, operates as a privately held
            enterprise with a core focus on expediting passport requests,
            procuring visas, and authenticating paperwork in an expeditious
            manner. Our scope of services encompasses replacements for passports
            that have been misplaced or pilfered, urgent and unforeseen passport
            requisitions, US passport renewals, and an array of other valuable
            offerings. With our round-the-clock Passport Service, your passport
            becomes our utmost concern. Additionally, we extend expedited
            services with same-day processing for your convenience.
          </h5>
          <h5 className={`${styles["about-paragraph-content"]}`}>
            With World Visa Travel, you can travel with confidence, knowing that
            your passport and visa requirements are in capable hands. We take
            pride in our commitment to efficiency, accuracy, and customer
            satisfaction. Let us handle the paperwork so you can focus on
            creating unforgettable travel memories.
          </h5>
        </div>
      </div>



      <h2 className={`${styles["About-Services-Heading"]}`}>
      <strong> Our Popular Services</strong>
      </h2>

      <div className={`${styles["About-Services-container"]}`}>
        <div className={`${styles["About-Service"]}`}>
          <h4>Passport</h4>
          <img src="assets/country/1.png" alt="Image 1"  className="About-Service-img"/>
          <p className={`${styles["About-Service-content"]}`}>
            A passport is an official government-issued document that verifies a
            person's identity and citizenship. It contains personal information
            like the holder's name, photograph, and date of birth, enabling
            international travel and serving as a record of border crossings.
            Passports are essential for accessing foreign countries and
            obtaining visas for travel.
          </p>
        </div>
        <div className={`${styles["About-Service"]}`}>
          <h4>Visas</h4>
          <img src="assets/country/2.png" alt="Image 2"  className="About-Service-img"/>
          <p className={`${styles["About-Service-content"]}`}>
            Visas, government-issued permits, play a crucial role in
            international travel by granting entry and stay in foreign
            countries. These permits are categorized based on travel purposes,
            such as tourism, work, or study, ensuring travelers comply with
            immigration regulations, thus facilitating a smooth and legal entry
            into their chosen destinations.
          </p>
        </div>
        <div className={`${styles["About-Service"]}`}>
          <h4>Legalization</h4>
          <img src="assets/country/3.png" alt="Image 2"  className="About-Service-img" />
          <p className={`${styles["About-Service-content"]}`}>
            Legalization is the process of authenticating documents to ensure
            their validity and credibility in international transactions and
            legal matters. It involves obtaining official endorsements from
            government authorities or consulates. This procedure is essential
            for documents like certificates, contracts, and agreements to be
            recognized and accepted across borders.
          </p>
        </div>
        <div className={`${styles["About-Service"]}`}>
          <h3>E-Visas</h3>
          <img src="assets/country/4.png" alt="Image 2"  className="About-Service-img"/>
          <p className={`${styles["About-Service-content"]}`}>
            An eVisa, or electronic visa, is a digital travel authorization
            document that allows travelers to apply for and obtain entry permits
            online. This streamlined process eliminates the need for physical
            visa stamps and offers convenience and efficiency for international
            travelers. Evisas are increasingly popular for their simplicity and
            accessibility.
          </p>
        </div>
      </div>

      <div className={`${styles["About-container2"]}`}>
        <div className={`${styles["About-item"]}`}>
          <h6 className={`${styles["about-paragraph-heading1"]}`}>
            OUR COMPANY
          </h6>
          <h2 className={`${styles["about-paragraph-heading1"]}`}>
            Since 1980 we have
          </h2>
          <h2>
            <b className={`${styles["about-paragraph-heading1"]}`}>
              branches all over world
            </b>
          </h2>
          <h5 className={`${styles["about-paragraph-content"]}`}>
            World Visa Travel is a trusted company with over 30 years of
            experience in helping people get their passports and other travel
            documents quickly and efficiently. We understand that when you are
            planning a trip, time is of the essence. That's why we offer a
            24-hour passport expediting service.
          </h5>

          <h5 className={`${styles["about-paragraph-content"]}`}>
            Unlike the U.S. Passport Company, which can take over 8 weeks to
            process a passport, we are able to get it done in just 24 hours. We
            know that sometimes things happen unexpectedly and you may need a
            passport quickly. That's why we are here to help.
          </h5>
        </div>

        <div className={`${styles["About-item"]}`}>
          <img
            src="assets/mapdesign.png"
            alt="map_png"
            style={{ width: "100%" }}
          ></img>
        </div>
      </div>

      <center>
        <div className={`${styles["About-container2"]}`}>
          <div className={`${styles["About_icon_container"]}`}>
            <div className={`${styles["About_icon"]}`}>
              <i>
                <MdBusiness />
              </i>
              <h3 style={{ color: "#fff" }}>
                <b>4578 +</b>
              </h3>
              <h6>TRUSTED CLIENTS</h6>
            </div>

            <div className={`${styles["About_icon"]}`}>
              <i>
                <BsFillAirplaneEnginesFill />
              </i>
              <h3 style={{ color: "#fff" }}>
                <b>150 +</b>
              </h3>
              <h6>COUNTRIES</h6>
            </div>

            <div className={`${styles["About_icon"]}`}>
              <i>
                <LiaUniversitySolid />
              </i>
              <h3 style={{ color: "#fff" }}>
                <b>574 +</b>
              </h3>
              <h6>UNIVERSITIES</h6>
            </div>

            <div className={`${styles["About_icon"]}`}>
              <i>
                <PiStudentFill />
              </i>
              <h3 style={{ color: "#fff" }}>
                {" "}
                <b>1564 +</b>
              </h3>
              <h6>STUDENTS</h6>
            </div>

            <div className={`${styles["About_icon"]}`}>
              <i>
                <BsFillJournalBookmarkFill />
              </i>
              <h3 style={{ color: "#fff" }}>
                <b>1254 +</b>
              </h3>
              <h6>IMMIGRATION</h6>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default About;
