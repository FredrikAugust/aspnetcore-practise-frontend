import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import Routes from './components/pages/_Routes';

import './styles/index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="alveland.eu.auth0.com"
        audience="https://alveland-dev.no"
        clientId="BVxvKKnw3CSm3KdTsm23j3EiTM8xXK61"
        redirectUri={window.location.origin}
      >
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
