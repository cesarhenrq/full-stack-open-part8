import { useState } from "react";

import { useQuery } from "@apollo/client";

import { ALL_BOOKS } from "../utils/queries";

const Books = () => {
  const [genre, setGenre] = useState("");

  const result = useQuery(ALL_BOOKS, {
    variables: { genre },
  });

  const result2 = useQuery(ALL_BOOKS);

  if (result.loading || result2.loading) {
    return <div>loading...</div>;
  }

  const books = result.data.allBooks;

  const allGenres = result2.data.allBooks.reduce((acc, { genres }) => {
    return [...acc, ...genres];
  }, []);

  const genres = [...new Set(allGenres)];

  return (
    <div>
      <h2>books</h2>
      {genre && (
        <p>
          in genre <b>{genre}</b>
        </p>
      )}
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map(({ title, author, published }) => (
            <tr key={title}>
              <td>{title}</td>
              <td>{author.name}</td>
              <td>{published}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {genres.map((genre) => (
          <button key={genre} onClick={() => setGenre(genre)}>
            {genre}
          </button>
        ))}
        <button onClick={() => setGenre("")}>all genres</button>
      </div>
    </div>
  );
};

export default Books;
