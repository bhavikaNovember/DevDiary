// import React, { useState } from 'react';
// import { FaChevronDown } from 'react-icons/fa';

// function Logo() {
//   const [showAboutDropdown, setShowAboutDropdown] = useState(false);
//   const [showFAQsDropdown, setShowFAQsDropdown] = useState(false);

//   const handleAboutDropdownToggle = () => {
//     setShowAboutDropdown(!showAboutDropdown);
//   };

//   const handleFAQsDropdownToggle = () => {
//     setShowFAQsDropdown(!showFAQsDropdown);
//   };

//   return (
//     <div className="relative">
//       <button onClick={handleAboutDropdownToggle} className=" text-orange-900 inline-block px-6 py-2 duration-200 hover:bg-white rounded-full">
//         Categories
        
//       </button>
//       {showAboutDropdown && (
//         <div className="absolute z-10 bg-white p-4 mt-2 rounded-lg shadow-lg">
//           <p>About content here</p>
//         </div>
//       )}


//       <button onClick={handleFAQsDropdownToggle} className=" text-orange-900 inline-block px-6 py-2 duration-200 hover:bg-white rounded-full">
//         Archives
       
//       </button>
//       {showFAQsDropdown && (
//         <div className="absolute z-10 bg-white p-4 mt-2 rounded-lg shadow-lg">
//           <p>FAQs content here</p>
//         </div>
//       )}

// <button onClick={handleFAQsDropdownToggle} className=" text-orange-900 inline-block px-6 py-2 duration-200 hover:bg-white rounded-full">
//         Contact
//       </button>
//       {showFAQsDropdown && (
//         <div className="absolute z-10 bg-white p-4 mt-2 rounded-lg shadow-lg">
//           <p>FAQs content here</p>
//         </div>
//       )}

//     </div>
//   );
// }

// export default Logo;
import React, { useState } from 'react';

function Logo() {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showFAQsDropdown, setShowFAQsDropdown] = useState(false);

  const handleAboutDropdownToggle = () => {
    setShowAboutDropdown(!showAboutDropdown);
  };

  const handleFAQsDropdownToggle = () => {
    setShowFAQsDropdown(!showFAQsDropdown);
  };

  return (
    <div className="relative">
      <button onClick={handleAboutDropdownToggle} className=" text-orange-900 inline-block px-6 py-2 duration-200 hover:bg-white rounded-full">
        Home
      </button>
      

      <button onClick={handleAboutDropdownToggle} className=" text-orange-900 inline-block px-6 py-2 duration-200 hover:bg-white rounded-full">
        About
      </button>
      

      <button onClick={handleFAQsDropdownToggle} className=" text-orange-900 inline-block px-6 py-2 duration-200 hover:bg-white rounded-full">
        Categories
      </button>
      
      <button onClick={handleFAQsDropdownToggle} className=" text-orange-900 inline-block px-6 py-2 duration-200 hover:bg-white rounded-full">
        Archives
      </button>
    

      <button onClick={handleFAQsDropdownToggle} className=" text-orange-900 inline-block px-6 py-2 duration-200 hover:bg-white rounded-full">
        Contact
      </button>
      
    </div>
  );
}

export default Logo;
