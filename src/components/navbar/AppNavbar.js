import React, { useState } from 'react';
import { FaBars, FaArrowRight } from 'react-icons/fa'; // import icons from react-icons

import './AppNavbar.css';

const AppNavbar = () => {
  const [isSliderActive, setSliderActive] = useState(false);

  // Toggle the slider (button) state
  const handleSliderToggle = () => {
    setSliderActive(!isSliderActive);
  };

  return (
    <div className="navbar">
      <div className="top-bar">
        {/* Left Section (Menu and Slider) */}
        <div className="left">
          <div className="menu">
            <FaBars /> {/* Hamburger menu icon */}
            Menu
          </div>
          <div className="slider">
            <button onClick={handleSliderToggle} className="toggle-btn">
              {isSliderActive ? 'Close' : 'Open'} {/* Toggle button text */}
            </button>
          </div>
        </div>

        {/* Center Section */}
        <div className="center">
          <div className="center-content">Center</div> {/* Center content */}
        </div>

        {/* Right Section */}
        <div className="right">
          <div className="right-content">Right</div> {/* Right content */}
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
