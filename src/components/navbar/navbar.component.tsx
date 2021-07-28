import React from 'react';
import { Link } from 'react-router-dom';
import style from './navbar.module.css';
import logo from '../../assets/images/logo.png';
import { routes } from '../../routes/routes';

function NavBar() {
  return (
    <nav className={style.navbar}>
      <div>{process.env.REACT_APP_APP_URL}</div>
      <div className={style.logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
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
