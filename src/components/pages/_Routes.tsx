import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import AuthenticatedPage from '../templates/AuthenticatedPage';
import ChallengePage from './ChallengePage';
import Frontpage from './Frontpage';
import Login from './Login';
import CreateChallengePage from './CreateChallengePage';
import DeleteChallengePage from './DeleteChallengePage';

export default function Routes() {
  const { isLoading } = useAuth0();

  if (isLoading) return <p>loading...</p>;

  return (
    <RouterRoutes>
      <Route path="/" element={<AuthenticatedPage />}>
        <Route index element={<Frontpage />} />
        <Route path="challenge">
          <Route path="create" element={<CreateChallengePage />} />
          <Route path="delete" element={<DeleteChallengePage />} />
          <Route path=":id" element={<ChallengePage />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
    </RouterRoutes>
  );
}
