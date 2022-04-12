import useAxios from './useAxios';

export type Challenge = {
    challengeId: number;
    name: string;
    description: string;
    points: number;
}

export type Attachment = {
  name : string;
  url: string;
  challengeId: number;
  challenge?: Challenge;
  challengeAttachmentId: number;
}

export type ChallengeWithAttachments = Challenge & { attachments: Attachment[] }

export default function useChallenges() {
  const { get, post } = useAxios();

  return {
    getChallenges: () => get<Challenge[]>('Challenges'),
    getChallengeWithAttachments: (id: string) => get<ChallengeWithAttachments>(`Challenges/${id}`),
    createChallenge: (challenge: Challenge) => post<Challenge>('Challenges', challenge),
  };
}
