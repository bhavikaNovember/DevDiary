import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="relative">
      <Link to="/" className="text-orange-900 inline-block px-6 py-2 duration-200 hover:bg-white rounded-full">
        Home
      </Link>

      <Link to="/about" className="text-orange-900 inline-block px-6 py-2 duration-200 hover:bg-white rounded-full">
        About
      </Link>
       
      <Link to="/categories" className="text-orange-900 inline-block px-6 py-2 duration-200 hover:bg-white rounded-full">
        Categories
      </Link>
      
      <Link to="/" className="bg-orange-900 inline-block px-6 py-2 duration-200 ml-52 mr-52  text-orange-100 rounded-full ">
        DevDiary
      </Link>

      <Link to="/faqs" className="text-orange-900 inline-block px-6 py-2 duration-200 hover:bg-white rounded-full">
        FAQs
      </Link>
    </div>
  );
}

export default Logo;
