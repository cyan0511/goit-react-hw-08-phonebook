import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './HomePage.module.css';
import { ContactPhone } from '@mui/icons-material';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Phone Book</title>
      </Helmet>
      <div className={css.container}>


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 5 }}
        >
          <div className={css.logo}>
            <ContactPhone style={{ fontSize: '150px' }} />
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="140px" height="140px"
              viewBox="0 0 300.000000 283.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,283.000000) scale(0.100000,-0.100000)" fill="#e84f20" stroke="none">
                <path
                  d="M1355 1949 c-94 -17 -164 -71 -208 -159 -20 -41 -22 -62 -25 -260 -2 -118 -7 -219 -11 -223 -4 -4 -25 9 -46 29 -22 20 -103 85 -182 146 -78 60 -145 113 -148 118 -10 16 -65 22 -80 10 -20 -16 -21 -208 -2 -232 6 -8 33 -30 60 -48 26 -18 47 -38 47 -44 0 -6 -20 -24 -45 -40 -69 -43 -75 -57 -75 -164 0 -162 19 -168 161 -54 30 24 61 49 69 55 8 7 50 39 93 71 42 32 91 73 109 91 17 19 34 32 38 30 4 -2 8 -71 8 -152 3 -186 17 -245 79 -313 56 -62 125 -90 223 -90 182 0 287 103 298 293 7 118 -1 127 -112 127 -99 -1 -116 -11 -116 -70 0 -116 -101 -165 -130 -62 -16 60 -13 625 4 666 15 36 43 51 76 41 27 -9 39 -33 46 -97 8 -75 26 -88 124 -88 100 0 110 10 110 106 0 190 -100 304 -275 316 -27 2 -68 1 -90 -3z m203 -55 c91 -46 126 -112 136 -261 l5 -73 -93 0 -93 0 0 58 c0 61 -21 115 -48 126 -33 12 -85 6 -104 -13 -38 -38 -42 -88 -39 -421 3 -306 4 -320 24 -347 41 -55 106 -56 147 -1 14 19 20 44 21 88 l2 62 88 0 c48 0 89 -2 91 -4 1 -1 -1 -44 -5 -95 -15 -181 -100 -265 -270 -266 -124 -1 -198 45 -249 153 l-26 55 0 375 c0 403 2 417 53 493 27 40 92 84 145 98 60 15 153 3 215 -27z m-680 -444 c111 -85 201 -158 201 -161 1 -4 -56 -51 -126 -105 -71 -54 -163 -127 -207 -162 -43 -35 -79 -62 -80 -60 -1 2 0 53 2 113 l4 111 78 50 79 51 -80 53 -79 53 0 93 c0 51 -3 100 -7 110 -3 10 -2 15 4 13 6 -2 101 -74 211 -159z" />
                <path
                  d="M1799 1924 c-18 -20 -19 -40 -19 -591 0 -539 1 -571 18 -586 27 -25 362 -25 424 0 58 23 93 50 121 92 46 70 48 100 45 521 l-3 396 -26 49 c-29 56 -92 110 -148 125 -20 5 -117 11 -215 12 -168 3 -178 2 -197 -18z m429 -28 c51 -22 104 -81 120 -135 8 -26 12 -162 12 -432 0 -393 0 -394 -24 -444 -27 -59 -46 -77 -107 -104 -39 -18 -69 -20 -232 -21 l-187 -2 0 576 c0 317 0 579 0 582 0 3 84 4 188 2 150 -4 195 -8 230 -22z" />
                <path
                  d="M1980 1334 l0 -416 81 5 c91 5 106 14 120 73 13 59 10 651 -4 694 -16 45 -47 60 -129 60 l-68 0 0 -416z m151 367 l24 -19 0 -346 c0 -388 2 -375 -73 -383 -75 -7 -73 -17 -71 381 1 193 6 359 11 369 12 24 79 23 109 -2z" />
              </g>
            </svg>
          </div>
          <h1 className={css.title}>Hello and welcome to Your Phone Book!</h1>
          <h2>We're thrilled to have you here</h2>
        </motion.div>


        <footer>
          <h3>
            Elevate Your Contact Management Experience
          </h3>
          <p>
            Discover the ultimate solution for organizing and managing your contacts effortlessly.
          </p>
          <p>Our phone book app combines simplicity with advanced features to ensure your contact list is always
            up-to-date
            and easy to navigate.
          </p>
        </footer>
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
