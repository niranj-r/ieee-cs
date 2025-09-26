import React, { useState, useEffect } from 'react';
import './Bg.css';
const Background = () => {
  const [bg, setBg] = useState('/images/desktop-bg.jpg');

  const handleDownload = () => {
    const imageUrl = "./images/badge.png"; // replace with your image URL
    const fileName = "badge.png";

    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 450) {
        setBg('./images/phone-bg.webp');
      } else {
        setBg('./images/lap-bg.png');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // initial check on load

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div
      onClick={handleDownload}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
    </div>
  );
};

export default Background;
