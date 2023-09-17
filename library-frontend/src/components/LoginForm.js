import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useMutation } from "@apollo/client";

import { LOGIN } from "../utils/mutations";

const LoginForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [login, result] = useMutation(LOGIN, {
    onError: (error) => {
      console.log(error);
    },
  });

  const resetFields = () => {
    setUsername("");
    setPassword("");
  };

  const submit = async (event) => {
    event.preventDefault();

    await login({ variables: { username, password } });

    resetFields();
  };

  useEffect(() => {
    if (result.data) {
      const token = result.data.login.value;
      setToken(token);
      localStorage.setItem("library-user-token", token);
      navigate("/");
    }
  }, [result.data]); // eslint-disable-line

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div>
          username
          <input
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type='password'
          />
        </div>
        <button type='submit'>login</button>
      </form>
    </div>
  );
};

export default LoginForm;
