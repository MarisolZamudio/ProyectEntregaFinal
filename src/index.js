import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Auth0Provider domain='dev-q32hahnii6kjl0tg.us.auth0.com'
      clientId='y7MkA5f8rxvSNSpZFoX2LxLT05XSKwR7'
      redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
