import useAxios from './useAxios';

export type BookVm = {
  id: string;
  name: string;
  author: string;
  available: boolean;
}

export default function useBooks() {
  const { get, post } = useAxios();

  return {
    getBooks: () => get<BookVm[]>(''),
    loan: (bookId: string) => post<boolean>('loan', bookId),
    deliver: (loanId: string) => post<boolean>('deliver', loanId),
  };
}
