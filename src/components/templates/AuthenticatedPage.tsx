import { useAuth0 } from '@auth0/auth0-react';
import { Link, Outlet } from 'react-router-dom';

export default function AuthenticatedPage() {
  const { logout } = useAuth0();

  return (
    <>
      <header>
        <nav className="flex items-center justify-between gap-4 p-4">
          <Link to="/">
            alveland
          </Link>
          <button onClick={() => logout({ returnTo: window.location.origin })} type="button">logg ut</button>
        </nav>
      </header>
      <main className="px-4"><Outlet /></main>
    </>
  );
}
