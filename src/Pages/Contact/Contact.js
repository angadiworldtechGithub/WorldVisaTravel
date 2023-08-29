import React from "react";
import styles from "./contact.module.css";
import { Link } from "react-router-dom";
import LocationIcon from "../../Components/icons/LocationIcon";
import HomeIcon from "../../Components/icons/HomeIcon";
import TelephoneIcon from "../../Components/icons/TelephoneIcon";
import EmailIcon from "../../Components/icons/EmailIcon";

function Contact() {
  return (
    <div>

      <div
        className={`${styles["contact-container"]} d-flex position-relative align-items-center`}
      >
        <div className="container d-flex flex-column text-light">
          <h2>Contact Us</h2>
          <div className="d-flex gap-2 align-items-center">
            <Link to="/">
              <HomeIcon />
            </Link>
            <span className="sep"> → </span>
            <span>Contact us</span>
          </div>
        </div>
      </div>

      <section className={`${styles["section-lg"]}`}>
        <div className="container">
          <div className="row">
            <div className={`col-md-4 my-2`}>
              <div className={`${styles["contact-info-card"]}`}>
                <div className={`${styles["icon-wrapper"]}`}>
                  <LocationIcon />
                </div>

                <div
                  className={`d-flex justify-content-center align-items-center flex-column ${styles["info-text"]}`}
                >
                  <h2 className="text-dark">Our Address</h2>
                  <div>1413 K Street, N.W. 9th Floor</div>
                  <div>Washington, D.C. 20005</div>
                  <div>United States of America</div>
                </div>
              </div>
            </div>
            <div className={`col-md-4 my-2`}>
              <div className={`${styles["contact-info-card"]}`}>
                <div className={`${styles["icon-wrapper"]}`}>
                  <TelephoneIcon />
                </div>
                <div
                  className={`d-flex justify-content-center align-items-center flex-column ${styles["info-text"]}`}
                >
                  <h2 className="text-dark">Telephone & Fax</h2>
                  <div>Telephone: 202-289-6251, 202-289-9295</div>
                  <div>Fax: 202-289-6253</div>
                </div>
              </div>
            </div>{" "}
            <div className={`col-md-4 my-2`}>
              <div className={`${styles["contact-info-card"]}`}>
                <div className={`${styles["icon-wrapper"]}`}>
                  <EmailIcon />
                </div>
                <div
                  className={`d-flex justify-content-center align-items-center flex-column ${styles["info-text"]}`}
                >
                  <h2 className="text-dark">Email Address</h2>
                  <div>support@worldvisatravel.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section>
        <div className={`container ${styles["contact-us-section"]}`}>
          <div className="row">
            <div className="col-md-6 p-2 d-flex justify-content-center align-items-center">
              <div className="map-container w-100">
                <iframe
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12419.13506460756!2d-77.03172804999997!3d38.90605984999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7959b347963%3A0x793ba42aa352cf40!2s1413+K+St+NW%2C+Washington%2C+DC+20005!5e0!3m2!1sen!2sus!4v1436389275501"
                  width="100%"
                  height="400"
                  frameborder="0"
                  allowfullscreen="allowfullscreen"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="contact-form">
                <h4 className={`${styles["contact-form-subtitle"]}`}>
                  Contact Us
                </h4>
                <div className={`${styles["contact-form-title"]}`}>
                  Get in <span>touch</span>
                </div>
                <form
                  method="post"
                  id="contact-form"
                  action="send.php"
                  novalidate="novalidate"
                >
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      <input
                        type="text"
                        className={`${styles["form-control"]}`}
                        placeholder="Name"
                        name="name"
                        required=""
                      />
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <input
                        type="email"
                        className={`${styles["form-control"]}`}
                        placeholder="Email"
                        name="email"
                        required=""
                      />
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <input
                        type="text"
                        className={`${styles["form-control"]}`}
                        placeholder="Phone"
                        name="number"
                        required=""
                      />
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <input
                        type="text"
                        className={`${styles["form-control"]}`}
                        placeholder="Subject"
                        name="subject"
                        required=""
                      />
                    </div>
                    <div className="col-sm-12">
                      <textarea
                        cols="40"
                        rows="4"
                        className={`${styles["form-control"]}`}
                        placeholder="Message"
                        name="message"
                        required=""
                      ></textarea>
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <button
                        href="#"
                        className={`${styles["form-submit-btn"]} text-light`}
                      >
                        SEND MESSAGE
                      </button>
                    </div>
                    <div className="col-md-12 col-lg-12 message-status"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
