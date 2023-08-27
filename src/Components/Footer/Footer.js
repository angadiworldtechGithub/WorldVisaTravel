import React from 'react'
import {FiMapPin} from "react-icons/fi"
import{MdEmail} from "react-icons/md"
import {BsFacebook,BsWhatsapp,BsLinkedin,BsTwitter,BsFillPhoneFill} from "react-icons/bs";
import {HiOutlineMailOpen} from "react-icons/hi";
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
    <div class="footer-container1">

      <div class="footer-item-left">
          <h3 className='footer-top-header'><i className='footer-top-icon'><HiOutlineMailOpen/></i>Sign up to get Latest Updates</h3>
      </div>
      <div class="footer-item-left">
        <input  className="footer-sign" type="email" placeholder='Your email address'></input><button className='footer-subscribe'>subscribe</button>
      </div>
   </div>
   <hr className='footer-line'></hr>
   <div class="footer-container2">
     <div class="footer-item-right">
       <img className="footer-logo" src="assets/logo.png" alt="footer_logo" width="250px"></img>
       <p className='footer-text'>World visa travel is simplest solution for processing your all type of visa.Say goodbye to endless hashles and confusions.</p>
       <div className='footer-social-icons' style={{paddingTop:"30px",paddingBottom:"60px"}}>
         <i className='social-icons'><BsFacebook/></i>
         <i className='social-icons'><BsWhatsapp/></i>
         <i className='social-icons'><BsLinkedin/></i>
         <i className='social-icons'><BsTwitter/></i>
       </div>
       </div>
     <div class="footer-item-right">
      <h6 className='footer_header'>INFORMATION</h6>

<div className='footer-list'>
<ul className='footer-list-left'>
<li className='footer-list'>About Us</li>
<li className='footer-list'>Contacts Us</li>
<li className='footer-list'>Research</li>
<li className='footer-list'>Best Seller</li>
<li className='footer-list'>Services</li>
</ul>

<ul className='footer-list-left'>
<li className='footer-list'>Our Team</li>
<li className='footer-list'>Research</li>
<li className='footer-list'>Help</li>
<li className='footer-list'>Collections</li>
</ul>
</div>
     </div>
     <div class="footer-item-right">
      <h6 className='footer_header'>VISA</h6>
      <ul className='footer-list-left'>
      <li className='footer-list'>Students Visa</li>
      <li className='footer-list'>Business Visa</li>
      <li className='footer-list'>Family Visa</li>
      <li className='footer-list'>Travel Visa</li>
      <li className='footer-list'>Work Visa</li>
      </ul>
     </div>

     <div class="footer-item-right">

      <h6 className='footer_header'>GET IN TOUCH</h6>
    <div className='footer-contact'>
      <div className='footer-list' style={{listStyleType:"none"}}>
         <li><i className='footer-contact-icon'><FiMapPin/></i><strong>Address : </strong></li>
         <li style={{paddingLeft:"10px"}}>201New York 10010, US</li>
      </div>

      <div className='footer-list' style={{listStyleType:"none"}}>
         <li><i className='footer-contact-icon'><BsFillPhoneFill/></i><strong>Phone :</strong></li>
         <li style={{paddingLeft:"10px"}}>(+01) 123 456 7890</li>
      </div>

      <div className='footer-list' style={{listStyleType:"none"}}>
          <li><i className='footer-contact-icon'><MdEmail/></i><strong>Email Address :</strong></li>
          <li style={{paddingLeft:"10px"}}>email@gmail.com</li>
      </div>
    </div>

     </div>
    </div>
    <hr className='footer-line'></hr>
    </div>
  )
}

export default Footer