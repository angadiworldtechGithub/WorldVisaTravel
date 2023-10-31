import React from 'react'
import {Link} from "react-router-dom";
import "./Passport.css";

function Passport() {
  
  return (
    <div className='passport'>
    <div className='passport-container'>
    <center>
    <h3 className="passport-header">
      U.S. PASSPORT SERVICES
    </h3>
    <h5 className="passport-sub-header">
      World Visa Travel is specialized in expediting new U.S. passports,
      renewals, reissue, children/minors, and more. Please choose the right
      service for your travel needs.
    </h5>
  </center>
    
    <div className="row">
    <div className="column">
    <img className="passport-service-images" src="assets/passport/passport1.png" width={"300px"} height={"200px"}></img>
    <h4 className='passport-services-heading'>APPLY FOR A NEW OR FIRST TIME U.S. PASSPORT",</h4>
    <p className='passport-services-content'> Ready to explore the world? Apply for your new U.S. passport today and let your international adventures begin.</p>
    <center> <Link to="/reqdouments">
     <button className='passport-apply-button'>
    Apply Now
    </button>
    </Link> </center>
    </div>
    
    <div className="column">
    <img  className="passport-service-images" src="assets/passport/passport2.png" width={"300px"} height={"200px"}></img>
    <h4 className='passport-services-heading'>RENEW YOUR U.S. PASSPORT</h4> 
    <p className='passport-services-content'>
    Ensure your travel plans stay on track – renew your U.S. passport hassle-free and explore the 
    world with confidence, ease, and peace of mind.
     </p>
     <center>
     <Link to="/renew">
     <button className='passport-apply-button'>
    Apply Now
    </button>
    </Link> </center>
    </div>
    
    <div className="column">
    <img className="passport-service-images" src="assets/passport/passport3.png" width={"300px"} height={"200px"}></img>
    <h4 className='passport-services-heading'>REPLACE A MUTILATED OR DAMAGED U.S. PASSPORT</h4> 
    <p className='passport-services-content'>To replace a damaged U.S. passport, follow the official procedure for smooth travel and identification.
    </p>
    <center>
     <Link to="/Replace">
     <button className='passport-apply-button'>
    Apply Now
    </button>
    </Link> 
    </center>
    </div>
    
    <div className="column">
    <img className="passport-service-images" src="assets/passport/passport4.png" width={"300px"} height={"200px"}></img>
     <h4 className='passport-services-heading'>APPLY FOR A CHILD/MINOR U.S. PASSPORT</h4>
   <p className='passport-services-content'> To get a child/minor U.S. passport, bring required documents and apply in person at a passport acceptance facility.
    </p>
    <center>
    <Link to="/Newpassport ">
     <button className='passport-apply-button'>
    Apply Now
    </button>
    </Link> 
    </center>
    </div>

    <div className="column">
    <img className="passport-service-images" src="assets/passport/passport5.png" width={"300px"} height={"200px"}></img>
    <h4 className='passport-services-heading'>APPLY FOR A SECOND VALID U.S. PASSPORT</h4>
    <p className='passport-services-content'>Experience dual travel ease: Secure your second valid U.S. passport today for unforgettable global adventures.</p>
 
   <center> <Link to="/Secondpassport">
    <button className='passport-apply-button'>
   Apply Now
   </button>
   </Link> </center>
   </div>
  
  <div className="column">
  <img  className="passport-service-images" src="assets/passport/passport7.png" width={"300px"} height={"200px"}></img>
  <h4 className='passport-services-heading'>RE-ISSUE A U.S. PASSPORT</h4>
   <p className='passport-services-content'>Requesting a re-issue of a U.S. passport involves renewing an existing
    passport with updated information, ensuring continued hassle-free international travel.</p>
    <center><Link to="/Reissuance">
     <button className='passport-apply-button'>
    Apply Now
    </button>
    </Link> </center>
   
  </div>
  
  <div className="column">
  <img className="passport-service-images" src="assets/passport/passport6.png" width={"300px"} height={"200px"}></img>
     <h4 className='passport-services-heading'>REPLACE A LOST OR STOLEN U.S. PASSPORT</h4>
    <p className='passport-services-content'>If your U.S. passport is lost or stolen, 
      Apply for a replacement to ensure seamless travel and identification.</p>
   <center> <Link to="/Lostpassport">
    <button className='passport-apply-button'>
   Apply Now
   </button>
   </Link> </center>
  </div>
  
  <div className="column">
  <img className="passport-service-images" src="assets/passport/passport6.png" width={"300px"} height={"200px"}></img>
  <h4 className='passport-services-heading'>U.S. PASSPORT NAME CHANGE</h4>
 <p className='passport-services-content'>If you're changing your name on your U.S. passport, ensure following steps for accurate travel and identification records.</p>
 <center><Link to="/renew">
 <button className='passport-apply-button'>
Apply Now
</button>
</Link></center>
  </div>
  </div>
 </div>


 <div className="Expedited-Services-container">
 <div className="Expedited-Services">

 <div className="Expedited-Services-left">
   <h3 className="Expedited-Services-heading">Expedited Services</h3>
   <p  className="Expedited-Services-paragraph">We are the best at providing quickest passport and visa services. Start your process today under our guidance.</p>
 </div>
 
 <div className="Expedited-Services-right ">
  <center> 
  <Link to="/visas"><button className="passport-button">Travel Visa Service</button></Link>
  <Link to="/passports"><button className="passport-button">Passport Service</button></Link>
  </center>
 </div>

</div>
</div>
</div>
  )
}

export default Passport