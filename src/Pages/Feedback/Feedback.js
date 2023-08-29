import React from "react";
import "./Feedback.css";
import styles from "../Contact/contact.module.css";
const services = ["Passports", "Visas", "Documents", "Travel Tickets"];

const Feedback = () => {
  return (
    <>
      {" "}
      <section>
        <div className={`${styles["contact-us-section"]}`}>
          <div className="row m-0">
            <div className={`${styles["contact-form-title"]} text-center my-3`}>
              Feedback Form
            </div>
            <div className="col-md-5 ps-md-5 d-flex justify-content-center">
              <div className="map-container w-60 d-flex justify-content-center ps-md-5">
                <img src="assets/flex2_image.png" className="w-100"></img>
              </div>
            </div>
            <div className="col-md-7 p-2">
              <div className="contact-form d-flex justify-content-center flex-column align-items-center">
                <form className="feedback-form">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />

                  <label htmlFor="company">Company:</label>
                  <input type="text" id="company" name="company" required />

                  <label htmlFor="services">Services:</label>
                  <select id="services" name="services" required>
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  <label htmlFor="feedback">
                    What do you think of our services?
                  </label>
                  <div className="feedback-options">
                    <label>
                      <input
                        type="radio"
                        name="feedback"
                        value="Satisfied"
                        required
                      />{" "}
                      Satisfied
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="feedback"
                        value="Okay"
                        required
                      />{" "}
                      Okay
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="feedback"
                        value="Could have been better"
                        required
                      />
                      Could have been better
                    </label>
                  </div>

                  <label htmlFor="experience">How was your experience?</label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows="4"
                    required
                  />

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
