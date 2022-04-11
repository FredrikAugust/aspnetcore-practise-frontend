import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';
import AuthenticatedPage from '../templates/AuthenticatedPage';
import Frontpage from './Frontpage';
import Login from './Login';

export default function Routes() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <p>loading...</p>;

  return (
    <RouterRoutes>
      {isAuthenticated ? (
        <Route path="/" element={<AuthenticatedPage />}>
          <Route path="test" element={<p>test</p>} />
          <Route path="" element={<Frontpage />} />
        </Route>
      ) : (
        <>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </>
      )}
    </RouterRoutes>
  );
}
