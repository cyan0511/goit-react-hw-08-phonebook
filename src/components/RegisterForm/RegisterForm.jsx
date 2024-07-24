import { useDispatch } from 'react-redux';
import { register } from '../../store/auth/authOperations';
import css from './RegisterForm.module.css';
import { Button, InputAdornment, TextField } from '@mui/material';
import {
  AccountBoxOutlined,
  EditNote, EmailOutlined, LockOutlined,
} from '@mui/icons-material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css['register-container']}>
      <EditNote sx={{ fontSize: '150px' }} />
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountBoxOutlined />
              </InputAdornment>
            ),
          }}
          variant="standard"
          label="User Name"
          type="text"
          name="name" />

          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined />
                </InputAdornment>
              ),
            }}
            variant="standard"
            label="Email"
            type="email"
            name="email" />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined />
                </InputAdornment>
              ),
            }}
            variant="standard"
            label="Password"
            type="password"
            name="password"
          />
        <Button variant="outlined" type="submit">Register</Button>
      </form>
    </div>
  );
};
