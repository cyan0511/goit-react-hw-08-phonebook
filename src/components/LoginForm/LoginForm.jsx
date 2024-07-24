import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../store/auth/authOperations';
import css from './LoginForm.module.css';
import { Button, InputAdornment, TextField } from '@mui/material';
import { AccountCircle, EmailOutlined, LockOutlined } from '@mui/icons-material';
import { getAuthError } from '../../store/auth/authSelectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(getAuthError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  /* useEffect(() => {
    if (error) {
      Notify.failure('Login failed.');
    }
  }, [error]); */

  return (
    <div className={css['login-container']}>
      <AccountCircle sx={{ fontSize: '150px' }} />
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlined />
              </InputAdornment>
            ),
          }}
          label="Email"
          variant="standard"
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
          label="Password"
          variant="standard"
          type="password"
          name="password" />

        {error ? <span className={css.error}>Login failed!</span> : null}

        <Button type="submit" variant="outlined">Log In</Button>
      </form>
    </div>
  );
};
