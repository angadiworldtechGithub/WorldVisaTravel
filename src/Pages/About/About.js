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
          <h6>ABOUT AGENCY</h6>
          <h1>25 years of experience</h1>
          <h1>
            <b>Visa Immigration</b>
          </h1>
          <h3>
            Weve been counselling students for educational Opportun in Foreign
            countries.
          </h3>
          <h6>
            With a community of over 400 million users (and a majority age group
            being 18 to 29), wouldn’t you want to make sure you’re monitoring
            what people are posting on social networks?
          </h6>
          <h6>The majority have suffered alteration</h6>
          <h6>Best Exam Preparation with us</h6>
          <button className={`${styles["About-button"]}`}>
            Discover More
            <i className={`${styles["About-arrow-icon"]}`}>
              <RxArrowRight />
            </i>
          </button>
        </div>
      </div>

      <div className={`${styles["About-container2"]}`}>
        <div className={`${styles["About-item"]}`}>
          <h6>OUR COMPANY</h6>
          <h1>Since 1980 we have</h1>
          <h1>
            <b>branches all over world</b>
          </h1>
          <h6>
            We have been counselling students for educational opportunities in
            Foreign countries. Fusce non mi at nisl laoreet pretium. Nulla ut
            elementum sapien an pulvinar augue.
          </h6>
          <h6>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat nulla ut elementum sapien an pulvinar augue.
          </h6>
          <button className={`${styles["About-button"]}`}>
            Discover More
            <i className={`${styles["About-arrow-icon"]}`}>
              <RxArrowRight />
            </i>
          </button>
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
            Cursus porta, feugiat primis in ultrice ligula risus auctor tempus
            dolor feugiat, felis lacinia risus interdum auctor id viverra dolor
            iaculis luctus placerat and massa
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
