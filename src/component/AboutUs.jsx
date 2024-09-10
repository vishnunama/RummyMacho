import React from 'react'

function AboutUs() {
  return (
<section style={{marginTop:"100px"}} className="about-page back-light">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="about-video">
          <img src="img7-copyright.jpg" className="img-fluid" alt="img" />
         
        </div>
      </div>
      <div className="col-lg-6 contact-about">
        <div className="heading">
          <h2>About Us</h2>
          <img src="heading-border-effect.png" className="img-fluid" alt="effect" />
        </div>
        <p className="mb30">
Rummymacho is an online platform dedicated to offering a variety of rummy games and services to its users. With a focus on providing a secure and entertaining environment, Rummymacho ensures that players can enjoy both practice and cash games with confidence.
The platform emphasizes privacy and user protection, adhering to strict guidelines outlined in its Privacy Policy. Rummymacho collects necessary personal information from users for registration and gameplay, ensuring it is used responsibly and securely.

        </p><br />
        
    <p>Games offered on Rummymacho include tournaments, promotional games, and cash games, each governed by comprehensive Terms of Service to maintain fairness and legality. The platform charges a service fee for cash games and implements measures to prevent cheating and collusion among players.
Rummymacho operates under Indian law and provides customer support to address any queries or concerns users may have. By promoting responsible gaming practices and ensuring transparency, Rummymacho aims to enhance the online rummy experience for all participants.</p>

<p>For more information or to join the community, visit <a style={{textDecoration:"none", color:"blue"}} href="https://www.rummymacho.com" target="_blank">Rummymacho.com</a> and explore the exciting world of online rummy.</p>

        <div className="casino-btn">
          <a style={{textDecoration:"none"}} href="https://drive.google.com/uc?export=download&id=1R7OBfAhXbRhT8_ZQrA8OHypcRrVlpQM7">join us now</a></div>
      </div>
    </div>

  
  </div>
</section>  )
}

export default AboutUs;