import { useState, useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import { useSubscription } from "@apollo/client";

import {
  Authors,
  Books,
  NewBook,
  Menu,
  LoginForm,
  Recommendations,
} from "./components";

import { Subscriptions } from "./utils/graphql";

const { BOOK_ADDED } = Subscriptions;

const App = () => {
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  useSubscription(BOOK_ADDED, {
    onSubscriptionData: ({ subscriptionData }) => {
      const { bookAdded } = subscriptionData.data;
      window.alert(`New book added: ${bookAdded.title}`);
    },
  });

  const handleLogout = () => {
    setToken(null);
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("library-user-token");
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <div>
      <Menu token={token} logout={handleLogout} />
      <h1>Library</h1>
      <Routes>
        <Route path='/' element={<Authors token={token} />} />
        <Route path='/books' element={<Books />} />
        {token && (
          <>
            <Route path='/add' element={<NewBook />} />
            <Route path='/recommendations' element={<Recommendations />} />
          </>
        )}
        <Route path='/login' element={<LoginForm setToken={setToken} />} />
      </Routes>
    </div>
  );
};

export default App;
