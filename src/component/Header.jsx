import React from 'react';
// import headerlogo from '../images/header-logo.png';

function Header() {
  return (
    <div>
      <section style={{ backgroundColor: "#200449", position: "fixed", top: 0, width: "100%", zIndex: 1000 }} id="header">
        {/* NAV AREA CSS */}
        <nav id="nav-part" className="navbar header-nav other-nav custom_nav full_nav navbar-expand-md">
          <div className="container">
            <a className="navbar-brand" href="/"><img style={{ width: '140px', height: '80px' }} src="RummyMacho.png" className="img-fluid logo-color" alt="logo" /></a>
            
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="login_menu navbar-right nav-sign">
                <li className="login"><a style={{ textDecoration: "none" }} href="#" className="btn-4 pink-bg">Download</a></li>
              </ul>
            </div>
            <li className="login_menu-1"><a style={{ textDecoration: "none" }} href="#" className="btn-4in">Download Apk</a></li>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Header;
