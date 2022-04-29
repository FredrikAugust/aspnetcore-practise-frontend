import { useMutation, useQueryClient } from 'react-query';
import useBooks, { BookVm } from '../../api/useBooks';

export default function Book({ book }: { book: BookVm }) {
  const { loan } = useBooks();

  const queryClient = useQueryClient();

  const { mutate: loanBook, isLoading: isLoaning } = useMutation('loan', loan, {
    onSuccess: () => queryClient.invalidateQueries('books'),
  });

  return (
    <div className="flex justify-between">
      <div>
        <h4>{book.name}</h4>
        <small>{book.author}</small>
      </div>

      {book.available && <button disabled={isLoaning} onClick={() => loanBook(book.id)} className="self-center px-2 py-1 text-white bg-black" type="button">lån</button>}
    </div>
  );
}
