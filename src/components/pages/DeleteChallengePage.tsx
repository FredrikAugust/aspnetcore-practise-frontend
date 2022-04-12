import { useMutation, useQuery, useQueryClient } from 'react-query';
import useChallenges from '../../api/useChallenges';

export default function DeleteChallengePage() {
  const { getChallenges, deleteChallenge } = useChallenges();

  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery('challenges', getChallenges);

  const { mutate, isLoading: mutating } = useMutation('deleteChallenge', (id: string) => deleteChallenge(id), {
    onSuccess: () => queryClient.invalidateQueries('challenges'),
  });

  if (isLoading) return <p>loading...</p>;

  return (
    <>
      <h1 className="mb-8">slett oppgaver</h1>
      <div className="flex flex-col gap-4">
        {data?.data.map((details) => (
          <div key={details.challenge.challengeId} className="flex gap-2 items-center">
            <button type="button" disabled={mutating} onClick={() => mutate(details.challenge.challengeId.toString())}>slett</button>
            <p>{details.challenge.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
