import React from "react";
import styles from "./Home.module.css";
import HomeIcon from "../../Components/icons/HomeIcon";
import { Link } from "react-router-dom";
import { BsCheck2Circle } from "react-icons/bs";
import { FaAddressBook, FaUserGraduate } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GiOpenBook } from "react-icons/gi";
import Search from "./../../Components/SearchCountry/Search";
import Carousel from "react-bootstrap/Carousel";
import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
function Home() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="position-relative">
        <div
          className={`${styles["Home"]} d-flex position-relative align-items-top`}
        >
          <div className="container d-flex flex-column text-light">
            <center>
              <h2 className={`${styles["Home-banner-heading"]}`}>
                Experience Seamless World Travel with Our<br></br> Visa and
                Passport Specialists
              </h2>
            </center>
            <center>
              <h3>Apply for a Travel Visa:</h3>
            </center>
            <center>
              <Search />
            </center>
          </div>
        </div>
        {/* <div id="carousel-container">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/banners/10.png"
                alt="First slide"
              />
              <Carousel.Caption className="carousel-caption">
                <h1 style={{ marginTop: "0" }} className="silder_on_text">
                  Our Trusted Visa and Passport Specialists are How the Globe
                  Gets Moving
                </h1>
                <h2
                  style={{ marginTop: "0", paddingTop: "40px" }}
                  className="silder_on_text"
                >
                  Apply for a Travel Visa:
                </h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/banners/6.png"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h1 style={{ marginTop: "0" }}>
                  Our Trusted Visa and Passport Specialists are How the Globe
                  Gets Moving
                </h1>
                <h2 style={{ marginTop: "0", paddingTop: "40px" }}>
                  Apply for a Travel Visa:
                </h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/banners/7.png"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h1 style={{ marginTop: "0" }}>
                  Our Trusted Visa and Passport Specialists are How the Globe
                  Gets Moving
                </h1>
                <h2 style={{ marginTop: "0", paddingTop: "40px" }}>
                  Apply for a Travel Visa:
                </h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Search />
  </div>*/}

        <div
          className={`${styles["Home-container"]}`}
          id={`${styles["Home-top"]}`}
        >
          <div className={`${styles["Home-box"]}`}>
            <div className={`${styles["Home-top-flex1"]}`}>
              <Link to="/visas">
                {" "}
                <h4 className={`${styles["Home-header-text"]}`}>
                  <i className={`${styles["Home-header-icon"]}`}>
                    <GiOpenBook />
                  </i>
                  Apply Online Visa
                </h4>
              </Link>
              <hr></hr>
              <p>
                Apply for your Visa online with ease through our comprehensive
                online Visa application portal.
              </p>
            </div>
          </div>
          <div className={`${styles["Home-box"]}`}>
            <div className={`${styles["Home-top-flex2"]}`}>
              <Link to="/passport">
                <h4 className={`${styles["Home-header-text"]}`}>
                  <i className={`${styles["Home-header-icon"]}`}>
                    <FaAddressBook />
                  </i>
                  Book an Appointment
                </h4>
              </Link>
              <hr></hr>
              <p>
                To manage your visa application through our knowledgeable
                certified agents.
              </p>
            </div>
          </div>

          <div className={`${styles["Home-box"]}`}>
            {" "}
            <div className={`${styles["Home-top-flex3"]}`}>
              <Link to="/legalizations">
                {" "}
                <h4 className={`${styles["Home-header-text1"]}`}>
                  <i className={`${styles["Home-header-icon1"]}`}>
                    <FaUserGraduate />
                  </i>
                  Legalizations
                </h4>
              </Link>
              <hr></hr>
              <p>
                Trust our seasoned legalisation experts to navigate complex visa
                processes efficiently, making your international aspirations a
                reality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles["Home-top-flexbox2 px-sm-2 px-lg-5"]}`}>
        <div
          className={`${styles["Home-flexbox2"]}`}
          style={{ position: "relative" }}
        >
          <div
            className={`${styles["Home-top-flexbox2"]}`}
            style={{ paddingBottom: "40px", paddingTop: "40px" }}
          >
            <div
              className={`${styles["Home-top-flexbox2-leftside"]}`}
              style={{ paddingLeft: "120px", paddingBottom: "40px" }}
            >
              <h6>WHO WE ARE</h6>
              <h2>
                We are experienced professionals <br></br>in Visa Solutions
              </h2>
            </div>
            <div className={`${styles["Home-top-flexbox2-rightside"]}`}>
              <p>
                We offer a skilled team dedicated to enhancing your travel
                experience, adding significant value to your journeys. Our
                certified and dependable Travel Consultants are here to assist
                you in achieving favorable outcomes for your travel plans. Our
                services extend across various regions within countries.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles["position-relative"]}`}>
        <div
          className={`${styles["Home-flexbox4"]}`}
          style={{ position: "relative" }}
        >
          <div
            className={`${styles["Home-top-flexbox4"]}`}
            style={{ paddingBottom: "40px", paddingTop: "60px" }}
          >
            <div
              className={`${styles["Home-top-flexbox4-leftside"]}`}
              style={{ paddingLeft: "120px", paddingBottom: "40px" }}
            >
              <h6>WHO WE ARE</h6>
              <h2>
                We are experienced professionals <br></br> in Visa Solutions
              </h2>
            </div>
            <div className={`${styles["Home-top-flexbox4-rightside"]}`}>
              <p>
                We offer a skilled team dedicated to enhancing your travel
                experience, adding significant value to your journeys. Our
                certified and dependable Travel Consultants are here to assist
                you in achieving favorable outcomes for your travel plans. Our
                services extend across various regions within countries.
              </p>
            </div>
          </div>

          <div className={`${styles["Home-card-silder"]}`}>
            <Slider {...settings}>
              <div
                className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
                style={{ background: "#fff" }}
              >
                <div className={`${styles["Home-card"]}`}>
                  <div className={"card-body"}>
                    <h5 className={`${styles["card-title"]}`}>Family Visa</h5>
                  </div>
                  <img
                    src="assets/Homeicons/Family.png"
                    className={`${styles["card-img-top"]}`}
                    alt="Home_country_icon"
                    width="90%"
                  ></img>
                  <p className={`${styles["Home-Card-content"]}`}>
                    A family visa is a legal permit for individuals to reunite
                    with close family members in another country, fostering
                    family unity. It enables loved ones separated by borders to
                    live together.
                  </p>
                </div>
              </div>{" "}
              <div
                className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
              >
                <div className={`${styles["Home-card"]}`}>
                  <div className={`${styles["card-body"]}`}>
                    <h5 className={`${styles["card-title"]}`}>Migrate Visa</h5>
                  </div>
                  <img
                    src="assets/Homeicons/migrate.png"
                    className={`${styles["card-img-top"]}`}
                    alt="Home_country_icon"
                    width="90%"
                  ></img>
                  <p className={`${styles["Home-Card-content"]}`}>
                    A migration visa opens doors for individuals to begin anew
                    in a foreign country, pursuing their dreams and ambitions.
                    It's a gateway to a fresh start and new opportunities on
                    foreign soil.
                  </p>
                </div>
              </div>{" "}
              <div
                className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
              >
                <div className={`${styles["Home-card"]}`}>
                  <div className={`${styles["card-body"]}`}>
                    <h5 className={`${styles["card-title"]}`}>Investor Visa</h5>
                  </div>
                  <img
                    src="assets/Homeicons/investor.png"
                    className={`${styles["card-img-top"]}`}
                    alt="Home_country_icon"
                    width="90%"
                  ></img>
                  <p className={`${styles["Home-Card-content"]}`}>
                    An investor visa, offered in many countries, enables
                    individuals to obtain residency or citizenship by making
                    significant financial investments, fostering global mobility
                    and business prospects.
                  </p>
                </div>
              </div>{" "}
              <div
                className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
              >
                <div className={`${styles["Home-card"]}`}>
                  <div className={`${styles["card-body"]}`}>
                    <h5 className={`${styles["card-title"]}`}>Student Visa</h5>
                  </div>
                  <img
                    src="assets/Homeicons/student.png"
                    className={`${styles["card-img-top"]}`}
                    alt="Home_country_icon"
                    width="90%"
                  ></img>
                  <p className={`${styles["Home-Card-content"]}`}>
                    A student visa is that allows foreign nationals to study in
                    a specific country for a designated period, typically for
                    the purpose of pursuing educational courses at recognized
                    institutions.
                  </p>
                </div>
              </div>{" "}
              <div
                className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
              >
                <div className={`${styles["Home-card"]}`}>
                  <div className={`${styles["card-body"]}`}>
                    <h5 className={`${styles["card-title"]}`}>
                      Diplomatic Visa
                    </h5>
                  </div>
                  <img
                    src="assets/Homeicons/diplomatic.png"
                    className={`${styles["card-img-top"]}`}
                    alt="Home_country_icon"
                    width="90%"
                  ></img>
                  <p className={`${styles["Home-Card-content"]}`}>
                    A diplomatic visa is issued to foreign government officials
                    and accompanying family members, enabling them to enter and
                    stay in a host country for official diplomatic purposes.
                  </p>
                </div>
              </div>{" "}
              <div
                className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
              >
                <div className={`${styles["Home-card"]}`}>
                  <div className={`${styles["card-body"]}`}>
                    <h5 className={`${styles["card-title"]}`}>Tourist Visa</h5>
                  </div>
                  <img
                    src="assets/Homeicons/tourist.png"
                    className={`${styles["card-img-top"]}`}
                    alt="Home_country_icon"
                    width="90%"
                  ></img>
                  <p className={`${styles["Home-Card-content"]}`}>
                    A tourist visa is a temporary travel document allowing
                    visits to foreign countries for sightseeing, and recreation,
                    typically for a limited duration, with no paid employment
                    permitted.
                  </p>
                </div>
              </div>{" "}
              <div
                className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
              >
                <div className={`${styles["Home-card"]}`}>
                  <div className={`${styles["card-body"]}`}>
                    <h5 className={`${styles["card-title"]}`}>Business Visa</h5>
                  </div>
                  <img
                    src="assets/Homeicons/business.png"
                    className={`${styles["card-img-top"]}`}
                    alt="Home_country_icon"
                    width="90%"
                  ></img>
                  <p className={`${styles["Home-Card-content"]}`}>
                    A business visa is a type of travel document that allows
                    individuals to enter a foreign country for the purpose of
                    conducting business activities, such as meetings,
                    conferences, and negotiations.
                  </p>
                </div>
              </div>{" "}
              <div
                className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
              >
                <div className={`${styles["Home-card"]}`}>
                  <div className={`${styles["card-body"]}`}>
                    <h5 className={`${styles["card-title"]}`}>Transit Visa</h5>
                  </div>
                  <img
                    src="assets/Homeicons/Transit.png"
                    className={`${styles["card-img-top"]}`}
                    alt="Home_country_icon"
                    width="90%"
                  ></img>
                  <p className={`${styles["Home-Card-content"]}`}>
                    A transit visa permits travelers to briefly pass through a
                    country while on their way to ultimate destination. It's
                    usually necessary for extended layovers that surpass a
                    specified time limit.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className={`${styles["under_card_silder"]}`}>
          <div className={`${styles["under_card_silder_item1"]}`}>
            <img
              src="/assets/country/1.png"
              alt="img"
              className="under_card_img"
            />
          </div>
          <div
            className={`${styles["under_card_silder_item2 p-2 text-center"]}`}
          >
            <h4>Free Online Visa Assessment</h4>
            <p>
              Contact us today by fill up free online<br></br>
              visa assessment and we will contact you
            </p>
            <Link to="/contact">
              <button
                className={`${styles["under_card_silder_button text-center"]}`}
                style={{
                  padding: "10px",
                  background: "#0067da",
                  color: "#fff",
                  fontWeight: "700",
                  border: "1px solid #0067da",
                }}
              >
                Contact Us
                <i className={`${styles["under_card_silder_icon"]}`}>
                  <HiArrowNarrowRight />
                </i>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${styles["Home-top-flexbox3"]}`}
        style={{
          backgroundColor: "#ffffff",
          // paddingLeft: "60px",
          // paddingRight: "50px",
          // paddingTop: "30px",
          // paddingBottom: "40px",
        }}
      >
        <div className={`${styles["Home-top-flexbox3-leftside"]}`}>
          <div
            className={`${styles["parent"]}`}
            style={{ paddingBottom: "60px" }}
          >
            <img
              src="assets/img/Homeright.png"
              alt="image1"
              className={`${styles["image1"]}`}
            ></img>
            <img
              src="assets/img/Homeright1.png"
              alt="image1"
              className={`${styles["image2"]}`}
            ></img>
          </div>
        </div>
        <div className={`${styles["Home-top-flexbox3-rightside"]}`}>
          <h6>ABOUT WORLD VISA TRAVEL</h6>
          <h1>
            Immigration Services From<br></br>
            <strong>Experienced Lawyers.</strong>
          </h1>
          <p>
            We've been counselling students for educational Opportun in Foreign
            countries.
          </p>
          <p>
            Fusce non mi at nisl laoreet pretium. Nulla ut elementum sapien, a
            pulvinar augue. Sed semper sed tellus in ultrices. Nam hendrerit
            elit vel urna fermentum congue.
          </p>
          <ul className={`${styles["Home-header-3flex"]}`}>
            <li>
              <i className={`${styles["Home-header-3flex-icon"]}`}>
                <BsCheck2Circle />
              </i>
              Talk to one of our best consultant today
            </li>
            <li>
              <i className={`${styles["Home-header-3flex-icon"]}`}>
                <BsCheck2Circle />
              </i>
              Our experts are able to find new growth
            </li>
            <li>
              <i className={`${styles["Home-header-3flex-icon"]}`}>
                <BsCheck2Circle />
              </i>
              Find more information our website
            </li>
          </ul>
          <button className={`${styles["Home-header-3flex-button"]}`}>
            Discover More{" "}
            <i className={`${styles["Home-3flex-button-icon"]}`}>
              <HiOutlineArrowNarrowRight />
            </i>
          </button>
        </div>
      </div>

      <div className={`${styles["flexbox5"]}`}>
        <center style={{ paddingBottom: "20px" }}>
          <h6>CHOOSE COUNTRY</h6>
          <h1>
            Immigration - Choose <b>your country!</b>
          </h1>
        </center>

        <div className={`${styles["Home-flexbox5"]}`}>
          <div className={`${styles["Home-top-flexbox5"]}`}>
            <img
              src="assets/country/1.png"
              height="auto"
              width="280px"
              alt="country_img"
            ></img>
            <h5 className={`${styles["Home-top-flexbox5-header"]}`}>
              United States
            </h5>
            <p>
              Studying In The United State of America quis nostrud exercitation
            </p>
            <h6>Read More</h6>
          </div>

          <div className={`${styles["Home-top-flexbox5"]}`}>
            <img
              src="assets/country/2.png"
              height="auto"
              width="280px"
              alt="country_img"
            ></img>
            <h5 className={`${styles["Home-top-flexbox5-header"]}`}>
              Australia
            </h5>
            <p>
              Studying in the Australia quis nostrud exercitation ullamco
              laboris.
            </p>
            <h6>Read More</h6>
          </div>

          <div className={`${styles["Home-top-flexbox5"]}`}>
            <img
              src="assets/country/3.png"
              height="auto"
              width="280px"
              alt="country_img"
            ></img>
            <h5 className={`${styles["Home-top-flexbox5-header"]}`}>Canada</h5>
            <p>
              Studying in the Canada quis nostrud exercitation ullamco laboris.
            </p>
            <h6>Read More</h6>
          </div>

          <div className={`${styles["Home-top-flexbox5"]}`}>
            <img
              src="assets/country/4.png"
              height="auto"
              width="280px"
              alt="country_img"
            ></img>
            <h5 className={`${styles["Home-top-flexbox5-header"]}`}>
              United Kingdom
            </h5>
            <p>
              Studying in the United Kingdom quis nostrud exercitation ullamco.
            </p>
            <h6>Read More</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
