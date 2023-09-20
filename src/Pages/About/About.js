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
          <h6 className={`${styles["about-paragraph-heading"]}`}>ABOUT WORLD VISA TRAVEL</h6>
          <h2 className={`${styles["about-paragraph-heading"]}`}><strong>25 years of expertise</strong> in Visa and Travel Services.</h2>
          <h5 className={`${styles["about-paragraph-content"]}`}>World Visa Travel, abbreviated as WVT,
          operates as a privately held enterprise with a core focus on expediting passport requests, 
          procuring visas, and authenticating paperwork in an expeditious manner.
          Our scope of services encompasses replacements for passports that have been misplaced or pilfered,
          urgent and unforeseen passport requisitions, US passport renewals, and an array of other valuable offerings. 
          With our round-the-clock Passport Service, your passport becomes our utmost concern. Additionally,
          we extend expedited services with same-day processing for your convenience.</h5>
          <h5  className={`${styles["about-paragraph-content"]}`}>With World Visa Travel, you can travel with confidence, knowing that your passport and visa
           requirements are in capable hands. We take pride in our commitment to efficiency, accuracy, and
           customer satisfaction. Let us handle the paperwork so you can focus on creating unforgettable 
          travel memories.</h5>
        </div>
      </div>

      <div className={`${styles["About-container2"]}`}>
        <div className={`${styles["About-item"]}`}>
          <h6 className={`${styles["about-paragraph-heading"]}`}>OUR COMPANY</h6>
          <h2 className={`${styles["about-paragraph-heading"]}`}>Since 1980 we have</h2>
          <h2>
            <b className={`${styles["about-paragraph-heading"]}`}>branches all over world</b>
          </h2>
          <h6 className={`${styles["about-paragraph-content"]}`}>World Visa Travel is a trusted company with over 30 years of experience in helping people
           get their passports and other travel documents quickly and efficiently. We understand that when you 
           are planning a trip, time is of the essence. That's why we offer a 24-hour passport expediting service.</h6>

          <h6 className={`${styles["about-paragraph-content"]}`}>Unlike the U.S. Passport Company, which can take over 8 weeks to process a passport, we are able to
           get it done in just 24 hours. We know that sometimes things happen unexpectedly and you may need a 
           passport quickly. That's why we are here to help.</h6>
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

      <div className={`${styles["About-cilent-container"]}`}>
        <center style={{ paddingBottom: "20px" }}>
          <h6>OUR CONSULTANT</h6>
          <h1>
            Meet Our <b>Dedicated Team</b>
          </h1>
          <h6>
             Together, we're more than a team; we're a family united by a shared passion for excellence!
          </h6>
        </center>

        <div className={`${styles["About-cilent-box"]}`}>
          <div className={`${styles["About-cilent-item"]}`}>
            <img
              src="assets/aboutus/cilent1.png"
              height="auto"
              width="280px"
              alt="country_img"
            ></img>
            <h5 className="About-cilent-header">Managing Director</h5>
            <h6>Shania Matt</h6>
          </div>

          <div className={`${styles["About-cilent-item"]}`}>
            <img
              src="assets/aboutus/cilent2.png"
              height="auto"
              width="280px"
              alt="country_img"
            ></img>
            <h5 className={`${styles["About-cilent-header"]}`}>
              {" "}
              David William
            </h5>
            <h6>General Manager</h6>
          </div>

          <div className={`${styles["About-cilent-item"]}`}>
            <img
              src="assets/aboutus/cilent3.png"
              height="auto"
              width="280px"
              alt="country_img"
            ></img>
            <h5 className={`${styles["About-cilent-header"]}`}>
              Selina Donald
            </h5>
            <h6>Migration Agent</h6>
          </div>

          <div className={`${styles["About-cilent-item"]}`}>
            <img
              src="assets/aboutus/cilent4.png"
              height="auto"
              width="280px"
              alt="country_img"
            ></img>
            <h5 className={`${styles["About-cilent-header"]}`}>David Smith</h5>
            <h6>Visa Director</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
