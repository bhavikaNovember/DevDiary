import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
    // Add Sign In and Sign Up items conditionally based on authStatus
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
  ];

  return (
    <div >
      <Container>
        <nav className='flex items-center justify-between p-4 font-bold text-2xl text-orange-900 rounded-lg bg-orange-300 bg-opacity-50'>
          <div className='flex items-center'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
            <ul className='flex'>
              {navItems.map(
                (item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className='inline-block px-6 py-2 duration-200 hover:bg-white rounded-full'
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
              )}
            </ul>
          </div>
          {/* Conditionally render LogoutBtn if user is authenticated */}
          {authStatus && <LogoutBtn />}
          {/* Social media icons */}
          <div className='flex items-center'>
            <a href='#' className='mx-3 text-orange-900'>
              <FaInstagram />
            </a>
            <a href='#' className='mx-3 text-orange-900'>
              <FaFacebook />
            </a>
            <a href='#' className='mx-3 text-orange-900'>
              <FaPinterest />
            </a>
          </div>
        </nav>
      </Container>
    </div>
  );
}

export default Header;
