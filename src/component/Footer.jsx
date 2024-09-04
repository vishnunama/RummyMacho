import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';
import Tournaments from "./Tournaments"

function Footer() {
      const navigate = useNavigate();

  return (
    <div>
      <section id="contact-us" className="contact-us back-dark contact section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-4">
              <div className="contact-about">
                <div className="heading">
                  <h2>Our All Games</h2>
                  <img src="heading-border-effect.png" className="img-fluid" alt="effect" />
                </div>
                <p className="mb30">
Delve into the exciting world of games, where luck meets skill in an immersive gaming experience. From classic favourites like Rummy games like Point Rummy, Deal Rummy, Pool Rummy with dynamic themes, our games offer thrilling opportunities to test your strategy and enjoy the rush of winning   </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="app-icon">
                <div className="heading">
                  <h2>Get this App</h2>
                  <img src="heading-border-effect.png" className="img-fluid" alt="effect" />
                </div>
                <div className="contact-app">
                  <ul>
                    <li>
                      <a href="https://drive.google.com/uc?export=download&id=1R7OBfAhXbRhT8_ZQrA8OHypcRrVlpQM7">
                        <div className="icon-wrapper">
                          <FontAwesomeIcon icon={faApple} size="2x" />
                        </div>
                      </a>
                      <br />
                      <span  className="text">iOS</span>
                    </li>
                    <li>
                      <a href="https://drive.google.com/uc?export=download&id=1R7OBfAhXbRhT8_ZQrA8OHypcRrVlpQM7">
                        <div className="icon-wrapper">
                          <FontAwesomeIcon icon={faAndroid} size="2x" />
                        </div>
                      </a>
                      <br />
                      <span className="text">Android</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="payments">
                    <div className="heading">
                      <h2>Payment Methods</h2>
                      <img src="heading-border-effect.png" className="img-fluid" alt="effect" />
                    </div>
                    <ul>
                      <li><a ><img src="payment/payment-image-1.jpg" className="img-fluid" alt="effect" /></a></li>
                      <li><a ><img src="payment/payment-image-2.jpg" className="img-fluid" alt="effect" /></a></li>
                      <li><a ><img src="payment/payment-image-3.jpg" className="img-fluid" alt="effect" /></a></li>
                      <li><a href=""><img src="payment/payment-image-4.jpg" className="img-fluid" alt="effect" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="subscribe">
                    <div className="heading">
                      <h3>Subscribe for offers</h3>
                      <img src="heading-border-effect.png" className="img-fluid" alt="effect" />
                    </div>
                    <div className="sub-form">
                      <form>
                        <div className="form-group col-sm-12 ">
                          <p className="form-control" style={{paddingTop:"15px",color:"Black",height:"50px", fontFamily:"-moz-initial",textDecoration:"none", fontSize:"17px",textAlign:"left"}} >support@Rummymacho.com</p>
                          {/* <input type="text" className="form-control" name="email" placeholder="Enter Your Email" /> */}
                        </div>
                        <div className="casino-btn newsletter">
                          <a style={{textDecoration:"none"}} href="mailto:support@Rummymacho.com" className="btn-4 yellow-btn">send</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row control-pad">
            <div className="border-effect1">
              <img src="border-effect.png" className="img-fluid" alt="effect" />
            </div>
            <div className="border-effect2">
              <img src="border-effect.png" className="img-fluid" alt="effect" />
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-md-12 bot-menu">
              <div className="foot-menu">
                <ul style={{}} className='footer-contant'>
                  {/* <li><Link to="/about">About Us</Link></li> */}
                  <li>
                    <Link  onClick={() => navigate('/RefundPolicy')} to="/RefundPolicy"  style={{textDecoration:"none"}} >RefundPolicy</Link>
                    </li>
                   <li>
          <Link onClick={() => navigate('/FairPlayStandards')} to="/FairPlayStandards"  style={{textDecoration:"none"}}>
Fair Play Standards
          </Link>
        </li>
                  {/* <li><Link to="/tournaments" className="active">Tournaments</Link></li> */}
                  <li><Link onClick={() => navigate('/PrivacyPolicy')} to="/PrivacyPolicy" style={{textDecoration:"none"}}>Privacy Policy</Link></li>
                  <li><Link onClick={() => navigate('/TermsofService')} to="/TermsofService"  style={{textDecoration:"none"}}>Terms of Service</Link></li>

                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="copy-right">
                <h6>Copyright 2024. All rights reserved by DESIGNER</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
