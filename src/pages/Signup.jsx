import React from 'react';
import { Signup as SignupComponent } from '../components';
import pic1 from '../images/pic1.jpg'; // Import the image here

function Signup() {
  return (
    <div
      className='h-screen' // Apply h-screen class here
      style={{ backgroundImage: `url(${pic1})`, backgroundSize: 'cover' }}
    >
      <div className='py-8'>
        <SignupComponent />
      </div>
    </div>
  );
}

export default Signup;
