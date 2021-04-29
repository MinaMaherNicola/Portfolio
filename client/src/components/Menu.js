/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Menu = ({ currentStyle }) => {
  console.log(currentStyle);
  return (
    <div style={{ display: currentStyle }} className="menu-bg">
      <ul className="menu container">
        <li className="menu__item">
          <a href="#" className="menu__item__link">
            1. Home
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__item__link">
            2. About
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__item__link">
            3. Skills
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__item__link">
            4. Certificates
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__item__link">
            4. Experience
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__item__link">
            6. Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
