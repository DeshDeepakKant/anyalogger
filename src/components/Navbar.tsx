import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/demonstration', label: 'Demonstration' },
    { path: '/detection', label: 'Detection' },
    { path: '/prevention', label: 'Prevention' },
    { path: '/notable-crimes', label: 'Notable Crimes' },
    { path: '/faqs', label: 'FAQs' },
  ];

  return (
    <div className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${
              isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;