import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Phone Book</title>
      </Helmet>
      <div className={css.container}>
        <h1 className={css.title}>Phone Book welcome page</h1>
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
