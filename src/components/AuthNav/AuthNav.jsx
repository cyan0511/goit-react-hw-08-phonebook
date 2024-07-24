import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { AppRegistration, Login } from '@mui/icons-material';
import { Button } from '@mui/material';

export const AuthNav = () => {
  return (
    <nav>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        <Button>
          <AppRegistration/>
          Register
        </Button>
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        <Button>
          <Login />
          Log In
        </Button>
      </NavLink>
    </nav>
  );
};
