import React, { useRef, useState } from 'react';
import Menu from './Menu';

const FloatingBurger = () => {
  const [display, setDisplay] = useState('none');
  const menuRef = useRef();

  return (
    <div>
      <div className="burger-menu">
        <input
          onChange={() =>
            menuRef.current.checked ? setDisplay('block') : setDisplay('none')
          }
          ref={menuRef}
          className="burger-menu__input"
          type="checkbox"
          id="menu"
        />
        <label className="burger-menu__indicator" htmlFor="menu"></label>
        <label className="middle-burger"></label>
      </div>

      <Menu currentStyle={display} />
    </div>
  );
};

export default FloatingBurger;
