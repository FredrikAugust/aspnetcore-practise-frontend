import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

export default function useRoles(): { roles: string[] | undefined, isLoading: boolean } {
  const { getIdTokenClaims } = useAuth0();

  const [roles, setRoles] = useState<string[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getIdTokenClaims().then((claims) => {
      setRoles(claims?.['https://alveland-dev.no/roles'] as string[]);
    // eslint-disable-next-line no-console
    }).catch(console.error).finally(() => setIsLoading(false));
  }, [getIdTokenClaims]);

  return { isLoading, roles };
}
