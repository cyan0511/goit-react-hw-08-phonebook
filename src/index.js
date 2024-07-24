import React from 'react';
import ReactDOM from 'react-dom/client';
import { persistor, store } from './store/store';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import theme from './theme';
import { Notify } from 'notiflix';

Notify.init({
  position: 'right-bottom',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <StyledEngineProvider injectFirst>
              <App />
            </StyledEngineProvider>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
