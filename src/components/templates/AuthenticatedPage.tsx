import { Link, Outlet } from 'react-router-dom';

function AuthenticatedPage() {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between gap-4 p-4">
          <Link to="/">
            bibliotek
          </Link>
        </nav>
      </header>
      <main className="px-4"><Outlet /></main>
    </>
  );
}

export default AuthenticatedPage;
