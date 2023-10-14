

import React from 'react';

import bankLogo from '../util/bank_logo.png'; // Provide the correct path to your image
const Header = () => {
    return (
      <div className="bg-white p-2 md:p-2 shadow-lg"> {/* Reduced padding here */}
        <p className="text-center text-xs"></p>
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="text-lg font-semibold text-blue-500 md:px-4 py-4"> {/* Reduced padding here */}
              Shareholder's Satisfaction Survey
            </div>
            <img
              className="max-w-full h-auto md:w-[250px] md:h-[70px] md:pr-4 py-1" // Reduced width and padding here
              src={bankLogo}
              alt="bank-logo"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;
  



