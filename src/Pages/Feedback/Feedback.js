import React from 'react';
import './Feedback.css';

const services = ['Passports', 'Visas', 'Documents', 'Travel Tickets'];


const TwoFlexContainers = () => {
  return (
    <div className="main-container">
    <p>We sincerely value your partnership with World Visa Travel,and it has been an absolute delight assisting you!</p>
    <div className="flex-container"> 
    <div className="box"> 
         <img src="assets/flex2_image.png"></img>
        </div>

        <div className="box"> 
        <center><h3>Feedback Form</h3></center>
          <div className="form-container">
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
      
              <label htmlFor="feedback">What do you think of our services?</label>
              <div className="feedback-options">
                <label>
                  <input type="radio" name="feedback" value="Satisfied" required /> Satisfied
                </label>
                <label>
                  <input type="radio" name="feedback" value="Okay" required /> Okay
                </label>
                <label>
                  <input type="radio" name="feedback" value="Could have been better" required />Could have been better
                </label>
              </div>
      
              <label htmlFor="experience">How was your experience?</label>
              <textarea id="experience" name="experience" rows="4" required />
      
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoFlexContainers;
