import React from 'react';
import { Link } from 'react-router-dom';
import {BsFacebook,BsTwitter,BsInstagram,BsWhatsapp} from 'react-icons/bs';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className="footer-section">
    <div className="container">
        <div className="footer-cta pt-5 pb-5">
            <div className="row">
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="cta-text">
                            <h4>Find us</h4>
                            <span>1413 K Street NW, 9th Floor, Washington D.C. 20005</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="fas fa-phone"></i>
                        <div className="cta-text">
                            <h4>Call us</h4>
                            <span>(202) 289-6251</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="far fa-envelope-open"></i>
                        <div className="cta-text">
                            <h4>Mail us</h4>
                            <span>support@worldvisatravel.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-content pt-5 pb-5">
            <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                    <div className="footer-widget">
                        <div className="footer-logo">
                           <Link href="index.html"><img src="assets/logo.png" className="img-fluid" alt="logo"></img></Link>
                        </div>
                        <div className="footer-text">
                            <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                            elit,Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="footer-social-icon">
                            <span>Follow us</span>
                            <Link href="#"><i classNameName="fa-facebook"><BsFacebook/></i></Link>
                           <Link href="#"><i classNameName="fa-twitter"><BsTwitter/></i></Link>
                           <Link href="#"><i classNameName="fa-instagram"><BsInstagram/></i></Link>
                           <Link href="#"><i classNameName="fa-whatsapp"><BsWhatsapp/></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Useful Links</h3>
                        </div>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/visas">Visas</Link></li>
                            <li><Link href="/passport">Passport</Link></li>
                            <li><Link href="/legalizations">Legalizations</Link></li>
                            <li><Link href="/">E-Visas</Link></li>
                            <li><Link href="#">Our Services</Link></li>
                            <li><Link href="/contact">Contact us</Link></li>

                        </ul>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Subscribe</h3>
                        </div>
                        <div className="footer-text mb-25">
                            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        </div>
                        <div className="subscribe-form">
                            <form action="#">
                                <input type="text" placeholder="Email Address"></input>
                                <button><i className="fab fa-telegram-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div className="copyright-text">
                        <p>Copyright &copy; 2018, All Right Reserved<Link href="https://worldvisatravel.com/">  World Visa Travel</Link></p>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                    <div className="footer-menu">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="#">Terms</Link></li>
                            <li><Link href="#">Privacy</Link></li>
                            <li><Link href="#">Policy</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Footer;
