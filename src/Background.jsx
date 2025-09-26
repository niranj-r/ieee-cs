import React, { useState, useEffect } from 'react';

const Background = () => {
  const [bg, setBg] = useState('/images/desktop-bg.jpg');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBg('./images/vi-mob.jpg');
      } else {
        setBg('./images/vi-arcane.jpg');
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
      <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '40vh' }}>
        Responsive Background
      </h1>
    </div>
  );
};

export default Background;
