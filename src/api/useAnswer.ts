import useAxios from './useAxios';

export type AnswerBindingModel = {
  value: string;
}

// eslint-disable-next-line no-shadow
export enum AnswerStatus {
  // eslint-disable-next-line no-unused-vars
  Correct,
  // eslint-disable-next-line no-unused-vars
  Incorrect
}

export type Answer = {
  value: string,
}

export type AnswerViewModel = {
  answerStatus: AnswerStatus;
}

export default function useAnswer() {
  const { post } = useAxios();

  return {
    proposeAnswer: (challengeId: string, answerBindingModel: AnswerBindingModel) => post<AnswerViewModel>(`Answer/${challengeId}`, answerBindingModel),
  };
}
