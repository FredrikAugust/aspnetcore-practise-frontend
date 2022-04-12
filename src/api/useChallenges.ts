import useAxios from './useAxios';
import { Answer } from './useAnswer';

export type Challenge = {
    challengeId: number;
    name: string;
    description: string;
    points: number;

    answer?: Answer;
}

export type CreateChallengeModel = {
  challengeId: number;
  name: string;
  description: string;
  points: number;
  answer: string;
}

export type Attachment = {
  name : string;
  url: string;
  challengeId: number;
  challenge?: Challenge;
  challengeAttachmentId: number;
}

export type ChallengeWithAttachments = Challenge & { attachments: Attachment[] }

export type ChallengeWithDetails = {
  challenge: ChallengeWithAttachments,
  solved: boolean,
  answer?: Answer
}

export default function useChallenges() {
  const { get, post, delete: remove } = useAxios();

  return {
    getChallenges: () => get<ChallengeWithDetails[]>('Challenges'),
    getChallengeWithAttachments: (id: string) => get<ChallengeWithDetails>(`Challenges/${id}`),
    createChallenge: (challenge: CreateChallengeModel) => post<Challenge>('Challenges', challenge),
    deleteChallenge: (challengeId: string) => remove(`Challenges/${challengeId}`),
  };
}
