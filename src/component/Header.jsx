import React from 'react'
import headerlogo from "../images/header-logo.png"

function Header() {
  return (
    <div>
        <section style={{backgroundColor:"#200449"}} id="header">
    {/* NAV AREA CSS */}
    <nav style={{paddingTop:"20px"}} id="nav-part" className="navbar header-nav other-nav custom_nav full_nav sticky-top navbar-expand-md hidden-main">
      <div className="container">
        <a className="navbar-brand" href="/"><img src={headerlogo} className="img-fluid logo-color" alt="logo" /></a>
        {/* <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button> */}
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          {/* <div className="nav-res">
            <ul className="nav navbar-nav m-auto menu-inner tog-nav">
              <li><a href="#banner" className="active">Home</a></li>
              <li><a href="about-us.html">About us</a></li>
              <li><a href="games.html">Games</a></li>
              <li><a href="tournaments.html">Tournaments</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                <ul className="dropdown-menu maindrop_menu">
                  <li><a href="contact-us.html">contact us</a></li>
                  <li><a href="404-page.html">404 page</a></li>
                </ul>
              </li>
              <li><i className="more-less fa fa-align-right" />
                <i className="fa fa-times" />
              </li>
            </ul>
          </div> */}
          <ul className="login_menu navbar-right nav-sign">
            {/* <li className="login"><a href="#" className="btn-4 yellow-btn">Download Apk</a></li> */}
            <li  className="login"><a style={{textDecoration:"none"}} href="#" className="btn-4 pink-bg">download</a></li>
              {/* <li className="login1"><a href="#" className="">Signup</a></li> */}

          </ul>

        </div>
                        <li className="login_menu-1"><a style={{textDecoration:"none"}} href="#" className="btn-4in">Download Apk</a></li>
      </div>
    </nav>
    {/* mobile menu */}
    <nav id="cssmenu" className="">
       


      
      {/* <div className="logo">
        <a href="index-2.html" className="logo">
          <img src="header-logo.png" className="img-responsive" alt />
        </a>
      </div> */}
      {/* <div id="head-mobile" /> */}
      {/* <div className="button"><i className="more-less fa fa-align-right" /></div> */}
      
    </nav>
    {/* End mobile menu */}
  </section>
    </div>
  )
}

export default Header