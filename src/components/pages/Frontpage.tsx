import Books from '../organisms/Books';

export default function Frontpage() {
  return (
    <>
      <h1>bibliotequet</h1>
      <p className="mb-8">har du vært på kontoret til et stort advokathus før?</p>

      <Books />
    </>
  );
}
