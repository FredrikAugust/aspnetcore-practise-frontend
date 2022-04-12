import { Link } from 'react-router-dom';
import { ChallengeWithDetails } from '../../api/useChallenges';

export default function ChallengeView({ details }: { details: ChallengeWithDetails }) {
  return (
    <div className="border-black border0">
      <small>
        {details.challenge.points}
        {' '}
        poeng
      </small>
      <h3>{details.challenge.name}</h3>

      <Link to={`/challenge/${details.challenge.challengeId}`}>
        {details.solved
          ? (<button className="mt-2 text-black w-28 bg-green-300 text-black" type="button">løst</button>)
          : (<button className="mt-2 text-black w-28" type="button">gå</button>)}
      </Link>
    </div>
  );
}
