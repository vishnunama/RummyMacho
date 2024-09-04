import React from 'react';
// import './DownloadButton.css';

const DownloadButton = () => {
  return (
    <div className="download-button-container">
      <button className="download-button">
        <img style={{width:"30px", height:"30px"}} src="android.png" alt="Android Icon" className="android-icon" />
       <a style={{color:"white", textDecoration:"none"}} href="https://drive.google.com/uc?export=download&id=1R7OBfAhXbRhT8_ZQrA8OHypcRrVlpQM7">DOWNLOAD & GET ₹100</a> 
        <img style={{width:"30px", height:"30px"}} src="direct-download.png" alt="Download Icon" className="download-icon" />
      </button>
    </div>
  );
};

export default DownloadButton;
