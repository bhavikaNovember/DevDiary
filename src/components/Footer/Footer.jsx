import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
    return (
        <footer className="bg-orange-300 bg-opacity-30">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center">
                  
                    <p className="ml-4 text-base text-blue-950">
                        &copy; 2024. All Rights Reserved by Bhavika
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 text-xl">
                    <Link to="/" className="text-base font-medium text-blue-950 hover:text-gray-700">
                        Features
                    </Link>
                    <Link to="/" className="text-base font-medium text-blue-950 hover:text-gray-700">
                        Pricing
                    </Link>
                    <Link to="/" className="text-base font-medium text-blue-950 hover:text-gray-700">
                        Support
                    </Link>
                    <Link to="/" className="text-base font-medium text-blue-950 hover:text-gray-700">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
