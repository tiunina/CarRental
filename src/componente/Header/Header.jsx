import React from 'react';
import css from './Header.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const Header = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.contentWrapper}>
        <NavLink to="/" className={css.logoStyle}>
          <svg className={css.logo} width="114px" height="16px">
            <use href="images/icons.svg#icon-logo"></use>
          </svg>
        </NavLink>
        <nav>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
