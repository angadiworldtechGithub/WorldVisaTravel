import React from "react";
import styles from "./index.module.css";
function Feedback() {
  return (
    <section>
      <div className={`container ${styles["contact-us-section"]} my-3`}>
        <div className="contact-form text-center">
          <h4 className={`${styles["contact-form-subtitle"]}`}>Feedback</h4>
          <form className="mt-3" style={{ maxWidth: "700px", margin: "auto" }}>
            <div className="row">
              <div className="col-12">
                <input
                  type="text"
                  className={`${styles["form-control"]}`}
                  placeholder="Name"
                  name="name"
                  required=""
                />
              </div>
              <div className="col-12">
                <input
                  type="company"
                  className={`${styles["form-control"]}`}
                  placeholder="Company"
                  name="company"
                  required=""
                />
              </div>
              <h3>Services</h3>
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
              x{" "}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
