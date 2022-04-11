import { useAuth0 } from '@auth0/auth0-react';

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <section className="p-4">
      <h1>sign in</h1>
      <button type="button" onClick={loginWithRedirect}>login</button>
    </section>
  );
}
