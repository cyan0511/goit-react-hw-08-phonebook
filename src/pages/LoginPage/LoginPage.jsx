import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="form-container">
        <LoginForm />
      </div>
    </HelmetProvider>
  );
};

export default LoginPage;
