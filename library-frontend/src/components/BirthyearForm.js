import { useState } from "react";

import { useMutation } from "@apollo/client";

import { UPDATE_BIRTHYEAR, ALL_AUTHORS } from "../utils/queries";

const BirthyearForm = ({ authors }) => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState(0);

  const [updateBirthyear] = useMutation(UPDATE_BIRTHYEAR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  });

  const reset = () => {
    setName("");
    setBorn("");
  };

  const submit = (event) => {
    event.preventDefault();

    updateBirthyear({ variables: { name, born } });

    reset();
  };
  return (
    <div>
      <h2>Set birthyear</h2>
      <form onSubmit={submit}>
        <div>
          name
          <input onChange={({ target }) => setName(target.value)} />
        </div>
        <div>
          born
          <input
            type='number'
            onChange={({ target }) => setBorn(+target.value)}
          />
        </div>
        <button type='submit'>update author</button>
      </form>
    </div>
  );
};

export default BirthyearForm;
