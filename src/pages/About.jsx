import React from 'react';
import pic1 from '../images/pic1.jpg';

function About() {
  return (
    <div className="relative">
      <img src={pic1} alt="About" className="w-full h-full object-cover" /> {/* Ensure to add alt attribute for accessibility */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-2xl font-bold bg-black bg-opacity-50">
        <div className="p-8 bg-white bg-opacity-70 text-black rounded-lg max-w-6xl text-center">
          <h1 className="text-4xl mb-4">About Our Blog</h1>
          <p className="text-lg mb-4">
            Welcome to our blog, a vibrant community where sharing stories, insights, and experiences is celebrated. Blogging is not only a fantastic way to express yourself, but it also offers numerous benefits for your mental and emotional well-being.
          </p>
          <h2 className="text-3xl mb-4">Why Blog?</h2>
          <p className="text-lg mb-4">
            Blogging provides an excellent platform to document your thoughts, ideas, and adventures. Whether you're passionate about travel, food, technology, or personal growth, our blog is the perfect space to share your voice and connect with like-minded individuals.
          </p>
          <h2 className="text-3xl mb-4">Benefits for Your Health</h2>
          <p className="text-lg mb-4">
            Engaging in regular blogging can have positive impacts on your health. Writing can be a therapeutic activity, helping to reduce stress and improve mental clarity. It encourages mindfulness and self-reflection, allowing you to process your experiences and emotions.
          </p>
          <p className="text-lg mb-4">
            Additionally, being part of a supportive blogging community can boost your sense of belonging and reduce feelings of isolation. Sharing your stories and receiving feedback can enhance your self-esteem and foster a sense of accomplishment.
          </p>
          <h2 className="text-3xl mb-4">Join Us!</h2>
          <p className="text-lg">
            Whether you're a seasoned blogger or just starting, our platform welcomes everyone. Join us today and start your blogging journey. Let's inspire, connect, and grow together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
