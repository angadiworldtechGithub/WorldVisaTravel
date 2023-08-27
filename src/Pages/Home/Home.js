import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { FaAddressBook, FaUserGraduate } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GiOpenBook } from "react-icons/gi";
import "./Home.css";
import Search from "./../../Components/SearchCountry/Search";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <>
      <div id="carousel-container">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/banners/10.png"
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption">
              <h1 style={{ marginTop: "0" }} className="silder_on_text">
                Our Trusted Visa and Passport Specialists are How the Globe Gets
                Moving
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
                Our Trusted Visa and Passport Specialists are How the Globe Gets
                Moving
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
                Our Trusted Visa and Passport Specialists are How the Globe Gets
                Moving
              </h1>
              <h2 style={{ marginTop: "0", paddingTop: "40px" }}>
                Apply for a Travel Visa:
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Search />
      </div>

      <div className="Home-container" id="Home-top">
        <div className="Home-box">
          <div className="Home-top-flex1">
            <h4 className="Home-header-text">
              <i className="Home-header-icon">
                <GiOpenBook />
              </i>
              Apply Online Visa
            </h4>
            <hr></hr>
            <p>
              We are trustworthy immigration consultants who can manage your
              case.
            </p>
          </div>
        </div>
        <div className="Home-box">
          <div className="Home-top-flex2">
            <h4 className="Home-header-text">
              <i className="Home-header-icon">
                <FaAddressBook />
              </i>
              Book an Appointment
            </h4>
            <hr></hr>
            <p>
              To manage your visa application through our knowledgeable
              certified agents.
            </p>
          </div>
        </div>

        <div className="Home-box">
          {" "}
          <div className="Home-top-flex3">
            <h4 className="Home-header-text">
              <i className="Home-header-icon">
                <FaUserGraduate />
              </i>
              Immigration Experts
            </h4>
            <hr></hr>
            <p>
              Our goal has been provide immigration in all over country and
              universities.
            </p>
          </div>
        </div>
      </div>

      {/*<div className="d-flex justify-content-evenly" id="Home-top">

        <div className="Home-top-flex1">
          <h4 className="Home-header-text">
            <i className="Home-header-icon">
              <GiOpenBook />
            </i>
            Apply Online Visa
          </h4>
          <hr></hr>
          <p>
            We are trustworthy immigration consultants who can manage your case.
          </p>
        </div>

        <div className="Home-top-flex2">
          <h4 className="Home-header-text">
            <i className="Home-header-icon">
              <FaAddressBook />
            </i>
            Book an Appointment
          </h4>
          <hr></hr>
          <p>
            To manage your visa application through our knowledgeable certified
            agents.
          </p>
        </div>

        <div className="Home-top-flex3">
          <h4 className="Home-header-text">
            <i className="Home-header-icon">
              <FaUserGraduate />
            </i>
            Immigration Experts
          </h4>
          <hr></hr>
          <p>
            Our goal has been provide immigration in all over country and
            universities.
          </p>
        </div>
      </div>
 */}
      <div className="Home-top-flexbox2">
        <div
          className="Home-top-flexbox2-leftside"
          style={{ paddingLeft: "100px" }}
        >
          <h6>WHO WE ARE</h6>
          <h2>
            We are professional Expert<br></br> in Immigration Visa
          </h2>
        </div>

        <div className="Home-top-flexbox2-rightside">
          <p>
            We provide expert team to create great value for immigration. Our
            certified & reliable Immigration Consultant professionals can help
            you get a positive decision on your case. We provide immigration
            services in all different areas of countries.
          </p>
        </div>
      </div>

      <div
        className="Home-top-flexbox3"
        style={{
          backgroundColor: "#ffffff",
          paddingLeft: "60px",
          paddingRight: "50px",
          paddingTop: "30px",
          paddingBottom: "40px",
        }}
      >
        <div className="Home-top-flexbox3-leftside">
          <div className="parent">
            <img
              src="assets/img/flexbox2_1.png"
              alt="image1"
              className="image1"
            ></img>
            <img
              src="assets/img/flexbox2_2.png"
              alt="image1"
              className="image2"
            ></img>
          </div>
        </div>
        <div className="Home-top-flexbox3-rightside">
          <h6>ABOUT AGENCY</h6>
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
          <ul className="Home-header-3flex">
            <li>
              <i className="Home-header-3flex-icon">
                <BsCheck2Circle />
              </i>
              Talk to one of our best consultant today
            </li>
            <li>
              <i className="Home-header-3flex-icon">
                <BsCheck2Circle />
              </i>
              Our experts are able to find new growth
            </li>
            <li>
              <i className="Home-header-3flex-icon">
                <BsCheck2Circle />
              </i>
              Find more information our website
            </li>
          </ul>
          <button className="Home-header-3flex-button">
            Discover More{" "}
            <i className="Home-3flex-button-icon">
              <HiOutlineArrowNarrowRight />
            </i>
          </button>
        </div>
      </div>

      <div className="Home-flexbox4" style={{ marginBottom: "40px" }}>
        <div
          className="Home-top-flexbox4"
          style={{ paddingBottom: "40px", paddingTop: "60px" }}
        >
          <div
            className="Home-top-flexbox4-leftside"
            style={{ paddingLeft: "120px", paddingBottom: "40px" }}
          >
            <h6>WHO WE ARE</h6>
            <h2>
              We are professional Expert<br></br> in Immigration Visa
            </h2>
          </div>
          <div className="Home-top-flexbox4-rightside">
            <p>
              We provide expert team to create great value for immigration. Our
              certified & reliable Immigration Consultant professionals can help
              you get a positive decision on your case. We provide immigration
              services in all different areas of countries.
            </p>
          </div>
        </div>

        <div
          id="carouselExampleControls"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
          style={{ paddingBottom: "140px" }}
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card-wrapper container-sm d-flex  justify-content-around">
                <div class="card  " style={{ width: "18rem" }}>
                  <img
                    src="https://source.unsplash.com/collection/190727/1600x900"
                    class="card-img-top"
                    alt="country_img"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://source.unsplash.com/collection/190727/1600x900"
                    class="card-img-top"
                    alt="country_img"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://source.unsplash.com/collection/190727/1600x900"
                    class="card-img-top"
                    alt="country_img"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card-wrapper container-sm d-flex   justify-content-around">
                <div class="card  " style={{ width: "18rem" }}>
                  <img
                    src="https://source.unsplash.com/collection/190727/1600x900"
                    class="card-img-top"
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://source.unsplash.com/collection/190727/1600x900"
                    class="card-img-top"
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://source.unsplash.com/collection/190727/1600x900"
                    class="card-img-top"
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card-wrapper container-sm d-flex  justify-content-around">
                <div class="card " style={{ width: "18rem" }}>
                  <img
                    src="https://source.unsplash.com/collection/190727/1600x900"
                    class="card-img-top"
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://source.unsplash.com/collection/190727/1600x900"
                    class="card-img-top"
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://source.unsplash.com/collection/190727/1600x900"
                    class="card-img-top"
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <center>
        <div className="under_card_silder">
          <div className="under_card_silder_item1">
            <img src="/assets/country/1.png" alt="img" />
          </div>
          <div className="under_card_silder_item2">
            <h3>Free Online Visa Assessment</h3>
            <p>
              Contact us today by fill up free online visa assessment and we
              will contact you
            </p>
            <button className="under_card_silder_button">
              Discover More
              <i className="under_card_silder_icon">
                <HiArrowNarrowRight />
              </i>
            </button>
          </div>
        </div>
      </center>

      <div className="flexbox5">
        <center style={{ paddingBottom: "20px" }}>
          <h6>CHOOSE COUNTRY</h6>
          <h1>
            Immigration - Choose <b>your country!</b>
          </h1>
        </center>

        <div className="Home-flexbox5">
          <div className="Home-top-flexbox5">
            <img
              src="assets/country/1.png"
              height="auto"
              width="280px"
              alt="country_img"
            ></img>
            <h5 className="Home-top-flexbox5-header">United States</h5>
            <p>
              Studying In The United State of America quis nostrud exercitation
            </p>
            <h6>Read More</h6>
          </div>

          <div className="Home-top-flexbox5">
            <img
              src="assets/country/2.png"
              height="auto"
              width="280px"
              alt="country_img"
            ></img>
            <h5 className="Home-top-flexbox5-header">Australia</h5>
            <p>
              Studying in the Australia quis nostrud exercitation ullamco
              laboris.
            </p>
            <h6>Read More</h6>
          </div>

          <div className="Home-top-flexbox5">
            <img
              src="assets/country/3.png"
              height="auto"
              width="280px"
              alt="country_img"
            ></img>
            <h5 className="Home-top-flexbox5-header">Canada</h5>
            <p>
              Studying in the Canada quis nostrud exercitation ullamco laboris.
            </p>
            <h6>Read More</h6>
          </div>

          <div className="Home-top-flexbox5">
            <img
              src="assets/country/4.png"
              height="auto"
              width="280px"
              alt="country_img"
            ></img>
            <h5 className="Home-top-flexbox5-header">United Kingdom</h5>
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
