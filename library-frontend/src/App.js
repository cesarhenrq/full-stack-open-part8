import { useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import { Authors, Books, NewBook, Menu, LoginForm } from "./components";

const App = () => {
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <Menu token={token} logout={handleLogout} />
      <h1>Library</h1>
      <Routes>
        <Route path='/' element={<Authors token={token} />} />
        <Route path='/books' element={<Books />} />
        {token && <Route path='/add' element={<NewBook />} />}
        <Route path='/login' element={<LoginForm setToken={setToken} />} />
      </Routes>
    </div>
  );
};

export default App;
