import useAxios from './useAxios';

export default function useScore() {
  const { get } = useAxios();

  return {
    score: () => get<number>('Score'),
  };
}
