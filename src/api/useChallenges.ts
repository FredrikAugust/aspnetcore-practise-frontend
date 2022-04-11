import useAxios from './useAxios';

export type Challenge = {
    challengeId: number;
    name: string;
    description: string;
    points: number;
}

export default function useChallenges() {
  const { get } = useAxios();

  return {
    getChallenges: () => get<Challenge[]>('Challenges'),
  };
}
