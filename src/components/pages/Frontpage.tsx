import AuthorizedView from '../organisms/AuthorizedView';
import Challenges from '../organisms/Challenges';
import CreateChallenge from '../organisms/CreateChallenge';

export default function Frontpage() {
  return (
    <>
      <h1>home</h1>
      <p>this is my home page</p>

      <AuthorizedView oneOf={['Administrator']}>
        <CreateChallenge />
      </AuthorizedView>

      <Challenges />
    </>
  );
}
