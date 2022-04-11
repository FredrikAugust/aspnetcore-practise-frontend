import Challenges from '../organisms/Challenges';
import RoleRestrictedView from '../organisms/RoleRestrictedView';

export default function Frontpage() {
  return (
    <>
      <h1>home</h1>
      <p>this is my home page</p>

      <RoleRestrictedView oneOf={['Administrator']}>
        <Challenges />
      </RoleRestrictedView>
    </>
  );
}
