// NavigationBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto p-4">
        <ul className="flex space-x-4">
          <li>
            <NavLink 
              to="/doctors" 
              activeClassName="bg-blue-600"
              className="p-2 rounded hover:bg-gray-700"
            >
              Doctors
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/specializations" 
              activeClassName="bg-blue-600"
              className="p-2 rounded hover:bg-gray-700"
            >
              Specializations
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
