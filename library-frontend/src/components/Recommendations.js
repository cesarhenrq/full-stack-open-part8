import { useQuery } from "@apollo/client";

import { ME, ALL_BOOKS } from "../utils/queries";

const Recommendations = () => {
  const result = useQuery(ME);

  const result2 = useQuery(ALL_BOOKS);

  if (result.loading || result2.loading) {
    return <div>loading...</div>;
  }

  const books = result2.data.allBooks.filter((book) =>
    book.genres.includes(result.data.me.favoriteGenre)
  );

  return (
    <div>
      <h2>recommendations</h2>
      <p>
        books in your favorite genre{" "}
        <strong>{result.data.me.favoriteGenre}</strong>
      </p>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recommendations;
