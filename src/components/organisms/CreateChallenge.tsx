import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import useChallenges, { Challenge } from '../../api/useChallenges';

export default function CreateChallenge() {
  const { register, handleSubmit } = useForm<Record<keyof Challenge, unknown>>();

  const { createChallenge } = useChallenges();

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation('createChallenge', createChallenge, {
    onSuccess: () => queryClient.invalidateQueries('challenges'),
  });

  const onSubmit = (data: Record<keyof Challenge, unknown>) => {
    mutate({
      challengeId: 0,
      description: data.description as string,
      name: data.name as string,
      points: Number(data.points),
    });
  };

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-4">
      <label htmlFor="name" className="block">
        <span className="text-gray-700">name</span>
        <input className="block" type="text" id="name" {...register('name')} />
      </label>

      <label htmlFor="description" className="block">
        <span className="text-gray-700">description</span>
        <textarea className="block form-textarea" id="description" {...register('description')} />
      </label>

      <label htmlFor="points" className="block">
        <span className="text-gray-700">points</span>
        <input type="number" className="block" id="points" {...register('points')} />
      </label>

      <button type="submit">lag</button>
    </form>
  );
}
