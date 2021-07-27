import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './navbar.module.css';
import logo from '../../assets/images/logo.png';
import { routes } from '../../routes/routes';

function NavBar() {
  const match = useLocation();
  console.log(match);
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <img src={logo} alt="logo" />
      </div>
      <ul className={style.menu}>
        {routes.map(route => (
          <li key={route.label}>
            <Link to={route.path}> {route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
