import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Frontpage from './components/pages/Frontpage';

import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="alveland.eu.auth0.com"
      clientId="BVxvKKnw3CSm3KdTsm23j3EiTM8xXK61"
      redirectUri={window.location.origin}
    >
      <Frontpage />

    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
