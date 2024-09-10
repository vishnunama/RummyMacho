import React from 'react'
import { useNavigate } from 'react-router-dom';

function ContactUs() {
          const navigate = useNavigate();

  return (
    <div>
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
          <h2>Contact Us</h2>
          <img src="heading-border-effect.png" className="img-fluid" alt="effect" />
        </div>
        <p className="mb30">
          We’re here to help you! Whether you have questions, need assistance, or just want to share your feedback, feel free to get in touch with us. Here’s how you can reach out:

        </p><br />
        
        <div className="contact-info">
      <div className="contact-item">
        <p><strong>1. Customer Support:</strong></p>
        <p>Email: support@rummymacho.com</p>
        <p>Phone: 9974751747</p>
      </div>
      
      <div className="contact-item">
        <p><strong>2. General Inquiries:</strong></p>
        <p>Email: support@rummymacho.com</p>
      </div>
      
      <div className="contact-item">
        <p><strong>3.Feedback and Suggestions:</strong></p>
        <p>Email: support@rummygame.com</p>
      </div>
      <div className="contact-item">
        <p><strong>3. Office Hours:</strong></p>
        <p style={{fontSize:"15px"}}>Monday to Friday: 9:00 AM – 6:00 PM</p>
        <p>Saturday: 10:00 AM – 4:00 PM Sunday: Closed</p>
        
      </div>
      
      <div className="contact-item">
        <p><strong>4. Mailing Address:</strong></p>
        <p>BYTEWIZARDY IT SOLUTIONS PRIVATE LIMITED,</p>
        <p>6TH FLOOR, CLOUD -9,</p>
        <p>SECTOR 1 Vaishali,</p>
        <p>Ghaziabad, Uttar Pradesh,</p>
        <p>PIN Code: 201010</p>
      </div>

      <div className="contact-item">
        <p><strong>5. Office Hours:</strong></p>
        <p>Monday to Friday: 9:00 AM – 6:00 PM</p>
        <p>Saturday: 10:00 AM – 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
      
      
    </div>
        <div className="casino-btn">
          <a style={{textDecoration:"none"}} href="https://drive.google.com/uc?export=download&id=1R7OBfAhXbRhT8_ZQrA8OHypcRrVlpQM7">join us now</a></div>
      </div>
    </div>

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
                <h3>01. Before reaching out, you might find the answers to your questions in our FAQ section.
</h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="faq-inner f-padding">
                <h3>02. Thank you for being a part of our rummy community!
Stay Connected!
</h3>
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
                <h3>03. Join our newsletter for updates, promotions, and news about the latest features and game events.</h3>
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
</section>


    </div>
  )
}

export default ContactUs;