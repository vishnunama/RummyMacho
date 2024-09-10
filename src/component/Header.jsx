import React from 'react';
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom';
import ResNav from './ResNav';
// import headerlogo from '../images/header-logo.png';

function Header() {
        const navigate = useNavigate();

  
  return (
    <div>
     <section style={{ backgroundColor: "#200449", position: "fixed", top: 0, width: "100%", zIndex: 1000 }} id="header">
  {/* NAV AREA CSS */}
  <nav id="nav-part" className="navbar header-nav other-nav custom_nav full_nav navbar-expand-md">
    <div className="container">
      <a className="navbar-brand" href="/"><img style={{ width: '140px', height: '80px' }} src="RummyMacho.png" className="img-fluid logo-color" alt="logo" /></a>
      
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="login_menu navbar-right nav-sign">
          {/* <Link onClick={() => navigator('/ContactUs')} className="login"><a style={{ textDecoration: "none",fontSize:"20px",marginRight:"10px" }} href="https://drive.google.com/uc?export=download&id=1R7OBfAhXbRhT8_ZQrA8OHypcRrVlpQM7" className="btn-4 pink-bg" download>Contact Us</a></Link> */}
          <Link className="contactus-inner" onClick={() => navigate('/ContactUs')} to="/ContactUs"><a >Contact Us</a></Link>
         
          <Link className="contactus-inner" onClick={() => navigate('/AboutUs')} to="/AboutUs"><a >About Us</a></Link>
          <li className="login"><a style={{ textDecoration: "none" }} href="https://drive.google.com/uc?export=download&id=1R7OBfAhXbRhT8_ZQrA8OHypcRrVlpQM7" className="btn-4 pink-bg" download>Download</a></li>

          {/* <Link onClick={() => navigate('/FairPlayStandards')} to="/FairPlayStandards"  style={{textDecoration:"none"}}>
Fair Play Standards
          </Link> */}

        </ul>
      </div>
      {/* <li className="login_menu-1"><a style={{ textDecoration: "none" }} href="https://drive.google.com/uc?export=download&id=1R7OBfAhXbRhT8_ZQrA8OHypcRrVlpQM7" className="btn-4in" download>Download Apk</a></li> */}
                       <div className='login_menu-1'><ResNav/></div>

    </div>
  </nav>
</section>

    </div>
  );
}

export default Header;
