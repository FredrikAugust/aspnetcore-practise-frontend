import { Challenge } from '../../api/useChallenges';

export default function ChallengeView({ challenge }: {challenge: Challenge}) {
  return (
    <div>
      <small>
        {challenge.points}
        {' '}
        poeng
      </small>
      <h3>{challenge.name}</h3>
      <p>{challenge.description}</p>
    </div>
  );
}
