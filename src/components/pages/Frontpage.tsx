import Challenges from '../organisms/Challenges';
import AuthorizedView from '../organisms/AuthorizedView';
import AdminControlPanel from '../molecules/AdminControlPanel';

export default function Frontpage() {
  return (
    <>
      <AuthorizedView allOf={['Administrator']}>
        <div className="mb-4 p-4 border-2 border-black">
          <p className="mb-1">admin-kontrollpanel</p>
          <AdminControlPanel />
        </div>
      </AuthorizedView>

      <h1>hovedside</h1>
      <p className="mb-8">se tilgjengelige utfordringer</p>

      <Challenges />
    </>
  );
}
