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
                            <p className='footer-findus-text'>1413 K Street NW, 9th Floor, Washington D.C. 20005</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="fas fa-phone"></i>
                        <div className="cta-text">
                            <h4>Call us</h4>
                            <p className='footer-findus-text'>(202) 289-6251</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="far fa-envelope-open"></i>
                        <div className="cta-text">
                            <h4>Mail us</h4>
                            <p className='footer-findus-text'>support@worldvisatravel.com</p>
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
                           <Link to="index.html"><img src="/assets/logo.png" className="img-fluid" alt="logo"></img></Link>
                        </div>
                        <div className="footer-text">
                            <p style={{textAlign:"justify",paddingleft:"30px",paddingRight:"30px"}}>
                            At World Visa Travel we believe in the power of humanity. 
                            Our Homeless Ministry extends a helping hand to those without a home, 
                            working towards a society where everyone has a place to call home and a chance
                             for a better 
                            life.</p>
                        </div>
                        <div className="footer-social-icon">
                            <span>Follow us</span>
                            <Link to="#"><i className="fa-facebook"><BsFacebook/></i></Link>
                           <Link to="#"><i className="fa-twitter"><BsTwitter/></i></Link>
                           <Link to="#"><i className="fa-instagram"><BsInstagram/></i></Link>
                           <Link to="#"><i className="fa-whatsapp"><BsWhatsapp/></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Useful Links</h3>
                        </div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/visas">Visas</Link></li>
                            <li><Link to="/passport">Passport</Link></li>
                            <li><Link to="/legalizations">Legalizations</Link></li>
                            <li><Link to="/">E-Visas</Link></li>
                            <li><Link to="#">Our Services</Link></li>
                            <li><Link to="/contact">Contact us</Link></li>

                        </ul>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Emergency Contact</h3>
                        </div>
                        <div className="footer-text mb-25">
                            <p>If you have urgent matters to address after office hours, please leave a message at +1(240)4856673, and our team will contact you.</p>
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
                        <p>Copyright &copy; 2018, All Right Reserved<Link to="https://worldvisatravel.com/">  World Visa Travel</Link></p>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                    <div className="footer-menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="#">Terms</Link></li>
                            <li><Link to="#">Privacy</Link></li>
                            <li><Link to="#">Policy</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
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
