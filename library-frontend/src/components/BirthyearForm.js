import { useState } from "react";

import { useMutation } from "@apollo/client";

import { Queries, Mutations } from "../utils/graphql";

const { ALL_AUTHORS } = Queries;
const { UPDATE_BIRTHYEAR } = Mutations;

const BirthyearForm = ({ authors }) => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState(0);

  const [updateBirthyear] = useMutation(UPDATE_BIRTHYEAR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  });

  const submit = async (event) => {
    event.preventDefault();

    await updateBirthyear({ variables: { name, born } });
  };
  return (
    <div>
      <h2>Set birthyear</h2>
      <form onSubmit={submit}>
        <div>
          name
          <select
            onChange={({ target }) => {
              setName(target.value);
              setBorn(() => {
                const born = authors.find(
                  (author) => author.name === target.value
                ).born;

                return born ? born : 0;
              });
            }}
            defaultValue=''
          >
            <option value='' disabled>
              Select author
            </option>
            {authors.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          born
          <input
            type='number'
            onChange={({ target }) => setBorn(+target.value)}
            value={born}
          />
        </div>
        <button type='submit'>update author</button>
      </form>
    </div>
  );
};

export default BirthyearForm;
