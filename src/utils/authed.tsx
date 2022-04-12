import { withAuthenticationRequired } from '@auth0/auth0-react';
import { ComponentType } from 'react';

export default function authed(component: ComponentType<any>) {
  return withAuthenticationRequired(component, {
    onRedirecting: () => <p>loading...</p>,
  });
}
