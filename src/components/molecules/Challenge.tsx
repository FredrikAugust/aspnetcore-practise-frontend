import { Link } from 'react-router-dom';
import { Challenge } from '../../api/useChallenges';

export default function ChallengeView({ challenge }: {challenge: Challenge}) {
  return (
    <div className="border-black border0">
      <small>
        {challenge.points}
        {' '}
        poeng
      </small>
      <h3>{challenge.name}</h3>

      <Link to={`/challenge/${challenge.challengeId}`}>
        <button className="mt-2 text-black w-28" type="button">gå</button>
      </Link>
    </div>
  );
}
