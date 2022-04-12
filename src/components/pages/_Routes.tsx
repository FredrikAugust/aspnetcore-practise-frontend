import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';
import AuthenticatedPage from '../templates/AuthenticatedPage';
import ChallengePage from './ChallengePage';
import Frontpage from './Frontpage';
import Login from './Login';

function Recover() {
  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();

  const [done, setDone] = useState(false);

  useEffect(() => {
    loginWithRedirect().finally(() => setDone(true));
  }, []);

  if (isLoading || !done) return <p>loading...</p>;

  if (!isAuthenticated && done && !isLoading) return <Navigate to="/login" />;

  return null;
}

export default function Routes() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <p>loading...</p>;

  return (
    <RouterRoutes>
      {isAuthenticated ? (
        <Route path="/" element={<AuthenticatedPage />}>
          <Route index element={<Frontpage />} />
          <Route path="challenge/:id" element={<ChallengePage />} />
        </Route>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Recover />} />
        </>
      )}
    </RouterRoutes>
  );
}
