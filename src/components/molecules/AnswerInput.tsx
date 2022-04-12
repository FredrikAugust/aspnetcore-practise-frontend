import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import useAnswer, { AnswerStatus } from '../../api/useAnswer';

export default function AnswerInput({ id }: { id: string }) {
  const {
    handleSubmit,
    register,
  } = useForm();

  const { proposeAnswer } = useAnswer();
  const queryClient = useQueryClient();

  const {
    data,
    mutate,
    isLoading,
  } = useMutation(['answer', id], (answer: string) => proposeAnswer(id, { value: answer }), {
    onSuccess: (response) => {
      if (response.data.answerStatus === AnswerStatus.Correct) {
        queryClient.invalidateQueries(['challenge', id]);
        queryClient.invalidateQueries('challenges');
        queryClient.invalidateQueries('score');
      }
    },
  });

  const onSubmit = (values: Record<string, string>) => {
    mutate(values.answer);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="answer" className="inline-block">
        <span className="text-gray-700">svar</span>
        <input type="text" id="answer" className="block w-full" {...register('answer')} />
      </label>

      <button className="ml-1" type="submit" disabled={isLoading}>send inn</button>

      {isLoading && <span className="ml-2">loading...</span>}

      {data && data.data.answerStatus === AnswerStatus.Incorrect && <span className="text-red-600 ml-2">feil :(</span>}
    </form>
  );
}
