import { useQuery } from 'react-query';
import useBooks from '../../api/useBooks';
import Loading from '../atoms/Loading';
import Book from '../molecules/Book';

export default function Books() {
  const { getBooks } = useBooks();

  const { data, isLoading } = useQuery('books', getBooks);

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col gap-4">
      {data?.data.map((book) => <Book key={book.id} book={book} />)}
    </div>
  );
}
