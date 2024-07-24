import { useDispatch } from 'react-redux';
import { logOut } from '../../store/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';
import { Button } from '@mui/material';
import { Logout } from '@mui/icons-material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button onClick={() => dispatch(logOut())}>
        <Logout />
        Logout
      </Button>

    </div>
  );
};
