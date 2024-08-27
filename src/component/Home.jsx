import React from 'react'
import './style.css';
import upcomming from '../images/upcomming-jackpot-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faWallet, faChartLine, faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { faDownload, faMoneyBillWave, faGamepad } from '@fortawesome/free-solid-svg-icons';
import relatedGame from "../images/related-game-image-1.jpg"
import relatedGame1 from "../images/related-game-image-2.jpg"
import relatedGame2 from "../images/related-game-image-3.jpg"
import country5  from "../images/country5.png"
import runningjackpot from "../images/running-jackpot-1.jpg"
// import dkjdf from "../src/component/"
// import bannerbackground from "../images/banner-background.jpg"
// import taunamentborder from "../images/taunament-border.png"

import freespin from "../images/free-spin-image.png"
import headingbordereffect from "../images/heading-border-effect.png"
import taunamentborder from "../images/taunament-border.png"
import taunamentborder1 from "../images/country2.png"
import country3 from "../images/country3.png"
import country4 from "../images/country4.png"
import country1 from "../images/country1.png"
// import country5 from "../images/country5.png"
// import country6 from "../images/country6.png"
// import country7 from "../images/country7.png"
// import country8 from "../images/country8.png"
// import taunamentborder8 from "../images/country2.png"







function Home() {
  return (
    <div >
        {/* <img style={{}} src={bannerbackground} alt="" /> */}
       <section style={{backgroundColor:"#1B013D"}} id="banner" className="banner-inner main_page">
    <div className="container">
      <div className="row">
        {/* <img style={{width:"500px"}} src= {upcomming} alt="" /> */}

        <div className="col-md-6 offset-md-6 banner-center">
                    

          <div className="banner_text">
            <h1  className="title">Online Rummy</h1>
            <h3>Play and Earn Real Cash </h3>
            <p>
Welcome to our premier online gaming platform! Enjoy RummyMacho, featuring Point Rummy, Deal Rummy, and Pool Rummy. Each variant offers unique gameplay for an immersive experience. Dive into excitement, strategy, and entertainment, and seize your chance to win big!
</p>
            <div className="casino-btn">
              <a style={{textDecoration:"none"}} href="games.html" className="btn-4 yellow-btn">play now</a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="counter" className=" back-light">
    <div className="container">
      <div className="row conter-res yellow-bg text-center">
        <div className="col-md-5 counter-left text-center">
          <div>
            <h4>Today you can Win upto</h4>
          </div>
        </div>
        <div className="col-md-7 col-12 text-center counterinner">
          <ul >
            <li className="counter-text border-count">
              <h3 className="counter-after">₹</h3>
            </li>
            <li className="counter-text border-count">
              <h3 className="counter counter-after">1</h3>
            </li>
            <li className="counter-text border-count">
              <h3 className="counter counter-after">5</h3>
            </li>
            <li className="counter-text border-count">
              <h3 className="counter counter-after">9</h3>
            </li>
            <li className="counter-text border-count">
              <h3 className="counter counter-after">9</h3>
            </li>
            <li className="counter-text border-count">
              <h3 className="counter counter-after">9</h3>
            </li>
            <li className="counter-text border-count">
              <h3 className="counter counter-after">9</h3>
            </li>
            
           
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="control" className="control back-light section">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="heading">
              <h2>Be in Control</h2>
              <img src={headingbordereffect} className="img-fluid" alt="effect" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="row control-inner cont-bot">
                <div className="col-lg-3 col-md-2 col-4">
                  <div className="control-img">
                    <FontAwesomeIcon icon={faMoneyBill} className="fa-icon" />
                  </div>
                </div>
                <div className="col-lg-9 col-md-10 col-8">
                  <div className="control-text">
                    <h3>Payment Limitation</h3>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row control-inner">
                <div className="col-lg-3 col-md-2 col-4">
                  <div className="control-img">
                    <FontAwesomeIcon icon={faChartLine} className="fa-icon" />
                  </div>
                </div>
                <div className="col-lg-9 col-md-10 col-8">
                  <div className="control-text">
                    <h3>Profit Limitation</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row control-pad">
            <div className="border-effect1">
              <img src={headingbordereffect} className="img-fluid" alt="effect" />
            </div>
            <div className="border-effect2">
              <img src={headingbordereffect} className="img-fluid" alt="effect" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="row control-inner cont-bot">
                <div className="col-lg-3 col-md-2 col-4">
                  <div className="control-img">
                    <FontAwesomeIcon icon={faPiggyBank} className="fa-icon" />
                  </div>
                </div>
                <div className="col-lg-9 col-md-10 col-8">
                  <div className="control-text">
                    <h3>Loss Limitation</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row control-inner">
                <div className="col-lg-3 col-md-2 col-4">
                  <div className="control-img">
                    <FontAwesomeIcon icon={faWallet} className="fa-icon" />
                  </div>
                </div>
                <div className="col-lg-9 col-md-10 col-8">
                  <div className="control-text">
                    <h3>Deposit Limit</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 <section id="start" className="how-start back-light section">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="heading">
              <h2>How to Start?</h2>
              <img src={headingbordereffect} className="img-fluid" alt="effect" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="row control-inner">
                <div className="col-lg-3 col-md-12 col-3">
                  <div className="start-img">
                    <FontAwesomeIcon icon={faDownload} className="fa-icon-1"  />
                  </div>
                </div>
                <div className="col-lg-9 col-md-12 col-9">
                  <div className="start-text">
                    <h3>Download &amp; Signup</h3>
                    <p>Download now and sign up to start your exciting journey!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row control-inner">
                <div className="col-lg-3 col-md-12 col-3">
                  <div className="start-img">
                    <FontAwesomeIcon icon={faMoneyBillWave} className="fa-icon-1" />
                  </div>
                </div>
                <div className="col-lg-9 col-md-12 col-9">
                  <div className="start-text">
                    <h3>Deposit Cash</h3>
                    <p>Deposit cash easily to fund your account and start playing.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row control-inner">
                <div className="col-lg-3 col-md-12 col-3">
                  <div className="start-img">
                    <FontAwesomeIcon icon={faGamepad} className="fa-icon-1" />
                  </div>
                </div>
                <div className="col-lg-9 col-md-12 col-9">
                  <div className="start-text">
                    <h3>Play &amp; Enjoy</h3>
                    <p>Play and enjoy our games for endless fun and excitement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  {/* How to Start */}
  {/* Related other games Start */}
  <section id="project-img" className="project-img in-project back-light section">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-lg-6">
          <div className="heading">
            <h2>Rummy Macho games</h2>
            <img src={headingbordereffect} className="img-fluid" alt="effect" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center text-center pro-row">
        <div className="col-lg-9 m-auto col-12 text-center button-group">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item">
              <div className="nav-menu active" id="pills-all-tab" data-toggle="pill" href="#pills-all" role="tab" aria-controls="pills-all" aria-selected="true">Pool Rummy</div>
            </li>
            <li className="nav-item">
              <div className="nav-menu" id="pills-illustrations-tab" data-toggle="pill" href="#pills-illustrations" role="tab" aria-controls="pills-illustrations" aria-selected="false">Deal Rummy</div>
            </li>
            <li className="nav-item">
              <div className="nav-menu midl-btn" id="pills-logo-tab" data-toggle="pill" href="#pills-logo" role="tab" aria-controls="pills-logo" aria-selected="false">Point Rummy</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col-lg-12 px-0">
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
              <div className="row mx-0">
                <div className="col-md-4">
                  <div className="port_img">
                    <img style={{borderRadius:"20px"}} src="poolrummy.jpeg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a style={{textDecoration:"none"}} href="" className="btn-4 yellow-btn">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Rummy Game</h3>
                            <p>Catagory: Pool Rummy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="port_img">
                    <img style={{borderRadius:"20px"}} src= "dealrummy.jpeg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a style={{textDecoration:"none"}}  href="">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Rummy Game</h3>
                            <p>Catagory: Deal Rummy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="port_img">
                    <img style={{borderRadius:"20px"}}  src= "_1b8c9658-545f-4966-a4f4-a2f5f60e7eaf.jpeg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a style={{textDecoration:"none"}}  href="">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Rummy Game</h3>
                            <p>Catagory: Point Rummy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>                            
              </div>
            </div>
            <div className="tab-pane fade" id="pills-illustrations" role="tabpanel" aria-labelledby="pills-illustrations-tab">
              <div className="row mx-0">
                <div className="col-md-4">
                  <div className="port_img">
                    <img src="images/related-game-image-2.jpg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a style={{textDecoration:"none"}}  href="#" className="btn-4 yellow-btn">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Free slots</h3>
                            <p>Catagory: slots</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="port_img">
                    <img src="images/related-game-image-4.jpg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a href="#">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Free slots</h3>
                            <p>Catagory: slots</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="port_img">
                    <img src="images/related-game-image-5.jpg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a href="#">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Free slots</h3>
                            <p>Catagory: slots</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>   
              </div>
            </div>
            <div className="tab-pane fade" id="pills-logo" role="tabpanel" aria-labelledby="pills-logo-tab">
              <div className="row mx-0">
                <div className="col-md-4">
                  <div className="port_img">
                    <img src="images/related-game-image-3.jpg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a href="#" className="btn-4 yellow-btn">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Rummy Game</h3>
                            <p>Pool Rummy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="port_img">
                    <img src="images/related-game-image-6.jpg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a href="#">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Free Roulette</h3>
                            <p>Catagory: Roulette</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="port_img">
                    <img src="images/related-game-image-7.jpg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a href="#">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Free Roulette</h3>
                            <p>Catagory: Roulette</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-web-tem" role="tabpanel" aria-labelledby="pills-web-tem-tab">
              <div className="row mx-0">
                <div className="col-md-4">
                  <div className="port_img">
                    <img src="images/related-game-image-1.jpg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a href="#" className="btn-4 yellow-btn">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Free Black Jack</h3>
                            <p>Catagory: Black Jack</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="port_img">
                    <img src="images/related-game-image-2.jpg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a href="#">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Free Black Jack</h3>
                            <p>Catagory: Black Jack</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="port_img">
                    <img src="images/related-game-image-6.jpg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a href="#">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Free Black Jack</h3>
                            <p>Catagory: Black Jack</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-busi-card" role="tabpanel" aria-labelledby="pills-busi-card-tab">
              <div className="row mx-0">
                <div className="col-md-4">
                  <div className="port_img">
                    <img src="images/related-game-image-1.jpg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a href="#" className="btn-4 yellow-btn">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Free Poker</h3>
                            <p>Catagory: Poker</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="port_img">
                    <img src="images/related-game-image-4.jpg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a href="#">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Free Poker</h3>
                            <p>Catagory: Poker</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="port_img">
                    <img src="images/related-game-image-8.jpg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a href="#">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Free Poker</h3>
                            <p>Catagory: Poker</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-flyer" role="tabpanel" aria-labelledby="pills-flyer-tab">
              <div className="row mx-0">
                <div className="col-md-4">
                  <div className="port_img">
                    <img src="images/related-game-image-4.jpg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a href="#" className="btn-4 yellow-btn">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Free Poker</h3>
                            <p>Catagory: Poker</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="port_img">
                    <img src="images/related-game-image-7.jpg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a href="#">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Free Black Jack</h3>
                            <p>Catagory: Black Jack</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="port_img">
                    <img src="images/related-game-image-9.jpg" className="img-fluid" alt />
                    <div className="overlay1">
                      <div className="overlay-text">
                        <div className="port-text">
                          <div className="casino-btn">
                            <a href="#">play now</a></div>
                          <div className="port-text-btm">
                            <h3>Free Roulette</h3>
                            <p>Catagory: Roulette</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row justify-content-center text-center">
        <div className="col-md-12">
          <div className="casino-btn start-btn">
            <a style={{textDecoration:"none"}} href="games.html" className="btn-4 yellow-btn">Browse All</a></div>
        </div>
      </div> */}
    </div>
  </section>
  {/* Related other game End */}
  {/* Unlock free spin Start */}
  <section id="free-spin" className="free-spin back-light section">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-lg-6">
          <div className="heading">
            <h2>Unlock free spin</h2>
            <img src={headingbordereffect} className="img-fluid" alt="effect" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 no-padding">
          <div className="spin-img">
            <img src={freespin} alt="casino" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="spin-text">
            <p>Unlock free spins by completing specific in-game challenges or reaching certain milestones. Check the game’s promotions or rewards section to claim your spins and enhance your gaming experience.
            </p><br />
            <p>Earn free spins through promotional offers by making qualifying deposits or participating in special events. Follow the instructions provided to activate your spins and enjoy extra chances to win.</p>
            <div className="casino-btn">
              <a style={{textDecoration:"none"}} href="#" className="btn-4 yellow-btn">play now</a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
   <section id="jackpots" className="jackpots back-dark section">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-lg-6">
          <div className="heading">
            <h2>Rummy Macho Game Jackpots</h2>
            <img src={headingbordereffect} className="img-fluid" alt="effect" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-5">
          <div className="sub-heading">
            <h3>Today’s Tournaments</h3>
          </div>
          <div className="row score-slick">
            <div className="col-md-12 scl_pad">
              <div className="row">
                <div className="col-lg-5 col-5 col-md-6">
                  <div className="winner-name tun_border">
                    <h5>01. Kushi</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-2 col-md-2 text-center">
                  <div className="toun_scroll_flag tun_border"><img style={{width:"20px"}} src={country1} alt="scroll1" /></div>
                </div>
                <div className="col-lg-3 col-5 col-md-4 text-right">
                  <div className="winner-name tun_border">
                    <p>₹2565.25</p>
                  </div>
                </div>
              </div>
              <img src={taunamentborder} alt="border" className="img-fluid jack-bor" />
            </div>
            <div className="col-md-12 scl_pad">
              <div className="row">
                <div className="col-lg-5 col-5 col-md-6 col-md-4">
                  <div className="winner-name tun_border">
                    <h5>02. Lokesh</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-2 col-md-2 text-center">
                  <div className="toun_scroll_flag tun_border"><img style={{width:"20px"}} src={country1} alt="scroll2" /></div>
                </div>
                <div className="col-lg-3 col-5 col-md-4 text-right">
                  <div className="winner-name tun_border">
                    <p>₹1365.25</p>
                  </div>
                </div>
              </div>
              <img src={taunamentborder} alt="border" className="img-fluid jack-bor" />
            </div>
            <div className="col-md-12 scl_pad">
              <div className="row">
                <div className="col-lg-5 col-5 col-md-6">
                  <div className="winner-name tun_border">
                    <h5>03. Virat</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-2 col-md-2 text-center">
                  <div className="toun_scroll_flag tun_border"><img style={{width:"20px"}} src={country1} alt="scroll3" /></div>
                </div>
                <div className="col-lg-3 col-5 col-md-4 text-right">
                  <div className="winner-name tun_border">
                    <p>₹3310.25</p>
                  </div>
                </div>
              </div>
              <img src= {taunamentborder} alt="border" className="img-fluid jack-bor" />
            </div>
            <div className="col-md-12 scl_pad">
              <div className="row">
                <div className="col-lg-5 col-5 col-md-6">
                  <div className="winner-name tun_border">
                    <h5>04. Shivam</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-2 col-md-2 text-center">
                  <div className="toun_scroll_flag tun_border"><img style={{width:"20px"}} src={country1} alt="scroll4" /></div>
                </div>
                <div className="col-lg-3 col-5 col-md-4 text-right">
                  <div className="winner-name tun_border">
                    <p>₹365.28</p>
                  </div>
                </div>
              </div>
              <img src={taunamentborder} alt="border" className="img-fluid jack-bor" />
            </div>
            <div className="col-md-12 scl_pad">
              <div className="row">
                <div className="col-lg-5 col-5 col-md-6">
                  <div className="winner-name tun_border">
                    <h5>05. Vishnu</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-2 col-md-2 text-center">
                  <div className="toun_scroll_flag tun_border"><img style={{width:"20px"}} src={country1} alt="scroll5" /></div>
                </div>
                <div className="col-lg-3 col-5 col-md-4 text-right">
                  <div className="winner-name tun_border">
                    <p>₹1027.22</p>
                  </div>
                </div>
              </div>
              <img src={taunamentborder} alt="border" className="img-fluid jack-bor" />
            </div>
           
         
          </div>
        </div>
        <div className="col-lg-5 col-md-7">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6 col-md-6">
              <div className="sub-heading">
                <h3>Running Jackpots</h3>
                <div className="run-slick">
                  <div className="running-img">
                    <img src={runningjackpot} className="img-fluid" alt />
                    <div className="run-txt">
                      <h4>Pool Rummy</h4>
                      <p>₹1,25,002</p>
                      <div className="casino-btn">
                        <a style={{textDecoration:"none"}} href="" className="btn-4 yellow-btn">play</a></div>
                    </div>
                  </div>
                  <div className="running-img">
                    <img src="running-jackpot-2.jpg" className="img-fluid" alt />
                    <div className="run-txt">
                      <h4>Point Rummy</h4>
                      <p>₹50,030</p>
                      <div className="casino-btn">
                        <a style={{textDecoration:"none"}} href="" className="btn-4 yellow-btn">play</a></div>
                    </div>
                  </div>
                  {/* <div className="running-img">
                    <img src="/running-jackpot-3.jpg" className="img-fluid" alt />
                    <div className="run-txt">
                      <h4>Slots</h4>
                      <p>₹1,25,002</p>
                      <div className="casino-btn">
                        <a href="#" className="btn-4 yellow-btn">play</a></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="sub-heading upcom">
                <h3>Upcoming Jackpots</h3>
                <div className="upcom-slick">
                  <div className="running-img">
                    <img src="upcomming-jackpot-1.jpg" className="img-fluid" alt />
                    <div className="run-txt">
                      <h4>Deal Rummy</h4>
                      <p>₹25,002</p>
                      <div className="casino-btn">
                        <a style={{textDecoration:"none"}} href="#" className="btn-4 yellow-btn">play</a></div>
                    </div>
                  </div>
                  {/* <div className="running-img">
                    <img src="upcomming-jackpot-2.jpg" className="img-fluid" alt />
                    <div className="run-txt">
                      <h4>Point Rummy</h4>
                      <p>₹15,002</p>
                      <div className="casino-btn">
                        <a href="#" className="btn-4 yellow-btn">play</a></div>
                    </div>
                  </div> */}
                  {/* <div className="running-img">
                    <img src="upcomming-jackpot-3.jpg" className="img-fluid" alt />
                    <div className="run-txt">
                      <h4>Slots</h4>
                      <p>₹25,010</p>
                      <div className="casino-btn">
                        <a href="#" className="btn-4 yellow-btn">play</a></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3  justify-content-center text-center">
          <div className="sub-heading">
            <h3>Today’s Jackpot Time</h3>
          </div>
          <div  className="row counter-jack">
            <div  className="col-lg-12 text-center">
              <div className="coundown">
                <span className="count-down" />
                <p>Hours</p>
              </div>
              <div className="coundown count-dot">
                <span className="count-down2" />
                <p>Mins</p>
              </div>
              <div className="coundown">
                <span className="count-down3" />
                <p>Secs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   <section id="faq" className="faq back-light section">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-lg-6">
          <div className="heading">
            <h2>Frequently Ask Questions</h2>
            <img src="heading-border-effect.png" className="img-fluid" alt="effect" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9 col-md-12">
          <div className="row">
            <div className="col-md-6">
              <div className="faq-inner">
                <h3>01. How do I create Casine Account ?</h3>
                <p>To create a casino account, visit the site or app, click "Sign Up," enter your details, and verify your email. Follow any additional instructions to complete the registration process.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="faq-inner f-padding">
                <h3>02. Where can I Redeem My Earnings ?</h3>
                <p>You can redeem your earnings in the "Account" or "Wallet" section of the site or app. Navigate to the "Withdraw" or "Redeem" option, and follow the instructions for transferring funds.</p>
              </div>
            </div>
          </div>
          {/* <div className="row faq-border">
            <img src="faq-border.png" className="img-fluid" alt="effect" />
          </div> */}
          <div className="row faq-pad justify-content-center text-center">
            <img src="faq-border-2.png" className="img-fluid" alt="effect" />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="faq-inner">
                <h3>03. How do I Start Playing ?</h3>
                <p>To start playing, log in to your account, browse the game selection, and choose a game. Click on it to load, follow any setup instructions, and start enjoying the gameplay.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="faq-inner f-padding">
                <h3>04. How do I Move Up a Level ?</h3>
                <p>To move up a level, earn experience points or complete specific in-game objectives. Check the game’s leveling system for requirements and achievements. Progress by playing regularly and fulfilling tasks.</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-3 col-md-12">
          <div className="faq-form">
            <form>
              <div className="form-group col-sm-12">
                <input type="text" className="form-control" name="name" placeholder="Enter Your Name" />
              </div>
              <div className="form-group col-sm-12">
                <input type="text" className="form-control" name="email" placeholder="Enter Your Email" />
              </div>
              <div className="form-group col-sm-12">
                <textarea name="meassage" placeholder="Enter Comments" defaultValue={""} />
              </div>
              <div className="casino-btn col-sm-12">
                <a   className="btn-4 yellow-btn faq-btn">send</a></div>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  </section>
  </div>
  )
}

export default Home

