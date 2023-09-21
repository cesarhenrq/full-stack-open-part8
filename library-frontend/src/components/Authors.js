import { useQuery } from "@apollo/client";

import { Queries } from "../utils/graphql";

import { BirthyearForm } from "./";

const { ALL_AUTHORS } = Queries;

const Authors = ({ token }) => {
  const result = useQuery(ALL_AUTHORS);

  if (result.loading) {
    return <div>loading...</div>;
  }

  const allAuthors = result.data.allAuthors.map(({ name, born }) => ({
    name,
    born,
  }));

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {result.data.allAuthors.map(({ name, born, bookCount }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{born}</td>
              <td>{bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {token && <BirthyearForm authors={allAuthors} />}
    </div>
  );
};

export default Authors;
