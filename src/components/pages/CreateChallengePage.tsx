import CreateChallenge from '../organisms/CreateChallenge';

export default function CreateChallengePage() {
  return (
    <section>
      <h1>lag ny oppgave</h1>
      <p className="mb-8">her kan du lage nye oppgaver som en kul admin</p>

      <CreateChallenge />
    </section>
  );
}
