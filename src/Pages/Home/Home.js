import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { GiOpenBook } from "react-icons/gi";
import { BsCheck2Circle } from "react-icons/bs";
import { FaAddressBook, FaUserGraduate } from "react-icons/fa";
import Slider from "react-slick";
import React, { useState } from "react";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { countries } from "countries-list"; // Import the countries list
import ReactCountryFlag from "react-country-flag";
import Search from "../../Components/SearchCountry/Search";

const countryOptions = Object.keys(countries).map((countryCode) => ({
  value: countryCode,
  label: countries[countryCode].name,
  flag: <ReactCountryFlag countryCode={countryCode} svg />,
}));

const stateOptions = [
  { value: "state1", label: "State 1" },
  { value: "state2", label: "State 2" },
  // Add more state options
];

function Home() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 700,
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

  const [sourceCountry, setSourceCountry] = useState(null);
  const [destinationCountry, setDestinationCountry] = useState(null);
  const [residingState, setResidingState] = useState(null);

  const handleSearch = () => {
    console.log("Source Country:", sourceCountry?.label);
    console.log("Destination Country:", destinationCountry?.label);
    console.log("Residing State:", residingState?.label);
  };

  return (
    <>
      <div className="position-relative">
        <div
          className={`${styles["Home"]} d-flex position-relative align-items-top`}
        >
          <div className="container d-flex flex-column text-light">
            <center>
              <h1
                className={`${styles["Home-banner-heading"]}`}
                style={{
                  paddingTop: "45px",
                }}
              >
              Expedite passports , visas and legalization and all your travel needs since 1987 , located at the heart of Washington DC
              </h1>
              <div className={`${styles["Home-Searchbar"]}`}>
                <Link to="/index">
                  {" "}
                  <button className={`${styles["e-visa-button"]}`}>
                    Apply for Visa Travel
                  </button>{" "}
                </Link>
                <center>
                  <div
                    className={`${styles["Home-country-container"]}`}
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      paddingLeft: "60px",
                    }}
                  >
                    <div className={`${styles["Search"]}`}>
                      <Search />
                    </div>
                  </div>
                </center>
              </div>
            </center>
          </div>
        </div> 
        <div
          className={`${styles["Home-container"]}`}
          id={`${styles["Home-top"]}`}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
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
              <Link to="/passports">
                <h4 className={`${styles["Home-header-text"]}`}>
                  <i className={`${styles["Home-header-icon"]}`}>
                    <FaAddressBook />
                  </i>
                  Passport Services
                </h4>
              </Link>
              <hr></hr>
              <p>
                To facilitate your passport application through our experienced
                and certified professionals.
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
                Trust our experts to handle visa processes, making your
                international goals a reality.
             </p>
           </div>
         </div>
      </div>

      


      






        <div className={`${styles["position-relative"]}`}>
          <div
            className={`${styles["Home-flexbox4"]}`}
            style={{ position: "relative" }}
          >
            <div className={`${styles["Home-who-we-are-content"]}`}>
              <center>
                <h2 className={`${styles["Home-who-we-are-heading"]}`}>
                  WHO WE ARE
                </h2>
                <h2>We are experienced professionals in Visa Solutions</h2>
                <p className={`${styles["Home-who-we-are-content-paragraph"]}`}>
                  <i className={`${styles["Home-who-we-are-heading1"]}`}>
                  worldvisatravel Hello! We are World Visa Travel, a privately
                  owned company founded over 25 years ago that specializes
                  in rapidly expediting all passport applications, obtaining visas
                  and legalizing documents. We do replacements for lost or
                  stolen passports, rush and emergency passports, U.S.
                  passport renewals, and many more services. With our 24-
                  hour Passport Service, your passport is our priority. We also
                  provide SAME DAY services! Thank you for your support!
                  </i>
                </p>
              </center>
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
                      width="100%"
                    ></img>
                    <p className={`${styles["Home-Card-content"]}`}>
                      A family visa is a legal permit for individuals to reunite
                      with close family members in another country, fostering
                      family unity. It enables loved ones separated by borders
                      to live together.
                    </p>
                  </div>
                </div>{" "}
                <div
                  className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
                >
                  <div className={`${styles["Home-card"]}`}>
                    <div className={`${styles["card-body"]}`}>
                      <h5 className={`${styles["card-title"]}`}>
                        Migrate Visa
                      </h5>
                    </div>
                    <img
                      src="assets/Homeicons/migrate.png"
                      className={`${styles["card-img-top"]}`}
                      alt="Home_country_icon"
                      width="100%"
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
                      <h5 className={`${styles["card-title"]}`}>
                        Investor Visa
                      </h5>
                    </div>
                    <img
                      src="assets/Homeicons/investor.png"
                      className={`${styles["card-img-top"]}`}
                      alt="Home_country_icon"
                      width="100%"
                    ></img>
                    <p className={`${styles["Home-Card-content"]}`}>
                      An investor visa, offered in many countries, enables
                      individuals to obtain residency or citizenship by making
                      significant financial investments,mobility and business
                      prospects.
                    </p>
                  </div>
                </div>{" "}
                <div
                  className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
                >
                  <div className={`${styles["Home-card"]}`}>
                    <div className={`${styles["card-body"]}`}>
                      <h5 className={`${styles["card-title"]}`}>
                        Student Visa
                      </h5>
                    </div>
                    <img
                      src="assets/Homeicons/student.png"
                      className={`${styles["card-img-top"]}`}
                      alt="Home_country_icon"
                      width="100%"
                    ></img>
                    <p className={`${styles["Home-Card-content"]}`}>
                      A student visa is that allows foreign nationals to study
                      in a specific country for a designated period, typically
                      for the purpose of pursuing educational courses at
                      recognized institutions.
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
                      width="100%"
                    ></img>
                    <p className={`${styles["Home-Card-content"]}`}>
                      A diplomatic visa is issued to foreign government
                      officials, enabling them to enter and reside in a host
                      country for official diplomatic purposes, often with
                      special privileges and immunities.
                    </p>
                  </div>
                </div>{" "}
                <div
                  className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
                >
                  <div className={`${styles["Home-card"]}`}>
                    <div className={`${styles["card-body"]}`}>
                      <h5 className={`${styles["card-title"]}`}>
                        Tourist Visa
                      </h5>
                    </div>
                    <img
                      src="assets/Homeicons/tourist.png"
                      className={`${styles["card-img-top"]}`}
                      alt="Home_country_icon"
                      width="100%"
                    ></img>
                    <p className={`${styles["Home-Card-content"]}`}>
                      A tourist visa is a temporary travel document allowing
                      visits to foreign countries for leisurely and immersive
                      sightseeing, recreation, and exploration, typically for a
                      limited duration permitted.
                    </p>
                  </div>
                </div>{" "}
                <div
                  className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
                >
                  <div className={`${styles["Home-card"]}`}>
                    <div className={`${styles["card-body"]}`}>
                      <h5 className={`${styles["card-title"]}`}>
                        Business Visa
                      </h5>
                    </div>
                    <img
                      src="assets/Homeicons/business.png"
                      className={`${styles["card-img-top"]}`}
                      alt="Home_country_icon"
                      width="100%"
                    ></img>
                    <p className={`${styles["Home-Card-content"]}`}>
                      A business visa is a specific type of travel document that
                      allows individuals to enter a foreign country for the
                      purpose of engaging in business activities, such as
                      meetings and negotiations.
                    </p>
                  </div>
                </div>{" "}
                <div
                  className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
                >
                  <div className={`${styles["Home-card"]}`}>
                    <div className={`${styles["card-body"]}`}>
                      <h5 className={`${styles["card-title"]}`}>
                        Transit Visa
                      </h5>
                    </div>
                    <img
                      src="assets/Homeicons/Transit.png"
                      className={`${styles["card-img-top"]}`}
                      alt="Home_country_icon"
                      width="100%"
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
        </div>

        <div
          className={`${styles["Home-top-flexbox3"]}`}
          style={{
            backgroundColor: "#ffffff",
          }}
        >
          <div className={`${styles["Home-top-flexbox3-leftside"]}`}>
            <div
              className={`${styles["parent"]}`}
              style={{ paddingBottom: "20px" }}
            >
              <img
                src="assets/Home2.png"
                alt="About_png"
                className={`${styles["Home_flex_img"]}`}
                style={{ width: "100%" }}
              ></img>
            </div>
          </div>
          <div className={`${styles["Home-top-flexbox3-rightside"]}`}>
            <h6>ABOUT WORLD VISA TRAVEL</h6>
            <h2 className={`${styles["Home-top-flexbox3-heading"]}`}>
              Your Gateway to Global Opportunities:<br></br>{" "}
              <strong> Visa & Documentation Experts</strong>
            </h2>
            <h5>All your travel needs in the heart of Washington DC since 1987</h5>
            <p>
              World Visa Travel is a company with expertise in obtaining tourist
              and business visas, as well as U.S. regular, official, or
              diplomatic passports. They can help you get single, double, or
              multiple entry visas. They also serve non-U.S. citizens who are
              permanent residents or legally authorized to live in the United
              States. Additionally, they can help you legalize documents with
              the embassies of the designated countries.
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
          </div>
        </div>

        <div className={`${styles["flexbox5"]}`}>
          <center style={{ padding: "20px" }}>
            <h5>Testimonials of Transformation</h5>
            <h1>
              Our Client <b style={{ color: "#D6F8FF" }}> Testimonials</b>
            </h1>
          </center>
          <Slider {...settings}>
            <div
              className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
              style={{ background: "#fff" }}
            >
              <div className={`${styles["testmonial-content"]}`}>
                <div className={`${styles["home-testmonial-star"]}`}>
                  <i>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </i>
                </div>
                <p className={`${styles["Home-testimonial-content"]}`}>
                  I have had the pleasure of working with World Visa Travel,
                  Inc. from 2004-2023, through the agency I was employed with.
                  Randy and his staff were always professional, courteous, and
                  pleasant to work with. They were extremely helpful in
                  assisting us in obtaining visas from the various embassies and
                  passports from the State Department. There were many times
                  when they went above and beyond for us and we greatly
                  appreciated it. I would highly recommend using their service
                  for any travel needs you may have.
                </p>
                <div className={`${styles["home-testmonial-name"]}`}>
                  <strong> - PAMELA CLARK</strong>
                </div>
              </div>
            </div>{" "}
            <div
              className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
            >
              <div className={`${styles["testmonial-content"]}`}>
                <div className={`${styles["home-testmonial-star"]}`}>
                  <i>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </i>
                </div>
                <p className={`${styles["Home-testimonial-content"]}`}>
                  I wholeheartedly endorse Randy Gunawan and World Visa Travel
                  for their exceptional 25-year partnership with Winrock
                  International. Their unwavering commitment to efficiency and
                  seamless communication with foreign embassies have
                  consistently exceeded our expectations. Their expertise and
                  dedication to excellence make them our exclusive choice for
                  visa and passport services. I confidently recommend their
                  services and anticipate a continued successful partnership for
                  the next years.
                </p>
                <div className={`${styles["home-testmonial-name"]}`}>
                  <strong> - Mr.GUNAWAN</strong>
                </div>
              </div>
            </div>{" "}
            <div
              className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
            >
              <div className={`${styles["testmonial-content"]}`}>
                <div className={`${styles["home-testmonial-star"]}`}>
                  <i>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </i>
                </div>
                <p className={`${styles["Home-testimonial-content"]}`}>
                  World Visa Travel has consistently been my preferred choice
                  for visa and passport services. Their dedicated and
                  knowledgeable team stays well-informed about the latest visa
                  requirements, making the process hassle-free. They are readily
                  available to promptly address any queries and expertly guide
                  every step of the way. I wholeheartedly endorse their
                  exceptional services to anyone seeking a stress-free and
                  reliable visa experience.Their expertise, along with their
                  approach, truly sets them apart.
                </p>
                <div className={`${styles["home-testmonial-name"]}`}>
                  <strong> - JESSICA BROWN </strong>
                </div>
              </div>
            </div>{" "}
            <div
              className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
            >
              <div className={`${styles["testmonial-content"]}`}>
                <div className={`${styles["home-testmonial-star"]}`}>
                  <i>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </i>
                </div>
                <p className={`${styles["Home-testimonial-content"]}`}>
                  World Visa Travel has been an integral part of my travel
                  experiences for the past 5 years. Their commitment to
                  excellence in expertly handling visa and passport services
                  exceeded my expectations. I can always navigate the
                  complexities of international travel documents with efficiency
                  and precision. For anyone in search of a trustworthy partner
                  to fulfill their travel needs, I wholeheartedly endorse World
                  Visa Travel – they stand out as the absolute best in the
                  business.
                </p>
                <div className={`${styles["home-testmonial-name"]}`}>
                  <strong> - DAVID MILLER</strong>
                </div>
              </div>
            </div>{" "}
            <div
              className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
            >
              <div className={`${styles["testmonial-content"]}`}>
                <div className={`${styles["home-testmonial-star"]}`}>
                  <i>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </i>
                </div>
                <p className={`${styles["Home-testimonial-content"]}`}>
                  Over the past 15 years, World Visa Travel has been my go-to
                  choice for visa and passport services.Whether it's a complex
                  visa or passport, I have always received exceptional service
                  from them. I highly recommend World Visa Travel to anyone
                  seeking peace of mind when it comes to their travel
                  documentation, I've found a travel partner that consistently
                  goes above and beyond, ensuring that my journeys are
                  hassle-free and enjoyable. and I trust them implicitly with
                  all my travel needs.
                </p>
                <div className={`${styles["home-testmonial-name"]}`}>
                  <strong> - SUSAN WILLIAMWS </strong>
                </div>
              </div>
            </div>{" "}
            <div
              className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
            >
              <div className={`${styles["testmonial-content"]}`}>
                <div className={`${styles["home-testmonial-star"]}`}>
                  <i>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </i>
                </div>
                <p className={`${styles["Home-testimonial-content"]}`}>
                  When it comes to visa and passport services, World Visa Travel
                  has been my trusted partner and I have recommended their
                  services to friends, family, and colleagues alike, confident
                  that they will receive the same exceptional service I have
                  enjoyed for decades.My travel adventures but has also
                  instilled in me a sense of confidence and security, knowing
                  that my travel documents are always in capable hands. Their
                  reputation and expertise is well-deserved, making them choice
                  for travel documentation needs.
                </p>
                <div className={`${styles["home-testmonial-name"]}`}>
                  <strong> - ROBERT JOHNSON</strong>
                </div>
              </div>
            </div>{" "}
            <div
              className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
            >
              <div className={`${styles["testmonial-content"]}`}>
                <div className={`${styles["home-testmonial-star"]}`}>
                  <i>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </i>
                </div>
                <p className={`${styles["Home-testimonial-content"]}`}>
                  Having relied on World Visa Travel for 13 years, I can attest
                  to their exceptional expertise in visa and passport services.
                  Their attention to detail and commitment to delivering results
                  have made them an indispensable part of my travel plans. I
                  enthusiastically recommend their services to anyone looking
                  for a seamless and stress-free travel document experience.
                  World Visa Travel's dedication to customer satisfaction sets
                  them apart as the premier choice for all your travel document
                  needs.
                </p>
                <div className={`${styles["home-testmonial-name"]}`}>
                  <strong> - JANE DOE</strong>
                </div>
              </div>
            </div>{" "}
            <div
              className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
            >
              <div className={`${styles["testmonial-content"]}`}>
                <div className={`${styles["home-testmonial-star"]}`}>
                  <i>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </i>
                </div>
                <p className={`${styles["Home-testimonial-content"]}`}>
                  For a quarter of a century, World Visa Travel has been the
                  cornerstone of my travel experiences. Their expertise in visa
                  and passport services is truly unparalleled, and I have never
                  encountered a more reliable partner in my journeys. World Visa Travel for their unwavering
                  commitment to providing exceptional service to travelers like
                  me. World Visa Travel's dedication to excellence continues to
                  be the gold standard in the industry, ensuring that each trip
                  is met with confidence and peace of mind.
                </p>
                <div className={`${styles["home-testmonial-name"]}`}>
                  <strong> - JOHN SMITH</strong>
                </div>
              </div>
            </div>{" "}
          </Slider>
        </div>
      </div>

      <div className={`${styles["Homeless-card-silder"]}`}>
        <center style={{ padding: "20px" }}>
          <h6>OTHER SERVICES </h6>
          <h1 style={{ color: "#2c3a90" }}>
            <b> Homeless Ministry</b>
          </h1>
        </center>
        <div>
          <center>
            <p className={`${styles["Homeless-Card-content"]}`}>
              At World Visa Travel we believe in the power of humanity. Our
              Homeless Ministry extends a helping hand to those without a home,
              working towards a society where everyone has a place to call home
              and a chance for a better life.
            </p>
          </center>
        </div>
        <Slider {...settings}>
          <div
            className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
            style={{ background: "#fff" }}
          >
            <img
              src="/assets/Homeless/homeless1.png"
              className={`${styles["Homeless-card-img-top"]}`}
              alt="Home_country_icon"
              width="90%"
            ></img>
          </div>{" "}
          <div
            className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
          >
            <img
              src="/assets/Homeless/homeless2.png"
              className={`${styles["Homeless-card-img-top"]}`}
              alt="Home_country_icon"
              width="90%"
            ></img>
          </div>{" "}
          <div
            className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
          >
            <img
              src="/assets/Homeless/homeless3.png"
              className={`${styles["Homeless-card-img-top"]}`}
              alt="Home_country_icon"
              width="90%"
            ></img>
          </div>{" "}
          <div
            className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
          >
            <img
              src="/assets/Homeless/homeless4.png"
              className={`${styles["Homeless-card-img-top"]}`}
              alt="Home_country_icon"
              width="90%"
            ></img>
          </div>{" "}
          <div
            className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
          >
            <img
              src="/assets/Homeless/homeless5.png"
              className={`${styles["Homeless-card-img-top"]}`}
              alt="Home_country_icon"
              width="90%"
            ></img>
          </div>{" "}
          <div
            className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
          >
            <img
              src="/assets/Homeless/homeless6.png"
              className={`${styles["Homeless-card-img-top"]}`}
              alt="Home_country_icon"
              width="90%"
            ></img>
          </div>{" "}
          <div
            className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
          >
            <img
              src="/assets/Homeless/homeless7.png"
              className={`${styles["Homeless-card-img-top"]}`}
              alt="Home_country_icon"
              width="90%"
            ></img>
          </div>{" "}
          <div
            className={`${styles["card-wrapper container-sm d-flex  justify-content-around"]}`}
          >
            <img
              src="/assets/Homeless/homeless8.png"
              className={`${styles["Homeless-card-img-top"]}`}
              alt="Home_country_icon"
              width="90%"
            ></img>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Home;
