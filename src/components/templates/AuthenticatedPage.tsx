import { useAuth0 } from '@auth0/auth0-react';
import { Link, Outlet } from 'react-router-dom';
import { useQuery } from 'react-query';
import authed from '../../utils/authed';
import useScore from '../../api/useScore';

function AuthenticatedPage() {
  const { logout } = useAuth0();

  const { score } = useScore();

  const { isLoading, data } = useQuery('score', score);

  return (
    <>
      <header>
        <nav className="flex items-center justify-between gap-4 p-4">
          <Link to="/">
            alveland
          </Link>

          <span className="bg-green-300">
            {isLoading ? '...' : data?.data}
            {' '}
            poeng
          </span>

          <button onClick={() => logout({ returnTo: window.location.origin })} type="button">logg ut</button>
        </nav>
      </header>
      <main className="px-4"><Outlet /></main>
    </>
  );
}

export default authed(AuthenticatedPage);
