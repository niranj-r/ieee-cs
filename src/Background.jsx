import React, { useState, useEffect } from 'react';

const Background = () => {
  const [bg, setBg] = useState('/images/desktop-bg.jpg');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 450) {
        setBg('./images/phone-bg.png');
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
