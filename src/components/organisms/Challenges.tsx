import { useQuery } from 'react-query';
import useChallenges from '../../api/useChallenges';
import ChallengeView from '../molecules/Challenge';

export default function Challenges() {
  const { getChallenges } = useChallenges();

  const { data, isLoading } = useQuery('challenges', getChallenges);

  if (isLoading) return <p>loading...</p>;

  return (
    <section>
      <h2 className="mb-2">oppgaver</h2>

      <div className="flex gap-8 overflow-x-auto">
        {data
          ?.data
          .map((details) => (
            <ChallengeView
              details={details}
              key={details.challenge.challengeId}
            />
          ))}
      </div>
    </section>
  );
}
