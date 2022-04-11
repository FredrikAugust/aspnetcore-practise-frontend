import { useQuery } from 'react-query';
import useChallenges, { Challenge } from '../../api/useChallenges';
import ChallengeView from '../molecules/Challenge';

export default function Challenges() {
  const { getChallenges } = useChallenges();

  const { data, isLoading } = useQuery('challenges', getChallenges);

  if (isLoading) return <p>loading...</p>;

  return (
    <section>
      <h2>challenges</h2>
      {data
        ?.data
        .map((challenge: Challenge) => (
          <ChallengeView
            challenge={challenge}
            key={challenge.challengeId}
          />
        ))}
    </section>
  );
}
