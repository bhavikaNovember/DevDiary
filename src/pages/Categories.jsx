import React from 'react';
import pic1 from '../images/pic1.jpg';

function Categories() {
  const categories = [
    "Travel",
    "Lifestyle",
    "Makeup",
    "Skincare",
    "Self Love",
    "Fitness",
    "Health",
    "Food",
    "Fashion",
    "Technology",
    "Books"
  ];

  // Split the categories into two rows
  const firstRow = categories.slice(0, 5);
  const secondRow = categories.slice(5, 10);

  return (
    <div className="relative">
      <img src={pic1} alt="About" className="w-full h-screen" /> {/* Ensure to add alt attribute for accessibility */}
      
      <div className="absolute top-0 left-0 w-full cursor-pointer h-screen flex flex-col justify-center items-center bg-black bg-opacity-50 space-y-8">
        
        {/* First Row of Categories */}
        <div className="flex space-x-4">
          {firstRow.map((category, index) => (
            <div key={index} className="p-4 w-40 h-40 bg-orange-300 text-center font-medium text-orange-900 text-2xl rounded-lg flex items-center justify-center shadow-lg hover:text-white transition-colors duration-300">
              {category}
            </div>
          ))}
        </div>
        
        {/* Second Row of Categories */}
        <div className="flex space-x-4">
          {secondRow.map((category, index) => (
            <div key={index} className="p-4 w-40 h-40 bg-orange-300 text-center font-medium text-orange-900 text-2xl rounded-lg flex items-center justify-center shadow-lg hover:text-white transition-colors duration-300">
              {category}
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Categories;
