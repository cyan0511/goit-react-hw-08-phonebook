import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';
import { Button } from '@mui/material';
import { ContactsOutlined, HomeOutlined } from '@mui/icons-material';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        <Button>
          <HomeOutlined />
          Home
        </Button>

      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          <Button>
            <ContactsOutlined />
            Contacts
          </Button>
        </NavLink>
      )}
    </nav>
  );
};
