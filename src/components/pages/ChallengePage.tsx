import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import useChallenges from '../../api/useChallenges';

export default function ChallengePage() {
  const { id } = useParams<{ id: string }>();

  const { getChallengeWithAttachments: getChallenge } = useChallenges();

  const { isLoading, data } = useQuery(['challenge', id], () => getChallenge(id!));

  if (isLoading) return <p>loading...</p>;

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <div>
          <Link to="/"><button type="button" className="text-black">tilbake</button></Link>
        </div>
        <div>
          <p>
            {data?.data.points}
            {' '}
            poeng
          </p>
          <h1>{data?.data.name}</h1>
        </div>
      </div>

      <p className="max-w-lg mb-8">
        {data?.data.description}
      </p>

      {data?.data.attachments.length !== 0 && <h3 className="mb-2">vedlegg</h3>}
      <div className="flex gap-4">
        {data?.data.attachments.map((attachment) => (
          <a rel="noreferrer" target="_blank" className="px-2 py-1 text-white no-underline transition bg-black border-2 border-black hover:text-black hover:bg-white" download="download" href={attachment.url} key={attachment.challengeAttachmentId}>
            {attachment.name}
          </a>
        ))}
      </div>
    </section>
  );
}
