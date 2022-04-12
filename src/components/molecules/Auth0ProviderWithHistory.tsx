import { Auth0Provider, Auth0ProviderOptions } from '@auth0/auth0-react';
import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Auth0ProviderWithHistory({ children }: PropsWithChildren<{}>) {
  const navigate = useNavigate();

  const onRedirectCallback: Auth0ProviderOptions['onRedirectCallback'] = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain="alveland.eu.auth0.com"
      audience="https://alveland-dev.no"
      clientId="BVxvKKnw3CSm3KdTsm23j3EiTM8xXK61"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}
