import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './component/Footer';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tournaments from './component/Tournaments';
import RefundPolicy from './component/RefundPolicy';
import PrivacyPolicy from './component/PrivacyPolicy';
import TermsofService from './component/TermsofService';
import FairPlayStandards from './component/FairPlayStandards';
import { ScrollToScroll } from './component/WindowToScroll';
import DownloadButton from './component/DownloadButton';
import ContactUs from './component/ContactUs';
import AboutUs from './component/AboutUs';
// import Footer from './Footer';  // Import your Footer component



function App() {
  return (
    <div>
      <Router>
        <ScrollToScroll/>
              <Header/>

      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/games" element={<Games />} /> */}
        <Route path="/FairPlayStandards" element={<FairPlayStandards />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsofService" element={<TermsofService />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/RefundPolicy" element={<RefundPolicy />} />
        <Route path="/AboutUs" element={<AboutUs />} />

        
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
      <DownloadButton/>
    </Router>
    </div>
  );
}

export default App;
