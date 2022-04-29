import { Route, Routes as RouterRoutes } from 'react-router-dom';
import AuthenticatedPage from '../templates/AuthenticatedPage';
import Frontpage from './Frontpage';

export default function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<AuthenticatedPage />}>
        <Route index element={<Frontpage />} />
      </Route>
    </RouterRoutes>
  );
}
