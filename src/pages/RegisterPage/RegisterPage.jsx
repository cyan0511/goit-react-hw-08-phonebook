import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className="form-container">
        <RegisterForm />
      </div>
    </HelmetProvider>
);
};

export default RegisterPage;
